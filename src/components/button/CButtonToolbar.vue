<script>
import { mergeData } from 'vue-functional-data-merge'
export default {
  functional: true,
  name: 'CButtonToolbar',
  props: {
    justify: {
      type: String,
      validator: val => ['', 'start', 'end', 'between', 'center'].includes(val)
    }
  },
  render (h, { props, data, children }) {
    return h(
      'div',
      mergeData(data, {
        class: [
          'btn-toolbar',
          { [`justify-content-${props.justify}`]: props.justify }
        ],
        attrs: {
          'aria-label': 'toolbar',
          role: 'toolbar'
        }
      }),
      children
    )
  }
}
</script>
