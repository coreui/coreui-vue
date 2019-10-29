<template>
  <li class="c-header-nav-item">
    <slot name="link">
      <CLink
        class="c-header-nav-link"
        v-bind="$props"
      >
        <slot></slot>
      </CLink>
    </slot>
  </li>
</template>

<script>
import CLink, { props } from '../link/CLink'
export default {
  name: 'CHeaderNavItem',
  components: {
    CLink
  },
  props
}
</script>
