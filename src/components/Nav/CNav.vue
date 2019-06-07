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
    vertical: Boolean
  },
  computed: {
    navClasses () {
      return {
        'c-nav' : true,
        'c-nav-tabs': this.tabs && !this.pills,
        'c-nav-pills': this.pills,
        'c-flex-column': this.vertical,
        'c-nav-fill': this.fill,
        'c-nav-justified': this.justified
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
      return item.$el.contains(e.target) && !item.disabled &&
        ['CDropdown', 'CNavItem', 'CTab'].includes(item.$options._componentTag)
    },
    activateItem (itemToActivate) {
      this.$children.forEach(item => {
        return item.isActive = item === itemToActivate ? true : false
      })
    }
  }
}
</script>

<style lang="scss">
  @import "~@coreui/coreui/scss/partials/nav.scss";
  @import "~@coreui/coreui/scss/utilities/_flex.scss";
</style>
