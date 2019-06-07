<script>
import { mergeData } from 'vue-functional-data-merge'

export default {
  functional: true,
  name: 'CContainer',
  props: {
    fluid: Boolean,
  },
  render (h, { props, data, children }) {
    return h(
      'div',
      mergeData(data, {
        class: {
          'c-container': !props.fluid,
          'c-container-fluid': props.fluid
        }
      }),
      children
    )
  }
}
</script>

<style lang="scss">
  @import "~@coreui/coreui/scss/partials/grid.scss";
</style>
