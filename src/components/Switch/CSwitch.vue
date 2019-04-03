<template>
  <label :class="classList">
    <input v-bind="$attrs"
          :id="id"
          :name="name"
          :type="type"
          :checked="isChecked"
          :disabled="disabled"
          :required="required"
          :value="value"
          class="switch-input form-check-input"
          @change="toggle"
    >
    <span
      :data-checked="dataOn"
      :data-unchecked="dataOff"
      class="switch-slider"
    >
    </span>
  </label>
</template>

<script>
export default {
  name:'CSwitch',
  inheritAttrs: false,
  data () {
    return {
      isChecked: ''
    }
  },
  props: {
    variant: {
      type: String,
      default: 'secondary'
    },
    outline: {
      type: [Boolean, String],
      default: null,
      validator: value => [false, true, '', 'alt'].indexOf(value) !== -1
    },
    size: {
      type: String,
      validator: value => ['','lg', 'sm' ].indexOf(value) !== -1
    },
    shape: {
      type: String,
      validator: value => ['','3d', 'pill'].indexOf(value) !== -1
    },
    id: String,
    name: String,
    checked: [Boolean, String, Number],
    disabled: Boolean,
    required: Boolean,
    value: {
      type: [String, Number, Boolean],
      default: null
    },
    trueValue: {
      type: [String, Number, Boolean],
      default: null
    },
    falseValue: {
      type: [String, Number, Boolean],
      default: null
    },
    dataOn: String,
    dataOff: String,
    type: {
      type: String,
      default: 'checkbox'
    }
  },
  created () {
    this.isChecked = this.getCheckState()
  },
  watch: {
    checked (val, oldVal) {
      if(val !== oldVal)
        this.isChecked = this.getCheckState()
    }
  },
  computed: {
    classList () {
      return [
        'switch',
        this.dataOn || this.dataOff ? 'switch-label' : '',
        this.size ? `switch-${this.size}` : '',
        this.shape ? `switch-${this.shape}` : '',
        `switch${this.outline ? '-outline' : ''}-${this.variant}${this.outline==='alt' ? '-alt' : ''}`,
        'form-check-label'
      ]
    },
  },
  methods: {
    getCheckState () {
      if (this.type === 'radio')
        return this.checked === this.value
      else
        return typeof this.checked === 'boolean' ? this.checked :
                          this.checked === this.trueValue ? true : false
    },
    toggle (event) {
      this.isChecked = event.target.checked
      this.$emit('update:checked', this.getValue(event), event);
    },
    getValue (e) {
      if(this.type === 'radio')
        return this.value
      else if(e.target.checked)
        return this.trueValue !== null ? this.trueValue : true
      else
        return this.falseValue !== null ? this.falseValue : false
    },
  },
}
</script>
