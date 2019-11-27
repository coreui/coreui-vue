<script>
import { mergeData } from 'vue-functional-data-merge'

export default {
  functional: true,
  name: 'CCardSubtitle',
  props: {
    tag: {
      type: String,
      default: 'h6'
    }
  },
  render (h, { props, data, children }) {
    return h(
      props.tag,
      mergeData(data, {
        staticClass: 'card-subtitle'
      }),
      children
    )
  }
}
</script>