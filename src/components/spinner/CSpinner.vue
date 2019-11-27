<script>
import { mergeData } from 'vue-functional-data-merge'
export default {
  name: 'CSpinner',
  functional: true,
  props: {
    grow: Boolean,
    color: String,
    size: String,
    tag: {
      type: String,
      default: 'div'
    }
  },
  render(h, { props, data }) {
    const type = props.grow ? 'grow' : 'border'
    return h(
      props.tag,
      mergeData(data, {
        attrs: {
          role: 'status',
          'aria-hidden': 'false',
          'aria-label': 'Loading'
        },
        class: [
          `spinner-${type}`,
          {
            [`spinner-${type}-${props.size}`]: props.size,
            [`text-${props.color}`]: props.color
          }
        ]
      })
    )
  }
}
</script>
