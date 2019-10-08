<script>
import { mergeData } from 'vue-functional-data-merge'

export default {
  functional: true,
  name: 'CContainer',
  props: {
    fluid: Boolean,
    tag: String
  },
  render (h, { props, data, children }) {
    return h(
      props.tag || 'div',
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
