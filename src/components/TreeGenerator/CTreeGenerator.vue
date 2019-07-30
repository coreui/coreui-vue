// Limitations:
// - can't pass v-on events,
// - can't use scoped methods,

<template>
  <div>
    <template v-for="(item, itemName) in items">
      <CTreeGeneratorItem
        :item="item"
        :name="itemName"
        :components="components"
        :key="itemName"
      />
    </template>
  </div>
</template>

<script>
import CTreeGeneratorItem from './CTreeGeneratorItem'

export default {
  name: 'CTreeGenerator',
  props: {
    items: Object,
    components: Object
  },
  components: {
    CTreeGeneratorItem
  }
}
</script>
