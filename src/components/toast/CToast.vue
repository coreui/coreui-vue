<template>
  <transition :name="props.fade ? 'fade' : null" appear> 
    <div
      v-show="isShowed"
      :class="toastClasses"
      role="alert"
      aria-live="assertive"
      aria-atomic="true"
      :style="computedStyles"
    >
      <div 
        v-if="headerHtml !== undefined || $slots.header" 
        class="toast-header"
      >
        <slot name="header">
          <strong class="mr-auto" v-html="headerHtml"></strong>
        </slot>
        <CButtonClose
          v-if="props.closeButton"
          @click="close()"
          class="ml-2 mb-1"
        />
      </div>
      <div v-if="$slots.default" class="toast-body">
        <slot></slot>
      </div>
      <div v-else class="toast-body" v-html="bodyHtml"></div>
    </div>
  </transition>
</template>

<script>
import toastMixin from './toast-mixin'
import CButtonClose from '../button/CButtonClose'

export default {
  name: 'CToast',
  mixins: [ toastMixin ],
  props: {
    show: Boolean,
    headerHtml: String,
    bodyHtml: String
  },
  components: {
    CButtonClose
  },
  inject: {
    toaster: {
      default: false
    }
  },
  data () {
    return {
      isShowed: false,
      hidding: false,
      timeout: null,
      hiddingTimeout: null
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
    toastClasses () {
      return [
        'toast',
        {
          'd-none': !this.isShowed && !this.hidding,
          'full': this.props.position.includes('full'),
        }
      ]
    },
    directlyDeclaredProps () {
      return Object.keys(this.$options.propsData)
    },
    injectedProps () {
      return this.toaster && this.toaster.props ? this.toaster.props : {}
    },
    props () {
      return Object.keys(toastMixin.props).reduce((computedProps, key) => {
        const propIsDirectlyDeclared = this.directlyDeclaredProps.includes(key)
        const parentPropExists = this.injectedProps[key] !== undefined
        const propIsInherited = parentPropExists && !propIsDirectlyDeclared
        computedProps[key] = propIsInherited ? this.injectedProps[key] : this[key]
        return computedProps
      }, {})
    }
  },
  methods: {
    display () {
      this.isShowed = true
      this.$nextTick(() => {
        if (this.props.autohide) {
          this.setAutohide()
        }
        this.finishHidding()
      })
    },
    close (restoreOnHover = false) {
      if (this.isShowed === false) {
        return
      }
      
      this.isShowed = false
      this.$emit('update:show', false)
      this.$el.removeEventListener('mouseout', this.onHoverOut)
      this.$el.removeEventListener('mouseover', this.onHover)

      if (this.props.fade) {
        this.setHiddingMode(restoreOnHover)
      }
    },
    setHiddingMode (restoreOnHover) {
      this.hidding = true
      if (restoreOnHover) {
        this.$el.addEventListener('mouseover', this.restoreHiddingToast)
      }
      clearTimeout(this.timeout)
      this.hiddingTimeout = setTimeout(this.finishHidding, 1500)
    },
    finishHidding () {
      this.$el.removeEventListener('mouseover', this.restoreHiddingToast)
      this.hidding = false
      clearTimeout(this.hiddingTimeout)
    },
    onHover () {
      this.$el.removeEventListener('mouseover', this.onHover)
      clearTimeout(this.timeout)
      this.$el.addEventListener('mouseout', this.onHoverOut)
    },
    onHoverOut () {
      this.$el.removeEventListener('mouseout', this.onHoverOut)
      this.setAutohide()
    },
    setAutohide () {
      this.timeout = setTimeout(() => {
        this.close(true)
      }, this.props.autohide)
      this.$el.addEventListener('mouseover', this.onHover)
    },
    restoreHiddingToast () {
      this.display()
    }
  }
}
</script>

<style scoped>
  .toast {
    opacity: 1;
  }
  .toast.full {
    max-width: 100%;
  }
  .toast:last-child {
    margin-bottom: 0.75rem;
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
