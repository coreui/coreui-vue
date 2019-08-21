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
      if (val !== this.open) {
        this.open = val
      }
    },
    open: {
      immediate: true,
      handler (val, oldVal) {
        this.emitCurrentState('show', val)
      }
    },
    showOnMobile (val, oldVal) {
      if (val !== this.mobileOpen) {
        this.showOnMobile = val
      }
    },
    mobileOpen: {
      immediate: true,
      handler (val, oldVal) {
        this.emitCurrentState('showOnMobile', val)
      }
    },
    minimize (val, oldVal) {
      if (val !== this.minimized) {
        this.minimized = val
      }
    },
    minimized: {
      immediate: true,
      handler (val, oldVal) {
        this.emitCurrentState('minimize', val)
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
        
        if (val !== undefined) {
          this.$root.$emit('c-sidebar-mobile-state', val)
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
      const mobileClasses = {
        'c-sidebar-show': this.mobileOpen,
      }
      const desktopClasses = {
        'c-sidebar-minimized': this.minimized,
        [`c-sidebar-${this.breakpoint}-show`]: this.open,
      }
      return [
        this.isOnMobile ? mobileClasses : desktopClasses,
        'c-sidebar',
        `c-sidebar-${this.light ? 'light' : 'dark'}`,
        {
          'c-sidebar-fixed': this.fixed,
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
      this[variable] = !this[variable]
    },
    emitCurrentState (variableName, value) {
      this.$emit(`update:${variableName}`, value)
      this.$root.$emit(`c-sidebar-${variableName}-state`, value)
    }
  }
}
</script>

<style lang="scss">
  @import "~@coreui/coreui/scss/partials/sidebar.scss";
</style>
