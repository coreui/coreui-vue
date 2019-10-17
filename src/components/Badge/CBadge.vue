<script>
import { mergeData } from 'vue-functional-data-merge'
import CLink, { props as linkProps } from '../Link/CLink'

const props = Object.assign(linkProps, {
  tag: {
    type: String,
    default: 'span'
  },
  color: String,
  pill: Boolean
})

export default {
  functional: true,
  name:'CBadge',
  props,
  render (h, { props, data, children }) {
    const tag = !props.href && !props.to ? props.tag : CLink
    const componentData = {
      staticClass: 'badge',
      class: {
        [`badge-${props.color}`]: props.color,
        'badge-pill': props.pill,
        'active': props.active,
        'disabled': props.disabled
      },
      props
    }
    return h(tag, mergeData(data, componentData), children)
  }
}
</script>
