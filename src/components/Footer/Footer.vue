<template>
  <footer :class="classList">
    <slot>Footer</slot>
  </footer>
</template>

<script>
export default {
  name: 'Footer',
  props: {
    fixed: {
      type: Boolean,
      default: false
    }
  },
  mounted: function () {
    this.isFixed()
    console.error(this.$options._componentTag + ' component is deprecated and will be replaced in coreui-vue 3.0 version, please import C - prefixed version')
  },
  computed: {
    classList () {
      return [
        'app-footer'
      ]
    }
  },
  methods: {
    isFixed () {
      this.fixed ? document.body.classList.add('footer-fixed') : document.body.classList.remove('footer-fixed')
    }
  }
}
</script>
