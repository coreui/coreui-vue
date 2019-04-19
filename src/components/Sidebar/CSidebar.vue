<template>
  <div class="sidebar" v-on-clickaway="hideMobile">
    <slot>Sidebar</slot>
  </div>
</template>
<script>
import { mixin as clickaway } from 'vue-clickaway2'
import { hideMobile } from '../../mixins/hideMobile'

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
    mobile: Boolean
  },
  provide () {
    return {
      minimized: this.minimized
    }
  },
  data () {
    return {
      displayed: this.display,
      minimized: this.minimize
    }
  },
  watch: {
    display () {
      this.displayed = this.display
    },
    displayed: {
      immediate: true,
      handler (val, oldVal) {
        this.toggleClasses(val, oldVal)
      }
    },
    minimize () {
      this.minimized = this.minimize
    },
    minimized: {
      immediate: true,
      handler (val, oldVal) {
        this.toggleMinimize()
      }
    }
  },
  mounted () {
    this.$root.$on('c-sidebar-toggle-minimize', () => {
      this.minimized = !this.minimized
    })
    this.$root.$on('c-sidebar-toggle', () => {
        this.displayed = this.displayed ? false : this.display
    })
    this.isFixed()
  },
  // computed: {
  //   displayClass () {
  //     if (this.displayed && !this.mobile) {
  //       const breakpoint = this.displayed === true ? '' : '-' + this.displayed
  //       return `sidebar${breakpoint}-show`
  //     }
  //   },
  //   sidebarClasses () {
  //     return ['sidebar', this.displayClass]
  //   }
  // },
  methods: {
    isFixed () {
      const body = document.body.classList
      this.fixed ? body.add('sidebar-fixed') : body.remove('sidebar-fixed')
    },
    toggleClasses (val, oldVal) {
      if (val) {
        const breakpoint = val === true ? '' : '-' + val
        document.body.classList.add(`sidebar${breakpoint}-show`)
      }
      if (oldVal) {
        const oldBreakpoint = oldVal === true ? '' : '-' + oldVal
        document.body.classList.remove(`sidebar${oldBreakpoint}-show`)
      }
    },
    toggleMinimize () {
      document.body.classList.toggle('sidebar-minimized')
      document.body.classList.toggle('brand-minimized')
    }
  }
}
</script>
