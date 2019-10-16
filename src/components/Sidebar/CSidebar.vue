<template>
  <div :class="sidebarClasses" @click="sidebarClick">
    <slot></slot>
  </div>
</template>

<script>
export default {
  name: 'CSidebar',
  props: {
    fixed: {
      type: Boolean,
      default: true
    },
    unfoldable: Boolean,
    overlaid: Boolean,
    breakpoint: {
      type: [String, Boolean],
      default: 'lg',
      validator: val => [false, '', 'sm', 'md', 'lg', 'xl'].includes(val)
    },
    minimize: Boolean,
    show: {
      type: Boolean,
      default: null
    },
    size: {
      type: String,
      validator: (val) => ['', 'sm', 'lg', 'xl'].includes(val)
    },
    hideOnMobileClick: {
      type: Boolean,
      default: true
    },
    aside: Boolean,
    colorScheme: {
      type: String,
      default: 'dark'
    },
    dropdownMode: {
      type: String,
      default: 'openActive',
      validator: (mode) => {
        return [
          '', 'openActive', 'close', 'closeInactive', 'noAction'
        ].includes(mode)
      }
    }
  },
  provide () {
    const state = {}
    Object.defineProperty(state, 'minimize', {
      get: () => this.minimize && !this.unfoldable
    })
    return { 
      state,
      dropdownMode: this.dropdownMode 
    }
  },
  data () {
    return {
      open: this.show,
    }
  },
  watch: {
    show (val) {
      this.open = val
    }
  },
  computed: {
    displayClasses () {
      const breakpointPrefix = this.breakpoint === false ? '' : `-${this.breakpoint}`
      const responsiveClass = `c-sidebar${breakpointPrefix}-show`
      if (this.open === false) {
        return null
      } else if (this.open === true) {
        return ['c-sidebar-show', breakpointPrefix ? responsiveClass : '' ]
      } else if (this.open === null) {
        return responsiveClass
      }
    },

    sidebarClasses () {
      return [
        'c-sidebar',
        `c-sidebar-${this.colorScheme}`,
        this.displayClasses,
        {
          'c-sidebar-fixed': this.fixed,
          'c-sidebar-right': this.aside,
          'c-sidebar-minimized': this.minimize && !this.unfoldable,
          'c-sidebar-unfoldable': this.minimize && this.unfoldable,
          'c-sidebar-overlaid': this.overlaid,
          [`c-sidebar-${this.size}`]: this.size,
        }
      ]
    }
  },
  methods: {
    sidebarClick (event) {
      const hiddingElementClicked = event.target.tagName === 'A'
      if (
        hiddingElementClicked &&
        this.hideOnMobileClick &&
        this.isOnMobile()
      ) {
        this.open = false
        this.$emit('update:show', false)
      }
    },
    isOnMobile () {
      return Boolean(getComputedStyle(this.$el).getPropertyValue('--on-mobile'))
    }
  }
}
</script>

<style scoped>
@media (max-width: 992px) {
  .c-sidebar-lg-show {
    --on-mobile: true;
  }
}
</style>