<template>
  <li class="nav-item">
    <CLink
      class="nav-link"
      v-bind="$props"
      :active="isActive"
    >
      <slot></slot>
    </CLink>
  </li>
</template>

<script>
import CLink, { props } from '../link/CLink'
export default {
  name: 'CNavItem',
  components: {
    CLink
  },
  inject: { nav: { default: {} }},
  props,
  computed: {
    isActive () {
      return this.nav.active ? this.nav.active === this : this.active
    }
  }
}
</script>
