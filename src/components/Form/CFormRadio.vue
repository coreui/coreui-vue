<script>
import CFormCheckbox from './CFormCheckbox'
//solution made to avoid deleting props from CFormCheckbox
const props = Object.assign({}, CFormCheckbox.props)
delete props.trueValue
delete props.falseValue

export default {
  name: 'CFormRadio',
  extends: CFormCheckbox,
  props,
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
