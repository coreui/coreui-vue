<script setup lang="ts">
import { ref, computed, h } from 'vue'
import { usePageData } from 'vuepress/client'
import type { VNode } from 'vue'

interface PageHeader {
  level: number
  title: string
  slug: string
  children?: PageHeader[]
}

const visible = ref(false)
const toggleVisible = () => {
  visible.value = !visible.value
}

const page = usePageData()

const headers = computed<PageHeader[]>(() => {
  const pageAsAny = page.value as any
  const pageHeaders = pageAsAny.headers || pageAsAny.data?.headers || []

  // VuePress already provides headers in hierarchical structure
  return pageHeaders as PageHeader[]
})

const renderHeaders = (headerList: PageHeader[], level = 0): VNode[] => {
  if (!headerList || headerList.length === 0) return []

  return headerList.map((header: PageHeader) =>
    h('li', { key: header.slug }, [
      h('a', {
        href: `#${header.slug}`,
        class: 'vuepress-toc-link'
      }, header.title),
      header.children && header.children.length > 0
        ? h('ul', { class: 'vuepress-toc-list' }, renderHeaders(header.children, level + 1))
        : null
    ])
  )
}

const tocContent = computed<VNode | null>(() => {
  const headerList = headers.value
  if (!headerList || headerList.length === 0) {
    return null
  }
  return h('nav', { class: 'vuepress-toc' }, [
    h('ul', { class: 'vuepress-toc-list' }, renderHeaders(headerList))
  ])
})
</script>

<template>
  <div class="docs-toc mt-4 mb-5 my-lg-0 ps-xl-5 mb-lg-5 text-body-secondary">
    <button
      class="btn btn-link p-lg-0 mb-2 mb-lg-0 text-decoration-none docs-toc-toggle d-lg-none"
      type="button"
      :aria-expanded="visible ? true : false"
      aria-controls="tocContents"
      @click="toggleVisible()"
    >
      On this page
      <svg
        xmlns="http://www.w3.org/2000/svg"
        class="icon d-lg-none ms-2"
        aria-hidden="true"
        viewBox="0 0 512 512"
      >
        <polygon
          fill="var(--ci-primary-color, currentColor)"
          points="256 382.627 60.687 187.313 83.313 164.687 256 337.372 428.687 164.687 451.313 187.313 256 382.627"
          class="ci-primary"
        />
      </svg>
    </button>
    <strong class="d-none d-lg-block h6 mb-2 pb-2 border-bottom">On this page</strong>
    <CCollapse class="docs-toc-collapse" id="tocContents" :visible="visible">
      <component :is="tocContent" v-if="tocContent" />
    </CCollapse>
  </div>
</template>
