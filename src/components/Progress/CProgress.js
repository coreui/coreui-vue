import CProgressBar from './CProgressBar'

export default {
  name:'CProgress',
  components: { CProgressBar },
  render (h) {
    let childNodes = this.$slots.default
    if (!childNodes) {
      childNodes = h(
        'c-progress-bar',
        {
          props: {
            value: this.value,
            max: this.max,
            precision: this.precision,
            color: this.color,
            animated: this.animated,
            striped: this.striped,
            showProgress: this.showProgress,
            showValue: this.showValue
          }
        }
      )
    }
    return h('div', { class: [ 'progress' ], style: this.progressHeight }, [ childNodes ])
  },
  props: {
    // These props can be inherited via the child c-progress-bar(s)
    color: {
      type: String,
      default: null
    },
    striped: {
      type: Boolean,
      default: false
    },
    animated: {
      type: Boolean,
      default: false
    },
    height: {
      type: String,
      default: null
    },
    precision: {
      type: Number,
      default: 0
    },
    showProgress: {
      type: Boolean,
      default: false
    },
    showValue: {
      type: Boolean,
      default: false
    },
    max: {
      type: Number,
      default: 100
    },
    // This prop is not inherited by child c-progress-bar(s)
    value: {
      type: Number,
      default: 0
    }
  },
  computed: {
    progressHeight () {
      return { height: this.height || null }
    }
  }
}
