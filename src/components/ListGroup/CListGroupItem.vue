<script>
import { mergeData } from 'vue-functional-data-merge'
import pickByKeys from '../../utils/pickByKeys'
import CLink, { propsFactory as linkPropsFactory } from '../Link/CLink'

const props = Object.assign(
  {
    tag: {
      type: String,
      default: 'div'
    },
    action: Boolean,
    variant: String
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
      staticClass: 'c-list-group-item',
      class: {
        [`c-list-group-item-${props.variant}`]: Boolean(props.variant),
        'c-list-group-item-action': isAction,
        'c-active': props.active,
        'c-disabled': props.disabled
      }
    }
    return h(tag, mergeData(data, componentData), children)
  }
}
</script>
