<script>
import { mergeData } from 'vue-functional-data-merge'
import sharedCardProps from './sharedCardProps'

export const props = Object.assign(
  sharedCardProps.props,
  {
    footerHtml:  String,
  }
)

export default {
  functional: true,
  name: 'CCardFooter',
  props,
  render (h, { props, data, children }) {
    return h(
      props.tag || 'footer',
      mergeData(data, {
        staticClass: 'c-card-footer',
        class: [
          {
            [`c-text-${props.align}`]: Boolean(props.align),
            [`c-bg-${props.variant}`]: Boolean(props.variant),
            [`c-border-${props.borderVariant}`]: Boolean(props.borderVariant),
            [`c-text-${props.textVariant}`]: Boolean(props.textVariant)
          }
        ]
      }),
      children || [h('div', { domProps: { innerHTML: props.footerHtml } })]
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
