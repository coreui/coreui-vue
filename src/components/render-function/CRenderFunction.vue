<script>
import clone from 'clone'
export default {
  name: 'CRenderFunction',
  props: {
    contentToRender: Array
  },
  computed: {
    content () {
      return clone(this.contentToRender)
    }
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
    
    if (Array.isArray(this.content) && this.content.length) {
      return h(...computeRenderFunction(this.content))
    } else {
      return h(false)
    }
  }
}
</script>