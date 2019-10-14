<script>
import { mergeData } from 'vue-functional-data-merge'
import sharedCardProps from './sharedCardProps'

export default {
  functional: true,
  name: 'CCardFooter',
  props: sharedCardProps,
  render (h, { props, data, children }) {
    return h(
      props.tag || 'footer',
      mergeData(data, {
        staticClass: 'card-footer',
        class: [
          {
            [`text-${props.align}`]: Boolean(props.align),
            [`bg-${props.color}`]: Boolean(props.color),
            [`border-${props.borderColor}`]: Boolean(props.borderColor),
            [`text-${props.textColor}`]: Boolean(props.textColor)
          }
        ]
      }),
      children || [h('div', { domProps: { innerHTML: props.footerHtml } })]
    )
  }
}
</script>
