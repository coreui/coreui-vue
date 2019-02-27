<template>
  <li :class="classList"></li>
</template>

<script>
export default {
  name: 'SidebarNavDivider',
  props: {
    classes: {
      type: String,
      default: ''
    }
  },
  computed: {
    classList () {
      return [
        'divider',
        ...this.itemClasses
      ]
    },
    itemClasses () {
      return this.classes ? this.classes.split(' ') : ''
    }
  },
  mounted () {
    console.error(this.$options._componentTag + ' component is deprecated and will be replaced in coreui-vue 3.0 version, please import C - prefixed version')
  }
}
</script>
