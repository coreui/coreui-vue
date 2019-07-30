<template>
  <component
    :is="isPassed ? components[name] : name"
    v-bind="computedItem"
  >
    <template v-if="item.children">
      <template v-for="(descendantItem, descendandName) in item.children">
        <template v-if="descendandName === 'text'">
          {{descendantItem}}
        </template>
        <CTreeGeneratorItem
          v-else
          :key="descendandName"
          :item="descendantItem"
          :name="descendandName"
          :components="components"
        />
      </template>
    </template>
  </component>
</template>

<script>
export default {
  name: 'CTreeGeneratorItem',
  props: {
    item: [String, Object],
    name: String,
    components: Object
  },
  computed: {
    passedComponentsNames () {
      return Object.keys(this.components || {})
    },
    isPassed () {
      return this.passedComponentsNames.includes(this.name)
    },
    computedItem () {
      if (typeof this.item === 'object') {
        return Object.keys(this.item).reduce((computedItem, key) => {
          if (!['children'].includes(key)) {
            computedItem[key] = this.item[key]
          }
          return computedItem
        }, {})
      }
    }
  }  
}
</script>

