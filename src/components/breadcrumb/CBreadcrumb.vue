<template>
  <ol class="breadcrumb">
    <li
      v-for="(item, index) in this.items.slice(0, -1)"
      :key="index"
      :class="[item.addClasses, sharedClasses, addLinkClasses]"
      role="presentation"
    >
      <CLink v-bind="Object.assign({}, item, { addClasses: null, text: null })">
        {{item.text}}
      </CLink>
    </li>
    <li 
      :class="['active', lastItem.addClasses, sharedClasses, addLastItemClasses]"
      role="presentation"
    >
     <!-- span added to enable text styling through classes -->
     <span v-text="lastItem.text"></span>
    </li>
    <slot></slot>
  </ol>
</template>

<script>
import CLink from '../link/CLink'

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
      return [this.addClasses, 'breadcrumb-item']
    }
  }
}
</script>