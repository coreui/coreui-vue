<template>
  <li class="c-nav-item">
    <CLink
      :class="['c-nav-link', addLinkClasses]"
      :exact="true"
      v-bind="linkProps"
      @click.native="click"
    >
      <slot>
        <i :class="['c-nav-icon', icon]"></i> 
        {{name}}
        <CBadge
          v-if="badge"
          v-bind="badge"
        />
      </slot>
    </CLink>
  </li>
</template>

<script>
import CLink, { props as linkProps } from '../Link/CLink'
import CBadge from '../Badge/CBadge'

const props = Object.assign(linkProps, {
  name: String,
  icon: [String, Array, Object],
  badge: Object,
  addLinkClasses: [String, Array, Object]
})

export default {
  name: 'CSidebarNavLink',
  components: {
    CLink, CBadge
  },
  props,
  computed: {
    linkProps () {
      return Object.keys(linkProps).reduce((props, key) => {
        props[key] = this[key]
        return props
      }, {})
    }
  },
  methods: {
    click (e) {
      this.$emit('link-clicked', e)
    }
  }
}
</script>
