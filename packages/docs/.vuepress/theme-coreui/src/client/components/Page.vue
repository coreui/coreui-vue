<template>
  <div class="theme-default-content">
    <div class="content">
      <h1>{{ title }}</h1>
      <p class="docs-lead fs-4 fw-light">{{ description }}</p>
      <Ads />
      <template v-if="frameworks">
        <h2>Other frameworks</h2>
        <p>
          CoreUI components are available as native Angular, Bootstrap (Vanilla JS), and React
          components. To learn more please visit the following pages.
        </p>
        <ul>
          <template v-for="framework in frameworks">
            <template v-for="(el, index) in Object.keys(otherFrameworks[framework])">
              <li v-if="el !== 'vue'" :key="index">
                <a :href="otherFrameworks[framework][el]">{{
                  el[0].toUpperCase() + el.slice(1)
                }} {{ humanize(framework) }}</a>
              </li>
            </template>
          </template>
        </ul>
      </template>
      <Content />
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import { usePageFrontmatter } from '@vuepress/client'
import type { DefaultThemeNormalPageFrontmatter } from '../../shared'
import jsonData from './other_frameworks.json'

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
    const frameworks = frontmatter.value.other_frameworks
      ? frontmatter.value.other_frameworks.split(', ')
      : false
    const otherFrameworks = JSON.parse(JSON.stringify(jsonData))

    const humanize = (text: string) => {
      const string = text
        .split('-')
        .reduce(
          (accumulator, currentValue) =>
            accumulator + ' ' + currentValue[0].toUpperCase() + currentValue.slice(1),
        )
      return string[0].toUpperCase() + string.slice(1)
    }

    return {
      title,
      description,
      frameworks,
      otherFrameworks,
      humanize
    }
  },
})
</script>
