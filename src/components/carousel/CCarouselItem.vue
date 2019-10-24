<template>
  <div :class="itemClasses">
    <CImg
      v-if="image" 
      v-bind="computedImage"
      class="d-block w-100 h-100 img-fluid"
    />
    <slot>
      <div 
        v-if="captionHeader || captionText"
        class="carousel-caption"
      >
        <h3>{{captionHeader}}</h3>
        <p>{{captionText}}</p>
      </div>
    </slot>
  </div>
</template>

<script>
import CImg from '../image/CImg'
export default {
  name: 'CCarouselItem',
  components: {
    CImg
  },
  props: {
    image: [String, Object],
    captionHeader: String,
    captionText: String,
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
        'carousel-item',
        {
          [`carousel-item-${this.order}`]: this.order && !this.activated,
          [`carousel-item-${this.direction}`]: this.transitioning,
          'active': this.activated
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
