<template>
  <CFormGroup v-bind="{validFeedback, invalidFeedback, tooltipFeedback,
                       description, class: computedClasses}">
    <template #input>
      <input
        v-bind="$attrs"
        :id="safeId"
        :type="$options.type"
        :class="inputClasses"
        :value="value"
        :checked="state"
        @change="onChange($event)"
      />
    </template>


    <template #label-after-input>
      <slot name="label">
        <label v-if="label" :for="safeId" :class="labelClasses">
          {{label}}
        </label>
      </slot>
    </template>


    <template
      v-for="slot in ['valid-feedback', 'invalid-feedback', 'description']"
      #[slot]
    >
      <slot :name="slot">
      </slot>
    </template>
  </CFormGroup>
</template>

<script>
import { safeId, validationComputedProps } from './formMixins'
import { formCheckboxProps as props } from './formProps'
import CFormGroup from './CFormGroup'
export default {
  name: 'CFormCheckbox',
  inheritAttrs: false,
  components: { CFormGroup },
  mixins: [safeId, validationComputedProps],
  props,
  // {
    // validFeedback: String,
    // invalidFeedback: String,
    // tooltipFeedback: Boolean,
    // description: String,

    // label: String,
    // wasValidated: Boolean,
    // isValid: {
    //   type: [Boolean, Function],
    //   default: null
    // },
    // addInputClasses: [String, Array, Object],
    // addLabelClasses: [String, Array, Object],
    
    // checked: [Boolean, String, Number],
    // value: {
    //   type: [String, Number, Boolean],
    //   default: undefined
    // },
    // custom: Boolean,
    // inline: Boolean,
    
    // trueValue: {
    //   type: [String, Number],
    //   default: undefined
    // },
    // falseValue: {
    //   type: [String, Number],
    //   default: undefined
    // },
  // },
  type: 'checkbox',
  data () {
    return {
      state: undefined,
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
    customType () {
      return this.$options.type === 'checkbox' ? 'checkbox' : 'radio'
    },
    
    computedClasses () {
      const controlClass = this.custom ? 'c-custom-control' : 'c-form-check'
      return {
        [`${controlClass}`] : true,
        [`${controlClass}-inline`]: this.inline,
        [`c-custom-${this.customType}`]: this.custom,
        'c-was-validated': this.wasValidated
      }

    },

    labelClasses () {
      return [
        this.addLabelClasses,
        this.custom ? 'c-custom-control-label': 'c-form-check-label'
      ]
    },

    inputClasses () {
      return [
        this.custom ? 'c-custom-control-input' : 'c-form-check-input',
        this.validationClass, this.addInputClasses
      ]
    },

    // validationComputedProps mixin
    // computedIsValid () {
    //   if (typeof this.isValid === 'function') {
    //     return this.isValid(this.state)
    //   }
    //   return this.isValid
    // },
    // validationClass () {
    //   if (typeof this.computedIsValid === 'boolean') {
    //     return this.computedIsValid ? 'c-is-valid' : 'c-is-invalid'
    //   }
    // }
  },
  methods: {
    getCheckState () {
      if (typeof this.checked === 'boolean') {
        return this.checked
      } else {
        return this.checked === this.trueValue ? true : false
      }
    },

    onChange (e) {
      this.state = e.target.checked
      this.$emit('update:checked', this.getValue(e), e)
    },

    getValue (e) {
      if (e.target.checked) {
        return this.trueValue !== undefined ? this.trueValue : true
      } else {
        return this.falseValue !== undefined ? this.falseValue : false
      }
    }

  },
}
</script>

<style lang="scss">
  @import "~@coreui/coreui/scss/partials/forms.scss";
</style>
