<script>
import { mergeData } from 'vue-functional-data-merge'
export default {
  functional: true,
  name: 'CButtonGroup',
  props: {
    vertical: Boolean,
    size: String,
  },
  render (h, { props, data, children }) {
    return h(
      'div',
      mergeData(data, {
        class: [
          !props.vertical ? 'c-btn-group' : 'c-btn-group-vertical',
          { [`c-btn-group-${props.size}`] : Boolean(props.size) }
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

<style scoped lang="scss">
  @import "~@coreui/coreui/scss/partials/button-group.scss";
</style>
