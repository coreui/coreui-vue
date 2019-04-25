<script>
import CFormCheckbox from './CFormCheckbox'
delete CFormCheckbox.props.trueValue
delete CFormCheckbox.props.falseValue

export default {
  name: 'CFormRadio',
  extends: CFormCheckbox,
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

<style scoped lang="scss">
  @import "~@coreui/coreui/scss/partials/forms.scss";
</style>
