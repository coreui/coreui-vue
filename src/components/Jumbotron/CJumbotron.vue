<script>
import { mergeData } from 'vue-functional-data-merge'

export const props = {
  tag: {
    type: String,
    default: 'div'
  },
  fluid: Boolean,
  header: String,
  lead: String,
  variant: String,
  borderVariant: String,
  textVariant: String,
}

export default {
  functional: true,
  name: 'CJumbotron',
  props,
  render (h, { props, data, slots }) {
    let childNodes = []
    const $slots = slots()

    if ($slots.header || props.header) {
      const header = $slots.header ||
                     h('h1', { staticClass: 'display-3' }, props.header)
      childNodes.push(header)
    }

    if ($slots.lead || props.lead) {
      const lead = $slots.lead || h('p', { staticClass: 'lead' }, props.lead)
      childNodes.push(lead)
    }

    if ($slots.default) {
      childNodes.push($slots.default)
    }

    if (props.fluid) {
      childNodes = [
        h(
          'div',
          { staticClass: 'container-fluid' },
          childNodes
        )
      ]
    }

    return h(
      props.tag,
      mergeData(data, {
        staticClass: 'jumbotron',
        class: {
          'jumbotron-fluid': props.fluid,
          [`text-${props.textVariant}`]: Boolean(props.textVariant),
          [`bg-${props.variant}`]: Boolean(props.variant),
          [`border-${props.borderVariant}`]: Boolean(props.borderVariant),
          'border': Boolean(props.borderVariant)
        }
      }),
      childNodes
    )
  }
}
</script>

<style scoped lang="scss">
  @import "~@coreui/coreui/scss/partials/jumbotron.scss";
  @import "~@coreui/coreui/scss/utilities/_text.scss";
  @import "~@coreui/coreui/scss/utilities/_borders.scss";
  @import "~@coreui/coreui/scss/utilities/_background.scss";
</style>
