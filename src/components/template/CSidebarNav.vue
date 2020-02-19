<template>
  <CScrollbar
    class="c-sidebar-nav h-100"
    :settings="psSettings"
    :switcher="!state.minimize"
    tag="ul"
  >
    <slot></slot>
  </CScrollbar>
</template>

<script>
import CScrollbar from '../scrollbar/CScrollbar'

export default {
  name: 'CSidebarNav',
  components: {
    CScrollbar
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
        wheelPropagation: false
      }
    }
  }
}
</script>

