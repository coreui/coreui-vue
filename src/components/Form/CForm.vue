<script>
import { mergeData } from 'vue-functional-data-merge'

export default {
  name: 'CForm',
  functional: true,
  props: {
    inline: Boolean,
    wasValidated: Boolean
  },
  render(h, { props, data, children }) {
    return h(
      'form',
      mergeData(data, {
        class: {
          'form-inline': props.inline,
          'was-validated': props.wasValidated
        }
      }),
      children
    )
  }
}
</script>
