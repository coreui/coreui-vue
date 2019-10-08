<template>
  <ul :class="navClasses" @click="onClick">
    <slot></slot>
  </ul>
</template>

<script>
export default {
  name: 'CNav',
  props: {
    fill: Boolean,
    justified: Boolean,
    tabs: Boolean,
    pills: Boolean,
    vertical: Boolean,
    inCard: Boolean
  },
  computed: {
    navClasses () {
      const hasTabs = this.tabs && !this.pills
      return {
        'nav' : true,
        'nav-tabs': hasTabs,
        'nav-pills': this.pills,
        'flex-column': this.vertical,
        'nav-fill': this.fill,
        'nav-justified': this.justified,
        'card-header-tabs': this.inCard && hasTabs,
        'card-header-pills': this.inCard && this.pills
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
