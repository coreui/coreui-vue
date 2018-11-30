import { mergeData } from 'vue-functional-data-merge'
import { assign } from '../../utils/object'
import cardCommon from '../../mixins/cardMixin'

export const props = assign(
  cardCommon.props,
  {
    header: String
  }
)

export default {
  functional: true,
  name: 'CCardHeader',
  props,
  render (h, { props, data, children }) {
    return h(
      props.tag,
      mergeData(data, {
        staticClass: 'card-header',
        class: [
          {
            [`text-${props.align}`]: Boolean(props.align),
            [`bg-${props.variant}`]: Boolean(props.variant),
            [`border-${props.borderVariant}`]: Boolean(props.borderVariant),
            [`text-${props.textVariant}`]: Boolean(props.textVariant)
          }
        ]
      }),
      children || [h('div', { domProps: { innerHTML: props.header } })]
    )
  }
}
