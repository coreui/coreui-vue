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
  name: 'SidebarNavTitle',
  props: {
    name: {
      type: String,
      default: ''
    },
    classes: {
      type: String,
      default: ''
    },
    wrapper: {
      type: Object,
      default: () => {}
    }
  },
  mounted () {
    console.error(this.$options._componentTag + ' component is deprecated and will be replaced in coreui-vue 3.0 version, please import C - prefixed version')
  },
  computed: {
    classList () {
      return [
        'nav-title',
        ...this.itemClasses
      ]
    },
    itemClasses () {
      return this.classes ? this.classes.split(' ') : ''
    }
  }
}
</script>
