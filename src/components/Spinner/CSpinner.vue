<script>
import { mergeData } from 'vue-functional-data-merge'
export default {
  name: 'CSpinner',
  functional: true,
  props: {
    grow: Boolean,
    variant: {
      type: String,
      default: 'primary'
    },
    small: Boolean,
    tag: {
      type: String,
      default: 'span'
    }
  },
  render(h, { props, data }) {
    const type = props.grow ? 'grow' : 'border'
    return h(
      props.tag,
      mergeData(data, {
        attrs: {
          role: 'status',
          'aria-hidden': 'false',
          'aria-label': 'Loading'
        },
        class: [
          `c-spinner-${type}`,
          {
            [`c-spinner-${type}-sm`]: props.small,
            [`c-text-${props.variant}`]: Boolean(props.variant)
          }
        ]
      })
    )
  }
}
</script>

<style lang="scss">
  @import "~@coreui/coreui/scss/partials/spinners.scss";
</style>
