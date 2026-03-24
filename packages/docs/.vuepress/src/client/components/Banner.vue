<script setup lang="ts">
import { usePageFrontmatter, withBase } from '@vuepress/client'
import type { DefaultThemePageFrontmatter } from '../../shared'

const frontmatter = usePageFrontmatter<DefaultThemePageFrontmatter>()
const pre_release = frontmatter.value.pre_release
const pro_component = frontmatter.value.pro_component
</script>

<template>
  <div
    v-if="pro_component"
    class="bg-info bg-opacity-10 border border-2 border-info rounded p-3 px-xl-4 mb-5"
  >
    <div class="row d-flex align-items-center flex-xl-nowrap">
      <div class="col-xl-auto col-12 d-none d-xl-block p-0">
        <img
          :src="withBase('/images/hex_vue.png')"
          width="160px"
          height="160px"
          alt="CoreUI PRO hexagon"
        />
      </div>
      <div class="col-md col-12 px-lg-4">
        This component is part of CoreUI PRO – a powerful UI library with over 250 components and
        25+ templates, designed to help you build modern, responsive apps faster. Fully compatible
        with Angular, Bootstrap, React.js, and Vue.js.
      </div>
      <div class="col-md-auto col-12 mt-3 mt-lg-0">
        <a
          class="btn btn-danger text-nowrap text-white"
          href="https://coreui.io/pricing/?framework=vue&src=vue-docs&cta=banner"
          >Get CoreUI PRO</a
        >
      </div>
    </div>
  </div>
  <div
    v-if="pre_release"
    class="bg-warning d-none d-lg-block bg-opacity-10 border-start border-start-5 border-start-warning p-4 pb-3 mb-5"
  >
    <h3 className="mb-4">Release candidate (RC)</h3>
    <p>
      This component is in the Release Candidate phase and its API is considered stable. Minor
      adjustments may still occur before the final release.
    </p>
  </div>
</template>