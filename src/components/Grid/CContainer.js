import { mergeData } from 'vue-functional-data-merge'

export default {
  functional: true,
  props: {
    fluid: Boolean,
  },
  render (h, { props, data, children }) {
    return h(
      'div',
      mergeData(data, {
        class: {
          'container': !props.fluid,
          'container-fluid': props.fluid
        }
      }),
      children
    )
  }
}
