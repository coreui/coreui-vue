<template>
  <CListGroup>
    <CListGroupItem>Dapibus ac facilisis in</CListGroupItem>
    <CListGroupItem
      v-for="item in [
        'primary',
        'secondary',
        'success',
        'danger',
        'warning',
        'info',
        'light',
        'dark',
      ]"
      :key="item"
      :color="item"
      >A simple {{ item }} list group item</CListGroupItem
    >
  </CListGroup>
</template>

<script setup>
import { CListGroup, CListGroupItem } from '@coreui/vue'
</script>
