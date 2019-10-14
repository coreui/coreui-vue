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
            [`bg-${props.color}`]: Boolean(props.color),
            [`border-${props.borderColor}`]: Boolean(props.borderColor),
            [`text-${props.textColor}`]: Boolean(props.textColor),
            [`text-${props.align}`]: Boolean(props.align)
          }
        ]
      }),
      [ children ]
    )
  }
}
</script>
