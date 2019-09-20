<script>
import { mergeData } from 'vue-functional-data-merge'

export default {
  name: 'CForm',
  functional: true,
  props: {
    // id: String,
    inline: Boolean,
    // novalidate:  Boolean,
    wasValidated: Boolean,
  },
  render(h, { props, data, children }) {
    return h(
      'form',
      mergeData(data, {
        class: {
          'form-inline': props.inline,
          'was-validated': props.wasValidated
        },
        // attrs: {
        //   id: props.id,
        //   novalidate: props.novalidate
        // }
      }),
      children
    )
  }
}
</script>

<style lang="scss">
  @import "~@coreui/coreui/scss/partials/forms.scss";
</style>
