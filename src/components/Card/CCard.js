import { mergeData } from 'vue-functional-data-merge'
// import pluckProps from '../../utils/pluck-props'
import { assign } from '../../utils/object'
import cardCommon from '../../mixins/cardMixin'
import CCardHeader from './CCardHeader'
import CCardBody from './CCardBody'
import CCardFooter from './CCardFooter'

const props = assign(
  cardCommon.props,
  {
    header: String,
    body: String,
    footer: String
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

    if (!$slots.body &&  !$slots.default && props.body)
      $slots.body = h(CCardBody, { domProps: { innerHTML: props.body }})

    if (!$slots.footer && props.footer)
      $slots.footer = h(CCardFooter, { domProps: { innerHTML: props.footer }})

    return h(
      props.tag,
      mergeData(data, {
        staticClass: 'card',
        class: {
          [`text-${props.align}`]: Boolean(props.align),
          [`bg-${props.variant}`]: Boolean(props.variant),
          [`border-${props.borderVariant}`]: Boolean(props.borderVariant),
          [`text-${props.textVariant}`]: Boolean(props.textVariant)
        }
      }),
      [ $slots.header, $slots.body || $slots.default, $slots.footer ]
    )
  }
}
