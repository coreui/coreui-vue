<template>
  <label :class="classList">
    <input
      :id="id"
      :checked="isChecked"
      :disabled="disabled"
      :required="required"
      :name="name"
      :value="value"
      @change="handleChange"
      class="switch-input form-check-input"
      type="checkbox"
      true-value="value"
      false-value="uncheckedValue"
    >
    <template v-if="label">
      <span
        :data-checked="dataOn"
        :data-unchecked="dataOff"
        class="switch-slider">
      </span>
    </template>
    <template v-else>
      <span class="switch-slider"></span>
    </template>
  </label>
</template>

<script>
export default {
  model: {
    prop: 'modelChecked',
    event: 'change'
  },
  data: function () {
    return {
      checkedData: this.isChecked ? this.value : this.uncheckedValue
    }
  },
  props: {
    id: {
      type: String,
      default: function () {
        return 'switch-id-' + this._uid;
      },
    },
    color: {
      type: String,
      default: 'secondary'
    },
    label: {
      type: Boolean,
      default: null
    },
    outline: {
      type: [Boolean, String],
      default: null,
      validator: value => [false, true, '', 'alt'].indexOf(value) !== -1
    },
    size: {
      type: String,
      default: null,
      validator: value => ['', 'lg', 'sm'].indexOf(value) !== -1
    },
    checked: {
      type: Boolean,
      default: false
    },
    defaultChecked: {
      type: Boolean,
      default: false
    },
    modelChecked: {
      default: undefined
    },
    value: {
      default: true
    },
    disabled: {
      type: Boolean,
      default: false
    },
    name: {
      type: String,
      default: null
    },
    required: {
      type: Boolean,
      default: false
    },
    onChange: {
      type: Function
    },
    uncheckedValue: {
      default: false
    },
    variant: {
      type: String,
      default: null,
      validator: value => [null, '3d', 'pill'].indexOf(value) !== -1
    },
    dataOn: {
      type: String,
      default: 'On'
    },
    dataOff: {
      type: String,
      default: 'Off'
    }
  },
  computed: {
    classList () {
      return [
        'switch',
        this.label ? 'switch-label' : '',
        this.size ? `switch-${this.size}` : '',
        this.variant ? `switch-${this.variant}` : '',
        `switch${this.outline ? '-outline' : ''}-${this.color}${this.outline==='alt' ? '-alt' : ''}`,
        'form-check-label'
      ]
    },
    isChecked () {
      if (this.modelChecked === undefined ) {
        return this.checkedData === this.value
      }
      return this.modelChecked === this.value
    }
  },
  methods: {
    handleChange (event) {
      this.toggle(event.target.checked);
    },
    toggle (checked) {
      this.checkedData = checked ? this.value : this.uncheckedValue
      this.$emit('change', this.checkedData);
    }
  },
  mounted() {
    this.toggle(this.defaultChecked || this.checked || this.isChecked);
  },
}
</script>
