<template>
  <div :class="sidebarClasses" v-on-clickaway="hideMobile">
    <slot>Sidebar</slot>
  </div>
</template>
<script>
import { mixin as clickaway } from 'vue-clickaway2'
import { hideMobile } from './hideMobile'

export default {
  name: 'CSidebar',
  mixins: [clickaway, hideMobile],
  props: {
    fixed: Boolean,
    minimize: Boolean,
    display: {
      type: [Boolean, String],
      default: 'lg',
      validator: val => [true, false, 'sm', 'md', 'lg', 'xl'].includes(val)
    },
    mobile: Boolean,
    aside: Boolean,
    light: Boolean
  },
  provide () {
    const state = {}
    Object.defineProperty(state, 'minimized', {
      get: () => this.minimized
    })
    return { state }
  },
  data () {
    return {
      displayed: this.display,
      minimized: this.minimize
    }
  },
  mounted () {
    this.$root.$on(`c-${this.mode}-toggle-minimize`, () => {
      this.minimized = !this.minimized
    })
    this.$root.$on(`c-${this.mode}-toggle`, () => {
      this.displayed = this.displayed ? false : this.display || true
    })
  },
  computed: {
    mode () {
      return this.aside ? 'aside' : 'sidebar'
    },
    breakpoint () {
      return this.displayed === true || this.mobile ? '' : '-' + this.display
    },
    sidebarClasses () {
      return [
               'c-sidebar',
               `c-sidebar-${this.light ? 'light' : 'dark'}`,
               {
                 [`c-sidebar${this.breakpoint}-show`]: this.displayed,
                 'c-sidebar-fixed': this.fixed,
                 'c-sidebar-minimized': this.minimized,
                 'c-sidebar-right': this.aside
               }
             ]
    }
  }
}
</script>

<style lang="scss">
  @import "~@coreui/coreui/scss/partials/sidebar.scss";
</style>
