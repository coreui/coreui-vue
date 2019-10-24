<script>
import { mergeData } from 'vue-functional-data-merge'
export default {
  name: 'CToggler',
  functional: true,
  props: {
    tag: {
      type: String,
      default: 'button'
    },
    inHeader: Boolean,
    inNavbar: Boolean
  },
  render (h, { data, props, slots }) {
    const attrs = props.tag === 'button' ? { type: 'button' } : null
    const type = props.inNavbar ? 'navbar' : props.inHeader ? 'c-header' : null 
    const staticClass = type ? `${type}-toggler` : ''
    const iconClass = type ? `${staticClass}-icon` : ''
    return h(
      props.tag,
      mergeData({
        staticClass,
        attrs
      }, data),
      [ 
        slots().default || 
        h('span', { class: iconClass })
      ]
    )
  }
}
</script>