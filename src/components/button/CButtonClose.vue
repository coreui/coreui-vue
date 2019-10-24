<script>
import { mergeData } from 'vue-functional-data-merge'
export default {
  name: 'CButtonClose',
  functional: true,
  props: {
    buttonClasses: {
      type: [String, Array, Object],
      default: 'close'
    }
  },
  render (h, { data, props, slots }) {
    return h(
      'button',
      mergeData(data,  {
        class: props.buttonClasses,
        attrs: {
          type: 'button',
          'aria-label': 'Close'
        },
        domProps: !slots().default ? { innerHTML: '&times;' } : null
      }),
      slots().default
    )
  }
}
</script>
