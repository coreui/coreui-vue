<template>
  <footer :class="classList">
    <slot>Footer</slot>
  </footer>
</template>

<script>
export default {
  name: 'AppFooter',
  props: {
    fixed: {
      type: Boolean,
      default: false
    }
  },
  mounted: function () {
    this.isFixed()
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
