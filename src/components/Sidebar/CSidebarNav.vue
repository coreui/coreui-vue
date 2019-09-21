<template>
  <nav class="c-sidebar-nav">
    <VuePerfectScrollbar
      class="c-scroll-area"
      :settings="psSettings"
      :swicher="!state.minimized"
    >
      <ul class="c-nav">
        <slot></slot>
      </ul>
    </VuePerfectScrollbar>
  </nav>
</template>

<script>
import VuePerfectScrollbar from './CPerfectScrollbar'

export default {
  name: 'CSidebarNav',
  components: {
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
        wheelPropagation: false
      }
    }
  }
}
</script>

<style scoped>
  .c-scroll-area {
    height: 100%;
    margin: auto;
  }
</style>
