<template>
  <span
    class="badge"
    :class="type"
    :style="{
      verticalAlign: vertical,
    }"
  >
    <slot>{{ text }}</slot>
  </span>
</template>

<script>
import { defineComponent } from 'vue'

export default defineComponent({
  name: 'Badge',

  props: {
    type: {
      type: String,
      default: 'tip',
    },
    text: {
      type: String,
      default: '',
    },
    vertical: {
      type: String,
      default: undefined,
    },
  },
})
</script>
