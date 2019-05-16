<script>
import { mergeData } from 'vue-functional-data-merge'

export const props = {
  type: {
    type: String,
    default: 'iframe',
    validator: type => ['iframe', 'embed', 'video', 'object', 'img'].includes(type)
  },
  aspect: {
    type: String,
    default: '16by9',
    validator: aspect => ['21by9', '16by9', '4by3', '1by1'].includes(aspect)
  },
  tag: {
    type: String,
    default: 'div'
  }
}
export default {
  functional: true,
  name: 'CEmbed',
  props,
  render (h, { props, data, children }) {
    return h(
      props.tag,
      {
        ref: data.ref,
        staticClass: 'c-embed-responsive',
        class: `c-embed-responsive-${props.aspect}`
      },
      [h(
        props.type,
        mergeData(data, { ref: '', staticClass: 'c-embed-responsive-item' }),
        children
      )]
    )
  }
}
</script>

<style scoped lang="scss">
  @import "~@coreui/coreui/scss/bootstrap.scss";
  @import "~@coreui/coreui/scss/utilities/_embed.scss";
</style>
