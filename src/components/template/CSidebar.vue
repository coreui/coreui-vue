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
      type: [Boolean, String],
      default: 'responsive'
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
    },
    open: {
      immediate: true,
      handler (val) {
        val === true ? this.createBackdrop() : this.removeBackdrop()
      }
    }
  },
  // mounted () {
  //   if (this.open === true) {
  //     this.createBackdrop()
  //   }
  // },
  beforeDestroy () {
    this.removeBackdrop()
  },
  computed: {
    sidebarClasses () {
      const haveResponsiveClass = this.breakpoint && this.open === 'responsive'
      return [
        'c-sidebar',
        `c-sidebar-${this.colorScheme}`,
        {
          'c-sidebar-show': this.open === true,
          [`c-sidebar-${this.breakpoint}-show`]: haveResponsiveClass,
          'c-sidebar-fixed': this.fixed && !this.overlaid,
          'c-sidebar-right': this.aside,
          'c-sidebar-minimized': this.minimize && !this.unfoldable,
          'c-sidebar-unfoldable': this.minimize && this.unfoldable,
          'c-sidebar-overlaid': this.overlaid,
          [`c-sidebar-${this.size}`]: this.size
        }
      ]
    }
  },
  methods: {
    sidebarClick (e) {
      if (this.hideOnMobileClick && this.isOnMobile()) {
        e.target.closest('a.c-sidebar-nav-link') ? this.closeSidebar() : null
      }
    },
    closeSidebar () {
      this.open = this.overlaid ? false : 'responsive'
      this.$emit('update:show', this.open)
    },
    isOnMobile () {
      return Boolean(getComputedStyle(this.$el).getPropertyValue('--is-mobile'))
    },
    sidebarCloseListener (e) {
      if (
        document.getElementById(this._uid + 'backdrop') &&
        !this.$el.contains(e.target)
      ) {
        this.closeSidebar()
      }
    },
    createBackdrop () {
      const backdrop = document.createElement('div')
      if (this.overlaid) {
        document.addEventListener('click', this.sidebarCloseListener, true)
      } else {
        backdrop.addEventListener('click', this.closeSidebar)
      }
      backdrop.className = 'c-sidebar-backdrop c-show'
      backdrop.id = this._uid + 'backdrop'
      document.body.appendChild(backdrop)
    },
    removeBackdrop () {
      const backdrop = document.getElementById(this._uid + 'backdrop')
      if (backdrop) {
        document.removeEventListener('click', this.sidebarCloseListener)
        backdrop.removeEventListener('click', this.closeSidebar)
        document.body.removeChild(backdrop)
      }
    }
  }
}
</script>