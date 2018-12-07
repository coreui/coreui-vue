import { mergeData } from 'vue-functional-data-merge'

export const props = {
  tag: {
    type: String,
    default: 'h6'
  }
}

export default {
  functional: true,
  name: 'CDropdownHeader',
  props,
  render (h, { props, data, children }) {
    return h(
      props.tag,
      mergeData(data, {
        staticClass: 'dropdown-header',
      }),
      children
    )
  }
}
