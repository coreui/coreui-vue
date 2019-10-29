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
  computed: {
    navClasses () {
      return {
        'nav': true,
        'nav-tabs': this.variant === 'tabs',
        'nav-pills': this.variant === 'pills',
        'flex-column': this.vertical,
        'nav-fill': this.fill,
        'nav-justified': this.justified,
        'card-header-tabs': this.inCard && this.variant === 'tabs',
        'card-header-pills': this.inCard && this.variant === 'pills'
      }
    }
  },
  methods: {
    onClick (e) {
      const clickedItem = this.getClickedItem(e)
      clickedItem ? this.activateItem(clickedItem) : null
    },
    getClickedItem (e) {
      return this.$children.filter(item => this.itemWasActivated(item, e))[0]
    },
    itemWasActivated (item, e) {
      return item.$el.contains(e.target) && 
             !item.disabled && 
             item.isActive !== undefined
    },
    activateItem (itemToActivate) {
      // Works on CNavItem, CTab, CDropdown and every component that have 
      // 'isActive' data prop that determines active state
      this.$children.forEach(item => {
        return item.isActive = item === itemToActivate ? true : false
      })
    }
  }
}
</script>
