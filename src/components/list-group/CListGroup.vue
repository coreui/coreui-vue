<script>
import { mergeData } from 'vue-functional-data-merge'

export default {
  functional: true,
  name: 'CListGroup',
  props: {
    tag: {
      type: String,
      default: 'ul'
    },
    flush: Boolean,
    horizontal: [Boolean, String],
    accent: Boolean
  },
  render (h, { props, data, children }) {
    const hor = props.horizontal
    const horizontalClassSuffix = typeof hor === 'string' ? `-${hor}` : ''
    const componentData = {
      staticClass: 'list-group',
      class: { 
        'list-group-flush': !hor && props.flush,
        [`list-group-horizontal${horizontalClassSuffix}`]: hor,
        'list-group-accent': props.accent
      },
      attrs: {
        role: data.attrs ? data.attrs.role || 'list-items' : 'list-items'
      }
    }
    return h(props.tag, mergeData(data, componentData), children)
  }
}
</script>
