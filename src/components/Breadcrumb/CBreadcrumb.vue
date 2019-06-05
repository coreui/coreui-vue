<script>
import { mergeData } from 'vue-functional-data-merge'
import CLink from '../Link/CLink'

export default {
  functional: true,
  name: 'CBreadcrumb',
  props: {
    items: Array,
    addClasses: [String, Array],
    addLinkClasses: [String, Array],
    addLastItemClasses: [String, Array]
  },
  render (h, { props, data }) {
    if(!Array.isArray(props.items)){ return }
    let childNodes = props.items.map((item, index, items) => {
      if(typeof item !== 'object'){ return }

      const isLast = items.length === index + 1
      const tag = isLast ? 'span' : CLink
      const lastItemProps = {
        class: [props.addClasses, props.addLastItemClasses, item.addClasses],
        domProps: { innerHTML: item.textHtml}
      }
      const linkItemProps = {
        class: [props.addClasses, props.addLinkClasses, item.addClasses],
        domProps: { innerHTML: item.textHtml},
        props: item
      }
      const itemProps = isLast ? lastItemProps : linkItemProps
      return h('li',
             {
               staticClass: 'c-breadcrumb-item',
               class: { 'c-active': isLast },
               attrs: { role: 'presentation' }
             },
             [h(tag, itemProps)])
    })
    return h('ol', mergeData(data, { staticClass: 'c-breadcrumb' }), childNodes)
  }
}
</script>

<style scoped lang="scss">
  @import "~@coreui/coreui/scss/partials/breadcrumb.scss";
</style>
