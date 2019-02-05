import { mergeData } from 'vue-functional-data-merge'

export const props = {
  tag: {
    type: String,
    default: 'nav'
  },
  light: Boolean,
  variant: String,
  toggleable: {
    type: [Boolean, String],
    default: false
  },
  fixed: String,
  sticky: Boolean,
  print: Boolean
}

export default {
  name: 'CNavbar',
  functional: true,
  props,
  render (h, { props, data, children }) {
    let breakpoint = ''
    if (props.toggleable && typeof props.toggleable === 'string' && props.toggleable !== 'xs') {
      breakpoint = `navbar-expand-${props.toggleable}`
    } else if (props.toggleable === false) {
      breakpoint = 'navbar-expand'
    }
    return h(
      props.tag,
      mergeData(data, {
        staticClass: 'navbar',
        class: [
          props.light ? 'navbar-light' : 'navbar-dark',
          {
            'd-print': props.print,
            'sticky-top': props.sticky,
            [`bg-${props.variant}`]: Boolean(props.variant),
            [`fixed-${props.fixed}`]: Boolean(props.fixed),
            [`${breakpoint}`]: Boolean(breakpoint)
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
