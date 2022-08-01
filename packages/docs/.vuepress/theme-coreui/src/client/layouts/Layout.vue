<template>
  <div
    class="theme-container"
    :class="containerClass"
    @touchstart="onTouchStart"
    @touchend="onTouchEnd"
  >
    <Sidebar :visible="isSidebarOpen" @visible-change="(event) => (isSidebarOpen = event)" />
    <div class="wrapper d-flex flex-column min-vh-100">
      <Header @toggle-sidebar="toggleSidebar(!isSidebarOpen)" />
      <div class="body flex-grow-1 px-3">
        <CContainer lg>
          <Home v-if="frontmatter.home" />
          <Transition
            v-else
            name="fade-slide-y"
            mode="out-in"
            @before-enter="onBeforeEnter"
            @before-leave="onBeforeLeave"
          >
            <CRow>
              <CCol :lg="9">
                <div
                  class="bg-info bg-opacity-10 border-start border-start-5 border-start-info p-4 pb-3 mb-5"
                >
                  <h3 class="mb-4">Support CoreUI Development</h3>
                  <p>
                    CoreUI is an MIT-licensed open source project and is completely free to use.
                    However, the amount of effort needed to maintain and develop new features for
                    the project is not sustainable without proper financial backing.
                  </p>
                  <p>You can support our Open Source software development in the following ways:</p>
                  <ul>
                    <li>
                      Buy the <a href="https://coreui.io/pricing/?support=vue">CoreUI PRO</a>,
                      and get access to PRO components, and dedicated support.
                    </li>
                    <li>
                      <a href="https://opencollective.com/coreui" target="_blank"
                        >Became a sponsor</a
                      >, and get your logo on BACKERS.md/README.md files or each site of this
                      documentation
                    </li>
                    <li>
                      Give us a star ⭐️ on
                      <a href="https://github.com/coreui/coreui-vue" target="_blank">Github</a>.
                    </li>
                  </ul>
                </div>
                <Page :key="page.path">
                  <template #top>
                    <slot name="page-top" />
                  </template>
                  <template #bottom>
                    <slot name="page-bottom" />
                  </template>
                </Page>
              </CCol>
              <CCol :lg="3">
                <div class="docs-toc text-muted">
                  <strong class="d-block h6 mb-2 pb-2 border-bottom">On this page</strong>
                  <Toc />
                </div>
              </CCol>
            </CRow>
          </Transition>
        </CContainer>
      </div>
      <Footer />
    </div>
  </div>
</template>

<script lang="ts">
import { computed, defineComponent, ref, Transition } from 'vue'
import { usePageData, usePageFrontmatter } from '@vuepress/client'
import type { DefaultThemePageFrontmatter } from '../../shared'
import Footer from '../components/Footer.vue'
import Header from '../components/Header.vue'
import Home from '../components/Home.vue'
import Page from '../components/Page.vue'
import Sidebar from '../components/Sidebar.vue'
import { useScrollPromise, useSidebarItems, useThemeLocaleData } from '../composables'

export default defineComponent({
  name: 'Layout',

  components: {
    Footer,
    Header,
    Home,
    Page,
    Sidebar,
    Transition,
  },

  setup() {
    const page = usePageData()
    const frontmatter = usePageFrontmatter<DefaultThemePageFrontmatter>()
    const themeLocale = useThemeLocaleData()

    // navbar
    const shouldShowNavbar = computed(
      () => frontmatter.value.navbar !== false && themeLocale.value.navbar !== false,
    )

    // sidebar
    const sidebarItems = useSidebarItems()
    const isSidebarOpen = ref(true)

    const toggleSidebar = (to?: boolean): void => {
      isSidebarOpen.value = typeof to === 'boolean' ? to : !isSidebarOpen.value
    }

    // classes
    const containerClass = computed(() => [
      {
        'no-navbar': !shouldShowNavbar.value,
        'no-sidebar': !sidebarItems.value.length,
        'sidebar-open': isSidebarOpen.value,
      },
      frontmatter.value.pageClass,
    ])

    // handle scrollBehavior with transition
    const scrollPromise = useScrollPromise()
    const onBeforeEnter = scrollPromise.resolve
    const onBeforeLeave = scrollPromise.pending

    return {
      isSidebarOpen,
      frontmatter,
      page,
      containerClass,
      toggleSidebar,
      onBeforeEnter,
      onBeforeLeave,
    }
  },
})
</script>
