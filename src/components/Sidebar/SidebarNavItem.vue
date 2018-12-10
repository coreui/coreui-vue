<template>
  <li :class="classList" @click="hideMobile">
    <slot></slot>
  </li>
</template>

<script>
import { hideMobile } from '../../mixins/hideMobile'

export default {
  name: 'sidebar-nav-item',
  mixins: [ hideMobile ],
  props: {
    classes: {
      type: [String, Array, Object],
      default: ''
    }
  },
  computed: {
    classList () {
      return [
        'nav-item',
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
