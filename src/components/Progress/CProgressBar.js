import { getColor } from '@coreui/coreui/dist/js/coreui-utilities'

export default {
  name: 'CProgressBar',
  render (h) {
    let childNodes = h(false)
    if (this.$slots.default) {
      childNodes = this.$slots.default
    } else if (this.label) {
      childNodes = h('span', { domProps: { innerHTML: this.label } })
    } else if (this.computedShowProgress) {
      childNodes = this.progress.toFixed(this.computedPrecision)
    } else if (this.computedShowValue) {
      childNodes = this.value.toFixed(this.computedPrecision)
    }
    return h(
      'div',
      {
        class: this.progressBarClasses,
        style: this.progressBarStyles,
        attrs: {
          role: 'progressbar',
          'aria-valuemin': '0',
          'aria-valuemax': this.computedMax.toString(),
          'aria-valuenow': this.value.toFixed(this.computedPrecision)
        }
      },
      [ childNodes ]
    )
  },
  computed: {
    progressBarClasses () {
      return [
        'progress-bar',
        {
          'progress-bar-striped': this.computedStriped || this.computedAnimated,
          'progress-bar-animated': this.computedAnimated
        }
      ]
    },
    progressBarStyles () {
      return [
         { width: `${(100 * (this.value / this.computedMax))}%` },
         this.computedColor? { backgroundColor: this.computedColor} : {}
      ]
    },
    progress () {
      const p = Math.pow(10, this.computedPrecision)
      return Math.round((100 * p * this.value) / this.computedMax) / p
    },
    computedMax () {
      // Prefer our max over parent setting
      return this.max ? this.max : (this.$parent.max || 100)
    },
    computedColor () {
      // Prefer our color over parent setting
      return getColor(this.color || this.$parent.color || '#fff')
    },
    computedPrecision () {
      // Prefer our precision over parent setting
      return this.precision ? this.precision : (this.$parent.precision || 0)
    },
    computedStriped () {
      return typeof this.striped === 'boolean' ? this.striped : (this.$parent.striped || false)
    },
    computedAnimated () {
      return typeof this.animated === 'boolean' ? this.animated : (this.$parent.animated || false)
    },
    computedShowProgress () {
      return typeof this.showProgress === 'boolean' ? this.showProgress : (this.$parent.showProgress || false)
    },
    computedShowValue () {
      return typeof this.showValue === 'boolean' ? this.showValue : (this.$parent.showValue || false)
    }
  },
  props: {
    value: {
      type: Number,
      default: 0
    },
    label: String,
    // $parent prop values take precedence over the following props
    // Which is why they are defaulted to null
    max: Number,
    precision: Number,
    color: String,
    striped: {
      type: Boolean,
      default: null
    },
    animated: {
      type: Boolean,
      default: null
    },
    showProgress: {
      type: Boolean,
      default: null
    },
    showValue: {
      type: Boolean,
      default: null
    }
  }
}
