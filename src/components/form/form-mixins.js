import { makeUid } from '@coreui/utils/src'

export const sharedComputedProps = {
  computed: {
    computedIsValid () {
      if (typeof this.isValid === 'function') {
        return this.isValid(this.state)
      }
      return this.isValid
    },
    validationClass () {
      if (typeof this.computedIsValid === 'boolean') {
        return this.computedIsValid ? 'is-valid' : 'is-invalid'
      }
    },
    safeId () {
      if (this.id || this.$attrs.id) {
        return this.id || this.$attrs.id
      }
      return makeUid()
    }
  }
}

export const wrapperComputedProps = {
  computed: {
    isHorizontal () {
      return Boolean(this.horizontal)
    },
    haveInputGroup () {
      return Boolean(
        this.tooltipFeedback || 
        this.append ||
        this.prepend || 
        this.$slots.append || 
        this.$slots.prepend || 
        this.$slots['append-content'] ||
        this.$slots['prepend-content']
      )
    },
    haveWrapper () {
      return this.haveInputGroup || Boolean(this.addWrapperClasses || this.isHorizontal)
    },
    wrapperClasses () {
      if (this.haveWrapper) {
        return [
          this.addWrapperClasses,
          {
            [this.horizontal.input || 'col-sm-9'] : this.isHorizontal,
            'input-group' : this.haveInputGroup,
            [`input-group-${this.size}`]: this.haveCustomSize
          }
        ]
      }
    }
  }
}

export const watchValue = {
  watch: {
    value (val) {
      this.state = val
    }
  }
}

export const classesComputedProps = {
  computed: {
    haveCustomSize () {
      return ['sm','lg'].includes(this.size)
    },
    computedClasses () {
      return [
        'form-group',
        {
         'was-validated': this.wasValidated,
         'form-row': this.isHorizontal
        }
      ]
    },
    labelClasses () {
      return [
        this.addLabelClasses,
        {
          'col-form-label': this.isHorizontal,
          [this.horizontal.label || 'col-sm-3']: this.isHorizontal,
          [`col-form-label-${this.size}`]: this.haveCustomSize,
        }
      ]
    },
    customSizeClass () {
      if (this.haveCustomSize && !this.haveWrapper) {
        return `form-control-${this.size}`
      }
    },
    inputClasses () {
      return [
        this.inputClass || `form-control${this.plaintext ? '-plaintext' : ''}`,
        this.validationClass,
        this.addInputClasses,
        this.customSizeClass
      ]
    }
  }
}
