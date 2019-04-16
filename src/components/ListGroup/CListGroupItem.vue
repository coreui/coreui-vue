<script>
import { mergeData } from 'vue-functional-data-merge'
import pluckProps from '../../utils/pluck-props'
import { assign } from '../../utils/object'
import CLink, { propsFactory as linkPropsFactory } from '../Link/CLink'
let linkProps = linkPropsFactory()

const props = assign(
  {
    tag: {
      type: String,
      default: 'div'
    },
    action: Boolean,
    variant: String,
  },
  linkProps
)

export default {
  functional: true,
  name: 'CListGroupItem',
  props,
  render (h, { props, data, children }) {
    const tag = !props.href && !props.to ? props.tag : CLink
    const isAction = Boolean(
      props.action ||
      props.href ||
      props.to ||
      props.tag == 'button'
    )
    const attrs = {}
    let itemProps = {}
    if (tag === 'button') {
      if (!data.attrs || !data.attrs.type)
        attrs.type = 'button'
      if (props.disabled)
        attrs.disabled = true
    } else {
      itemProps = pluckProps(linkProps, props)
    }
    const componentData = {
      attrs,
      props: itemProps,
      staticClass: 'list-group-item',
      class: {
        [`list-group-item-${props.variant}`]: Boolean(props.variant),
        'list-group-item-action': isAction,
        active: props.active,
        disabled: props.disabled
      }
    }
    return h(tag, mergeData(data, componentData), children)
  }
}
</script>
