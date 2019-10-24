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
  props,
  data () {
    return {
      isActive: this.disabled ? null : this.active
    }
  }
}
</script>
