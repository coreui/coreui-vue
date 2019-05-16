<template>
  <li :class="['c-nav-title', classes]">
    <template v-if="wrapper && wrapper.element">
      <component
        :is="wrapper.element"
        v-bind="wrapper.attributes"
      >
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
  name: 'CSidebarNavTitle',
  props: {
    name: String,
    classes: [String, Array, Object],
    wrapper: Object
  }
}
</script>
