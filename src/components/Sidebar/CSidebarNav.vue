<template>
  <nav class="sidebar-nav">
    <PerfectScrollbar
      class="scroll-area"
      :settings="psSettings"
      @ps-scroll-y="scrollHandle"
    >
        <CSidebarNavItems :items="navItems"/>
    </PerfectScrollbar>
  </nav>
</template>

<script>
import CSidebarNavItems from './CSidebarNavItems'
import PerfectScrollbar from 'vue-perfect-scrollbar'

export default {
  name: 'CSidebarNav',
  props: {
    navItems: {
      type: Array,
      required: true,
      default: () => []
    }
  },
  components: {
    CSidebarNavItems,
    PerfectScrollbar
  },
  computed: {
    psSettings: () => {
      // ToDo: find better rtl fix
      return {
        maxScrollbarLength: 200,
        minScrollbarLength: 40,
        suppressScrollX: getComputedStyle(document.querySelector('html')).direction !== 'rtl',
        wheelPropagation: false,
        interceptRailY: styles => ({ ...styles, height: 0 })
      }
    }
  }
}
</script>

<style scoped lang="css">
  .scroll-area {
    position: absolute;
    height: 100%;
    margin: auto;
  }
</style>
