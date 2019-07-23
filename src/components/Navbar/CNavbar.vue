<script>
import { mergeData } from 'vue-functional-data-merge'

export const props = {
  tag: {
    type: String,
    default: 'nav'
  },
  light: Boolean,
  variant: {
    type: String,
    default: 'primary'
  },
  toggleable: {
    type: [Boolean, String],
    default: false,
    validator: val => ['', false, true, 'sm', 'md', 'lg', 'xl'].includes(val)
  },
  fixed: {
    type: String,
    validator: val => ['', 'top', 'bottom'].includes(val)
  },
  sticky: Boolean,
  print: Boolean
}

export default {
  name: 'CNavbar',
  functional: true,
  props,
  render (h, { props, data, children }) {
    const expandClassSuffix = props.toggleable === true ? '' : props.toggleable
    return h(
      props.tag,
      mergeData(data, {
        staticClass: 'c-navbar',
        class: [
          props.light ? 'c-navbar-light' : 'c-navbar-dark',
          {
            'c-d-print': props.print,
            'c-sticky-top': props.sticky,
            [`c-bg-${props.variant}`]: Boolean(props.variant),
            [`c-fixed-${props.fixed}`]: Boolean(props.fixed),
            [`c-navbar-expand-${expandClassSuffix}`]: Boolean(props.toggleable)
          }
        ],
        attrs: {
          role: props.tag === 'nav' ? null : 'navigation'
        }
      }),
      children
    )
  }
}
</script>

<style lang="scss">
  @import "~@coreui/coreui/scss/partials/navbar.scss";
  @import "~@coreui/coreui/scss/utilities/_background.scss";
  @import "~@coreui/coreui/scss/utilities/_text.scss";
  @import "~@coreui/coreui/scss/utilities/_display.scss";
  @import "~@coreui/coreui/scss/utilities/_position.scss";
</style>
