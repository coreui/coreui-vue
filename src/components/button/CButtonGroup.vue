<script>
import { mergeData } from 'vue-functional-data-merge'
export default {
  functional: true,
  name: 'CButtonGroup',
  props: {
    vertical: Boolean,
    size: {
      type: String,
      validator: size => ['', 'sm', 'lg'].includes(size)
    }
  },
  render (h, { props, data, children }) {
    return h(
      'div',
      mergeData(data, {
        class: [
          !props.vertical ? 'btn-group' : 'btn-group-vertical',
          { [`btn-group-${props.size}`] : props.size }
        ],
        attrs: {
          role: 'group'
        }
      }),
      children
    )
  }
}
</script>
