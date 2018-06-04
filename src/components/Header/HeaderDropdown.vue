<template>
  <b-nav-item-dropdown :right="right" :no-caret="noCaret">
    <template slot="button-content">
      <slot name="header">
        &#10068;
      </slot>
    </template>
    <slot name="dropdown">
      <div :style="{ right: 'auto', height: '200px' }">
        <span class="text-center">dropdown</span>
      </div>
    </slot>
  </b-nav-item-dropdown>
</template>
<script>
export default {
  name: 'HeaderDropdown',
  props: {
    right: {
      type: Boolean,
      default: false
    },
    noCaret: {
      type: Boolean,
      default: false
    }
  }
}
</script>
