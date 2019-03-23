<template>
  <CFormGroup v-bind="{validFeedback, invalidFeedback,
                       tooltipFeedback, description,
                       wrapperClasses, class: computedClasses}"
  >
    <template #label>
      <slot name="label">
        <label v-if="label" :for="safeId" :class="labelClasses">{{label}}</label>
      </slot>
    </template>


    <template #input>
      <input v-bind="$attrs"
             :id="safeId"
             :class="inputClasses"
             :multiple="multiple"
             type="file"
             @change="onChange($event)"
      />
      <label v-if="custom" :for="safeId" class="custom-file-label">
        {{typeof custom === 'string' ? custom : multiple ? 'Choose files...' : 'Choose file...'}}
      </label>
    </template>


    <template v-for="slot in ['labelAfterInput','validFeedback',
                              'invalidFeedback','description']"
              #[slot]
    >
      <slot :name="slot"></slot>
    </template>
  </CFormGroup>
</template>

<script>
import * as allFormMixins from './formMixins'
const mixins = Object.values(allFormMixins)
import { formFileProps as props } from './formProps'
import CFormGroup from './CFormGroup'
export default {
  name: 'CFormFile',
  inheritAttrs: false,
  components: { CFormGroup },
  mixins,
  props,
  // {
  //   // Html props: disabled, required, accept
  //   label: String,
  //   id: String,
  //   wasValidated: Boolean,
  //   size: {
  //     type: String,
  //     validator: str => ['','sm','lg'].includes(str)
  //   },
  //   horizontal: [Boolean, Object],
  //   validFeedback: String,
  //   invalidFeedback: String,
  //   tooltipFeedback: Boolean,
  //   description: String,
  //   isValid: {
  //     type: Boolean,
  //     default: null
  //   },
  //   multiple: Boolean,
  //   custom: [Boolean, String],
  //   addInputClasses: String,
  //   addLabelClasses: String,
  //   addWrapperClasses: String,
  // },
  data () {
    return {
      state: null,
    }
  },
  computed: {
    // classesComputedProps mixin
    haveCustomSize () {
      return ['','sm','lg'].includes(this.size) &&
             Boolean(this.size && !this.custom)
    },
    // haveCustomSize () {
    //   return ['','sm','lg'].includes(this.size) && Boolean(this.size)
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
    inputClass () {
      return this.custom ? 'custom-file-input' : 'form-control-file'
    },
    // inputClasses () {
    //   return [
    //     this.inputClass || 'form-control',
    //     this.stateClass,
    //     this.addInputClasses,
    //     this.customSizeClass
    //   ]
    // },


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
    haveInputGroup () {
      return false
    }
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
  methods: {
    onChange (e) {
      this.state = e.target.files
      this.$emit('change', e.target.files, e)
    }
  }
}
</script>
