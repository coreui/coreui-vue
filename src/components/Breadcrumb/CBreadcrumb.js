import { mergeData } from 'vue-functional-data-merge'
import CLink from '../Link/CLink'

export default {
  functional: true,
  name: 'CBreadcrumb',
  props: {
    items: Array,
    addLinkClasses: [String, Array],
    lastItemClasses: [String, Array],
  },
  render (h, { props, data }) {
    if(!Array.isArray(props.items)){ return }
    let childNodes = props.items.map((item, index, items) => {
      if(typeof item !== 'object'){ return }
      const isLast = items.length === index + 1
      const tag = isLast ? 'span' : CLink
      const itemProps = isLast ?
        { class: props.lastItemClasses, domProps: { innerHTML: item.text} } :
        { class: [props.addLinkClasses, item.addLinkClasses],
          domProps: { innerHTML: item.text}, props: item }
      return h('li',
             {
               staticClass: 'breadcrumb-item',
               class: { active: isLast },
               attrs: { role: 'presentation' }
             },
             [h(tag, itemProps)])
    })
    return h('ol', mergeData(data, { staticClass: 'breadcrumb' }), childNodes)
  }
}
