<script>
import CImage from './CImage'
export default {
  name: 'CImageLazy',
  extends: CImage,
  props: {
    loadInitially: Boolean,
    loadOffset: {
      type: Number,
      default: 500
    },
    noFade: Boolean,
    fadeOffset: {
      type: Number,
      default: -100
    },
    fadeTime: {
      type: Number,
      default: 1500
    }
  },
  data () {
    return {
      active: this.loadInitially,
      animated: false,
      observer: null
    }
  },
  mounted () {
    this.defineObserver()
  },
  beforeDestroy () {
    this.observer.unobserve(this.$el)    
  },
  computed: {
    animationClasses () {
      return { 'opacity-0' : !this.noFade && !this.animated }
    },
    observerArgs () {
      if (this.active) {
        return [this.watchForAnimation, { rootMargin: `${this.fadeOffset}px`}]
      } else {
        return [this.watchForLoading, { rootMargin: `${this.loadOffset}px`}]
      }
    }
  },
  methods: {
    defineObserver () {
      this.observer = new IntersectionObserver(...this.observerArgs)
      this.observer.observe(this.$el)
    },
    watchForLoading (entries) {
      entries.forEach(entry => {
        if (entry.intersectionRatio > 0) {
          this.active = true
          if (!this.noFade) {
            this.$nextTick(() => {
              const animateInstantly = this.loadOffset <= this.fadeOffset
              animateInstantly ? this.queueAnimation() : this.defineObserver()
            })
          }
        }
      })
    },
    watchForAnimation (entries) {
      entries.forEach(entry => {
        if (entry.intersectionRatio > 0) {
          this.queueAnimation()
        }
      })
    },
    queueAnimation () {
      this.$el.complete ? this.animate() : this.$el.onload = () => this.animate()
      this.observer.unobserve(this.$el)
    },
    animate () {
      this.$el.style.transition = `opacity ${this.fadeTime}ms ease-in-out`
      this.animated = true
    }
  }
}
</script>

<style>
  .opacity-0 {
    opacity: 0;
  }
</style>
