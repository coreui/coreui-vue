<template>
  <div class="progress" :style="{ height }">
    <slot>
      <CProgressBar :value="value"/>
    </slot>
  </div>
</template>

<script>
import CProgressBar from './CProgressBar'
import props from './progress-props'

export default {
  name:'CProgress',
  components: { CProgressBar },
  props,
  provide () {
    const progress = {}
    Object.defineProperty(progress, 'props', {
      get: () => this._props
    })
    return { progress }
  }
}
</script>
