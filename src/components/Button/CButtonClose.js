import { mergeData } from 'vue-functional-data-merge'
export default {
  name: 'CButtonClose',
  functional: true,
  props: {
    iconHtml: {
      type: String,
      default: '&times;'
    }
  },
  render (h, { data, props, slots }) {
    return h(
      'button',
      mergeData(data,  {
        staticClass: 'close',
        attrs: {
          type: props.type || 'button',
          'aria-label': props.ariaLabel || 'Close'
        },
        domProps: !slots().default ? { innerHTML: props.iconHtml } : null
      }),
      slots().default
    )
  }
}
