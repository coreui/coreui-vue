<script>
import CLink, { propsFactory } from '../link/CLink'
import { mergeData } from 'vue-functional-data-merge'
const props = Object.assign(propsFactory(),  { tag: { type: String, default: 'div' }})

export default {
  functional: true,
  name: 'CHeaderBrand',
  props,
  render (h, { props, data, children }) {
    const isLink = props.href || props.to
    return h(
      isLink ? CLink : props.tag,
      mergeData(data, {
        staticClass: 'c-header-brand',
        props: isLink ? props : {}
      }),
      children
    )
  }
}
</script>
