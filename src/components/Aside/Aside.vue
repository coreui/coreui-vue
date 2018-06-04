<template>
  <aside class="aside-menu">
    <slot>Aside</slot>
  </aside>
</template>

<script>
export default {
  name: 'AppAside',
  props: {
    fixed: {
      type: Boolean,
      default: false
    },
    display: {
      type: String,
      default: ''
    },
    offCanvas: {
      type: Boolean,
      default: true
    }
  },
  mounted: function () {
    this.isFixed(this.fixed)
    this.isOffCanvas(this.offCanvas)
  },
  methods: {
    isFixed (fixed) {
      fixed ? document.body.classList.add('aside-menu-fixed') : document.body.classList.remove('aside-menu-fixed')
      return fixed
    },
    isOffCanvas (offCanvas) {
      offCanvas ? document.body.classList.add('aside-menu-off-canvas') : document.body.classList.remove('aside-menu-off-canvas')
    }
  }
}
</script>
