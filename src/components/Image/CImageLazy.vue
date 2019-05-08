<script>
import CImage from './CImage'
export default {
  name: 'CImageLazy',
  extends: CImage,
  props: {
    loadOffset: {
      type: [Number, String, Boolean],
      default: 500
    },
    fade: {
      type: Boolean,
      default: true
    },
    fadeOffset: {
      type: [Number, String, Boolean],
      default: -100
    },
    fadeTime: {
      type: [Number, String],
      default: 1500
    }
  },
  data () {
    return {
      active: this.loadOffset === false,
      animated: this.fadeOffset === false
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
    isActive () {
      return this.active
    },
    animationClasses () {
      if (this.fade) {
        return { 'opacity-0' : !this.animated }
      }
    }
  },
  methods: {
    checkPosition () {
      const rect = this.$el.getBoundingClientRect()
      const offset = !this.active ? this.loadOffset : this.fadeOffset
      const positionTop = window.innerHeight - rect.top + offset
      const positionBottom = rect.bottom + offset
      if (positionTop > 0 && positionBottom > 0) {
        !this.active ? this.load() : this.animate()
      }
    },
    load () {
      this.active = true
      if (!this.fade) {
        this.removeListener()
      }
    },
    animate () {
      this.$el.style.transition = `opacity ${this.fadeTime}ms ease-in-out`
      this.animated = true
      this.removeListener()
    },
    removeListener () {
      return document.removeEventListener('scroll', this.checkPosition)
    }
  }
}
</script>

<style scoped>
  .opacity-0 {
    opacity: 0;
  }
</style>
