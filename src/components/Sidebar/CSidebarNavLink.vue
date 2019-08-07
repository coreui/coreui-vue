<template>
  <CLink
    v-bind="computedProps"
    :exact="true"
    class="c-nav-link"
  >
    <i :class="['c-nav-icon', icon]"></i> 
    {{name}}
    <CBadge
      v-if="badge && badge.text"
      :variant="badge.variant || 'primary'"
    >
      {{badge.text}}
    </CBadge>
  </CLink>
</template>

<script>
import CLink, { propsFactory as linkPropsFactory } from '../Link/CLink'

const props = Object.assign(linkPropsFactory(), {
    name: String,
    icon: [String, Array, Object],
    badge: Object,
    url: String
  }
)
export default {
  name: 'CSidebarNavLink',
  components: {
    CLink
  },
  props,
  computed: {
    linkGeneratedFromUrlProp () {
      const url = this.url
      if (!url) {
        return {}
      } else {
        return url.substring(0,4) === 'http' ? { href: url } : { to: url }
      }
    },
    computedProps () {
      return Object.assign({}, this.$props, this.linkGeneratedFromUrlProp)
    }
  }
}
</script>
