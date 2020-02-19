<template>
  <CLink
    class="c-header-nav-link"
    v-bind="$props"
  >
    <slot></slot>
  </CLink>
</template>

<script>
import CLink, { props } from '../link/CLink'
export default {
  name: 'CHeaderNavLink',
  components: {
    CLink
  },
  props
}
</script>
