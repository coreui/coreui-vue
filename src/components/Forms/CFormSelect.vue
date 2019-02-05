<template >
  <CFormGroup v-bind="{append, prepend, validFeedback,
                       invalidFeedback, tooltipFeedback, description,
                       wrapperClasses, class: computedClasses}"
  >
    <template slot="label">
      <slot name="label">
        <label v-if="label" :for="safeId" :class="labelClasses">{{label}}</label>
      </slot>
    </template>


    <select slot="input"
            v-bind="$attrs"
            :id="safeId"
            :class="inputClasses"
            :value="String(state)"
            @input="onSelect($event)"
    >
      <option v-if="placeholder" value="" selected disabled hidden>{{placeholder}}</option>
      <template v-for="(option, key) in options">
        <option v-if="typeof option === 'object'"
                :value="String(option.value)"
                :disabled="option.disabled"
                :data-key="key"
        >
          {{option.text || option.value}}
        </option>
        <option v-else
                :value="String(option)"
                :data-key="key"
        >
          {{option}}
        </option>
      </template>
    </select>


    <template v-for="slot in ['prepend', 'append', 'labelAfterInput', 'validFeedback', 'invalidFeedback', 'description']"
              :slot="slot"
    >
      <slot :name="slot">
      </slot>
    </template>
  </CFormGroup>
</template>

<script>
import * as allFormMixins from './formMixins'
const mixins = Object.values(allFormMixins)
import { formSelectProps as props } from './formProps'
import CFormGroup from './CFormGroup'
export default {
  name: 'CFormInput',
  inheritAttrs: false,
  components: { CFormGroup },
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
  //   append: String,
  //   prepend: String,
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
      state: this.value
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
      return this.haveCustomSize ?
             `${this.custom ? 'custom-select' : 'form-control'}-${this.size}` :
             null
    },
    // customSizeClass () {
    //   return this.haveCustomSize ? `form-control-${this.size}` : null
    // },
    inputClass () {
      return this.custom ? 'custom-select' :
             `form-control${this.plaintext ? '-plaintext' : ''}`
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
    //   return Boolean(this.tooltipFeedback || this.append ||
    //      this.prepend || this.$slots.append || this.$slots.prepend)
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
      const dataKey = e.target.selectedOptions[0].dataset.key
      const value = this.options[dataKey] && this.options[dataKey].value !== undefined ?
                      this.options[dataKey].value : this.options[dataKey]
      this.state = value
      this.$emit('input', value, e)
    },
  }
}
</script>
