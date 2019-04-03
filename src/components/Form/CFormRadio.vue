<script>
import CFormCheckbox from './CFormCheckbox'
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
