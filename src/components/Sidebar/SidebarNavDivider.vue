<template>
  <li :class="classList" />
</template>

<script>
export default {
  name: 'SidebarNavDivider',
  props: {
    classes: {
      type: [String, Array, Object],
      default: ''
    }
  },
  computed: {
    classList () {
      return [
        'nav-divider',
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
