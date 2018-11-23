import { mergeData } from 'vue-functional-data-merge'
import CLink from '../Link/CLink'

export const props = {
  items: {
    type: Array,
    default: null
  }
}

export default {
  functional: true,
  name: 'CBreadcrumb',
  props,
  render (h, { props, data }) {
    if(!Array.isArray(props.items)){ return }
    let childNodes = props.items.map((item, index, items) => {
      const active = items.length === index + 1 && item.current === undefined || item.current
      const tag = active ? 'span' : CLink
      const itemProps = active ? { class: { active: true } } : { props: item }
      return h('li',
             {
               staticClass: 'breadcrumb-item',
               class: { active: active },
               attrs: { role: 'presentation' }
             },
             [h(tag, itemProps, item.text)])
    })
    return h('ol', mergeData(data, { staticClass: 'breadcrumb' }), childNodes)
  }
}
