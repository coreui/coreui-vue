<template>
  <button class="sidebar-minimizer" type="button" @click="onClick()"></button>
</template>
<script>
import { togglePs } from '../../mixins/togglePs'

export default {
  name: 'SidebarMinimizer',
  mixins: [ togglePs ],
  mounted: function () {
    const isMinimized = document.body.classList.contains('sidebar-minimized')
    this.togglePs(!isMinimized)
    console.error(this.$options._componentTag + ' component is deprecated and will be replaced in coreui-vue 3.0 version, please import C - prefixed version')
  },
  methods: {
    onClick () {
      this.sidebarMinimize()
      this.brandMinimize()
    },
    sidebarMinimize () {
      const isMinimized = document.body.classList.toggle('sidebar-minimized')
      this.$emit('cui-sidebar-minimize', isMinimized)
      this.togglePs(!isMinimized)
    },
    brandMinimize () {
      document.body.classList.toggle('brand-minimized')
    }
  }
}
</script>
