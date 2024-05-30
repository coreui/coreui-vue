<script setup lang="ts">
import { onMounted, ref } from 'vue'
import { usePageFrontmatter } from '@vuepress/client'
import docsearch from '@docsearch/js'
import type { DefaultThemePageFrontmatter } from '../../shared'
import Ads from '../components/Ads.vue'
import Banner from '../components/Banner.vue'
import Footer from '../components/Footer.vue'
import Header from '../components/Header.vue'
import OtherFrameworks from '../components/OtherFrameworks.vue'
import Sidebar from '../components/Sidebar.vue'
import Toc from '../components/Toc.vue'
import { useScrollPromise } from '../composables'

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

const name = frontmatter.value.name
const title = frontmatter.value.title
const description = frontmatter.value.description

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
</script>

<template>
  <div>
    <Sidebar :visible="isSidebarOpen" @visible-change="(event) => (isSidebarOpen = event)" />
    <div class="wrapper flex-grow-1">
      <Header @toggle-sidebar="toggleSidebar(!isSidebarOpen)" />
      <Transition
        name="fade-slide-y"
        mode="out-in"
        @before-enter="onBeforeEnter"
        @before-leave="onBeforeLeave"
      >
        <CContainer class="my-md-4 flex-grow-1" lg>
          <main class="docs-main order-1">
            <div class="docs-intro ps-lg-4">
              <Banner />
              <div v-if="name && name !== title" class="d-flex flex-column">
                <h1 class="order-2 h5 mb-4 text-body-secondary" id="content">
                  {{ title }}
                </h1>
                <h2 class="docs-title order-1 h1">{{ name }}</h2>
              </div>
              <h1 v-else class="docs-title" id="content">
                {{ title }}
              </h1>
              <p class="docs-lead">{{ description }}</p>
              <Ads />
              <OtherFrameworks />
            </div>
            <Toc />
            <div className="docs-content ps-lg-4"><Content /></div>
          </main>
        </CContainer>
      </Transition>
      <Footer />
    </div>
  </div>
</template>
