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
import CImg from '../image/CImg'
export default {
  name: 'CMedia',
  components: {
    CImg
  },
  props: {
    addAsideMargin: {
      type: Boolean,
      default: true
    },
    addAsideClasses: [String, Array, Object],
    addBodyClasses: [String, Array, Object],
    asideRight: Boolean,
    asideImageProps: Object,
    asideVerticalPosition: {
      type: String,
      default: 'start',
      validator: val => ['start', 'center', 'end', 'stretch'].includes(val)
    }
  },
  computed: {
    computedAsideImageProps () {
      return Object.assign(
        {
          placeholderColor: '#777777',
          width: '64px',
          height: this.asideVerticalPosition === 'stretch' ? '100%' : '64px'
        },
        this.asideImageProps || {}
      )
    },
    asideClasses () {
      return [
        this.addAsideMargin ? `m${this.asideRight? 'l' : 'r' }-3` : '',
        this.addAsideClasses,
        `align-self-${this.asideVerticalPosition}`
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