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
import safeId from '../../mixins/safeId'
import { validationComputedProps } from './formMixins'
import { formCheckboxProps as props } from './formProps'
import CFormGroup from './CFormGroup'
export default {
  name: 'CFormCheckbox',
  inheritAttrs: false,
  components: { CFormGroup },
  mixins: [safeId, validationComputedProps],
  props,
  // {
  //   label: String,
  //   id: String,
  //   wasValidated: Boolean,
  //   checked: [Boolean, String, Number],
  //   value: {
  //     type: [String, Number, Boolean],
  //     default: null
  //   },
  //   trueValue: {
  //     type: [String, Number, Boolean],
  //     default: undefined
  //   },
  //   falseValue: {
  //     type: [String, Number, Boolean],
  //     default: undefined
  //   },
  //   validFeedback: String,
  //   invalidFeedback: String,
  //   tooltipFeedback: Boolean,
  //   description: String,
  //   isValid: {
  //     type: Boolean,
  //     default: null
  //   },
  //   addInputClasses: String,
  //   addLabelClasses: String,
  //   custom: [Boolean, String],
  //   inline: Boolean
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
      handler (val, oldVal) {
        if (val !== oldVal) {
          this.state = this.getCheckState()
        }
      }
    }
  },
  computed: {
    customType () {
      return this.$options.type === 'checkbox' ? 'checkbox' : 'radio'
    },
    computedClasses () {
      const controlClass = this.custom ? 'custom-control' : 'form-check'
      return {
        [`${controlClass}`] : true,
        [`${controlClass}-inline`]: this.inline,
        [`custom-${this.customType}`]: this.custom,
        'was-validated': this.wasValidated
      }

    },

    labelClasses () {
      return [
        this.addLabelClasses,
        this.custom ? 'custom-control-label': 'form-check-label'
      ]
    },

    inputClasses () {
      return [
        this.custom ? 'custom-control-input' : 'form-check-input',
        this.validationClass, this.addInputClasses
      ]
    },

    // validationComputedProps mixin
    // computedIsValid () {
    //   if (typeof this.isValid === 'function')
    //     return this.isValid(this.state)
    //   return this.isValid
    // },
    // validationClass () {
    //   if (this.computedIsValid === null)
    //     return
    //   return this.computedIsValid ? 'is-valid' : 'is-invalid'
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

<style scoped lang="scss">
  @import "~@coreui/coreui/scss/partials/forms.scss";
</style>
