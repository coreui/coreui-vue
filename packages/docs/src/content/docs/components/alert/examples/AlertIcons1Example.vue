<template>
  <CAlert color="primary" class="d-flex align-items-center">
    <svg class="flex-shrink-0 me-2" width="24" height="24" viewBox="0 0 512 512">
      <rect
        width="32"
        height="176"
        x="240"
        y="176"
        fill="var(--ci-primary-color, currentColor)"
        class="ci-primary"
      ></rect>
      <rect
        width="32"
        height="32"
        x="240"
        y="384"
        fill="var(--ci-primary-color, currentColor)"
        class="ci-primary"
      ></rect>
      <path
        fill="var(--ci-primary-color, currentColor)"
        d="M274.014,16H237.986L16,445.174V496H496V445.174ZM464,464H48V452.959L256,50.826,464,452.959Z"
        class="ci-primary"
      ></path>
    </svg>

    <div>An example alert with an icon</div>
  </CAlert>
</template>

<script setup>
import { CAlert } from '@coreui/vue'
import { ref } from 'vue'
const liveExampleVisible = ref(false)
const message = () => {
  alert('👋 Well, hi there! Thanks for dismissing me.')
}
</script>
