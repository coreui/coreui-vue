<template>
  <div :class="inverse ? `card text-white bg-${color}` : 'card'">
    <div class="card-body">
      <div
        v-if="$slots.default"
        class="h1 text-muted text-right mb-4"
      >
        <slot></slot>
      </div>
      <div v-if="header" class="h4 mb-0">{{header}}</div>
      <small
        v-if="text"
        class="text-muted text-uppercase font-weight-bold"
      >
        {{text}}
      </small>
      <slot name="progress">
        <CProgress
          :color="!inverse ? color : ''"
          :value="value"
          :class="{ 'progress-white' : inverse }"
          class="progress-xs my-3 mb-0"
        />
      </slot>
    </div>
  </div>
</template>

<script>
import CProgress from '../progress/CProgress'
export default {
  name: 'CWidgetProgressIcon',
  components: {
    CProgress
  },
  props: {
    header: String,
    text: String,
    color: String,
    inverse: Boolean,
    value: {
      type: Number,
      default: 25
    }
  }
}
</script>
