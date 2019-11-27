<script>
import { mergeData } from 'vue-functional-data-merge'

export default {
  functional: true,
  name: 'CCardImgOverlay',
  props: {
    tag: {
      type: String,
      default: 'div'
    }
  },
  render (h, { props, data, children }) {
    return h(
      props.tag,
      mergeData(data, {
        staticClass: 'card-img-overlay'
      }),
      children
    )
  }
}
</script>