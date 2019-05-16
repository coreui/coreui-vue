<script>
import CButtonClose from '../Button/CButtonClose'

export default {
  name: 'CAlert',
  components: { CButtonClose },
  props: {
    variant: {
      type: String,
      default: 'info'
    },
    dismissible: [Boolean, String],
    show: {
      type: [Boolean, Number],
      default: true
    },
    fade: Boolean,
    iconHtml: String
  },
  data () {
    return {
      countdownTimeout: null,
      state: this.show
    }
  },
  computed: {
    classObject () {
      return ['c-alert',
              {
                'c-alert-dismissible': this.dismissible,
                [`c-alert-${this.variant}`]: this.variant
              }
             ]
    }
  },
  watch: {
    show (val, oldVal) {
      if(val == oldVal) return
      this.clearCounter()
      this.state = val
    },
    state: {
      immediate: true,
      handler (val, oldVal) {
        if(val == oldVal) return

        if (!val && oldVal) {
          this.clearCounter()
          this.$emit('dismissed')
        } else if (typeof val === 'number' && val) {
          this.countdownTimeout = setTimeout(() => {
            this.$listeners['update:show'] ?
              this.$emit('update:show', this.state - 1) :
              this.state--
          }, 1000)
        }
      }
    }
  },
  destroyed () {
    this.clearCounter()
  },
  methods: {
    dismiss () {
      this.$emit('update:show', false)
      this.state = false
    },
    clearCounter () {
      if (this.countdownTimeout) {
        clearTimeout(this.countdownTimeout)
        this.countdownTimeout = null
      }
    }
  },
  render (h) {
    if (!this.state) return h(false)

    let dismissBtn = h(false)
    if (this.dismissible) {
      dismissBtn = h(
        'CButtonClose',
        {
          on: { click: this.dismiss },
          props: { iconHtml: this.iconHtml },
          attrs: { disabled: this.dismissible === 'disabled'}
        }
      )
    }
    const alert = h(
      'div',
      {
        class: this.classObject,
        attrs: { role: 'alert', 'aria-live': 'polite', 'aria-atomic': true}
      },
      [dismissBtn, this.$scopedSlots.default({dismiss: this.dismiss})]
    )
    return !this.fade ? alert : h(
      'transition',
      { props: { name: 'fade', appear: true } },
      [ alert ]
    )
  }
}
</script>


<style scoped lang="scss">
  @import "~@coreui/coreui/scss/partials/alert.scss";
</style>
