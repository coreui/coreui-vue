<script>
import { mergeData } from 'vue-functional-data-merge'

const props = {
  noGutters: Boolean,
  alignV: {
    type: String,
    validator: str => ['', 'start', 'end', 'center','baseline', 'stretch'].includes(str)
  },
  alignH: {
    type: String,
    validator: str => ['', 'start', 'end', 'center','between', 'around'].includes(str)
  }
}

export default {
  functional: true,
  name: 'CRow',
  props,
  render (h, { props, data, children }) {
    return h(
      'div',
      mergeData(data, {
        staticClass: 'row',
        class: {
          'no-gutters': props.noGutters,
          [`align-items-${props.alignV}`]: props.alignV,
          [`justify-content-${props.alignH}`]: props.alignH,
        }
      }),
      children
    )
  }
}
</script>

<style lang="scss">
  @import "~@coreui/coreui/scss/partials/grid.scss";
  @import "~@coreui/coreui/scss/utilities/_flex.scss";
</style>
