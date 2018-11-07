<template functional>
  <div :class="props.inverse ? `card text-white bg-${props.variant}` : 'card'">
    <div class="card-body">
      <div class="h1 text-muted text-right mb-4">
        <i :class="props.iconClasses"></i>
      </div>
      <div class="h4 mb-0">{{props.header}}</div>
      <small class="text-muted text-uppercase font-weight-bold">{{props.text}}</small>
      <slot>
        <CProgress :color="!props.inverse ? props.variant : ''"
                   :value="props.value"
                   :class="props.inverse ? 'progress-white' : ''"
                   class="progress-xs my-3 mb-0"/>
      </slot>
    </div>
  </div>
</template>

<script>
import CProgress from '../Progress/CProgress'
export default {
  name: 'CWidget05',
  components: {
    CProgress
  },
  props: {
    iconClasses: {
      type: String,
      default: 'icon-people'
    },
    header: {
      type: String,
      default: 'header:string'
    },
    text: {
      type: String,
      default: 'text:string'
    },
    variant: {
      type: String,
      default: 'success'
    },
    inverse: {
      type: Boolean,
      default: false
    },
    value: {
      type: Number,
      default: 25
    }
  }
}
</script>
