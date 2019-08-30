<script>
export default {
  name: 'CRenderFunction',
  props: {
    contentToRender: Array
  },
  render (h) {
    const computeRenderFunction = (renderFunction) => {
      return renderFunction.map(item => {
        if (Array.isArray(item)) {
          return item.map(child => {
            if (typeof child === 'string') {
              return child
            } else if (Array.isArray(child)) {
              const el = computeRenderFunction(child)
              return h(...el)
            } else if (child.slot) {
              return this.$scopedSlots[child.slot]()
            }
          })
        }
        return item
      })
    }
    return h(...computeRenderFunction(this.contentToRender))
  }
}
</script>