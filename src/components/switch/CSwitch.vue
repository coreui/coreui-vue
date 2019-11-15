<template>
  <label :class="classList">
    <input
      v-bind="$attrs"
      :type="type"
      :checked="state"
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
    variant: {
      type: String,
      validator: value => ['', 'outline', 'opposite', '3d'].includes(value)
    },
    size: {
      type: String,
      validator: value => ['','lg', 'sm'].includes(value)
    },
    shape: {
      type: String,
      validator: value => ['','pill', 'square'].includes(value)
    },
    checked: Boolean,
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
      const variant = this.variant ? `-${this.variant}` : ''
      return [
        'c-switch form-check-label',
        {
          [`c-switch-${this.size}`]: this.size,
          [`c-switch-${this.shape}`]: this.shape,
          [`c-switch${variant}-${this.color}`]: this.color,
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
