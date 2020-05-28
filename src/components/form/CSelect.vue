<template>
  <CFormGroup
    v-bind="{
      append, prepend, validFeedback, invalidFeedback,
      tooltipFeedback, description, wrapperClasses, class: computedClasses
    }"
  >
    <template #label>
      <slot name="label">
        <label v-if="label" :for="safeId" :class="labelClasses">
          {{label}}
        </label>
      </slot>
    </template>

    <template #input>
      <select
        v-bind="$attrs"
        v-on="$listeners"
        :id="safeId"
        :class="inputClasses"
        @change="onSelect($event)"
      >
        <option 
          v-if="placeholder" 
          value="" 
          selected 
          hidden
        >
          {{placeholder}}
        </option>
        <template v-for="(option, key) in options">
          <option
            v-if="typeof option === 'object'"
            :value="option.value"
            v-bind="option.attrs"
            :disabled="option.disabled"
            :selected="option.value === value"
            :data-key="key"
            :key="key"
          >
            {{option.label || option.value}}
          </option>
          <option
            v-else
            :value="option"
            :selected="option === value"
            :data-key="key"
            :key="key"
          >
            {{option}}
          </option>
        </template>
      </select>
    </template>

    <template 
      v-for="slot in $options.slots" 
      #[slot]
    >
      <slot :name="slot"></slot>
    </template>
  </CFormGroup>
</template>

<script>
import * as allFormMixins from './form-mixins'
const mixins = Object.values(allFormMixins)
import { selectProps as props } from './form-props'
import CFormGroup from './CFormGroup'

export default {
  name: 'CSelect',
  inheritAttrs: false,
  components: { CFormGroup },
  slots: [
    'prepend',
    'prepend-content',
    'append-content',
    'append',
    'label-after-input',
    'valid-feedback',
    'invalid-feedback',
    'description'
  ],
  mixins,
  props,
  // Html props: disabled, required don't use multiple
  // {
  //   validFeedback: String,
  //   invalidFeedback: String,
  //   tooltipFeedback: Boolean,
  //   description: String,

  //   append: String,
  //   prepend: String,

  //   label: String,
  //   wasValidated: Boolean,
  //   isValid: {
  //     type: [Boolean, Function],
  //     default: null
  //   },
  //   addInputClasses: [String, Array, Object],
  //   addLabelClasses: [String, Array, Object],

  //   horizontal: [Boolean, Object],
  //   size: {
  //     type: String,
  //     validator: str => ['','sm','lg'].includes(str)
  //   },
  //   addWrapperClasses: [String, Array, Object],

  //   options: Array,
  //   value: [String, Number, Boolean, Array],
  //   plaintext: Boolean,
  //   placeholder: String,
  //   custom: Boolean
  // },
  data () {
    return {
      state: this.value || undefined
    }
  },
  //watchValue mixin
  // watch: {
  //   value (val) {
  //     this.state = val
  //   }
  // },
  computed: {
    // classesComputedProps mixin
    // haveCustomSize () {
    //   return ['sm','lg'].includes(this.size)
    // },
    // computedClasses () {
    //   return [
    //     'form-group',
    //     {
    //      'was-validated': this.wasValidated,
    //      'form-row': this.isHorizontal
    //     }
    //   ]
    // },
    // labelClasses () {
    //   return [
    //     this.addLabelClasses,
    //     {
    //       'col-form-label': this.isHorizontal,
    //       [this.horizontal.label || 'col-sm-3']: this.isHorizontal,
    //       [`col-form-label-${this.size}`]: this.haveCustomSize,
    //     }
    //   ]
    // },
    customSizeClass () {
      if (this.haveCustomSize && !this.haveWrapper) {
        return `${this.custom ?'custom-select':'form-control'}-${this.size}`
      }
    },
    inputClass () {
      const standardClass = `form-control${this.plaintext ? '-plaintext' : ''}`
      return this.custom ? 'custom-select' : standardClass
    }
    // inputClasses () {
    //   return [
    //     this.inputClass || `form-control${this.plaintext ? '-plaintext' : ''}`,
    //     this.validationClass,
    //     this.addInputClasses,
    //     this.customSizeClass
    //   ]
    // }


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
    // },


    //wrapperComputedProps mixin
    // isHorizontal () {
    //   return Boolean(this.horizontal)
    // },
    // haveInputGroup () {
    //   return Boolean(
    //     this.tooltipFeedback || 
    //     this.append ||
    //     this.prepend || 
    //     this.$slots.append || 
    //     this.$slots.prepend || 
    //     this.$slots['append-content'] ||
    //     this.$slots['prepend-content']
    //   )
    // },
    // haveWrapper () {
    //   return this.haveInputGroup || Boolean(this.addWrapperClasses || this.isHorizontal)
    // },
    // wrapperClasses () {
    //   if (this.haveWrapper) {
    //     return [
    //       this.addWrapperClasses,
    //       {
    //         [this.horizontal.input || 'col-sm-9'] : this.isHorizontal,
    //         'input-group' : this.haveInputGroup,
    //         [`input-group-${this.size}`]: this.haveCustomSize
    //       }
    //     ]
    //   }
    // }
  },

  methods: {
    onSelect (e) {
      if (this.$attrs.multiple !== undefined) return
      const optionIndex = e.target.selectedOptions[0].dataset.key
      const option = this.options[optionIndex]
      const value = option.value !== undefined ? option.value : option
      this.state = value
      this.$emit('update:value', value, e)
    }
  }
}
</script>
