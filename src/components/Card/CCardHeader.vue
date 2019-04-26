<script>
import { mergeData } from 'vue-functional-data-merge'
import sharedCardProps from './sharedCardProps'

export const props = Object.assign(
  sharedCardProps.props,
  {
    headerHtml: String
  }
)

export default {
  functional: true,
  name: 'CCardHeader',
  props,
  render (h, { props, data, children }) {
    return h(
      props.tag || 'header',
      mergeData(data, {
        staticClass: 'card-header',
        class: [
          {
            [`text-${props.align}`]: Boolean(props.align),
            [`bg-${props.variant}`]: Boolean(props.variant),
            [`border-${props.borderVariant}`]: Boolean(props.borderVariant),
            [`text-${props.textVariant}`]: Boolean(props.textVariant)
          }
        ]
      }),
      children || [h('div', { domProps: { innerHTML: props.headerHtml } })]
    )
  }
}
</script>

<style scoped lang="scss">
  @import "~@coreui/coreui/scss/partials/card.scss";
  @import "~@coreui/coreui/scss/utilities/_background.scss";
  @import "~@coreui/coreui/scss/utilities/_text.scss";
  @import "~@coreui/coreui/scss/utilities/_borders.scss";
</style>
