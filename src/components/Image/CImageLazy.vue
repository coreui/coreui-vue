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
      animated: this.noFade
    }
  },
  mounted () {
    document.addEventListener('scroll', this.checkPosition)
    this.checkPosition()
  },
  beforeDestroy () {
    this.removeListener()
  },
  computed: {
    animationClasses () {
      if (!this.noFade) {
        return { 'c-opacity-0' : !this.animated }
      }
    },
    propOffset () {
      return !this.active ? this.loadOffset : this.fadeOffset
    }
  },
  methods: {
    checkPosition () {
      const rect = this.$el.getBoundingClientRect()
      const offset = this.getOffset(rect.height || 0)
      const positionTop = window.innerHeight - rect.top + offset
      const positionBottom = rect.bottom + offset
      if (positionTop > 0 && positionBottom > 0) {
        !this.active ? this.load() : this.animate()
      }
    },
    getOffset (imageHeight) {
      const minimalOffset = - (window.innerHeight + imageHeight) / 2 + 50
      return this.propOffset < minimalOffset ? minimalOffset : this.propOffset
    },
    load () {
      this.active = true
      if (this.noFade) {
        this.removeListener()
      } else if (this.fadeOffset >= this.loadOffset) {
        this.$nextTick(() => this.animate())
      }
    },
    animate () {
      this.removeListener()
      this.$el.style.transition = `opacity ${this.fadeTime}ms ease-in-out`
      this.animated = true
    },
    removeListener () {
      return document.removeEventListener('scroll', this.checkPosition)
    }
  }
}
</script>

<style>
  .c-opacity-0 {
    opacity: 0;
  }
</style>
