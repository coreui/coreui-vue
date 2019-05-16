<script>
import { mergeData } from 'vue-functional-data-merge'

export default {
  name: 'CForm',
  functional: true,
  props: {
    // id: String,
    inline: Boolean,
    // novalidate:  Boolean,
    validated: Boolean,
  },
  render(h, { props, data, children }) {
    return h(
      'c-form',
      mergeData(data, {
        class: {
          'c-form-inline': props.inline,
          'c-was-validated': props.validated
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

<style scoped lang="scss">
  @import "~@coreui/coreui/scss/partials/forms.scss";
</style>
