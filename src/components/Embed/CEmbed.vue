<script>
import { mergeData } from 'vue-functional-data-merge'

export const props = {
  type: {
    type: String,
    default: 'iframe',
    validator: type => ['iframe', 'embed', 'video', 'object', 'img'].indexOf(type) !== -1
  },
  aspect: {
    type: String,
    default: '16by9',
    validator: aspect => ['21by9', '16by9', '4by3', '1by1'].indexOf(aspect) !== -1
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
        staticClass: 'embed-responsive',
        class:`embed-responsive-${props.aspect}`
      },
      [h(props.type, mergeData(data, { ref: '', staticClass: 'embed-responsive-item' }), children)]
    )
  }
}
</script>

<style scoped lang="scss">
  @import "~@coreui/coreui/scss/bootstrap.scss";
  @import "~@coreui/coreui/scss/utilities/_embed.scss";
</style>
