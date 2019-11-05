<template>
  <li v-if="inNavItem" class="c-sidebar-nav-item">
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
  <CLink v-else>
    <slot>
      <CIcon v-if="icon" v-bind="computedIcon"/>
      <i v-if="fontIcon" :class="['c-sidebar-nav-icon', fontIcon]"></i>
      {{name}}
      <CBadge
        v-if="badge"
        v-bind="Object.assign({}, badge, { text: null })"
      >
        {{badge.text}}
      </CBadge>
    </slot>
  </CLink>
</template>

<script>
import CLink, { props as linkProps } from '../link/CLink'
import CBadge from '../badge/CBadge'
import CIcon from '@coreui/icons-vue/CIcon.vue'

const props = Object.assign(linkProps, {
  name: String,
  icon: [String, Object],
  fontIcon: String,
  badge: Object,
  addLinkClasses: [String, Array, Object],
  label: Boolean,
  inNavItem: {
    type: Boolean,
    default: true
  }
})

export default {
  name: 'CSidebarNavLink',
  components: {
    CLink, 
    CBadge,
    CIcon
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
        return { customClasses: 'c-sidebar-nav-icon', name: this.icon }
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
