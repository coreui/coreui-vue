<template>
  <div class="theme-default-content">
    <div class="content">
      <h1>{{ title }}</h1>
      <p class="docs-lead fs-4 fw-light">{{ description }}</p>
      <Ads />
      <Content />
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import { usePageFrontmatter } from '@vuepress/client'
import type { DefaultThemeNormalPageFrontmatter } from '../../shared'

import Ads from './Ads.vue'

export default defineComponent({
  name: 'Page',
  components: {
    Ads,
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
