<script>
import { mergeData } from 'vue-functional-data-merge'

export default {
  functional: true,
  name: 'CDropdownDivider',
  props: {
    tag: {
      type: String,
      default: 'div'
    }
  },
  render (h, { props, data }) {
    return h(
      props.tag,
      mergeData(data, {
        staticClass: 'c-dropdown-divider',
        attrs: { role: 'separator' }
      })
    )
  }
}
</script>

<style lang="scss">
  @import "~@coreui/coreui/scss/partials/dropdown.scss";
</style>
