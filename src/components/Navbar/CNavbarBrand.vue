<script>
import CLink, { propsFactory } from '../Link/CLink'
import { mergeData } from 'vue-functional-data-merge'

const props = Object.assign(propsFactory(), { tag: String })

export default {
  name: 'CNavbarBrand',
  functional: true,
  props,
  render(h, { props, data, children }) {
    const isLink = Boolean(props.to || props.href)
    const tag = isLink ? CLink : props.tag || 'div'
    return h(
      tag,
      mergeData(data, {
        staticClass: 'c-navbar-brand',
        props: isLink ? props : null
      }),
      children
    )
  }
}
</script>
