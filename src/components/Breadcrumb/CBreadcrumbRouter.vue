<template>
  <CBreadcrumb v-bind="props"/>
</template>

<script>
import CBreadcrumb from './CBreadcrumb'

export default {
  name: 'CBreadcrumbRouter',
  props: {
    addClasses: [String, Array, Object],
    addLinkClasses: [String, Array, Object],
    addLastItemClasses: [String, Array, Object]
  },
  computed: {
    items () {
      const routes = this.$route.matched.filter(route => {
        return route.name || route.meta.label
      })
      return routes.map(route => {
        const meta = route.meta || {}
        return {
          to: route,
          textHtml: meta.label || route.name || null
        }
      })
    },
    props () {
      return {
        items: this.items,
        addClasses: this.addClasses,
        addLinkClasses: this.addLinkClasses,
        addLastItemClasses: this.addLastItemClasses
      }
    }
  }
}
</script>
