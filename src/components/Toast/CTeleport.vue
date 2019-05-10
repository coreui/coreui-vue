<script>
import Vue from 'vue'
export default {
  name: 'CTeleport',
  props: {
    container: [String, HTMLElement],
    object: Object
  },
  data () {
    return {
      component: null,
      passedValues: {}
    }
  },
  watch: {
    $attrs () {
      this.updateToast()
    },
    container (val, oldVal) {
      if (val !== oldVal) {
        this.getContainer(oldVal).removeChild(this.component.$el)
        this.getContainer(val).appendChild(this.component.$el)
      }
    }
  },
  computed: {
    targetContainer () {
      return this.getContainer(this.container)
    },
    componentProps () {
      return this.component.$options.props
    }
  },
  mounted () {
    const instanceCreator = Vue.extend(this.object)
    this.component = new instanceCreator
    this.updateToast()
    this.component.$mount()
    // console.log()
    this.component.$on('hook:mounted', () => console.log('hehe'))
    this.targetContainer.appendChild(this.component.$el)
  },
  updated () {
    this.updateToast()
    this.component.$forceUpdate()
  },
  methods: {
    updateProps () {
      if (this.$attrs && this.component && this.componentProps) {
        Object.keys(this.componentProps).forEach(key => {
          this.$attrs[key] !== undefined ? this.passValue(key) : null
        })
      }
    },
    updateToast () {
      if (this.component) {
        this.updateProps()
        this.component.$slots = this.$slots
      }
    },
    passValue (key) {
      const type = this.component.$options.props[key].type.name
      const val = this.$attrs[key]
      const correctedValue = type === 'Boolean' && val === '' ? true : val
      if (!(this.passedValues[key] === correctedValue)) {
        this.passedValues[key] = correctedValue
        this.component[key] = correctedValue
      }
    },
    getContainer (container) {
      if (container instanceof Element || container instanceof HTMLDocument) {
        return container
      }
      return document.getElementById(container) || document.body
    }
  },
  beforeDestroy () {
    if (this.component) {
      this.targetContainer.removeChild(this.component.$el)
      this.component.$destroy()
      this.component = null
    }
  },
  render (h) {
    return h(false)
  }
}
</script>
