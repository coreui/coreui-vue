<script>
import { mergeData } from 'vue-functional-data-merge'

export default {
  functional: true,
  name: 'CCardSubtitle',
  props: {
    tag: String
  },
  render (h, { props, data, children }) {
    return h(
      props.tag || 'h6',
      mergeData(data, {
        staticClass: 'card-subtitle'
      }),
      children
    )
  }
}
</script>