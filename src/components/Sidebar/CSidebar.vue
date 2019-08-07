<template>
  <div :class="sidebarClasses">
    <slot>Sidebar</slot>
  </div>
</template>

<script>
import elementResizeDetectorMaker from 'element-resize-detector'
import { getStyle } from '@coreui/coreui/dist/js/coreui-utilities'
export default {
  name: 'CSidebar',
  props: {
    fixed: Boolean,
    breakpoint: {
      type: String,
      default: 'lg',
      validator: val => ['sm', 'md', 'lg', 'xl'].includes(val)
    },
    minimize: Boolean,
    show: {
      type: Boolean,
      default: true
    },
    showOnMobile: Boolean,
    noHideOnMobileClick: Boolean,
    aside: Boolean,
    light: Boolean,
    dropdownsBehavior: {
      type: String,
      validator: (mode) => {
        return ['', 'closeOnRouteChange', 'closeOnInactiveRoute'].includes(mode)
      }
    }
  },
  provide () {
    const state = {}
    Object.defineProperty(state, 'minimized', {
      get: () => this.minimized
    })
    Object.defineProperty(state, 'open', {
      get: () => this.open
    })
    Object.defineProperty(state, 'mobileOpen', {
      get: () => this.mobileOpen
    })
    const dropdownsBehavior = this.dropdownsBehavior
    return { state, dropdownsBehavior }
  },
  data () {
    return {
      open: this.show,
      mobileOpen: this.showOnMobile,
      minimized: this.minimize,
      erd: elementResizeDetectorMaker(),
      bodyWidth: undefined,
    }
  },
  mounted () {
    this.erd.listenTo(document.body, (el) => this.bodyWidth = el.clientWidth)

    this.$root.$on(this.listenedEvents, () => {
      if (this.isOnMobile) {
        this.switchState('mobileOpen')
      } else {
        this.switchState('open')
      }
    })
  },
  watch: {
    show (val, oldVal) {
      if (val !== oldVal && val !== this.open) {
        this.switchState('open')
      }
    },
    showOnMobile (val, oldVal) {
      if (val !== oldVal && val !== this.mobileOpen) {
        this.switchState('mobileOpen')
      }
    },
    minimize (val, oldVal) {
      if (val !== oldVal && val !== this.minimized) {
        this.switchState('minimized')
      }
    },
    isOnMobile: {
      immediate: true,
      handler (val, oldVal) {
        if (val === true && val !== oldVal) {
          document.body.addEventListener('click', this.mobileClick)
        } else if (oldVal === true) {
          document.body.removeEventListener('click', this.mobileClick)
        }
      }
    }
  },
  computed: {
    listenedEvents () {
      const componentEvent = this.aside ? 'c-aside-toggle' : 'c-sidebar-toggle'
      if (this.$attrs.id) {
        return [componentEvent, this.$attrs.id]
      }
      return componentEvent
    },
    isVisible () {
      if (this.bodyWidth) {
        return this.isOnMobile ? this.mobileOpen : this.open
      }
      return false
    },
    sidebarClasses () {
      return [
        this.displayClass,
        'c-sidebar',
        `c-sidebar-${this.light ? 'light' : 'dark'}`,
        {
          'c-sidebar-show': this.isOnMobile && this.mobileOpen,
          [`c-sidebar-${this.breakpoint}-show`]: this.open && this.breakpoint,
          'c-sidebar-fixed': this.fixed,
          'c-sidebar-minimized': this.minimized && !this.isOnMobile,
          'c-sidebar-right': this.aside
        }
      ]
    },
    breakpoints () {
      return {
        'sm': getStyle('--breakpoint-sm') || '576px',
        'md': getStyle('--breakpoint-md') || '768px',
        'lg': getStyle('--breakpoint-lg') || '992px',
        'xl': getStyle('--breakpoint-xl') || '1200px'
      }
    },
    isOnMobile () {
      const mobileWidth = parseFloat(this.breakpoints[this.breakpoint]) || 0
      return this.bodyWidth && (this.bodyWidth < mobileWidth)
    }
  },
  methods: {
    mobileClick (event) {
      if (!this.mobileOpen || this.noHideOnMobileClick) {
        return
      }
      const classList = Array.from(event.target.classList).join()
      const clickedOutsideSidebar = !this.$el.contains(event.target)
      if (
        (clickedOutsideSidebar && !classList.includes('c-header-toggler')) || 
        (!clickedOutsideSidebar && event.target.tagName === 'A')
      ) {
        this.switchState('mobileOpen')
      }
    },
    switchState (variable) {
      const propNames = {
        open: 'show', minimized: 'minimize', mobileOpen: 'showOnMobile'
      }
      this.$emit(`update:${propNames[variable]}`, !this[variable])
      this[variable] = !this[variable]
    }
  }
}
</script>

<style lang="scss">
  @import "~@coreui/coreui/scss/partials/sidebar.scss";
</style>
