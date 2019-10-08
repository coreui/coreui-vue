<script>
import { mergeData } from 'vue-functional-data-merge'

export default {
  functional: true,
  name: 'CCardImgOverlay',
  props: {
    tag: String
  },
  render (h, { props, data, children }) {
    return h(
      props.tag || 'div',
      mergeData(data, {
        staticClass: 'card-img-overlay'
      }),
      children
    )
  }
}
</script>