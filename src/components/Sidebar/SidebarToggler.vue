<template>
  <button
    :display="display"
    :mobile="mobile"
    :class="classList"
    type="button"
    @click="sidebarToggle">
    <span class="navbar-toggler-icon" />
  </button>
</template>

<script>
import { sidebarCssClasses, validBreakpoints, checkBreakpoint } from '../../shared/classes'
import toggleClasses from '../../shared/toggle-classes'

export default {
  name: 'SidebarToggler',
  props: {
    defaultOpen: {
      type: Boolean,
      default: true
    },
    display: {
      type: String,
      default: 'lg'
    },
    mobile: {
      type: Boolean,
      default: false
    }
  },
  computed: {
    classList () {
      return [
        'navbar-toggler'
      ]
    }
  },
  mounted: function () {
    this.toggle(this.defaultOpen)
  },
  methods: {
    toggle (force) {
      const [display, mobile] = [this.display, this.mobile]
      let cssClass = sidebarCssClasses[0]
      if (!mobile && display && checkBreakpoint(display, validBreakpoints)) {
        cssClass = `sidebar-${display}-show`
      }
      toggleClasses(cssClass, sidebarCssClasses, force)
    },
    sidebarToggle (e) {
      e.preventDefault()
      e.stopPropagation()
      this.toggle()
    }
  }
}
</script>
