<template>
  <div 
    :class="['progress', size && `progress-${size}`]" 
    :style="{ height }"
  >
    <slot>
      <CProgressBar :value="value"/>
    </slot>
  </div>
</template>

<script>
import CProgressBar from './CProgressBar'
import shared from './shared-props'

const props = {
  ...shared,
  height: String,
  size: {
    type: String,
    validator: val => ['', 'xs', 'sm'].includes(val)
  },
}

export default {
  name:'CProgress',
  components: { CProgressBar },
  props,
  mounted () {
    /* istanbul ignore next */ 
    if (this.height && process && process.env && process.env.NODE_ENV === 'development') {
      console.error("CProgress component: 'height' prop is deprecated and will be removed in the next version. Use 'size' prop instead or pass custom height in 'style' attribute.")
    }
  },
  provide () {
    const progress = {}
    Object.defineProperty(progress, 'props', {
      get: () => this._props
    })
    return { progress }
  }
}
</script>
