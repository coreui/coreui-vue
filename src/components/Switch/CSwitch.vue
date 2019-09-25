<template>
  <label :class="classList">
    <input
      v-bind="$attrs"
      :type="type"
      :checked="isChecked"
      :value="value"
      class="switch-input form-check-input"
      @change="toggle"
    >
    <span
      :data-checked="labelOn"
      :data-unchecked="labelOff"
      class="switch-slider"
    >
    </span>
  </label>
</template>

<script>
export default {
  name:'CSwitch',
  inheritAttrs: false,
  props: {
    variant: String,
    outline: {
      type: [Boolean, String],
      default: undefined,
      validator: value => [false, true, '', 'alt'].includes(value)
    },
    size: {
      type: String,
      validator: value => ['','lg', 'sm'].includes(value)
    },
    shape: {
      type: String,
      validator: value => ['','3d', 'pill'].includes(value)
    },
    checked: {
      type: [Boolean, String, Number],
      default: false
    },
    value: {
      type: [String, Number, Boolean],
      default: undefined
    },
    trueValue: [String, Number],
    falseValue: [String, Number],
    labelOn: String,
    labelOff: String,
    type: {
      type: String,
      default: 'checkbox',
      validator: type => ['checkbox', 'radio'].includes(type)
    }
  },
  data () {
    return {
      isChecked: undefined
    }
  },
  watch: {
    checked: {
      immediate: true,
      handler () {
        this.isChecked = this.getCheckState()
      }
    }
  },
  computed: {
    classList () {
      const outlineString = this.outline ? '-outline' : ''
      const outlinedAltString = this.outline === 'alt' ? '-alt' : ''
      return [
        'switch form-check-label',
        `switch${outlineString}-${this.variant}${outlinedAltString}`,
        {
          [`switch-${this.size}`]: this.size,
          [`switch-${this.shape}`]: this.shape,
          'switch-label': this.labelOn || this.labelOff
        }
      ]
    }
  },
  methods: {
    getCheckState () {
      if (this.type === 'radio') {
        return this.checked === this.value
      } else if (typeof this.checked === 'boolean') {
        return this.checked
      } else {
        return this.checked === this.trueValue ? true : false
      }
    },
    toggle (event) {
      this.isChecked = event.target.checked
      this.$emit('update:checked', this.getValue(event.target.checked), event)
    },
    getValue (checked) {
      if (this.type === 'radio') {
        return this.value
      } else if (checked) {
        return this.trueValue !== undefined ? this.trueValue : true
      } else {
        return this.falseValue !== undefined ? this.falseValue : false
      }
    }
  }
}
</script>
