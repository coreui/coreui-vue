<template>
  <CButtonClose buttonClasses="c-sidebar-close">
    <svg class="c-icon" width="24" height="24" viewBox="0 0 24 24">
      <title>x</title>
      <path d="M20.030 5.030l-1.061-1.061-6.97 6.97-6.97-6.97-1.061 1.061 6.97 6.97-6.97 6.97 1.061 1.061 6.97-6.97 6.97 6.97 1.061-1.061-6.97-6.97 6.97-6.97z"></path>
    </svg>
  </CButtonClose>
</template>

<script>
import CButtonClose from '../button/CButtonClose'
export default {
  name: 'CSidebarClose',
  components: {
    CButtonClose
  }
}
</script>