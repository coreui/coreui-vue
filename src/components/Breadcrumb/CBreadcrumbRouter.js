import CBreadcrumb from './CBreadcrumb'

export default{
  name: 'CBreadcrumbRouter',
  computed: {
    items () {
      const routes = this.$route.matched.filter((route) => route.name || route.meta.label)
      return routes.map((route) => {
        const item = {
          to: route,
          text: route.meta && route.meta.label ? route.meta.label : route.name || null
        }
        return item
      })
    }
  },
  render (h){
    return h(CBreadcrumb, { props: {items: this.items} })
  }
}
