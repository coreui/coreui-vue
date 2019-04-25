<template>
  <nav class="sidebar-nav">
    <VuePerfectScrollbar
      class="scroll-area"
      :settings="psSettings"
      v-if="!isMinimized"
    >
        <CSidebarNavItems :items="navItems"/>
    </VuePerfectScrollbar>
    <template v-else>
      <CSidebarNavItems :items="navItems"/>
    </template>
  </nav>
</template>

<script>
import CSidebarNavItems from './CSidebarNavItems'
import VuePerfectScrollbar from 'vue-perfect-scrollbar'

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
    VuePerfectScrollbar
  },
  data () {
    return {
      isMinimized: false
    }
  },
  created () {
    this.$on('c-sidebar-toggle-minimize', val => this.isMinimized = val)
  },
  computed: {
    psSettings () {
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
