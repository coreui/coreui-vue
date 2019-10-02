<script>
import { mergeData } from 'vue-functional-data-merge'
import sharedCardProps from './sharedCardProps'
import CCardHeader from './CCardHeader'
import CCardBody from './CCardBody'
import CCardFooter from './CCardFooter'

const props = Object.assign(
  sharedCardProps,
  {
    headerHtml: String,
    bodyHtml: String,
    footerHtml: String,
    bodyWrapper: Boolean
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
          [`text-${props.align}`]: Boolean(props.align),
          [`bg-${props.variant}`]: Boolean(props.variant),
          [`border-${props.borderVariant}`]: Boolean(props.borderVariant),
          [`text-${props.textVariant}`]: Boolean(props.textVariant)
        }
      }),
      [ header, main, footer ]
    )
  }
}
</script>
