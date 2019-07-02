<template>
  <div :class="itemClasses">
    <CImage
      v-if="image" 
      v-bind="computedImage"
      class="c-d-block c-w-100 c-h-100 c-img-fluid"
    />
    <slot>
      <div class="c-carousel-caption">
        <h3>{{caption}}</h3>
        <p>{{text}}</p>
      </div>
    </slot>
  </div>
</template>

<script>
import CImage from '../Image/CImage'
export default {
  name: 'CCarouselItem',
  components: {
    CImage
  },
  props: {
    image: [String, Object],
    caption: String,
    text: String,
    active: Boolean
  },
  data () {
    return {
      activated: false,
      transitioning: false,
      order: null
    }
  },
  mounted () {
    this.$on('setItem', this.setItem)
    this.$on('slideToItem', this.slideToItem)
  },
  computed: {
    direction () {
      return this.order === 'next' ? 'left' : 'right'
    },
    itemClasses () {
      return [
        'c-carousel-item',
        {
          [`c-carousel-item-${this.order}`]: this.order && !this.activated,
          [`c-carousel-item-${this.direction}`]: this.transitioning,
          'c-active': this.activated
        }
      ]
    },
    computedImage () {
      return typeof this.image === 'string' ? { src: this.image } : this.image
    }
  },
  methods: {
    setItem (item) {
      this.activated = this._uid === item._uid
    },
    slideToItem (item, order) {
      if (this._uid === item._uid || this.activated) {
        this.order = order
        setTimeout(() => {
          this.transitioning = true
        }, 0)
        setTimeout(() => {
          this.transitioning = false
          this.order = null
          this.setItem(item)
        }, 600)
      }
    }
  }
}
</script>

<style lang="scss">
  @import "~@coreui/coreui/scss/partials/carousel.scss";
</style>
