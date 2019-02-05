import CLink, { propsFactory as linkPropsFactory } from '../Link/CLink'

export default {
  name: 'CNavItem',
  props: linkPropsFactory(),
  data () {
    return {
      isActive: this.active,
      id: this.$attrs.id
    }
  },
  computed: {
    computedProps () {
      return !this.disabled ? Object.assign({}, this.$props, { active: this.isActive } ) : this.$props
    },
  },
  render (h) {
      // console.log(this)
      return h(
      'li',
      { staticClass: 'nav-item' },
      [
        h(
          CLink,
          {
            staticClass: 'nav-link',
            props: this.computedProps
          },
          this.$slots.default
        )
      ]
    )
  }
}
