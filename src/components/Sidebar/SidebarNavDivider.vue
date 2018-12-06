<template>
  <li :class="classList"></li>
</template>

<script>
export default {
  name: 'sidebar-nav-divider',
  props: {
    classes: {
      type: [String, Array, Object],
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
      const classes = this.classes
      return !classes ? [] : typeof classes === 'string' || classes instanceof String ? classes.split(' ') : Array.isArray(classes) ? classes : Object.keys(classes).filter(i=>classes[i])
    }
  }
}
</script>
