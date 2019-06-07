<template>
  <transition :name="fade ? 'fade' : null" :appear="true">
    <div
      v-if="state"
      :class="alertClasses"
      role="alert"
      aria-live="polite"
      aria-atomic="true"
    >
      <CButtonClose
        v-if="dismissible && dismissible !== 'customButton' "
        @click="dismiss()"
        :iconHtml="iconHtml"
        :disabled="this.dismissible === 'disabled'"
      />
      <slot :dismiss="dismiss">

      </slot>
    </div>
  </transition>
</template>

<script>
import CButtonClose from '../Button/CButtonClose'

export default {
  name: 'CAlert',
  components: { CButtonClose },
  props: {
    variant: {
      type: String,
      default: 'info'
    },
    dismissible: {
      type: [Boolean, String],
      validator: val => [false, true, 'disabled', 'customButton']
    },
    show: {
      type: [Boolean, Number],
      default: true
    },
    fade: Boolean,
    iconHtml: String
  },
  data () {
    return {
      countdownTimeout: null,
      state: this.show
    }
  },
  computed: {
    alertClasses () {
      return [
        'c-alert',
        {
          'c-alert-dismissible': this.dismissible,
          [`c-alert-${this.variant}`]: this.variant
        }
      ]
    }
  },
  watch: {
    show (val, oldVal) {
      if(val == oldVal) return
      this.clearCounter()
      this.state = val
    },
    state: {
      immediate: true,
      handler (val, oldVal) {
        if (val == oldVal) return

        if (!val && oldVal) {
          this.clearCounter()
          this.$emit('dismissed')
        } else if (typeof val === 'number' && val) {
          this.countdownTimeout = setTimeout(() => {
            this.$listeners['update:show'] ?
              this.$emit('update:show', this.state - 1) :
              this.state--
          }, 1000)
        }
      }
    }
  },
  destroyed () {
    this.clearCounter()
  },
  methods: {
    dismiss () {
      this.$emit('update:show', false)
      this.state = false
    },
    clearCounter () {
      if (this.countdownTimeout) {
        clearTimeout(this.countdownTimeout)
        this.countdownTimeout = null
      }
    }
  }
}
</script>
<style>

  .fade-enter-active, .fade-leave-active {
    transition: opacity .3s;
  }
  .fade-enter, .fade-leave-to {
    opacity: 0;
  }

</style>

<style lang="scss">
@import "~@coreui/coreui/scss/partials/alert.scss";
</style>
