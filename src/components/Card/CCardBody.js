import { mergeData } from 'vue-functional-data-merge'
import { assign } from '../../utils/object'
import sharedCardProps from './sharedCardProps'

export const props = assign(
  sharedCardProps.props,
  {
    title: String,
    titleTag: {
      type: String,
      default: 'h4'
    },
    subtitle: String,
    subtitleTag: {
      type: String,
      default: 'h6'
    },
    body: String,
    overlay: Boolean,
  }
)

export default {
  functional: true,
  name: 'CCardBody',
  props,
  render (h, { props, data, children }) {
    let cardTitle = h(false)
    let cardSubtitle = h(false)
    let cardContent = children || props.body || [ h(false) ]

    if (props.title) {
      cardTitle = h(props.titleTag, {
        staticClass: 'card-title',
        domProps: { innerHTML: props.title }
      })
    }

    if (props.subtitle) {
      cardSubtitle = h(props.subtitleTag, {
        staticClass: 'card-subtitle mb-2 text-muted',
        domProps: { innerHTML: props.subtitle }
      })
    }

    return h(
      props.tag || 'div',
      mergeData(data, {
        staticClass: 'card-body',
        class: [
          {
            'card-img-overlay': props.overlay,
            [`bg-${props.variant}`]: Boolean(props.variant),
            [`border-${props.borderVariant}`]: Boolean(props.borderVariant),
            [`text-${props.textVariant}`]: Boolean(props.textVariant)
          }
        ]
      }),
      [ cardTitle, cardSubtitle, ...cardContent ]
    )
  }
}
