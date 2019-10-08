<script>
import { mergeData } from 'vue-functional-data-merge'

export default {
  functional: true,
  name: 'CCardText',
  props: {
    tag: String
  },
  render (h, { props, data, children }) {
    return h(
      props.tag || 'p',
      mergeData(data, {
        staticClass: 'card-text'
      }),
      children
    )
  }
}
</script>