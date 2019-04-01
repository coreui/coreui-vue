import { mergeData } from 'vue-functional-data-merge'
export default {
  name: 'CSpinner',
  functional: true,
  props: {
    grow: Boolean,
    variant: String,
    small: Boolean,
    tag: {
      type: String,
      default: 'span'
    },
    labelText: {
      type: String,
      default: 'Loading...'
    }
  },
  render(h, { props, data, slots }) {
    const label = h('span', { staticClass: 'sr-only' }, props.labelText)
    const type = props.grow ? 'grow' : 'border'
    return h(
      props.tag,
      mergeData(data, {
        attrs: {
          role: 'status',
          'aria-hidden': label ? null : 'true'
        },
        class: [`spinner-${type}`,
                 {
                   [`spinner-${type}-sm`]: props.small,
                   [`text-${props.variant}`]: Boolean(props.variant)
                 }
               ]
      }),
      [label]
    )
  }
}
