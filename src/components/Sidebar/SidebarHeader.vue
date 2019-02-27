<template>
  <div v-if="hasSlotDefault" class="sidebar-header">
    <slot></slot>
  </div>
</template>
<script>

export default {
  name: 'SidebarHeader',
  computed: {
    hasSlotDefault() {
      return !!this.$slots.default;
    }
  },
  mounted () {
    console.error(this.$options._componentTag + ' component is deprecated and will be replaced in coreui-vue 3.0 version, please import C - prefixed version')
  }
}
</script>
