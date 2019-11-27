<script>
import CLink, { propsFactory } from '../link/CLink'
import { mergeData } from 'vue-functional-data-merge'

const props = Object.assign(
  propsFactory(), 
  { tag: { type: String, default: 'div' } }
)

export default {
  name: 'CNavbarBrand',
  functional: true,
  props,
  render(h, { props, data, children }) {
    const isLink = Boolean(props.to || props.href)
    const tag = isLink ? CLink : props.tag
    return h(
      tag,
      mergeData(data, {
        staticClass: 'navbar-brand',
        props: isLink ? props : null
      }),
      children
    )
  }
}
</script>
