<script>
import { mergeData } from 'vue-functional-data-merge'

export default {
  functional: true,
  name: 'CCardText',
  props: {
    tag: {
      type: String,
      default: 'p'
    }
  },
  render (h, { props, data, children }) {
    return h(
      props.tag,
      mergeData(data, {
        staticClass: 'card-text'
      }),
      children
    )
  }
}
</script>