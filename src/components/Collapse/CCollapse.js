const props = {
  tag: {
    type: String,
    default: 'div'
  },
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
    }
  },
  watch: {
    show (val) {
      this.collapse(val)
    },
  },
  mounted () {
    this.$el.style.display = this.show ?  '' : 'none'
  },
  methods: {
    collapse (val) {
      if (this.collapsing) {
        this.turn()
        const height = Number(this.collapsing.slice(0,-2))
        const current = this.$el.offsetHeight
        const time =  val ?  (height - current) / height :  current / height
        this.setFinishTimer(this.duration * time)
      } else {
        val ? this.toggle(true) : this.toggle(false)
        this.setFinishTimer(this.duration)
      }
    },
    turn () {
      if(this.show)
        this.$el.style.height = this.collapsing
      else
        this.$el.style.height = 0
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
        self.$el.style.display = self.show ? '' : 'none'
        self.$el.style.height = ''
        self.$el.style.overflow = ''
        self.$el.style.transition = ''
        this.$emit('finish', self.show)
      }, duration)
    }
  },
  render (h) {
    return h(
      this.tag,
      {
        class: { 'navbar-collapse': this.navbar }
      },
      [ this.$slots.default ]
    )
  }
}
