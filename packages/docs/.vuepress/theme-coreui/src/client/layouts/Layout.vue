<template>
  <div>
    <Sidebar :visible="isSidebarOpen" @visible-change="(event) => (isSidebarOpen = event)" />
    <div class="wrapper d-flex flex-column min-vh-100">
      <Header
        @toggle-sidebar="toggleSidebar(!isSidebarOpen)"
      />
      <div class="body flex-grow-1 px-3">
        <CContainer lg>
          <main class="docs-main">
            <Transition
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
                  <div class="docs-toc mt-4 mb-5 my-md-0 ps-xl-5 mb-lg-5 text-muted">
                    <strong class="d-block h6 mb-2 pb-2 border-bottom">On this page</strong>
                    <Toc />
                  </div>
                </CCol>
              </CRow>
            </Transition>
          </main>
        </CContainer>
      </div>
      <Footer />
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, onMounted, ref } from 'vue'
import { usePageData, usePageFrontmatter } from '@vuepress/client'
import docsearch from '@docsearch/js'
import type { DefaultThemePageFrontmatter } from '../../shared'
import Footer from '../components/Footer.vue'
import Header from '../components/Header.vue'
import Page from '../components/Page.vue'
import Sidebar from '../components/Sidebar.vue'
import { useScrollPromise } from '../composables'

export default defineComponent({
  name: 'Layout',

  components: {
    Footer,
    Header,
    Page,
    Sidebar,
  },

  setup() {
    const page = usePageData()
    const frontmatter = usePageFrontmatter<DefaultThemePageFrontmatter>()

    // sidebar
    const isSidebarOpen = ref(true)

    const toggleSidebar = (to?: boolean): void => {
      isSidebarOpen.value = typeof to === 'boolean' ? to : !isSidebarOpen.value
    }

    // handle scrollBehavior with transition
    const scrollPromise = useScrollPromise()
    const onBeforeEnter = scrollPromise.resolve
    const onBeforeLeave = scrollPromise.pending

    onMounted(() => {
      const searchElement = document.getElementById('docsearch') as HTMLElement
      docsearch({
        appId: 'RG8RW9GEH3',
        apiKey: '4926b633296d71c6d727f7766170f82b',
        indexName: 'coreuivue',
        container: searchElement,
        // @ts-ignore
        debug: false,
      })
    })

    return {
      isSidebarOpen,
      frontmatter,
      page,
      toggleSidebar,
      onBeforeEnter,
      onBeforeLeave,
    }
  },
})
</script>
