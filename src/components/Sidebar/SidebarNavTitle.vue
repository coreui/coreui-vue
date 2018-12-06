<template>
  <li :class="classList">
    <template v-if="wrapper && wrapper.element">
      <component v-bind:is="wrapper.element" v-bind="wrapper.attributes">
        {{name}}
      </component>
    </template>
    <template v-else>
      {{name}}
    </template>
  </li>
</template>

<script>
export default {
  props: {
    name: {
      type: String,
      default: ''
    },
    classes: {
      type: [String, Array, Object],
      default: ''
    },
    wrapper: {
      type: Object,
      default: () => {}
    }
  },
  computed: {
    classList () {
      return [
        'nav-title',
        ...this.itemClasses
      ]
    },
    itemClasses () {
      const classes = this.classes
      return !classes ? [] : typeof classes === 'string' || classes instanceof String ? classes.split(' ') : Array.isArray(classes) ? classes : Object.keys(classes).filter(i=>classes[i])
    }
  }
}
</script>
