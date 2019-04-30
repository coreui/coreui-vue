<template>
  <img
    v-if="src && isActive"
    :src="src"
    :alt="alt"
    :width="width"
    :height="width"
    :class="imageClasses"
  />
  <svg
    v-else
    :class="imageClasses"
    :width="width"
    :height="height"
    :style="{'background-color': isActive ? blankColor : 'transparent' }"
  />
</template>

<script>
export default {
  name: 'CImage',
  props: {
    src: String,
    alt: String,
    width: [Number, String],
    height: [Number, String],
    block: Boolean,
    fluid: Boolean,
    // Gives fluid images class `w-100` to make them grow to fit container
    fluidGrow: Boolean,
    // rounded can be:
    //   false: no rounding of corners
    //   true: slightly rounded corners
    //   'top': top corners rounded
    //   'right': right corners rounded
    //   'bottom': bottom corners rounded
    //   'left': left corners rounded
    //   'circle': circle/oval
    //   '0': force rounding off
    rounded: {
      type: [Boolean, String],
      validator: val => {
        return [false, true, 'top','right','bottom','left','circle'].includes(val)
      }
    },
    thumbnail: Boolean,
    align: {
      type: String,
      validator: align => ['left', 'right', 'center'].includes(align)
    },
    blankColor: {
      type: String,
      default: 'transparent'
    }
  },
  computed: {
    isActive () {
      return true
    },
    alignClass () {
      if (this.align === 'left') {
        return 'float-left'
      } else if (this.align === 'right') {
        return 'float-right'
      } else if (this.align === 'center') {
        return 'mx-auto'
      }
    },
    imageClasses () {
      return [
        //animationClass is rendered in CImageLazy
        this.animationClasses,
        {
          'img-thumbnail': this.thumbnail,
          'img-fluid': this.fluid || this.fluidGrow,
          'w-100': this.fluidGrow,
          [`rounded${this.rounded===true ? '' : '-'+this.rounded}`]: this.rounded,
          [this.alignClass]: Boolean(this.align),
          'd-block': this.block
        }
      ]
    }
  }
}
</script>
