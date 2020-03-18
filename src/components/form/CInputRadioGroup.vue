<template>
  <div :class="{ 'form-inline': inline }">
    <CInputRadio
      v-for="({value, label, props}, key) in computedOptions"
      :key="key"
      :label="label"
      :name="groupName"
      :value="value"
      :checked="checked === value"
      @change="change($event, value)"
      :custom="custom"
      :inline="inline"
      v-bind="props"
    />
  </div>
</template>

<script>
import CInputRadio from './CInputRadio'
export default {
  name: 'CInputRadioGroup',
  components: {
    CInputRadio
  },
  props: {
    options: {
      type: Array,
      required: true
    },
    checked: String,
    name: String,
    custom: Boolean,
    inline: Boolean
  },
  computed: {
    computedOptions () {
      return this.options.map(option => {
        if (typeof option !== 'object') {
          return {
            label: option,
            value: option
          }
        }
        return option
      })
    },
    groupName () {
      return this.name || 'radio' + this._uid
    }
  },
  methods: {
    change (e, option) {
      this.$emit('update:checked', option, e)
    }
  }
}
</script>