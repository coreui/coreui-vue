<script>
import { mergeData } from 'vue-functional-data-merge'
export default {
  name: 'CNavbarNav',
  functional: true,
  props:{
    tag: {
      type: String,
      default: 'ul'
    }
  },
  render (h, { props, data, children }) {
    return h(
      props.tag,
      mergeData(data, {
        staticClass: 'navbar-nav'
      }),
      children
    )
  }
}
</script>
