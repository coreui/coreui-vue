<template>
  <li :class="classList" @click="hideMobile">
    <slot></slot>
  </li>
</template>

<script>
import { hideMobile } from '../../mixins/hideMobile'

export default {
  name: 'SidebarNavItem',
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
  },
  mounted () {
    console.error(this.$options._componentTag + ' component is deprecated and will be replaced in coreui-vue 3.0 version, please import C - prefixed version')
  }
}
</script>
