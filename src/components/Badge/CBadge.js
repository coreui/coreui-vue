import { mergeData } from 'vue-functional-data-merge'
import CLink, { props as linkProps } from '../Link/CLink'

const props = Object.assign(linkProps, {
  tag: {
    type: String,
    default: 'span'
  },
  variant: {
    type: String,
    default: 'secondary'
  },
  pill: Boolean,
})

export default {
  functional: true,
  name:'CBadge',
  props,
  render (h, { props, data, children }) {
    const tag = !props.href && !props.to ? props.tag : CLink
    const componentData = {
      staticClass: 'badge',
      class: [
        `badge-${props.variant}`,
        {
          'badge-pill': Boolean(props.pill),
          active: props.active,
          disabled: props.disabled
        }
      ],
      props
    }
    return h(tag, mergeData(data, componentData), children)
  }
}
