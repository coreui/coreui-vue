<template>
  <div
    class="theme-container"
    :class="containerClass"
    @touchstart="onTouchStart"
    @touchend="onTouchEnd"
  >
    <Sidebar :visible="isSidebarOpen" @visible-change="(event) => isSidebarOpen = event" />
    <div class="wrapper d-flex flex-column min-vh-100">
      <Header @toggle-sidebar="toggleSidebar(!isSidebarOpen)"/>
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
