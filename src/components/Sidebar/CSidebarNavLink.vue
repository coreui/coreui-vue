<template>
  <li class="c-nav-item">
    <CLink
      class="c-nav-link"
      :exact="true"
      v-bind="linkProps"
    >
      <slot>
        <i :class="['c-nav-icon', icon]"></i> 
        {{name}}
        <CBadge
          v-if="badge && badge.text"
          :variant="badge.variant || 'primary'"
        >
          {{badge.text}}
        </CBadge>
      </slot>
    </CLink>
  </li>
</template>

<script>
import CLink, { props as linkProps } from '../Link/CLink'
const props = Object.assign(linkProps, {
  name: String,
  icon: [String, Array, Object],
  badge: Object
})

export default {
  name: 'CSidebarNavLink',
  components: {
    CLink
  },
  props,
  computed: {
    linkProps () {
      return Object.keys(linkProps).reduce((props, key) => {
        props[key] = this[key]
        return props
      }, {})
    }
  }
}
</script>
