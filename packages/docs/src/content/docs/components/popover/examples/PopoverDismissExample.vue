<template>
  <CPopover content="Vivamus sagittis lacus vel augue laoreet rutrum faucibus" placement="top">
    <template #toggler="{ id, on }">
      <CButton color="secondary" :aria-describedby="id" v-on="on">Popover on top</CButton>
    </template>
  </CPopover>
  <CPopover content="Vivamus sagittis lacus vel augue laoreet rutrum faucibus" placement="right">
    <template #toggler="{ id, on }">
      <CButton color="secondary" :aria-describedby="id" v-on="on">Popover on right</CButton>
    </template>
  </CPopover>
  <CPopover content="Vivamus sagittis lacus vel augue laoreet rutrum faucibus" placement="bottom">
    <template #toggler="{ id, on }">
      <CButton color="secondary" :aria-describedby="id" v-on="on">Popover on bottom</CButton>
    </template>
  </CPopover>
  <CPopover content="Vivamus sagittis lacus vel augue laoreet rutrum faucibus" placement="left">
    <template #toggler="{ id, on }">
      <CButton color="secondary" :aria-describedby="id" v-on="on">Popover on left</CButton>
    </template>
  </CPopover>
</template>

<script setup>
import { CPopover, CButton } from '@coreui/vue'
const customPopoverStyle = {
  '--cui-popover-max-width': '200px',
  '--cui-popover-border-color': 'var(--cui-primary)',
  '--cui-popover-header-bg': 'var(--cui-primary)',
  '--cui-popover-header-color': 'var(--cui-white)',
  '--cui-popover-body-padding-x': '1rem',
  '--cui-popover-body-padding-y': '.5rem',
}
</script>
