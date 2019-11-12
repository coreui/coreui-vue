<script>
export default {
  name: 'CTab',
  props: {
    title: String, 
    active: Boolean,
    disabled: Boolean
  },
  render (h) {
    return h(false)
  }
}
</script>
