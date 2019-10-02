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
            [`bg-${props.variant}`]: Boolean(props.variant),
            [`border-${props.borderVariant}`]: Boolean(props.borderVariant),
            [`text-${props.textVariant}`]: Boolean(props.textVariant)
          }
        ]
      }),
      children || [h('div', { domProps: { innerHTML: props.footerHtml } })]
    )
  }
}
</script>
