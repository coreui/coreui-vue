<template>
  <main class="page">
    <slot name="top" />

    <div class="theme-default-content">
      <div class="container-lg">
        <div class="toc text-muted">
          <strong class="d-block h6 mb-2 pb-2 border-bottom">On this page</strong>
          <Toc />
        </div>
        <!-- Show an image ad -->
        <div class="content">
          <h1>{{ title }}</h1>
          <p class="docs-lead fs-4 fw-light">{{ description }}</p>
          <div data-ea-publisher="coreui-io" data-ea-type="image"></div>
          <Content />
        </div>
      </div>
    </div>

    <PageMeta />

    <PageNav />

    <slot name="bottom" />
  </main>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import PageMeta from './PageMeta.vue'
import PageNav from './PageNav.vue'
import { usePageFrontmatter } from '@vuepress/client'
import type { DefaultThemeNormalPageFrontmatter } from '../../shared'

export default defineComponent({
  name: 'Page',
  components: {
    PageMeta,
    PageNav,
  },
  setup() {
    const frontmatter = usePageFrontmatter<DefaultThemeNormalPageFrontmatter>()
    const title = frontmatter.value.title
    const description = frontmatter.value.description

    return {
      title,
      description,
    }
  },
})
</script>
