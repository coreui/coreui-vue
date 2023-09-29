<template>
  <div :class="class">
    <h5 v-if="title">{{ title }}</h5>
    <slot></slot>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
export default defineComponent({
  name: 'Callout',
  props: {
    color: String,
    title: String,
  },
  setup(props) {
    return {
      class: [
        'docs-callout',
        {
          [`docs-callout-${props.color}`]: props.color,
        }
      ],
      color: props.color,
      title: props.title,
    }
  },
})
</script>
