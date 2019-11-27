<script>
import { mergeData } from 'vue-functional-data-merge'

const props = {
  tag: {
    type: String,
    default: 'div'
  },
  gutters: {
    type: Boolean,
    default: true
  },
  alignVertical: {
    type: String,
    validator: str => ['', 'start', 'end', 'center','baseline', 'stretch'].includes(str)
  },
  alignHorizontal: {
    type: String,
    validator: str => ['', 'start', 'end', 'center','between', 'around'].includes(str)
  },
  form: Boolean
}

export default {
  functional: true,
  name: 'CRow',
  props,
  render (h, { props, data, children }) {
    return h(
      props.tag,
      mergeData(data, {
        staticClass: props.form ? 'form-row' : 'row',
        class: {
          'no-gutters': !props.gutters,
          [`align-items-${props.alignVertical}`]: props.alignVertical,
          [`justify-content-${props.alignHorizontal}`]: props.alignHorizontal
        }
      }),
      children
    )
  }
}
</script>