<template>
  <div class="c-progress" :style="{ height }">
    <slot>
      <CProgressBar/>
    </slot>
  </div>
</template>

<script>
import CProgressBar from './CProgressBar'
import props from './progressProps'

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

<style scoped lang="scss">
  @import "~@coreui/coreui/scss/partials/progress.scss";
  @import "~@coreui/coreui/scss/utilities/_background.scss";
</style>
