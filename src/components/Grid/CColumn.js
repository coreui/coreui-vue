import { mergeData } from 'vue-functional-data-merge'

export default {
  functional: true,
  name: 'CColumn',
  render (h, { props, data, children }) {
    return h(
      'div',
      mergeData(data,
        {
          class: { col: !data.class && !data.staticClass }
        }
      ),
      children
     )
  }
}
