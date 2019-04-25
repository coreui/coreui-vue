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
    xl: [ Boolean, String, Number, Object ]
  },
  render (h, { props, data, children }) {
    let classes = []
    let prefixes = {'col': '', '-xs': 'xs', 'sm': '-sm',
                    'md': '-md', 'lg': '-lg', 'xl': '-xl'}
    Object.keys(props).forEach((key) => {
      if (props[key] === true)
        classes.push(`col${prefixes[key]}`)

      if (typeof props[key] === 'number' || typeof props[key] === 'string')
        classes.push(`col${prefixes[key]}-${props[key]}`)

      if (typeof props[key] === 'object') {
        if(props[key].size)
          classes.push(`col${prefixes[key]}-${props[key].size}`)

        if(props[key].offset)
          classes.push(`offset${prefixes[key]}-${props[key].offset}`)

        if(props[key].order)
          classes.push(`order${prefixes[key]}-${props[key].order}`)
      }
    })
    return h(
      'div',
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

<style scoped lang="scss">
  @import "~@coreui/coreui/scss/partials/grid.scss";
</style>
