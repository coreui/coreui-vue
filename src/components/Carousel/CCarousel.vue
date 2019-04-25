<template>
  <div class="carousel slide" >
    <ol v-if="!noIndicators" :class="indicatorClasses">
      <li
        v-for="(index, key) in itemsLength"
        @click="setSlide(key)"
        :class="{'active' : active === key}"
        :key="key"
      ></li>
    </ol>
    <div class="carousel-inner">
      <slot></slot>
    </div>
    <template v-if="!noArrows">
      <a class="carousel-control-prev" @click="previousSlide">
        <span class="carousel-control-prev-icon"></span>
        <span class="sr-only">Previous</span>
      </a>
      <a class="carousel-control-next" @click="nextSlide">
        <span class="carousel-control-next-icon"></span>
        <span class="sr-only">Next</span>
      </a>
    </template>
  </div>
</template>

<script>
export default {
  name: 'CCarousel',
  props: {
    interval: {
      type: Number,
      default: 4000
    },
    noAnimation: Boolean,
    noIndicators: Boolean,
    noArrows: Boolean,
    indicatorClasses: {
      type: [String, Array],
      default: 'carousel-indicators'
    },
  },
  data () {
    return {
      active: 0,
      itemsLength: null,
      currentInterval: null,
      transitioning: null
    }
  },
  mounted () {
    this.itemsLength = this.$children.length
    this.$children.forEach((item, index) => item.index = index)
    const activeItem = this.$children.filter(item => item.active)
    if (activeItem[0]) {
      this.active = activeItem[0].index || 0
    } else {
      this.$children[0].classes = 'active'
    }
    this.menageInterval()
  },
  methods: {
    menageInterval () {
      if (this.noAnimation) return

      clearInterval(this.currentInterval)
      this.currentInterval = setInterval(() => {
        this.nextSlide()
      }, this.interval)
    },
    nextSlide () {
      let index = this.active === this.itemsLength - 1 ? 0 : this.active + 1
      this.setSlide(index, 'left')
    },
    previousSlide () {
      let index = this.active === 0 ? this.itemsLength -1  : this.active - 1
      this.setSlide(index, 'right')
    },
    setSlide (index, direction = null) {
      if (index === this.active) {
        return this.menageInterval()
      }
      direction === null ? direction = this.active < index ? 'left' : 'right' : ''
      if (this.noAnimation) {
        this.$children[this.active].classes = ''
        this.$children[index].classes = 'active'
        this.active = index
      } else if (!this.transitioning) {
        this.slide(index, direction)
      }
    },
    slide (index, direction) {
      this.menageInterval()
      let oldIndex = this.active
      this.active = index
      const order = direction === 'right' ? 'prev' : 'next'
      const orderClass = `carousel-item-${order}`
      const directionClass = `carousel-item-${direction}`
      const activeEl = this.$children[oldIndex].$el
      const nextEl = this.$children[index].$el
      setTimeout(() =>{
        nextEl.classList.add(orderClass)
        nextEl.offsetHeight
        nextEl.classList.add(directionClass)
        activeEl.classList.add(directionClass)
      }, 0)

      this.transitioning = setTimeout(() => {
        this.transitioning = null
        nextEl.classList.remove(orderClass)
        nextEl.classList.remove(directionClass)
        activeEl.classList.remove(directionClass)
        this.$children[oldIndex].classes = ''
        this.$children[index].classes = 'active'
      }, 600)
    }
  }

}
</script>

<style scoped lang="scss">
  @import "~@coreui/coreui/scss/partials/carousel.scss";
  @import "~@coreui/coreui/scss/utilities/_screenreaders.scss";
</style>
