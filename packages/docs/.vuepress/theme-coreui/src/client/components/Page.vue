<template>
  <div class="theme-default-content">
    <div class="content">
      <h1>{{ title }}</h1>
      <p class="docs-lead fs-4 fw-light">{{ description }}</p>
      <div data-ea-publisher="coreui-io" data-ea-type="image"></div>
      <Content />
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import { usePageFrontmatter } from '@vuepress/client'
import type { DefaultThemeNormalPageFrontmatter } from '../../shared'

export default defineComponent({
  name: 'Page',
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
