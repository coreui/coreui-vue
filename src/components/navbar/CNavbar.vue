<script>
import { mergeData } from 'vue-functional-data-merge'

export const props = {
  tag: {
    type: String,
    default: 'nav'
  },
  light: Boolean,
  color: String,
  expandable: {
    type: [Boolean, String],
    default: false
  },
  fixed: {
    type: String,
    validator: val => ['', 'top', 'bottom'].includes(val)
  },
  sticky: Boolean
}

export default {
  name: 'CNavbar',
  functional: true,
  props,
  render (h, { props, data, children }) {
    const expandClassSuffix = props.expandable === true ? '' : `-${props.expandable}`
    return h(
      props.tag,
      mergeData(data, {
        staticClass: 'navbar',
        class: [
          props.light ? 'navbar-light' : 'navbar-dark',
          {
            'sticky-top': props.sticky,
            [`bg-${props.color}`]: props.color,
            [`fixed-${props.fixed}`]: props.fixed,
            [`navbar-expand${expandClassSuffix}`]: props.expandable
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