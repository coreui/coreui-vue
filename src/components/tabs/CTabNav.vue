<script>
import CLink, { propsFactory as linkPropsFactory } from '../link/CLink'

export default {
  name: 'CTabNav',
  props: Object.assign(linkPropsFactory(), {
    title: String,
    customTitleSlot: Function
  }),
  computed: {
    linkProps () {
      return Object.keys(linkPropsFactory()).reduce((props, key) => {
        props[key] = this[key]
        return props
      }, {})
    }
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
            props: this.linkProps,
          },
          this.customTitleSlot ? this.customTitleSlot() : this.title
        )
      ]
    )
  }
}

</script>
