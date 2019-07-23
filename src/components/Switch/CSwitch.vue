<template>
  <label :class="classList">
    <input
      v-bind="$attrs"
      :type="type"
      :checked="isChecked"
      :value="value"
      class="c-switch-input c-form-check-input"
      @change="toggle"
    >
    <span
      :data-checked="labelOn"
      :data-unchecked="labelOff"
      class="c-switch-slider"
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
      handler (val, oldVal) {
        if (val !== oldVal) {
          this.isChecked = this.getCheckState()
        }
      }
    }
  },
  computed: {
    classList () {
      const outlineString = this.outline ? '-outline' : ''
      const outlinedAltString = this.outline === 'alt' ? '-alt' : ''
      return [
        'c-switch c-form-check-label',
        `c-switch${outlineString}-${this.variant}${outlinedAltString}`,
        {
          [`c-switch-${this.size}`]: this.size,
          [`c-switch-${this.shape}`]: this.shape,
          'c-switch-label': this.labelOn || this.labelOff
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
      this.$emit('update:checked', this.getValue(event), event);
    },
    getValue (e) {
      if (this.type === 'radio') {
        return this.value
      } else if (e.target.checked) {
        return this.trueValue !== undefined ? this.trueValue : true
      } else {
        return this.falseValue !== undefined ? this.falseValue : false
      }
    }
  }
}
</script>

<style lang="scss">
  @import "~@coreui/coreui/scss/partials/switches.scss";
</style>
