<template>
  <div :class="mediaClasses">
    <div :class="asideClasses">
      <slot name="aside">
        <CImage v-bind="computedAsideImageProps"/>
      </slot>
    </div>
    <div :class="mediaBodyClasses">
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
    asideImageProps: Object,
    asidePosition: {
      type: String,
      default: 'start',
      validator: val => ['start', 'center', 'end', 'stretch'].includes(val)
    }
  },
  computed: {
    computedAsideImageProps () {
      return Object.assign(
        {
          blankColor: '#777777',
          width: '64px',
          height: this.asidePosition === 'stretch' ? '100%' : '64px'
        },
        this.asideImageProps || {}
      )
    },
    computedAsidePositionClasses () {
      return this.asidePositionClasses || `c-m${this.asideRight? 'l' : 'r' }-3`
    },
    asideClasses () {
      return [
        this.computedAsidePositionClasses,
        this.addAsideClasses,
        `c-align-self-${this.asidePosition}`
      ]
    },
    mediaBodyClasses () {
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
