import { mergeData } from 'vue-functional-data-merge'
export default {
  name: 'CNavbarNav',
  functional: true,
  props:{
    tag: {
      type: String,
      default: 'ul'
    },
    fill: Boolean,
    justified: Boolean,
  },
  render (h, { props, data, children }) {
    return h(
      props.tag,
      mergeData(data, {
        staticClass: 'navbar-nav',
        class: {
          'nav-fill': props.fill,
          'nav-justified': props.justified
        }
      }),
      children
    )
  }
}
