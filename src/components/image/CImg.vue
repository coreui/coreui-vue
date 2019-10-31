<template>
  <img
    v-if="src && isActive"
    :src="src"
    :alt="alt"
    :width="width"
    :height="height"
    :class="imageClasses"
  />
  <svg
    v-else
    :class="imageClasses"
    :width="width"
    :height="height"
    :style="{'background-color': isActive ? placeholderColor : 'transparent' }"
  />
</template>

<script>
export default {
  name: 'CImg',
  props: {
    src: String,
    alt: String,
    width: [Number, String],
    height: [Number, String],
    block: Boolean,
    fluid: Boolean,
    fluidGrow: Boolean,
    shape: String,
    thumbnail: Boolean,
    align: {
      type: String,
      validator: align => ['', 'left', 'right', 'center'].includes(align)
    },
    placeholderColor: {
      type: String,
      default: 'transparent'
    }
  },
  computed: {
    isActive () {
      //active prop is present in CImgLazy component, here always undefined
      return this.active !== false
    },
    alignClass () {
      if (this.align === 'center') {
        return 'mx-auto'
      } else if (this.align === 'right') {
        return 'float-right'
      } else if (this.align === 'left') {
        return 'float-left'
      }
      return null
    },
    imageClasses () {
      return [
        //animationClasses is rendered in CImgLazy
        this.animationClasses,
        this.alignClass,
        {
          'img-thumbnail': this.thumbnail,
          'img-fluid': this.fluid || this.fluidGrow,
          'w-100': this.fluidGrow,
          [`${this.shape}`]: this.shape,
          'd-block': this.block
        }
      ]
    }
  }
}
</script>
