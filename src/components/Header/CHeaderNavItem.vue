<template>
  <li class="c-header-nav-item">
    <CLink
      class="c-header-nav-link"
      v-bind="$props"
    >
      <slot></slot>
    </CLink>
  </li>
</template>

<script>
import CLink, { props } from '../Link/CLink'
export default {
  name: 'CHeaderNavItem',
  components: {
    CLink
  },
  props
}
</script>
