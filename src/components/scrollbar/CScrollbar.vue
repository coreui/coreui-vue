<script>
// this component is a refector of vue-perfect-scrollbar component https://github.com/lecion/vue-perfect-scrollbar
import PerfectScrollbar from 'perfect-scrollbar'

export default {
  name: 'CScrollbar',
  props: {
    settings: {
      type: Object,
      default () {
        return {}
      },
    },
    switcher: {
      type: Boolean,
      default: true
    },
    tag: {
      type: String,
      default: 'div'
    }
  },

  watch: {
    switcher (val) {
      if (!val) {
        this.__uninit()
      } else {
        this.__init()
      }
    }
  },

  mounted () {
    if (!this.$isServer && this.switcher) {
      this.__init()
    }
  },

  updated () {
    this.$nextTick(this.__update)
  },

  beforeDestroy () {
    this.__uninit()
  },

  methods: {
    __init() {
      if (!this._ps_bar) {
        this.__createPerfectScrollbar()
      }
    },

    __createPerfectScrollbar() {
      this._ps_bar = new PerfectScrollbar(this.$el, this.settings)
    },
    
    __uninit() {
      if (this._ps_bar) {
        this._ps_bar.destroy()
        this._ps_bar = null
      }
    },
    __update() {
      if (this._ps_bar) {
        this._ps_bar.update()
      }
    }
  },

  render (h) {
    return h(
      this.tag,
      { style: 'position: relative' },
      this.$slots.default
    )
  }
}
</script>

<style scoped src="perfect-scrollbar/css/perfect-scrollbar.css"></style>