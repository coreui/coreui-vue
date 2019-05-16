<template>
  <div
    :class="progressBarClasses"
    :style="progressBarStyles"
    role="progressbar"
    aria-valuemin="0"
    :aria-valuemax="props.max.toString()"
    :aria-valuenow="props.value.toFixed(props.precision)"
  >
    <slot>{{ text }}</slot>
  </div>
</template>

<script>
import props from './progressProps'
export default {
  name: 'CProgressBar',
  props,
  inject: {
    progress: {
      default: null
    }
  },
  computed: {
    props () {
      return Object.keys(props).reduce((props, key) => {
        const propUndefined = !Object.keys(this.$options.propsData).includes(key)
        const propInheritedFromProgress = propUndefined && this.progress.props[key]
        props[key] = propInheritedFromProgress ? this.progress.props[key] : this[key]
        return props
      }, {})
    },
    progressBarClasses () {
      return [
        'c-progress-bar',
        {
          [`c-bg-${this.props.variant}`]: this.props.variant,
          'c-progress-bar-striped': this.props.striped || this.props.animated,
          'c-progress-bar-animated': this.props.animated
        }
      ]
    },

    progressBarStyles () {
      return { width: `${(100 * (this.props.value / this.props.max))}%` }
    },
    progressValue () {
      const p = Math.pow(10, this.props.precision)
      return Math.round((100 * p * this.props.value) / this.props.max) / p
    },
    text () {
      if (this.props.showValue || this.props.showProgress) {
        return this.progressValue || this.props.value
      }
    }
  }
}
</script>
