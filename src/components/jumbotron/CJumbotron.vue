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
    textColor: String,
  },
  render (h, { props, data, slots }) {
    let childNodes = slots().default

    if (props.fluid) {
      childNodes = [
        h(
          'div',
          { staticClass: 'container-fluid' },
          childNodes
        )
      ]
    }

    return h(
      props.tag,
      mergeData(data, {
        staticClass: 'jumbotron',
        class: {
          'jumbotron-fluid': props.fluid,
          [`text-${props.textColor}`]: Boolean(props.textColor),
          [`bg-${props.color}`]: Boolean(props.color),
          [`border-${props.borderColor}`]: Boolean(props.borderColor),
          'border': Boolean(props.borderColor)
        }
      }),
      childNodes
    )
  }
}
</script>
