<template>
  <CFormGroup
    v-bind="{validFeedback, invalidFeedback, tooltipFeedback, description,
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
        v-on="listeners"
        :id="safeId"
        :class="inputClasses"
        :multiple="multiple"
        type="file"
        @change="onChange($event)"
      />
      <label
        v-if="custom"
        :for="safeId"
        class="custom-file-label"
      >
        {{computedPlaceholder}}
      </label>
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
import { inputFileProps as props } from './form-props'
import CFormGroup from './CFormGroup'
const mixins = Object.values(allFormMixins).filter((i, key) => {
  return key !== 'watchValue'
})

export default {
  name: 'CInputFile',
  inheritAttrs: false,
  components: { CFormGroup },
  mixins,
  slots: [
    'label-after-input','valid-feedback','invalid-feedback','description'
  ],
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

    // horizontal: [Boolean, Object],
    // size: {
    //   type: String,
    //   validator: str => ['','sm','lg'].includes(str)
    // },
    // addWrapperClasses: [String, Array, Object],

    // custom: Boolean,
    // placeholder: String,
    // multiple: Boolean
  // },
  data () {
    return {
      state: null,
    }
  },
  computed: {
    computedPlaceholder () {
      return this.placeholder || `Choose file${this.multiple ?'s':''}...`
    },
    // classesComputedProps mixin
    // haveCustomSize () {
    //   return ['sm','lg'].includes(this.size)
    // },
    computedClasses () {
      return [
        this.isHorizontal ? 'form-row':
        this.custom ? 'custom-file' : 'form-group position-relative',
        {
          'was-validated': this.wasValidated
        }
      ]
    },
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
    inputClass () {
      return this.custom ? 'custom-file-input' : 'form-control-file'
    },
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
    haveInputGroup () {
      return false
    },
    listeners () {
      const { change, ...listeners } = this.$listeners // eslint-disable-line no-unused-vars
      return listeners
    }
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
    onChange (e) {
      this.state = e.target.files
      this.$emit('change', e.target.files, e)
    }
  }
}
</script>
