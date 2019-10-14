<script>
import { mergeData } from 'vue-functional-data-merge'
export default {
  functional: true,
  name: 'CDropdownHeader',
  props: {
    tag: {
      type: String,
      default: 'div'
    },
    color: String
  },
  render (h, { props, data, children }) {
    return h(
      props.tag,
      mergeData(data, {
        staticClass: 'dropdown-header',
        class: { [`bg-${props.color}`]: props.color }
      }),
      children
    )
  }
}
</script>
