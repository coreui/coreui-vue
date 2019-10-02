<script>
import { mergeData } from 'vue-functional-data-merge'
import sharedCardProps from './sharedCardProps'

export default {
  functional: true,
  name: 'CCardBody',
  props: sharedCardProps,
  render (h, { props, data, children }) {
    return h(
      props.tag || 'div',
      mergeData(data, {
        staticClass: 'card-body',
        class: [
          {
            [`bg-${props.variant}`]: Boolean(props.variant),
            [`border-${props.borderVariant}`]: Boolean(props.borderVariant),
            [`text-${props.textVariant}`]: Boolean(props.textVariant),
            [`text-${props.align}`]: Boolean(props.align)
          }
        ]
      }),
      [ children ]
    )
  }
}
</script>
