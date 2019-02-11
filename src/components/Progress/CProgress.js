// import { mergeData } from 'vue-functional-data-merge'
import CProgressBar from './CProgressBar'

export default {
  name:'CProgress',
  components: { CProgressBar },
  render (h) {
    let childNodes = this.$slots.default
    if (!childNodes) {
      childNodes = h(
        'CProgressBar',
        {
          props: {
            value: this.value,
            max: this.max,
            precision: this.precision,
            variant: this.variant,
            animated: this.animated,
            striped: this.striped,
            showProgress: this.showProgress,
            showValue: this.showValue
          }
        }
      )
    }
    return h(
      'div',
      {
        class: [ 'progress' ],
        style: { height: this.height }
      },
      [ childNodes ]
    )
  },
  props: {
    height: String,
    // These props can be inherited via the child CProgressBar(s)
    variant: String,
    striped: Boolean,
    animated: Boolean,
    precision: Number,
    showProgress: Boolean,
    showValue: Boolean,
    max: Number,
    // This prop is not inherited by child CProgressBar(s)
    value: Number,
  }
}
