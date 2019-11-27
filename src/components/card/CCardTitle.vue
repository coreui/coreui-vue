<script>
import { mergeData } from 'vue-functional-data-merge'

export default {
  functional: true,
  name: 'CCardTitle',
  props: {
    tag: {
      type: String,
      default: 'h4'
    }
  },
  render (h, { props, data, children }) {
    return h(
      props.tag,
      mergeData(data, {
        staticClass: 'card-title'
      }),
      children
    )
  }
}
</script>