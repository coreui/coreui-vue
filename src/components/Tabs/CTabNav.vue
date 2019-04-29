<script>
import CLink, { propsFactory as linkPropsFactory } from '../Link/CLink'

export default {
  name: 'CTabNav',
  props: Object.assign(linkPropsFactory(), {
    titleHtml: String,
    customTitleSlot: Function
  }),
  render (h) {
    return h(
      'li',
      {
        staticClass: 'nav-item ',
      },
      [
        h(
          CLink,
          {
            staticClass: 'nav-link',
            class: { active: this.active },
            props: this.props,
            domProps: this.titleHtml ? { innerHTML: this.titleHtml } : null
          },
          this.customTitleSlot ? this.customTitleSlot() : null
        )
      ]
    )
  }
}

</script>
