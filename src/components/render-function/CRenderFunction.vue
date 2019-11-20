<script>
import clonedeep from 'lodash.clonedeep'
export default {
  name: 'CRenderFunction',
  props: {
    contentToRender: Array,
    flat: Boolean
  },
  computed: {
    copiedContent () {
      return clonedeep(this.contentToRender)
    },
    content () {
      if (!this.flat) {
        return this.copiedContent
      } else {
        return this.convertedContent[0]
      }
    },
    convertedContent () {
      return this.copiedContent.map(item => this.convertItem(item))
    }
  },
  methods: {
    convertItem (item) {
      if (typeof item === 'string') {
        return item
      }
      let newItem = []
      newItem[0] = item._name || 'div'
      newItem[1] = {}
      newItem[1].props = this.getProps(item)

      this.$options.renderFunctionOptions.forEach(option => {
        //on option doesn't work, possible to use only nativeOn
        if (item[`_${option}`]) {
          newItem[1][option] = item[`_${option}`]
        }
      })

      if (item._children) {
        newItem[2] = item._children.map(item => this.convertItem(item))
      }
      return newItem
    },
    getProps (item) {
      return Object.keys(item).reduce((itemProps, key) => {
        if (!key.includes('_')) {
          itemProps[key] = item[key]
        }
        return itemProps
      }, {})
    }
  },
  renderFunctionOptions:  [
    'attrs',
    'directives',
    'on',
    'nativeOn',
    'class',
    'style',
    'domProps',
    'scopedSlots',
    'slot',
    'key',
    'ref',
    'refInFor'
  ],
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