<template>
  <CTooltip content="Vivamus sagittis lacus vel augue laoreet rutrum faucibus" placement="top">
    <template #toggler="{ id, on }">
      <CButton color="secondary" :aria-describedby="id" v-on="on">Tooltip on top</CButton>
    </template>
  </CTooltip>
  <CTooltip content="Vivamus sagittis lacus vel augue laoreet rutrum faucibus" placement="right">
    <template #toggler="{ id, on }">
      <CButton color="secondary" :aria-describedby="id" v-on="on">Tooltip on right</CButton>
    </template>
  </CTooltip>
  <CTooltip content="Vivamus sagittis lacus vel augue laoreet rutrum faucibus" placement="bottom">
    <template #toggler="{ id, on }">
      <CButton color="secondary" :aria-describedby="id" v-on="on">Tooltip on bottom</CButton>
    </template>
  </CTooltip>
  <CTooltip content="Vivamus sagittis lacus vel augue laoreet rutrum faucibus" placement="left">
    <template #toggler="{ id, on }">
      <CButton color="secondary" :aria-describedby="id" v-on="on">Tooltip on left</CButton>
    </template>
  </CTooltip>
</template>

<script setup>
import { CTooltip, CButton } from '@coreui/vue'
</script>
