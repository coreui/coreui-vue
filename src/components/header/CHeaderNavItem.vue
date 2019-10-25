<template>
  <li v-if="!onlyLink" class="c-header-nav-item">
    <CLink
      class="c-header-nav-link"
      v-bind="$props"
    >
      <slot></slot>
    </CLink>
  </li>
  <CLink
    v-else
    class="c-header-nav-link"
    v-bind="Object.assign({}, $props, { onlyLink: null })"
  >
    <slot></slot>
  </CLink>
</template>

<script>
import CLink, { props as linkProps } from '../link/CLink'
const props = Object.assign({ onlyLink: Boolean }, linkProps)
export default {
  name: 'CHeaderNavItem',
  components: {
    CLink
  },
  props
}
</script>
