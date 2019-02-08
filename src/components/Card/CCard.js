import { mergeData } from 'vue-functional-data-merge'
import { assign } from '../../utils/object'
import sharedCardProps from './sharedCardProps'
import CCardHeader from './CCardHeader'
import CCardBody from './CCardBody'
import CCardFooter from './CCardFooter'

const props = assign(
  sharedCardProps.props,
  {
    header: String,
    body: String,
    footer: String,
    noWrapper: Boolean
  }
)
export default {
  functional: true,
  name: 'CCard',
  props,
  render (h, { props, data, slots }) {
    const $slots = slots()

    if (!$slots.header && props.header)
      $slots.header = h(CCardHeader, { domProps: { innerHTML: props.header }})

    if (!$slots.body && $slots.default)
      $slots.body = props.noWrapper ? $slots.default : h(CCardBody, $slots.default)
    else if (!$slots.body &&  !$slots.default && props.body)
      $slots.body = h(CCardBody, { domProps: { innerHTML: props.body }})

    if (!$slots.footer && props.footer)
      $slots.footer = h(CCardFooter, { domProps: { innerHTML: props.footer }})

    return h(
      props.tag || 'div',
      mergeData(data, {
        staticClass: 'card',
        class: {
          [`text-${props.align}`]: Boolean(props.align),
          [`bg-${props.variant}`]: Boolean(props.variant),
          [`border-${props.borderVariant}`]: Boolean(props.borderVariant),
          [`text-${props.textVariant}`]: Boolean(props.textVariant)
        }
      }),
      [ $slots.header, $slots.body, $slots.footer ]
    )
  }
}
