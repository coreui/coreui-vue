<script>
import { mergeData } from 'vue-functional-data-merge'
import sharedCardProps from './shared-card-props'

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
            [`bg-${props.color}`]: props.color,
            [`border-${props.borderColor}`]: props.borderColor,
            [`text-${props.textColor}`]: props.textColor,
            [`text-${props.align}`]: props.align
          }
        ]
      }),
      [ children ]
    )
  }
}
</script>
