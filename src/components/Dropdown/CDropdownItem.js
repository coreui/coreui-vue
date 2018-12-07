import { mergeData } from 'vue-functional-data-merge'
import CLink, { propsFactory as linkPropsFactory } from '../Link/CLink'

export const props = linkPropsFactory()

export default {
  functional: true,
  name: 'CDropdownItem',
  props,
  render (h, { props, data, children }) {
    return h(
      CLink,
      mergeData(data, {
        props,
        staticClass: 'dropdown-item',
        attrs: { role: 'menuitem' }
      }),
      children
    )
  }
}
