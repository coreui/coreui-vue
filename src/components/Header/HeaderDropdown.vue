<template>
  <CDropdown :placement="right ? 'bottom-end' : null" :noCaret="noCaret">
    <template #buttonContent>
      <slot name="header">
        &#10068;
      </slot>
    </template>
    <slot name="dropdown">
      <div :style="{ right: 'auto', height: '200px' }">
        <span class="text-center">dropdown</span>
      </div>
    </slot>
  </CDropdown>
</template>
<script>
export default {
  name: 'HeaderDropdown',
  props: {
    right: Boolean,
    noCaret: Boolean
  },
  mounted () {
    console.error(this.$options._componentTag + ' component is deprecated and will be replaced in coreui-vue 3.0 version, please import C - prefixed version')
  }
}
</script>
