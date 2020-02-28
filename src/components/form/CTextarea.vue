<template >
  <CFormGroup
    v-bind="{append, prepend, validFeedback, invalidFeedback,
      tooltipFeedback, description, wrapperClasses, class: computedClasses}"
  >
    <template #label>
      <slot name="label">
        <label v-if="label" :for="safeId" :class="labelClasses">
          {{label}}
        </label>
      </slot>
    </template>
    <template #input>
      <textarea
        v-bind="$attrs"
        v-on="listeners"
        :id="safeId"
        :class="inputClasses"
        :readonly="readonly || plaintext"
        :value="state"
        @input="onInput($event)"
        @change="onChange($event)"
      />
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
import CFormGroup from './CFormGroup'
import { textareaProps as props } from './form-props'
import * as allFormMixins from './form-mixins'
const mixins = Object.values(allFormMixins)

export default {
  name: 'CTextarea',
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
  inheritAttrs: false,
  components: { CFormGroup },
  mixins,
  props,
  // Html props: disabled, required, rows, cols, placeholder
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

  //   readonly: Boolean,
  //   plaintext: Boolean,
  //   value: [String, Number],
  //   lazy: {
  //     type: [Boolean, Number],
  //     default: 400
  //   }
  // },
  data () {
    return {
      state: this.value
    }
  },
  //watchValue mixin
  // watch: {
  //   value (val) {
  //     this.state = val
  //   }
  // },
  computed: {
    listeners () {
      const { input, change, ...listeners } = this.$listeners // eslint-disable-line no-unused-vars
      return listeners
    }
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
    // customSizeClass () {
    //   if (this.haveCustomSize && !this.haveWrapper) {
    //     return `form-control-${this.size}`
    //   }
    // },
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
    // }


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
