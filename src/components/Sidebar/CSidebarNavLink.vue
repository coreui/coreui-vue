<template>
  <li class="c-nav-item">
    <CLink
      :class="linkClasses"
      v-bind="computedLinkProps"
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
  addLinkClasses: [String, Array, Object],
  label: Boolean
})

export default {
  name: 'CSidebarNavLink',
  components: {
    CLink, 
    CBadge
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
        this.label ? 'c-nav-label' : 'c-nav-link',
        this.addLinkClasses
      ]
    }
  },
  methods: {
    click (e) {
      this.$emit('link-clicked', e)
    }
  }
}
</script>
