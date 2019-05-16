<template>
  <div :class="itemClasses">
    <CImage
      v-if="image || imgSrc"
      :src="imgSrc"
      v-bind="image"
      class="c-d-block c-w-100 c-h-100 c-img-fluid"
    />
    <slot>
      <div class="carousel-caption">
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
  props: {
    image: Object,
    imgSrc: String,
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
          [`c-carousel-item-${this.order}`]: this.order,
          [`c-carousel-item-${this.direction}`]: this.transitioning,
          'active': this.activated
        }
      ]
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

<style scoped lang="scss">
  @import "~@coreui/coreui/scss/partials/carousel.scss";
</style>
