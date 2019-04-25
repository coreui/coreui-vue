<script>
import { mergeData } from 'vue-functional-data-merge'
export default {
  functional: true,
  name: 'CButtonToolbar',
  props: {
    justify: Boolean,
  },
  render (h, { props, data, children }) {
    return h(
      'div',
      mergeData(data, {
        class: [
          'btn-toolbar',
          props.justify ? 'justify-content-between' : ''
        ],
        attrs: {
          role: 'toolbar'
        }
      }),
      children
    )
  }
}
</script>

<style scoped lang="scss">
  @import "~@coreui/coreui/scss/partials/button-group.scss";
  @import "~@coreui/coreui/scss/utilities/_flex.scss";

</style>
