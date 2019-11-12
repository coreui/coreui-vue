<script>
import { mergeData } from 'vue-functional-data-merge'
import sharedCardProps from './shared-card-props'

export default {
  functional: true,
  name: 'CCardHeader',
  props: sharedCardProps,
  render (h, { props, data, children }) {
    return h(
      props.tag || 'header',
      mergeData(data, {
        staticClass: 'card-header',
        class: [
          {
            [`text-${props.align}`]: Boolean(props.align),
            [`bg-${props.color}`]: Boolean(props.color),
            [`border-${props.borderColor}`]: Boolean(props.borderColor),
            [`text-${props.textColor}`]: Boolean(props.textColor)
          }
        ]
      }),
      children
    )
  }
}
</script>