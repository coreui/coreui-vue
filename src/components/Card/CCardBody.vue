<script>
import { mergeData } from 'vue-functional-data-merge'
import sharedCardProps from './sharedCardProps'

export const props = Object.assign(
  sharedCardProps,
  {
    titleHtml: String,
    titleTag: {
      type: String,
      default: 'h4'
    },
    subtitleHtml: String,
    subtitleTag: {
      type: String,
      default: 'h6'
    },
    bodyHtml: String,
    overlay: Boolean,
  }
)

export default {
  functional: true,
  name: 'CCardBody',
  props,
  render (h, { props, data, children }) {
    let cardTitle = h(false)
    let cardSubtitle = h(false)
    let cardContent = children

    if (props.title) {
      cardTitle = h(props.titleTag, {
        staticClass: 'c-card-title',
        domProps: { innerHTML: props.titleHtml }
      })
    }

    if (props.subtitle) {
      cardSubtitle = h(props.subtitleTag, {
        staticClass: 'c-card-subtitle c-mb-2 c-text-muted',
        domProps: { innerHTML: props.subtitleHtml }
      })
    }

    if (props.bodyHtml && cardContent === undefined) {
      cardContent = h(
        props.tag || 'div',
        { domProps: { innerHTML: props.bodyHtml}}
      )
    }

    return h(
      props.tag || 'div',
      mergeData(data, {
        staticClass: 'c-card-body',
        class: [
          {
            'c-card-img-overlay': props.overlay,
            [`c-bg-${props.variant}`]: Boolean(props.variant),
            [`c-border-${props.borderVariant}`]: Boolean(props.borderVariant),
            [`c-text-${props.textVariant}`]: Boolean(props.textVariant),
            [`c-text-${props.align}`]: Boolean(props.align)
          }
        ]
      }),
      [ cardTitle, cardSubtitle, cardContent ]
    )
  }
}
</script>

<style lang="scss">
  @import "~@coreui/coreui/scss/partials/card.scss";
  @import "~@coreui/coreui/scss/utilities/_background.scss";
  @import "~@coreui/coreui/scss/utilities/_text.scss";
  @import "~@coreui/coreui/scss/utilities/_borders.scss";
</style>
