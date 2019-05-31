<template>
  <CFormGroup
    v-bind="{
      appendHtml, prependHtml, validFeedback, invalidFeedback,
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
        :id="safeId"
        :class="inputClasses"
        :value="state"
        @input="onSelect($event)"
      >
        <option v-if="placeholder" value="" selected disabled hidden>
          {{placeholder}}
        </option>
        <template v-for="(option, key) in options">
          <option
            v-if="typeof option === 'object'"
            :value="option.value"
            :disabled="option.disabled"
            :data-key="key"
            :key="key"
          >
            {{option.label || option.value}}
          </option>
          <option
            v-else
            :value="String(option)"
            :data-key="key"
            :key="key"
          >
            {{option}}
          </option>
        </template>
      </select>
    </template>

    <template v-for="slot in $options.slots" #[slot]>
      <slot :name="slot"></slot>
    </template>
  </CFormGroup>
</template>

<script>
import * as allFormMixins from './formMixins'
const mixins = Object.values(allFormMixins)
import { formSelectProps as props } from './formProps'
import CFormGroup from './CFormGroup'
export default {
  name: 'CFormSelect',
  inheritAttrs: false,
  components: { CFormGroup },
  slots: [
    'prepend',
    'append',
    'label-after-input',
    'valid-feedback',
    'invalid-feedback',
    'description'
  ],
  mixins,
  props,
  // {
  //   // Html props: disabled, required don't use multiple
  //   value: [String, Number, Boolean],
  //   options: Array,
  //   label: String,
  //   id: String,
  //   placeholder: String,
  //   plaintext: Boolean,
  //   wasValidated: Boolean,
  //   size: {
  //     type: String,
  //     validator: str => ['','sm','lg'].includes(str)
  //   },
  //   horizontal: [Boolean, Object],
  //   appendHtml: String,
  //   prependHtml: String,
  //   validFeedback: String,
  //   invalidFeedback: String,
  //   tooltipFeedback: Boolean,
  //   description: String,
  //   custom: Boolean,
  //   isValid: {
  //     type: Boolean,
  //     default: null
  //   },
  //   addInputClasses: String,
  //   addLabelClasses: String,
  //   addWrapperClasses: String
  // },
  data () {
    return {
      state: this.value || undefined
    }
  },
  computed: {
    // // classesComputedProps mixin
    // haveCustomSize () {
    //   return ['','sm','lg'].includes(this.size) && Boolean(this.size)
    // },
    // computedClasses () {
    //   return [
    //            this.isHorizontal ? 'form-row': 'form-group',
    //            {
    //            'was-validated': this.wasValidated
    //            }
    //          ]
    // },
    // labelClasses () {
    //   return [ this.addLabelClasses, {
    //            'col-form-label': this.isHorizontal,
    //            [this.horizontal.label || 'col-2']: this.isHorizontal,
    //            [`col-form-label-${this.size}`]: this.haveCustomSize,
    //          }]
    // },
    customSizeClass () {
      if (this.haveCustomSize && !this.haveWrapper) {
        return `${this.custom ?'c-custom-select':'c-form-control'}-${this.size}`
      }
    },
    // customSizeClass () {
    //   return this.haveCustomSize ? `form-control-${this.size}` : null
    // },
    inputClass () {
      const standardClass = `c-form-control${this.plaintext ? '-plaintext' : ''}`
      return this.custom ? 'c-custom-select' : standardClass
    }
    // inputClasses () {
    //   return [
    //     this.inputClass || 'form-control',
    //     this.stateClass,
    //     this.addInputClasses,
    //     this.customSizeClass
    //   ]
    // }


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


    //wrapperComputedProps mixin
    // isHorizontal () {
    //   return Boolean(this.horizontal)
    // },
    // haveInputGroup () {
    //   return Boolean(this.tooltipFeedback || this.appendHtml ||
    //      this.prependHtml || this.$slots.append || this.$slots.prepend)
    // },
    // haveWrapper () {
    //   return this.haveInputGroup || Boolean(this.addWrapperClasses || this.isHorizontal)
    // },
    // wrapperClasses () {
    //   if(this.haveWrapper)
    //     return [ this.addWrapperClasses, {
    //              [this.horizontal.input || 'col-10'] : this.isHorizontal,
    //              'input-group' : this.haveInputGroup
    //            }]
    // }
  },

  //watchValue mixin
  // watch: {
  //   value (val, oldVal) {
  //     if (val !== oldVal)
  //       this.state = val
  //   },
  // },
  methods: {
    onSelect (e) {
      // console.log(e)
      const optionIndex = e.target.selectedOptions[0].dataset.key
      const option = this.options[optionIndex]
      // const optionIsObject = Boolean(option.value)
      const value = option.value || option
      this.state = value
      this.$emit('update:value', value, e)
    },
  }
}
</script>

<style lang="scss">
  @import "~@coreui/coreui/scss/partials/forms.scss";
</style>
