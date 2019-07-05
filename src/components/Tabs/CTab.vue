<script>
export default {
  name: 'CTab',
  props: {
    titleHtml: String, 
    active: Boolean,
    disabled: Boolean
  },
  render (h) {
    return h(false)
  }
}
</script>
