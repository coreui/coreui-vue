<script>
import { mergeData } from 'vue-functional-data-merge'
import CImg from '../image/CImg'
const props = Object.assign(
  { 
    variant: {
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
  render (h, { props, data }) {
    const haveClassSuffix = props.variant !== 'full'
    return h(
      CImg,
      mergeData(data, {
        class: `card-img${haveClassSuffix ? `-${props.variant}` : ''}`,
        props
      })
    )
  }
}
</script>