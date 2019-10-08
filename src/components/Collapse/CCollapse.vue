<template>
  <div :class="{ 'navbar-collapse': this.navbar }">
    <slot></slot>
  </div>
</template>

<script>
const props = {
  duration: {
    type: Number,
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
      this.collapseController(val)
    }
  },
  mounted () {
    this.$el.style.display = this.visible ?  '' : 'none'
  },
  beforeDestroy () {
    clearTimeout(this.heightWatcher)
  },
  methods: {
    collapseController (val) {
      if (this.collapsing === false) {
        val ? this.toggle(true) : this.toggle(false)
        this.setFinishTimer(this.duration)
      } else {
        this.turn()
        const height = Number(this.collapsing.slice(0,-2))
        const current = this.$el.offsetHeight
        const time =  val ?  (height - current) / height :  current / height
        this.setFinishTimer(this.duration * time)
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
      this.$el.style.transition = `all ${this.duration}ms ${this.transition}`
      const self = this
      setTimeout(() => { self.$el.style.height = val ? this.collapsing : 0 }, 0)
    },
    setFinishTimer (duration) {
      clearTimeout(this.heightWatcher)
      const self = this
      this.heightWatcher = setTimeout(() => {
        self.collapsing = false
        self.$el.style.display = self.visible ? '' : 'none'
        self.$el.style.height = ''
        self.$el.style.overflow = ''
        self.$el.style.transition = ''
        this.$emit('finish', self.visible)
      }, duration)
    }
  }
}
</script>
