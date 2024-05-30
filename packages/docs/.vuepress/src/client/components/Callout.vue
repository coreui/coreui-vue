<script setup lang="ts">
const props = defineProps({
  color: String,
  title: String,
})

const className = [
  'docs-callout',
  {
    [`docs-callout-${props.color}`]: props.color,
  },
]
</script>

<template>
  <div :class="className">
    <h5 v-if="props.title">{{ props.title }}</h5>
    <slot></slot>
  </div>
</template>
