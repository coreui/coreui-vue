<template>
  <div
    v-if="pro_component"
    class="bg-danger bg-opacity-10 border-start border-start-5 border-start-danger p-4 pb-3 mb-5"
  >
    <h3 class="mb-4">CoreUI PRO Component</h3>
    <p>
      To use this component you must have a CoreUI PRO license. Buy the
      <a href="https://coreui.io/pricing/?framework=vue&docs=coreui-banner-pro">CoreUI PRO</a>
      and get access to all PRO components, features, templates, and dedicated support.
    </p>
  </div>
  <div
    v-else
    class="bg-info bg-opacity-10 border-start border-start-5 border-start-info p-4 pb-3 mb-5"
  >
    <h3 class="mb-4">Support CoreUI Development</h3>
    <p>
      CoreUI is an MIT-licensed open source project and is completely free to use. However, the
      amount of effort needed to maintain and develop new features for the project is not
      sustainable without proper financial backing.
    </p>
    <p>You can support our Open Source software development in the following ways:</p>
    <ul>
      <li>
        Buy the
        <a href="https://coreui.io/pricing/?framework=vue&docs=coreui-banner-pro">CoreUI PRO</a>,
        and get access to PRO components, and dedicated support.
      </li>
      <li>
        <a href="https://opencollective.com/coreui" target="_blank">Became a sponsor</a>, and get
        your logo on BACKERS.md/README.md files or each site of this documentation
      </li>
      <li>
        Give us a star ⭐️ on
        <a href="https://github.com/coreui/coreui-vue" target="_blank">Github</a>.
      </li>
    </ul>
  </div>
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
                <a :href="otherFrameworks[framework][el]"
                  >{{ el[0].toUpperCase() + el.slice(1) }} {{ humanize(framework) }}</a
                >
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
    const pro_component = frontmatter.value.pro_component
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
      pro_component,
      otherFrameworks,
      humanize,
    }
  },
})
</script>
