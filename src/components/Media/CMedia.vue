<template>
  <div :class="mediaClasses">
    <div :class="computedAsideClasses" >
      <slot name="aside">
        <CImage
          v-if="asideImage"
          v-bind="asideImage"
        />
      </slot>
    </div>
    <div :class="computedBodyClasses">
      <slot></slot>
    </div>
  </div>
</template>


<script>
import CImage from '../Image/CImage'
export default {
  name: 'CMedia',
  props: {
    asidePositionClasses: String,
    addAsideClasses: String,
    addBodyClasses: String,
    asideRight: Boolean,
    asideImage: Object
  },
  computed: {
    computedAsidePositionClasses () {
      return this.asidePositionClasses ||
             `c-m${this.asideRight? 'l' : 'r' }-3 c-align-self-start`
    },
    computedAsideClasses () {
      return [this.computedAsidePositionClasses, this.addAsideClasses]
    },
    computedBodyClasses () {
      return [ 'c-media-body', this.addBodyClasses ]
    },
    mediaClasses () {
      return [
        'c-media',
        { 'c-d-flex c-flex-row-reverse': this.asideRight }
      ]
    }
  }
}
</script>

<style scoped lang="scss">
  @import "~@coreui/coreui/scss/partials/media.scss";
  @import "~@coreui/coreui/scss/utilities/_spacing.scss";
</style>
