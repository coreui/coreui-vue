<template>
  <div :class="inverse ? `card text-white bg-${color}` : 'card'">
    <slot name="header"></slot>
    <div class="card-body">
      <div v-if="header" class="h4 m-0">{{header}}</div>
      <div v-if="text">{{text}}</div>
      <slot>
        <CProgress
          :color="!inverse ? color : ''"
          :value="value"
          :class="inverse ? 'progress-white' : ''"
          class="progress-xs my-3 mb-0"
        />
      </slot>
      <small v-if="footer" class="text-muted">
        {{footer}}
      </small>
    </div>
    <slot name="footer"></slot>
  </div>
</template>

<script>
import CProgress from '../Progress/CProgress'
export default {
  name: 'CWidgetProgress',
  components: {
    CProgress
  },
  props: {
    header: String,
    text: String,
    footer: String,
    color: String,
    inverse: Boolean,
    value: {
      type: Number,
      default: 25
    }
  }
}
</script>
