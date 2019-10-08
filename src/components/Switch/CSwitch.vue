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
      handler () {
        this.state = this.getCheckState()
      }
    }
  },
  computed: {
    classList () {
      const outlineString = this.outline ? '-outline' : ''
      const outlinedAltString = this.outline === 'alt' ? '-alt' : ''
      return [
        'c-switch form-check-label',
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
      } else {
        return this.checked
      }
    },
    onChange (event) {
      this.state = event.target.checked
      this.$emit('update:checked', this.getValue(event.target.checked), event)
    },
    getValue (checked) {
      return this.type === 'radio' ? this.value : checked
    }
  }
}
</script>
