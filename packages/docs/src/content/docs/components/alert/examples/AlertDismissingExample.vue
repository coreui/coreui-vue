<template>
  <CAlert color="warning" dismissible @close="message">
    <strong>Go right ahead</strong> and click that dimiss over there on the right.
  </CAlert>
</template>

<script setup>
import { CAlert } from '@coreui/vue'
const message = () => {
  alert('👋 Well, hi there! Thanks for dismissing me.')
}
</script>
