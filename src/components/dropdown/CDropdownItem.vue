<script>
import CLink, { propsFactory } from '../link/CLink'

export default {
  name: 'CDropdownItem',
  props: propsFactory(),
  render (h) {
    return h(
      CLink,
      {
        props: this._props,
        staticClass: 'dropdown-item',
        attrs: { role: 'menuitem' },
        on: { click: () => this.$parent.$emit('dropdown-close') }
      },
      this.$slots.default
    )
  }
}
</script>
