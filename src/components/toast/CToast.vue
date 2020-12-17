<template>
  <transition :name="props.fade ? 'fade' : null" :appear="true"> 
    <div
      v-if="isShowed"
      :class="toastClasses"
      role="alert"
      aria-live="assertive"
      aria-atomic="true"
    >
      <div 
        v-if="header !== undefined || $slots.header" 
        class="toast-header"
      >
        <slot name="header">
          <strong class="mfe-auto">{{header}}</strong>
        </slot>
        <CButtonClose
          v-if="props.closeButton"
          @click="close()"
          class="mfs-2 mb-1"
        />
      </div>
      <div class="toast-body">
        <slot></slot>
      </div>
    </div>
  </transition>
</template>

<script>
import { props } from './toast-props'
import CButtonClose from '../button/CButtonClose'

export default {
  name: 'CToast',
  components: {
    CButtonClose
  },
  props: {
    ...props,
    show: Boolean,
    header: String
  },
  inject: {
    toaster: {
      default: false
    }
  },
  data () {
    return {
      isShowed: this.show,
      hideTimeout: null,
      closeTimeout: null
    }
  },
  watch: {
    show: {
      immediate: true,
      handler (val) {
        val ? this.display() : this.close()
      }
    }
  },
  computed: {
    directlyDeclaredProps () {
      return Object.keys(this.$options.propsData)
    },
    injectedProps () {
      return this.toaster && this.toaster.props ? this.toaster.props : {}
    },
    props () {
      return Object.keys(props).reduce((computedProps, key) => {
        const propIsDirectlyDeclared = this.directlyDeclaredProps.includes(key)
        const parentPropExists = this.injectedProps[key] !== undefined
        const propIsInherited = parentPropExists && !propIsDirectlyDeclared
        computedProps[key] = propIsInherited ? this.injectedProps[key] : this[key]
        return computedProps
      }, {})
    },
    toastClasses () {
      return [
        'toast',
        { [`toast-${this.color}`]: !!this.color }
      ]
    }
  },
  methods: {
    display () {
      this.isShowed = true
      this.$nextTick(() => {
        if (this.props.autohide) {
          this.setAutohide()
        }
      })
    },
    close () {
      this.isShowed = false
      this.$emit('update:show', false)
      this.$el.removeEventListener('mouseover', this.onHover)
      this.$el.removeEventListener('mouseover', this.restoreHiddingToast)
      this.$el.removeEventListener('mouseout', this.onHoverOut)
    },
    setHiddingMode () {
      this.isShowed = false
      this.$el.removeEventListener('mouseover', this.onHover)
      this.closeTimeout = setTimeout(() => this.close(), 1500)
      this.$el.addEventListener('mouseover', this.restoreHiddingToast)
    },
    restoreHiddingToast () {
      clearTimeout(this.closeTimeout)
      this.display()
    },
    onHover () {
      this.$el.removeEventListener('mouseover', this.onHover)
      clearTimeout(this.hideTimeout)
      this.$el.addEventListener('mouseout', this.onHoverOut)
    },
    onHoverOut () {
      this.$el.removeEventListener('mouseout', this.onHoverOut)
      this.setAutohide()
    },
    setAutohide () {
      this.hideTimeout = setTimeout(() => {
        this.setHiddingMode()
      }, this.props.autohide)
      this.$el.addEventListener('mouseover', this.onHover)
    }
  }
}
</script>

<style scoped>
  .toast {
    opacity: inherit;
  }
  .fade-enter-active {
    transition: opacity .5s;
  }
  .fade-leave-active {
    transition: opacity 2s;
  }
  .fade-enter, .fade-leave-to {
    opacity: 0;
  }
</style>
