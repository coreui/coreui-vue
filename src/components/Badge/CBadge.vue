<script>
import { mergeData } from 'vue-functional-data-merge'
import CLink, { props as linkProps } from '../Link/CLink'

const props = Object.assign(linkProps, {
  tag: {
    type: String,
    default: 'span'
  },
  variant: {
    type: String,
    default: 'secondary'
  },
  pill: Boolean,
  textHtml: String
})

export default {
  functional: true,
  name:'CBadge',
  props,
  render (h, { props, data, children }) {
    const tag = !props.href && !props.to ? props.tag : CLink
    const domProps = props.textHtml ? { innerHTML: props.textHtml } : null
    const componentData = {
      staticClass: 'c-badge',
      class: [
        `c-badge-${props.variant}`,
        {
          'c-badge-pill': Boolean(props.pill),
          'c-active': props.active,
          'c-disabled': props.disabled
        }
      ],
      domProps,
      props
    }
    return h(tag, mergeData(data, componentData), children)
  }
}
</script>

<style lang="scss">
  @import "~@coreui/coreui/scss/partials/badge.scss";
</style>
