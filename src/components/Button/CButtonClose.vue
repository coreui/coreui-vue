<script>
import { mergeData } from 'vue-functional-data-merge'
export default {
  name: 'CButtonClose',
  functional: true,
  props: {
    iconHtml: {
      type: String,
      default: '&times;'
    },
    buttonClasses: {
      type: [String, Array, Object],
      default: 'close'
    }
  },
  render (h, { data, props, slots }) {
    return h(
      'button',
      mergeData(data,  {
        class: props.buttonClasses,
        attrs: {
          type: 'button',
          'aria-label': 'Close'
        },
        domProps: !slots().default ? { innerHTML: props.iconHtml } : null
      }),
      slots().default
    )
  }
}
</script>

<style lang="scss">
  @import "~@coreui/coreui/scss/partials/buttons.scss";
  @import "~@coreui/coreui/scss/partials/close.scss";
</style>
