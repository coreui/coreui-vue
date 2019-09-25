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
        v-if="closeButton"
        @click="dismiss()"
      />
      <slot :dismiss="dismiss"></slot>
    </div>
  </transition>
</template>

<script>
import CButtonClose from '../Button/CButtonClose'
export default {
  name: 'CAlert',
  components: { CButtonClose },
  props: {
    variant: String,
    closeButton: Boolean,
    show: {
      type: [Boolean, Number],
      default: true
    },
    fade: Boolean,
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
        'alert',
        {
          'alert-dismissible': this.closeButton,
          [`alert-${this.variant}`]: this.variant
        }
      ]
    }
  },
  watch: {
    show (val) {
      this.state = val
    },
    state: {
      immediate: true,
      handler (val, oldVal) {
        this.clearCounter()
        if (!val && oldVal) {
          this.$emit('update:show', val)
        } else if (typeof val === 'number' && val) {
          this.countdownTimeout = setTimeout(() => {
            const isWatched = this.$listeners['update:show']
            isWatched ? this.$emit('update:show', this.state - 1) : this.state--
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
