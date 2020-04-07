<script>
import CLink, { propsFactory } from '../link/CLink'

export default {
  name: 'CDropdownItem',
  props: propsFactory(),
  render (h) {
    const data = {
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
    }
    if (this.to) {
      data.nativeOn = {
        click: (e) => {
          this.$parent.$emit('dropdown-close')
          this.$emit('click', e)
        }
      }
    }
    return h(
      CLink,
      data,
      this.$slots.default
    )
  }
}
</script>
