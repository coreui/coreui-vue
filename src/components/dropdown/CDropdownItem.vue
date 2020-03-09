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
        on: {
          //listeners added, due to component was previously functional for compatibility
          ...this.$listeners,
          click: (e) => {
            this.$parent.$emit('dropdown-close')
            this.$emit('click', e)
          }
        }
      },
      this.$slots.default
    )
  }
}
</script>
