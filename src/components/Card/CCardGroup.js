import { mergeData } from 'vue-functional-data-merge'

export const props = {
  tag: String,
  deck:  Boolean,
  columns: Boolean,
}
export default {
  functional: true,
  name: 'CCardGroup',
  props,
  render (h, { props, data, children }) {
    let staticClass = 'card-group'
    if (props.columns)
      staticClass = 'card-columns'
    if (props.deck)
      staticClass = 'card-deck'
    return h(props.tag || 'div' , mergeData(data, { staticClass }), children)
  }
}
