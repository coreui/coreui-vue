<template>
  <div :class="{ 'navbar-collapse': this.navbar }">
    <slot></slot>
  </div>
</template>

<script>
const props = {
  duration: {
    type: [Number, Object],
    default: 400
  },
  transition: {
    type: String,
    default: 'ease-in-out'
  },
  show: Boolean,
  navbar: Boolean
}

export default {
  name: 'CCollapse',
  props,
  data () {
    return {
      collapsing: false,
      heightWatcher: null,
      visible: this.show,
      el: null
    }
  },
  watch: {
    show (val) {
      this.visible = val
    },
    visible (val) {
      if (this.toggleTime) {
        this.collapseController(val)
      } else {
        this.reset()
      }
    }
  },
  mounted () {
    this.$el.style.display = this.visible ?  '' : 'none'
  },
  beforeDestroy () {
    clearTimeout(this.heightWatcher)
  },
  computed: {
    toggleTime () {
      return (this.visible ? this.duration.show : this.duration.hide) || this.duration
    }
  },
  methods: {
    collapseController (val) {
      if (this.collapsing === false) {
        val ? this.toggle(true) : this.toggle(false)
        this.setFinishTimer(this.toggleTime)
      } else {
        this.setTransition()
        this.turn()
        const height = Number(this.collapsing.slice(0,-2))
        const current = this.$el.offsetHeight
        const time = (val ? height - current : current) / height
        this.setFinishTimer(this.toggleTime * time)
      }
    },
    turn () {
      if (this.visible) {
        this.$el.style.height = this.collapsing
      } else {
        this.$el.style.height = 0
      }
    },
    toggle (val) {
      this.$el.style.display = ''
      this.collapsing = this.$el.scrollHeight + 'px'
      this.$el.style.height = val ? 0 : this.$el.scrollHeight + 'px'
      this.$el.style.overflow = 'hidden'
      this.setTransition()
      const self = this
      setTimeout(() => { self.$el.style.height = val ? this.collapsing : 0 }, 0)
    },
    setTransition () {
      this.$el.style.transition = `all ${this.toggleTime}ms ${this.transition}`
    },
    setFinishTimer (duration) {
      clearTimeout(this.heightWatcher)
      this.heightWatcher = setTimeout(() => this.reset(), duration)
    },
    reset () {
      this.collapsing = false
      this.$el.style.display = this.visible ? '' : 'none'
      this.$el.style.height = ''
      this.$el.style.overflow = ''
      this.$el.style.transition = ''
      this.$emit('finish', this.visible)
    }
  }
}
</script>
