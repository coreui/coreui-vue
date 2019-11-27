<template>
  <div class="carousel slide" :style="{ height: height || 'auto' }">
    <ol v-if="indicators" :class="indicatorClasses">
      <li
        v-for="(index, key) in items.length"
        @click="setItem(key)"
        :class="{ 'active': activated === key }"
        :key="key"
      ></li>
    </ol>
    <div class="carousel-inner">
      <slot></slot>
    </div>
    <template v-if="arrows">
      <a class="carousel-control-prev" @click="previousItem">
        <span 
          class="carousel-control-prev-icon"
          aria-label="Previous"
        ></span>
      </a>
      <a class="carousel-control-next" @click="nextItem">
        <span 
          class="carousel-control-next-icon"
          aria-label="Next"
        ></span>
      </a>
    </template>
  </div>
</template>

<script>
export default {
  name: 'CCarousel',
  props: {
    interval: Number,
    animate: Boolean,
    indicators: Boolean,
    arrows: Boolean,
    indicatorClasses: {
      type: [String, Array, Object],
      default: 'carousel-indicators'
    },
    height: [String, Number]
  },
  data () {
    return {
      active: null,
      activated: null,
      items: [],
      currentInterval: null,
      transitioning: false,
    }
  },
  mounted () {
    this.items = this.$children
    const activated = this.items.map((item, index) => item.active ? index :null)
                                .filter(item => item)
    this.active = activated[0] || 0
    this.activate(activated[0] || 0)
  },
  beforeDestroy () {
    clearInterval(this.currentInterval)
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
      } else if (this.transitioning) {
        return
      }
      const order = passedOrder || (this.active > index ? 'prev' : 'next')
      this.active = index
      this.activate(index, order)
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
      setTimeout(() => this.transitioning = false, 600)
    }
  }

}
</script>

<style scoped>
  .carousel-inner, .carousel-item {
    height: inherit;
  }
</style>
