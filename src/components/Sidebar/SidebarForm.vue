<template>
  <div v-if="hasSlotDefault" class="sidebar-form">
    <slot></slot>
  </div>
</template>
<script>

export default {
  name: 'SidebarForm',
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
