<template>
  <div class="c-carousel c-slide" :style="{ height: height || 'auto' }">
    <ol v-if="indicators" :class="indicatorClasses">
      <li
        v-for="(index, key) in items.length"
        @click="setItem(key)"
        :class="{ 'c-active': activated === key }"
        :key="key"
      ></li>
    </ol>
    <div class="c-carousel-inner">
      <slot></slot>
    </div>
    <template v-if="arrows">
      <slot name="arrows">
        <a class="c-carousel-control-prev" @click="previousItem">
          <span class="c-carousel-control-prev-icon"></span>
          <span class="sr-only">Previous</span>
        </a>
        <a class="c-carousel-control-next" @click="nextItem">
          <span class="c-carousel-control-next-icon"></span>
          <span class="sr-only">Next</span>
        </a>
      </slot>
    </template>
  </div>
</template>

<script>
export default {
  name: 'CCarousel',
  props: {
    interval: {
      type: Number,
      default: 6000
    },
    animate: Boolean,
    indicators: Boolean,
    arrows: Boolean,
    indicatorClasses: {
      type: [String, Array],
      default: 'c-carousel-indicators'
    },
    height: String
  },
  data () {
    return {
      active: null,
      activated: null,
      items: [],
      currentInterval: null,
      transitioning: false,
      waitingItem: null
    }
  },
  mounted () {
    this.items = this.$children
    const activated = this.items.map((item, index) => item.active ? index :null)
                                .filter(item => item)
    this.active = activated[0] || 0
    this.activate(activated[0] || 0)
  },
  methods: {
    resetInterval () {
      if (this.animate && this.interval) {
        clearInterval(this.currentInterval)
        this.currentInterval = setInterval(() => {
          this.nextItem()
        }, this.interval)
      }
    },
    nextItem () {
      this.setItem(this.active === this.items.length - 1 ? 0 : this.active + 1, 'next')
    },
    previousItem () {
      this.setItem(this.active === 0 ? this.items.length -1  : this.active - 1, 'prev')
    },
    setItem (index, passedOrder = null) {
      if (index === this.activated) {
        return this.resetInterval()
      }
      const order = passedOrder || (this.active > index ? 'prev' : 'next')
      this.active = index
      if (!this.transitioning) {
        this.activate(index, order)
      } else {
        this.waitingItem = { index, order }
      }
    },
    activate (index, order) {
      this.resetInterval()
      this.activated = index
      if (!order || !this.animate) {
        this.items.forEach(item => item.$emit('setItem', this.items[index]))
      } else {
        this.slide(index, order)
      }
    },
    slide (i, order) {
      this.items[i].$emit('slideToItem', this.items[i], order)
      this.items.forEach((item, idx) => {
        if (i !== idx) {
          item.$emit('slideToItem', this.items[i], order)
        }
      })
      this.transitioning = true
      setTimeout(() => {
        this.transitioning = false
        if (this.waitingItem) {
          this.setItem(this.waitingItem.index, this.waitingItem.order)
          this.waitingItem = null
        }
      }, 600)
    }
  }

}
</script>

<style lang="scss">
  .c-carousel-inner, .c-carousel-item {
    height: inherit;
  }
  @import "~@coreui/coreui/scss/partials/carousel.scss";
  @import "~@coreui/coreui/scss/utilities/_screenreaders.scss";
</style>
