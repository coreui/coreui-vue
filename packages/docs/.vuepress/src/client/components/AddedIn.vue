<script setup lang="ts">
const props = defineProps({
  version: String,
})
</script>

<template>
  <small
    class="d-inline-flex mb-3 px-2 py-1 fw-semibold text-success bg-success bg-opacity-10 border border-success border-opacity-10 rounded-2"
  >
    Added in v{{ props.version }}
  </small>
</template>
