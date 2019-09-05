<script>
import PerfectScrollbar from 'perfect-scrollbar'

export default {
  name: 'vue-perfect-scrollbar',
  props: {
    settings: {
      type: Object,
      default () {
        return {}
      },
    },
    swicher: {
      type: Boolean,
      default: true,
    },
    tag: {
      type: String,
      default: 'div',
    }
  },

  watch: {
    swicher (val) {
      if (!val) {
        this.__uninit()
      } else {
        this.__init()
      }
    }
  },

  mounted () {
    if (!this.$isServer && this.swicher) {
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
        this._ps_bar = new PerfectScrollbar(this.$el, this.settings)
      }
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
      { class: { 'c-position-relative': true } },
      this.$slots.default
    )
  }
}
</script>

<style src="perfect-scrollbar/css/perfect-scrollbar.css"></style>