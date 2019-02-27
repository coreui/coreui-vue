<template>
  <aside class="aside-menu">
    <slot>Aside</slot>
  </aside>
</template>

<script>
export default {
  name: 'Aside',
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
    console.error(this.$options._componentTag + ' component is deprecated and will be replaced in coreui-vue 3.0 version, please import C - prefixed version')
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
