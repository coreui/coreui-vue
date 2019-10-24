<script>
import { mergeData } from 'vue-functional-data-merge'

export default {
  functional: true,
  name: 'CCardTitle',
  props: {
    tag: String
  },
  render (h, { props, data, children }) {
    return h(
      props.tag || 'h4',
      mergeData(data, {
        staticClass: 'card-title'
      }),
      children
    )
  }
}
</script>