<template>
  <CFormGroup v-bind="{appendHtml, prependHtml, validFeedback,
                       invalidFeedback, tooltipFeedback, description,
                       wrapperClasses, class: computedClasses}"
  >
    <template #label>
      <slot name="label">
        <label v-if="label" :for="safeId" :class="labelClasses">
          {{label}}
        </label>
      </slot>
    </template>
    <template #input>
      <input
        v-bind="$attrs"
        :id="safeId"
        :type="type"
        :class="inputClasses"
        :readonly="readonly || plaintext"
        :value="state"
        @input="onInput($event)"
        @change="onChange($event)"
      />
    </template>


    <template v-for="slot in ['prepend', 'append', 'label-after-input',
                              'valid-feedback', 'invalid-feedback','description']"
              #[slot]
    >
      <slot :name="slot">
      </slot>
    </template>
  </CFormGroup>
</template>

<script>
import CFormGroup from './CFormGroup'
import { formInputProps as props } from './formProps'

import * as allFormMixins from './formMixins'
const mixins = Object.values(allFormMixins)

export default {
  name: 'CFormInput',
  inheritAttrs: false,
  components: { CFormGroup },
  mixins,
  props,
  // {
  //   // HTML props: disabled, required
  //   label: String,
  //   type: {
  //     type: String,
  //     default: 'text'
  //   },
  //   id: String,
  //   readonly: Boolean,
  //   plaintext: Boolean,
  //   wasValidated: Boolean,
  //   size: {
  //     type: String,
  //     validator: str => ['','sm','lg'].includes(str)
  //   },
  //   value: [String, Number, Array],
  //   horizontal: [Boolean, Object],
  //   appendHtml: String,
  //   prependHtml: String,
  //   validFeedback: String,
  //   invalidFeedback: String,
  //   tooltipFeedback: Boolean,
  //   description: String,
  //   isValid: {
  //     type: [Boolean, Function],
  //     default: null
  //   },
  //   lazy: {
  //     type: [Boolean, Number],
  //     default: 400
  //   },
  //   addInputClasses: String,
  //   addLabelClasses: String,
  //   addWrapperClasses: String
  // },
  data () {
    return {
      state: this.value,
      syncTimeout: null
    }
  },
  // created() {
  //   console.log(this.computedIsValid)
  // },
  // watch:{
  //   computedIsValid (val) {
  //     console.log(val)
  //   }
  // },
  computed: {
    // classesComputedProps mixin
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
    // customSizeClass () {
    //   return this.haveCustomSize ? `form-control-${this.size}` : null
    // },
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
    onInput (e) {
      this.state = e.target.value
      this.$emit('input', this.state, e)
      if (this.lazy === true)
        return

      clearTimeout(this.syncTimeout)
      this.syncTimeout = setTimeout(() => {
        this.$emit('update:value', this.state, e)
      }, this.lazy !== false ? this.lazy : 0)
    },
    onChange (e) {
      this.state = e.target.value
      this.$emit('change', this.state, e)
      this.$emit('update:value', this.state, e)
    },
  }
}
</script>
