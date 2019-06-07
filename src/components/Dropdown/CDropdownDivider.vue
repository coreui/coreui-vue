<script>
import { mergeData } from 'vue-functional-data-merge'

export const props = {
  tag: {
    type: String,
    default: 'div'
  }
}

export default {
  functional: true,
  name: 'CDropdownDivider',
  props,
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
