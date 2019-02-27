<template>
  <header
    :class="classList">
    <slot>Header</slot>
  </header>
</template>

<script>
export default {
  name: 'Header',
  props: {
    fixed: {
      type: Boolean,
      default: false
    }
  },
  computed: {
    classList () {
      return [
        'app-header',
        'navbar'
      ]
    }
  },
  mounted: function () {
    this.isFixed(this.fixed)
    console.error(this.$options._componentTag + ' component is deprecated and will be removed in coreui-vue 3.0 version')
  },
  methods: {
    isFixed (fixed) {
      fixed ? document.body.classList.add('header-fixed') : document.body.classList.remove('header-fixed')
      return fixed
    }
  }
}
</script>
