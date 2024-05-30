<script setup lang="ts">
import { ref } from 'vue'
const visible = ref(false)
const toggleVisible = () => {
  visible.value = !visible.value
}
</script>

<template>
  <div class="docs-toc mt-4 mb-5 my-md-0 ps-xl-5 mb-lg-5 text-body-secondary">
    <button
      class="btn btn-link p-md-0 mb-2 mb-md-0 text-decoration-none docs-toc-toggle d-md-none"
      type="button"
      :aria-expanded="visible ? true : false"
      aria-controls="tocContents"
      @click="toggleVisible()"
    >
      On this page
      <svg
        xmlns="http://www.w3.org/2000/svg"
        class="icon d-md-none ms-2"
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
    <strong class="d-none d-md-block h6 mb-2 pb-2 border-bottom">On this page</strong>
    <CCollapse class="docs-toc-collapse" id="tocContents" :visible="visible">
      <Toc />
    </CCollapse>
  </div>
</template>
