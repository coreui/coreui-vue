<script>
import { mergeData } from 'vue-functional-data-merge'
import CImg from '../Image/CImg'
const props = Object.assign(
  { 
    placement: {
      type: String,
      default: 'full',
      validator: val => ['', 'top', 'bottom', 'full'].includes(val)
    }
  },
  CImg.props
)

export default {
  functional: true,
  name: 'CCardImg',
  props,
  render (h, { props, data, children }) {
    const haveClassSuffix = ['bottom', 'top'].includes(props.placement)
    return h(
      CImg,
      mergeData(data, {
        class: `card-img${haveClassSuffix ? `-${props.placement}` : ''}`,
        props
      }),
      children
    )
  }
}
</script>