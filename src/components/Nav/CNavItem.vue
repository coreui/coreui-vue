<template>
  <li class="c-nav-item">
    <CLink
      class="c-nav-link"
      v-bind="$props"
      :active="isActive"
    >
      <slot></slot>
    </CLink>
  </li>
</template>

<script>
import CLink, { props } from '../Link/CLink'
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
