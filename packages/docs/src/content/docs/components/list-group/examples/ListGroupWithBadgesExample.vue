<template>
  <CListGroup>
    <CListGroupItem class="d-flex justify-content-between align-items-center"
      >Cras justo odio<CBadge color="primary" shape="rounded-pill">14</CBadge></CListGroupItem
    >
    <CListGroupItem class="d-flex justify-content-between align-items-center"
      >Dapibus ac facilisis in<CBadge color="primary" shape="rounded-pill"
        >2</CBadge
      ></CListGroupItem
    >
    <CListGroupItem class="d-flex justify-content-between align-items-center"
      >Morbi leo risus<CBadge color="primary" shape="rounded-pill">1</CBadge></CListGroupItem
    >
  </CListGroup>
</template>

<script setup>
import { CListGroup, CListGroupItem, CBadge } from '@coreui/vue'
</script>
