<script>
import { mergeData } from 'vue-functional-data-merge'
import sharedCardProps from './shared-card-props'
import CCardBody from './CCardBody'

const props = Object.assign(
  sharedCardProps,
  {
    bodyWrapper: Boolean,
    accentColor: String
  }
)
export default {
  functional: true,
  name: 'CCard',
  props,
  render (h, { props, data, slots }) {
    const slot = slots().default
    const content = props.bodyWrapper ? h(CCardBody, slot) : slot

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
      [content]
    )
  }
}
</script>
