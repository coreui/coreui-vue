<script>
import CLink, { propsFactory as linkPropsFactory } from '../Link/CLink'

export default {
  name: 'CTab',
  props: Object.assign(linkPropsFactory(), {
    titleHtml: String
  }),
  data () {
    return {
      isActive: this.disabled ? null : this.active
    }
  },
  computed: {
    computedProps () {
      return Object.assign({}, this.$props, { active: this.isActive } )
    },
  },
  render (h) {
      return h(
      'li',
      {
        staticClass: 'nav-item',
      },
      [
        h(
          CLink,
          {
            staticClass: 'nav-link',
            props: this.computedProps,
            domProps: this.titleHtml ? { innerHTML: this.titleHtml } : null
          },
          this.$slots.title
        )
      ]
    )
  }
}

</script>
