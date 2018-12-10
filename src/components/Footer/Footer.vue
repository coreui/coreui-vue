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
  computed: {
    classList () {
      return [
        'app-footer'
      ]
    }
  },
  mounted: function () {
    this.isFixed()
  },
  methods: {
    isFixed () {
      this.fixed ? document.body.classList.add('footer-fixed') : document.body.classList.remove('footer-fixed')
    }
  }
}
</script>
