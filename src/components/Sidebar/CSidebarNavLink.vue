<template>
  <CLink
    v-bind="computedProps"
    :exact="true"
    class="nav-link"
  >
    <i :class="['nav-icon', icon]"></i> {{name}}
    <CBadge
      v-if="badge && badge.text"
      :variant="badge.variant"
    >
      {{badge.text}}
    </CBadge>
  </CLink>
</template>

<script>
import CLink, { propsFactory as linkPropsFactory} from '../Link/CLink'

const props = Object.assign(linkPropsFactory(), {
    name: String,
    icon: [String, Array, Object],
    badge: {
      type: Object,
      default: () => {}
    },
    variant: String,
    url: String
  }
)
export default {
  name: 'CSidebarNavLink',
  props,
  computed: {
    linkGeneratedFromUrlProp () {
      if (!this.url) return {}
      return this.url && this.url.substring(0,4) === 'http' ?
             { href: this.url } : { to: this.url }
    },
    computedProps () {
      return Object.assign({}, this.$props, this.linkGeneratedFromUrlProp)
    }
  }
}
</script>
