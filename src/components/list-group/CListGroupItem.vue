<script>
import { mergeData } from 'vue-functional-data-merge'
import { pickByKeys } from '@coreui/utils/src'
import CLink, { propsFactory as linkPropsFactory } from '../link/CLink'

const props = Object.assign(
  {
    tag: {
      type: String,
      default: 'li'
    },
    action: Boolean,
    color: String,
    accent: String
  },
  linkPropsFactory()
)

export default {
  functional: true,
  name: 'CListGroupItem',
  props,
  render (h, { props, data, children }) {
    const tag = props.href || props.to ? CLink : props.tag
    const isAction = Boolean(
      props.action ||
      props.href ||
      props.to ||
      props.tag === 'button'
    )
    const attrs = {}
    let itemProps = {}
    if (tag === 'button') {
      if (!data.attrs || !data.attrs.type) {
        attrs.type = 'button'
      }
      if (props.disabled) {
        attrs.disabled = true
      }
    } else {
      itemProps = pickByKeys(props, Object.keys(linkPropsFactory()))
    }
    const componentData = {
      attrs,
      props: itemProps,
      staticClass: 'list-group-item',
      class: {
        [`list-group-item-${props.color}`]: props.color,
        [`list-group-item-accent-${props.accent}`]: props.accent,
        'list-group-item-action': isAction,
        'active': props.active,
        'disabled': props.disabled
      }
    }
    return h(tag, mergeData(data, componentData), children)
  }
}
</script>
