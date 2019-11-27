<script>
import { mergeData } from 'vue-functional-data-merge'

export default {
  functional: true,
  name: 'CContainer',
  props: {
    fluid: Boolean,
    tag: {
      type: String,
      default: 'div'
    }
  },
  render (h, { props, data, children }) {
    return h(
      props.tag,
      mergeData(data, {
        class: {
          'container': !props.fluid,
          'container-fluid': props.fluid
        }
      }),
      children
    )
  }
}
</script>
