<script>
import { mergeData } from 'vue-functional-data-merge'

export const props = {
  type: {
    type: String,
    default: 'iframe',
    validator: type => ['iframe', 'embed', 'video', 'object', 'img'].includes(type)
  },
  ratio: {
    type: String,
    default: '16by9',
    validator: ratio => ['21by9', '16by9', '4by3', '1by1'].includes(ratio)
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
        class: `embed-responsive-${props.ratio}`
      },
      [h(
        props.type,
        mergeData(data, { ref: '', staticClass: 'embed-responsive-item' }),
        children
      )]
    )
  }
}
</script>