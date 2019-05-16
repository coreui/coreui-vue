<script>
import { mergeData } from 'vue-functional-data-merge'
import CLink, { propsFactory } from '../Link/CLink'

export default {
  functional: true,
  name: 'CDropdownItem',
  props: propsFactory(),
  render (h, { props, data, children }) {
    return h(
      CLink,
      mergeData(data, {
        props,
        staticClass: 'c-dropdown-item',
        attrs: { role: 'menuitem' }
      }),
      children
    )
  }
}
</script>

<style scoped lang="scss">
  @import "~@coreui/coreui/scss/partials/dropdown.scss";
</style>
