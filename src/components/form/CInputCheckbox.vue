<template>
  <CFormGroup v-bind="{validFeedback, invalidFeedback, tooltipFeedback,
                       description, class: computedClasses}">
    <template #input>
      <input
        v-on="$listeners"
        v-bind="$attrs"
        :id="safeId"
        :type="$options.type"
        :class="inputClasses"
        :checked="state"
        @change="onChange($event)"
      />
    </template>


    <template #label-after-input>
      <slot name="label">
        <label v-if="label || custom" :for="safeId" :class="labelClasses">
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
import { sharedComputedProps } from './form-mixins'
import { inputCheckboxProps as props } from './form-props'
import CFormGroup from './CFormGroup'

export default {
  name: 'CInputCheckbox',
  inheritAttrs: false,
  components: { CFormGroup },
  mixins: [sharedComputedProps],
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
    
    // checked: Boolean,
    // custom: Boolean,
    // inline: Boolean
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
      handler (val) {
        this.state = val
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
    //   if (typeof this.isValid === 'function') {
    //     return this.isValid(this.state)
    //   }
    //   return this.isValid
    // },
    // validationClass () {
    //   if (typeof this.computedIsValid === 'boolean') {
    //     return this.computedIsValid ? 'is-valid' : 'is-invalid'
    //   }
    // }
  },
  methods: {
    onChange (e) {
      this.state = e.target.checked
      this.$emit('update:checked', e.target.checked, e)
    }
  },
}
</script>
