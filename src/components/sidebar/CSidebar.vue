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
    }
  },
  computed: {
    sidebarClasses () {
      return [
        'c-sidebar',
        `c-sidebar-${this.colorScheme}`,
        {
          'c-sidebar-show': this.open === true,
          [`c-sidebar-${this.breakpoint}-show`]: this.open === 'responsive',
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
        this.open = 'responsive'
        this.$emit('update:show', 'responsive')
      }
    },
    isOnMobile () {
      return Boolean(getComputedStyle(this.$el).getPropertyValue('--is-mobile'))
    }
  }
}
</script>