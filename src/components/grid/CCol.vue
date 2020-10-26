<script>
import { mergeData } from 'vue-functional-data-merge'

export default {
  functional: true,
  name: 'CCol',
  props: {
    col: [ Boolean, String, Number, Object ],
    xs: [ Boolean, String, Number, Object ],
    sm: [ Boolean, String, Number, Object ],
    md: [ Boolean, String, Number, Object ],
    lg: [ Boolean, String, Number, Object ],
    xl: [ Boolean, String, Number, Object ],
    xxl: [ Boolean, String, Number, Object ],
    tag: {
      type: String,
      default: 'div'
    }
  },
  render (h, { props, data, children }) {
    let classes = []
    let suffixes = {
      'col': '', 
      'xs': '-xs', 
      'sm': '-sm', 
      'md': '-md', 
      'lg': '-lg', 
      'xl': '-xl',
      'xxl': '-xxl',
    }
    Object.keys(suffixes).forEach((key) => {
      const prop = props[key]
      if (prop === true) {
        classes.push(`col${suffixes[key]}`)

      } else if (typeof prop === 'number' || typeof prop === 'string') {
        classes.push(`col${suffixes[key]}-${prop}`)
        
      } else if (typeof prop === 'object') {
        if (prop.size) {
          classes.push(`col${suffixes[key]}-${prop.size}`)
        }
        if (prop.offset) {
          classes.push(`offset${suffixes[key]}-${prop.offset}`)
        }
        if (prop.order) {
          classes.push(`order${suffixes[key]}-${prop.order}`)
        }
      }
    })
    return h(
      props.tag,
      mergeData(data,
        {
          class: classes.length ? classes : 'col'
        }
      ),
      children
     )
  }
}
</script>
