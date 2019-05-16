<template>
  <nav class="c-sidebar-nav">
    <VuePerfectScrollbar
      class="c-scroll-area"
      :settings="psSettings"
      v-if="!state.minimized"
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
  inject: {
    state: {
      default: false
    }
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
  .c-scroll-area {
    height: 100%;
    margin: auto;
  }
</style>
