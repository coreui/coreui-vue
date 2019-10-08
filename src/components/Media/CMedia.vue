<template>
  <div :class="mediaClasses">
    <div :class="asideClasses">
      <slot name="aside">
        <CImg v-bind="computedAsideImageProps"/>
      </slot>
    </div>
    <div :class="mediaBodyClasses">
      <slot></slot>
    </div>
  </div>
</template>

<script>
import CImg from '../Image/CImg'
export default {
  name: 'CMedia',
  components: {
    CImg
  },
  props: {
    asidePositionClasses: [String, Array, Object],
    addAsideClasses: [String, Array, Object],
    addBodyClasses: [String, Array, Object],
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
      return this.asidePositionClasses || `m${this.asideRight? 'l' : 'r' }-3`
    },
    asideClasses () {
      return [
        this.computedAsidePositionClasses,
        this.addAsideClasses,
        `align-self-${this.asidePosition}`
      ]
    },
    mediaBodyClasses () {
      return [ 'media-body', this.addBodyClasses ]
    },
    mediaClasses () {
      return [
        'media',
        { 'd-flex flex-row-reverse': this.asideRight }
      ]
    }
  }
}
</script>