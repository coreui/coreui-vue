<script>
import CLink, { props } from '../link/CLink'
import { mergeData } from 'vue-functional-data-merge'

export default {
  functional: true,
  name: 'CCardLink',
  props,
  render (h, { props, data, children }) {
    return h(
      CLink,
      mergeData(data, {
        staticClass: 'card-link',
        props
      }),
      children
    )
  }
}
</script>