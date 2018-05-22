<template>
  <button class="sidebar-minimizer" type="button" @click="onClick()"></button>
</template>
<script>

export default {
  name: 'sidebar-minimizer',
  methods: {
    onClick () {
      this.sidebarMinimize()
      this.brandMinimize()
    },
    sidebarMinimize () {
      document.body.classList.toggle('sidebar-minimized')
      const sidebar = document.querySelector('.sidebar-nav section')
      if (sidebar) {
        const toggleOn = sidebar.classList.toggle('ps');
        sidebar.classList.toggle('ps-container', toggleOn);
        sidebar.classList.toggle('ps--active-y', toggleOn);
      }
      const railY = document.querySelector('.ps__scrollbar-y-rail')
      if (railY) {
        railY.removeAttribute('style')
      }
    },
    brandMinimize () {
      document.body.classList.toggle('brand-minimized')
    }
  }
}
</script>
