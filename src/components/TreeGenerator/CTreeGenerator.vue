// Limitations:
// - can't pass v-on events,
// - can't use scoped methods,

<template>
  <div>
    <template v-for="(item, index) in items">
      <template v-if="typeof item !== 'object'">
        {{item}}
      </template>

      <component
        v-else-if="item._children"
        :is="components[item._tag] || item._tag"
        v-bind="computedItems[index]"
        :key="index"
      >          
        <CTreeGenerator
          :items="item._children"
          :components="components"
        />
      </component>
      <component
        v-else
        :is="components[item._tag] || item._tag"
        v-bind="computedItems[index]"
        :key="index"
      />
    </template>
  </div>
</template>

<script>
export default {
  name: 'CTreeGenerator',
  props: {
    items: Array,
    components: {
      type: Object,
      default: () => { return {} }
    }
  },
  computed: {
    computedItems () {
      return this.items.map(item => {
        if (typeof item === 'object') {
          return Object.keys(item).reduce((computedItem, key) => {
            if (!['_children', '_tag'].includes(key)) {
              computedItem[key] = item[key]
            }
            return computedItem
          }, {})
        }
        return item
      })
    }
  } 
}
</script>
