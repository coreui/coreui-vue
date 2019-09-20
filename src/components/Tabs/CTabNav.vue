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
        staticClass: 'c-nav-item',
      },
      [
        h(
          CLink,
          {
            staticClass: 'c-nav-link',
            class: { 'c-active': this.active },
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
