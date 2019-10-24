<script>
export default {
  name: 'CTabContent',
  props: {
    content: Function
  },
  render (h) {
    return h('div', this.content ? this.content() : '')
  }
}
</script>
