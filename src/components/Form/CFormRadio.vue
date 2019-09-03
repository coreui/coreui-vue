<script>
import CFormCheckbox from './CFormCheckbox'
import { formRadioProps as props } from './formProps'

export default {
  name: 'CFormRadio',
  extends: Object.assign({}, CFormCheckbox, { props }),
  type: 'radio',
  methods: {
    getCheckState () {
      return this.checked === this.value
    },
    getValue () {
      return this.value
    }
  }
}
</script>

<style lang="scss">
  @import "~@coreui/coreui/scss/partials/forms.scss";
</style>
