<template>
  <button class="sidebar-minimizer" type="button" @click="onClick()"></button>
</template>
<script>
import { togglePs } from '../../mixins/togglePs'

export default {
  name: 'sidebar-minimizer',
  mixins: [ togglePs ],
  mounted: function () {
    const isMinimized = document.body.classList.contains('sidebar-minimized')
    this.togglePs(!isMinimized)
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
