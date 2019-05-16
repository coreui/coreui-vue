<script>
import { mergeData } from 'vue-functional-data-merge'

export default {
  functional: true,
  name: 'CListGroup',
  props: {
    tag: {
      type: String,
      default: 'div'
    },
    flush: Boolean,
  },
  render (h, { props, data, children }) {
    const componentData = {
      staticClass: 'c-list-group',
      class: { 'c-list-group-flush': props.flush }
    }
    return h(props.tag, mergeData(data, componentData), children)
  }
}
</script>

<style scoped lang="scss">
  @import "~@coreui/coreui/scss/partials/list-group.scss";
</style>
