<template>
  <div :class="inverse ? `card text-white bg-${color}` : 'card'">
    <div class="card-body">
      <div v-if="header" class="h4 m-0">{{header}}</div>
      <div v-if="text">{{text}}</div>
      <slot>
        <CProgress
          :color="!inverse ? color : ''"
          :value="value"
          :class="{ 'progress-white' : inverse }"
          class="progress-xs my-3 mb-0"
        />
      </slot>
      <small v-if="footer" class="text-muted">
        {{footer}}
      </small>
    </div>
  </div>
</template>

<script>
import CProgress from '../progress/CProgress'
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
