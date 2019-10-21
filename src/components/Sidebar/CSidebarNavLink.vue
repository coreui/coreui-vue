<template>
  <li class="c-sidebar-nav-item">
    <CLink
      :class="linkClasses"
      v-bind="computedLinkProps"
      @click.native="click"
    >
      <slot>
        <CIcon v-if="icon" v-bind="computedIcon"/>
        {{name}}
        <CBadge
          v-if="badge"
          v-bind="Object.assign({}, badge, { text: null })"
        >
          {{badge.text}}
        </CBadge>
      </slot>
    </CLink>
  </li>
</template>

<script>
import CLink, { props as linkProps } from '../Link/CLink'
import CBadge from '../Badge/CBadge'
// import CIcon from '@coreui/icons/vue'

const props = Object.assign(linkProps, {
  name: String,
  icon: [String, Object],
  badge: Object,
  addLinkClasses: [String, Array, Object],
  label: Boolean
})

export default {
  name: 'CSidebarNavLink',
  components: {
    CLink, 
    CBadge,
    // CIcon
  },
  props,
  computed: {
    linkProps () {
      return Object.keys(linkProps).reduce((props, key) => {
        props[key] = this[key]
        return props
      }, {})
    },
    addedLinkProps () {
      return this.$options.propsData.exact === undefined ? { exact: true } : {}
    },
    computedLinkProps () {
      return Object.assign(this.linkProps, this.addedLinkProps)
    },
    linkClasses () {
      return [
        this.label ? 'c-sidebar-nav-label' : 'c-sidebar-nav-link',
        this.addLinkClasses
      ]
    },
    computedIcon () {
      if (typeof this.icon === 'object') {
        return Object.assign(
          { customClasses: 'c-sidebar-nav-icon' },
          this.icon
        )
      } else {
        return { customClasses: [this.icon, 'c-sidebar-nav-icon']}
      }
    }
  },
  methods: {
    click (e) {
      this.$emit('link-clicked', e)
    }
  }
}
</script>
