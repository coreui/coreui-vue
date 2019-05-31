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
    let prefixes = {'col': '', 'xs': '-xs', 'sm': '-sm',
                    'md': '-md', 'lg': '-lg', 'xl': '-xl'}
    Object.keys(prefixes).forEach((key) => {
      if (props[key] === true)
        classes.push(`c-col${prefixes[key]}`)

      if (typeof props[key] === 'number' || typeof props[key] === 'string')
        classes.push(`c-col${prefixes[key]}-${props[key]}`)

      if (typeof props[key] === 'object') {
        if(props[key].size)
          classes.push(`c-col${prefixes[key]}-${props[key].size}`)

        if(props[key].offset)
          classes.push(`c-offset${prefixes[key]}-${props[key].offset}`)

        if(props[key].order)
          classes.push(`c-order${prefixes[key]}-${props[key].order}`)
      }
    })
    return h(
      props.tag,
      mergeData(data,
        {
          class: classes.length ? classes : 'c-col'
        }
      ),
      children
     )
  }
}
</script>

<style lang="scss">
  @import "~@coreui/coreui/scss/partials/grid.scss";
</style>
