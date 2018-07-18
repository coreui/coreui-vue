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
      type: String,
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
      return this.classes ? this.classes.split(' ') : ''
    }
  }
}
</script>
