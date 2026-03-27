<script setup lang="ts">
import { computed } from 'vue'
import { usePageFrontmatter } from '@vuepress/client'
import componentLinks from '@coreui/internal-links'
import type { DefaultThemePageFrontmatter } from '../../shared'

interface ComponentLinks {
  [key: string]: {
    [key: string]: string
  }
}

const props = defineProps({
  title: {
    type: String,
    default: '',
  },
})

const frontmatter = usePageFrontmatter<DefaultThemePageFrontmatter>()

const frameworks = computed(() => {
  return frontmatter.value.other_frameworks
    ? frontmatter.value.other_frameworks.split(', ')
    : []
})

const otherFrameworks: ComponentLinks = { ...componentLinks }

const humanize = (text: string): string => {
  return text
    .split('-')
    .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
    .join(' ')
}

// Collect all available frameworks
const availableFrameworks = computed(() => {
  if (!frameworks.value || frameworks.value.length === 0) {
    return []
  }

  const frameworkSet = new Set(
    frameworks.value.flatMap((component: string) =>
      Object.keys(otherFrameworks[component] || {})
        .filter((fw) => fw !== 'vue')
        .map((fw) => fw.charAt(0).toUpperCase() + fw.slice(1)),
    ),
  )
  const result = [...frameworkSet]
  result.sort()
  return result
})

const formatFrameworkList = computed(() => {
  if (availableFrameworks.value.length === 1) {
    return availableFrameworks.value[0]
  }
  if (availableFrameworks.value.length === 2) {
    return `${availableFrameworks.value[0]} and ${availableFrameworks.value[1]}`
  }
  return `${availableFrameworks.value.slice(0, -1).join(', ')}, and ${availableFrameworks.value.at(-1)}`
})

const showComponent = computed(() => {
  return frameworks.value && frameworks.value.length > 0 && availableFrameworks.value.length > 0
})
</script>

<template>
  <section v-if="showComponent" aria-labelledby="other-frameworks-heading">
    <h2 id="other-frameworks-heading">Available in Other JavaScript Frameworks</h2>
    <p>
      CoreUI {{ title }}
      {{ availableFrameworks.length === 1 ? 'component is' : 'components are' }} available as
      {{ formatFrameworkList }}
      {{ availableFrameworks.length === 1 ? 'component' : 'components' }}. Explore
      framework-specific implementations below:
    </p>
    <nav aria-label="Framework-specific component links">
      <ul>
        <template v-for="item in frameworks" :key="item">
          <template v-for="(url, framework) in otherFrameworks[item]" :key="framework">
            <li v-if="framework !== 'vue'">
              <a
                :href="url"
                :title="`View CoreUI ${humanize(item)} component for ${framework.charAt(0).toUpperCase() + framework.slice(1)}`"
              >
                {{ framework.charAt(0).toUpperCase() + framework.slice(1) }} {{ humanize(item) }}
              </a>
            </li>
          </template>
        </template>
      </ul>
    </nav>
  </section>
</template>