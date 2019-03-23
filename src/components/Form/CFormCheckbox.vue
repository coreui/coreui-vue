<template>
  <CFormGroup v-bind="{validFeedback, invalidFeedback, tooltipFeedback,
                       description, class: computedClasses}">
    <template #input>
      <input
        v-bind="$attrs"
        :id="safeId"
        :type="type"
        :class="inputClasses"
        :value="value"
        :checked="state"
        @change="onChange($event)"
      />
    </template>


    <template #labelAfterInput>
      <slot name="label">
        <label v-if="label" :for="safeId" :class="labelClasses">
          {{label}}
        </label>
      </slot>
    </template>


    <template
      v-for="slot in ['validFeedback', 'invalidFeedback', 'description']"
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
  model: {
    prop: 'checked',
    event: 'change'
  },
  props,
  // {
  //   label: String,
  //   id: String,
  //   wasValidated: Boolean,
  //   type: {
  //     type: String,
  //     default: 'checkbox'
  //   },
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
  data () {
    return {
      state: null
    }
  },
  created () {
    this.state = this.getCheckState()
  },
  watch: {
    checked (val, oldVal) {
      if(val !== oldVal)
        this.state = this.getCheckState()
    }
  },
  computed: {
    customType () {
      return typeof this.custom === 'string' ? this.custom : this.type
    },
    computedClasses () {
      return [
               this.custom ? `custom-control custom-${this.customType}`: 'form-check',
               this.inline ? `${this.custom ? 'custom-control' : 'form-check'}-inline` : '',
               {
               'was-validated': this.wasValidated
               }
             ]
    },
    labelClasses () {
      return [this.addLabelClasses, this.custom ? 'custom-control-label': 'form-check-label']
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
      if (this.type === 'radio')
        return this.checked === this.value
      else
        return typeof this.checked === 'boolean' ? this.checked :
                          this.checked === this.trueValue ? true : false
    },
    onChange (e) {
      this.state = e.target.checked
      this.$emit('change', this.getValue(e), e)
    },
    getValue (e) {
      if(this.type === 'radio')
        return this.value
      else if(e.target.checked)
        return this.trueValue !== undefined ? this.trueValue : true
      else
        return this.falseValue !== undefined ? this.falseValue : false
    },
  },
}
</script>
