<script>
import { mergeData } from 'vue-functional-data-merge'

export default {
  functional: true,
  name: 'CJumbotron',
  props: {
    tag: {
      type: String,
      default: 'div'
    },
    fluid: Boolean,
    color: String,
    borderColor: String,
    textColor: String
  },
  render (h, { props, data, children }) {
    return h(
      props.tag,
      mergeData(data, {
        staticClass: 'jumbotron',
        class: {
          'jumbotron-fluid': props.fluid,
          [`text-${props.textColor}`]: props.textColor,
          [`bg-${props.color}`]: props.color,
          [`border-${props.borderColor}`]: props.borderColor,
          'border': props.borderColor
        }
      }),
      children
    )
  }
}
</script>
