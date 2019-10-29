<script>
import { mergeData } from 'vue-functional-data-merge'
import sharedCardProps from './shared-card-props'
import CCardHeader from './CCardHeader'
import CCardBody from './CCardBody'
import CCardFooter from './CCardFooter'

const props = Object.assign(
  sharedCardProps,
  {
    headerHtml: String,
    bodyHtml: String,
    footerHtml: String,
    bodyWrapper: Boolean,
    accentColor: String
  }
)
export default {
  functional: true,
  name: 'CCard',
  props,
  render (h, { props, data, slots }) {
    let header = h(false)
    let main = slots().default
    let footer = h(false)

    if (props.headerHtml) {
      header = h(CCardHeader, { domProps: { innerHTML: props.headerHtml }})
    }

    if (main === undefined && props.bodyHtml) {
      main = h(CCardBody, { domProps: { innerHTML: props.bodyHtml }})
    } else if (props.bodyWrapper) {
      main = h(CCardBody, main)
    }

    if (props.footerHtml) {
      footer = h(CCardFooter, { domProps: { innerHTML: props.footerHtml }})
    }

    return h(
      props.tag || 'div',
      mergeData(data, {
        staticClass: 'card',
        class: {
          [`card-accent-${props.accentColor}`]: props.accentColor,
          [`text-${props.align}`]: props.align,
          [`bg-${props.color}`]: props.color,
          [`border-${props.borderColor}`]: props.borderColor,
          [`text-${props.textColor}`]: props.textColor
        }
      }),
      [ header, main, footer ]
    )
  }
}
</script>
