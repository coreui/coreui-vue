<template>
  <ul :class="navClasses" @click="onClick">
    <slot></slot>
  </ul>
</template>

<script>
export default {
  name: 'CNav',
  props: {
    variant: {
      type: String,
      validator: val => ['', 'tabs', 'pills'].includes(val)
    },
    fill: Boolean,
    justified: Boolean,
    vertical: Boolean,
    inCard: Boolean
  },
  provide () {
    const nav = {}
    Object.defineProperty(nav, 'active', {
      get: () => this.activeItemInstance
    })
    return { nav }
  },
  data () {
    return {
      activeItemInstance: null
    }
  },
  computed: {
    navClasses () {
      return {
        'nav': true,
        [`nav-${this.variant}`]: this.variant,
        'flex-column': this.vertical,
        'nav-fill': this.fill,
        'nav-justified': this.justified,
        [`card-header-${this.variant}`]: this.inCard && this.variant
      }
    }
  },
  methods: {
    onClick (e) {
      this.$children.forEach(item => {
        if (item.$el.contains(e.target) && !item.disabled) {
          this.activeItemInstance = item
        }
      })
    }
  }
}
</script>
