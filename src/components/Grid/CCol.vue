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
      'xl': '-xl'
    }
    Object.keys(suffixes).forEach((key) => {
      if (props[key] === true) {
        classes.push(`col${suffixes[key]}`)

      } else if (typeof props[key] === 'number' || typeof props[key] === 'string') {
        classes.push(`col${suffixes[key]}-${props[key]}`)
        
      } else if (typeof props[key] === 'object') {
        if (props[key].size) {
          classes.push(`col${suffixes[key]}-${props[key].size}`)
        }
        if (props[key].offset) {
          classes.push(`offset${suffixes[key]}-${props[key].offset}`)
        }
        if (props[key].order) {
          classes.push(`order${suffixes[key]}-${props[key].order}`)
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
