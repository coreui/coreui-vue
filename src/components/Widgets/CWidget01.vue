<template functional>
  <div :class="props.inverse ? `card text-white bg-${props.variant}` : 'card'">
    <div class="card-body">
      <div class="h4 m-0">{{props.header}}</div>
      <div>{{props.text}}</div>
      <slot>
        <CProgress :color="!props.inverse ? props.variant : ''"
                   :value = "props.value"
                   :class="props.inverse ? 'progress-white' : ''"
                   class="progress-xs my-3 mb-0"/>
      </slot>
      <small class="text-muted">{{props.footer}}</small>
    </div>
  </div>
</template>

<script>
import CProgress from '../Progress/CProgress'
export default {
  name: 'CWidget01',
  components: {
    CProgress
  },
  props: {
    header: {
      type: String,
      default: 'header:string'
    },
    text: {
      type: String,
      default: 'text:string'
    },
    footer: {
      type: String,
      default: 'footer:string'
    },
    variant: {
      type: String,
      default: 'success'
    },
    inverse: Boolean,
    value: {
      type: Number,
      default: 25
    }
  }
}
</script>
