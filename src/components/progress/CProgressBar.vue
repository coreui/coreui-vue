<template>
  <div
    :class="progressBarClasses"
    :style="progressBarStyles"
    role="progressbar"
    aria-valuemin="0"
    :aria-valuemax="props.max.toString()"
    :aria-valuenow="computedValue"
  >
    <slot>{{ text }}</slot>
  </div>
</template>

<script>
import props from './progress-props'
export default {
  name: 'CProgressBar',
  props,
  inject: {
    progress: {
      default: undefined
    }
  },
  computed: {
    directlyDeclaredProps () {
      return Object.keys(this.$options.propsData)
    },
    injectedProps () {
      return this.progress && this.progress.props ? this.progress.props : {}
    },
    props () {
      return Object.keys(props).reduce((computedProps, key) => {
        const propIsDirectlyDeclared = this.directlyDeclaredProps.includes(key)
        const parentPropExists = this.injectedProps[key] !== undefined
        const propIsInherited = parentPropExists && !propIsDirectlyDeclared
        computedProps[key] = propIsInherited ? this.injectedProps[key] : this[key]
        return computedProps
      }, {})
    },
    progressBarClasses () {
      return [
        'progress-bar',
        {
          [`bg-${this.props.color}`]: this.props.color,
          'progress-bar-striped': this.props.striped || this.props.animated,
          'progress-bar-animated': this.props.animated
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
    computedValue () {
      return this.props.value.toFixed(props.precision)
    },
    text () {
      if (this.props.showPercentage) {
        return this.progressValue + '%'
      } else if (this.props.showValue) {
        return this.computedValue
      }  
    }
  }
}
</script>
