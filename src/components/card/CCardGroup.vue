<script>
import { mergeData } from 'vue-functional-data-merge'
export default {
  functional: true,
  name: 'CCardGroup',
  props: {
    tag: {
      type: String,
      default: 'div'
    },
    deck:  Boolean,
    columns: Boolean
  },
  render (h, { props, data, children }) {
    const type = props.columns ? 'columns' : props.deck ? 'deck' : 'group'
    return h(
      props.tag,
      mergeData(data, {
        staticClass: `card-${type}`
      }),
      children
    )
  }
}
</script>
