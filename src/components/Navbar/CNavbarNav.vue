<script>
import { mergeData } from 'vue-functional-data-merge'
export default {
  name: 'CNavbarNav',
  functional: true,
  props:{
    tag: {
      type: String,
      default: 'ul'
    },
    fill: Boolean,
    justified: Boolean,
  },
  render (h, { props, data, children }) {
    return h(
      props.tag,
      mergeData(data, {
        staticClass: 'c-navbar-nav',
        class: {
          'c-nav-fill': props.fill,
          'c-nav-justified': props.justified
        }
      }),
      children
    )
  }
}
</script>
