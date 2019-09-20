<template>
  <ol class="c-breadcrumb">
    <li
      v-for="(item, index) in this.items.slice(0, -1)"
      :key="index"
      :class="[item.addClasses, sharedClasses, addLinkClasses]"
      role="presentation"
    >
      <component 
        :is="'CLink'" 
        v-bind="Object.assign({}, item, { addClasses: null })"
      />
    </li>
    <li 
      :class="['c-active', lastItem.addClasses, sharedClasses, addLastItemClasses]"
      role="presentation"
    >
     <!-- span added to enable text styling through classes -->
     <span v-text="lastItem.textHtml"></span>
    </li>
    <slot></slot>
  </ol>
</template>

<script>
import CLink from '../Link/CLink'

export default {
  name: 'CBreadcrumb',
  components: {
    CLink
  },
  props: {
    items: {
      type: Array,
      required: true
    },
    addClasses: [String, Array, Object],
    addLinkClasses: [String, Array, Object],
    addLastItemClasses: [String, Array, Object]
  },
  computed: {
    lastItem () {
      return this.items[this.items.length -1]
    },
    sharedClasses () {
      return [this.addClasses, 'c-breadcrumb-item']
    }
  }
}
</script>

<style lang="scss">
  @import "~@coreui/coreui/scss/partials/breadcrumb.scss";
</style>