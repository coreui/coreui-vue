<template>
  <label :class="classList">
    <input
      v-bind="$attrs"
      :type="type"
      :checked="state"
      :value="value"
      class="c-switch-input form-check-input"
      @change="onChange"
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
    color: String,
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
    checked: Boolean,
    value: {
      type: [String, Number, Boolean],
      default: undefined
    },
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
      state: undefined
    }
  },
  watch: {
    checked: {
      immediate: true,
      handler (val) {
        this.state = val
      }
    }
  },
  computed: {
    classList () {
      const outlineString = this.outline ? '-outline' : ''
      const outlinedAltString = this.outline === 'alt' ? '-alt' : ''
      return [
        'c-switch form-check-label',
        `c-switch${outlineString}-${this.color}${outlinedAltString}`,
        {
          [`c-switch-${this.size}`]: this.size,
          [`c-switch-${this.shape}`]: this.shape,
          'c-switch-label': this.labelOn || this.labelOff
        }
      ]
    }
  },
  methods: {
    onChange (e) {
      this.state = e.target.checked
      this.$emit('update:checked', e.target.checked, e)
    }
  }
}
</script>
