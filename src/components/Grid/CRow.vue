<script>
import { mergeData } from 'vue-functional-data-merge'
import { arrayIncludes } from '../../utils/array'

const props = {
  noGutters: Boolean,
  alignV: {
    type: String,
    validator: str => arrayIncludes(['start', 'end', 'center','baseline', 'stretch'], str)
  },
  alignH: {
    type: String,
    validator: str => arrayIncludes(['start', 'end', 'center','between', 'around'], str)
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

<style scoped lang="scss">
  @import "~@coreui/coreui/scss/partials/grid.scss";
  @import "~@coreui/coreui/scss/utilities/_flex.scss";
</style>
