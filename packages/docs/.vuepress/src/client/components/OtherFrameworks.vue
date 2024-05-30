<script setup lang="ts">
import { usePageFrontmatter } from '@vuepress/client'
import jsonData from '../components/other_frameworks.json'
import type { DefaultThemePageFrontmatter } from '../../shared'

const props = defineProps({
  pro_component: Boolean,
})
const frontmatter = usePageFrontmatter<DefaultThemePageFrontmatter>()
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
</script>

<template>
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
            <a :href="otherFrameworks[framework][el]"
              >{{ el[0].toUpperCase() + el.slice(1) }} {{ humanize(framework) }}</a
            >
          </li>
        </template>
      </template>
    </ul>
  </template>
</template>