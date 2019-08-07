<template>
  <li class="c-nav-title">
    <template v-if="wrapper && wrapper.element">
      <component
        :is="wrapper.element"
        v-bind="wrapper.attributes"
      >
        {{name}}
      </component>
    </template>
    <template v-else>
      <slot>
        {{name}}
      </slot>
    </template>
  </li>
</template>

<script>
export default {
  name: 'CSidebarNavTitle',
  props: {
    name: String,
    wrapper: Object
  }
}
</script>
