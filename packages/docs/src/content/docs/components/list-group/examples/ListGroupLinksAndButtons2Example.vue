<template>
  <CListGroup>
    <CListGroupItem as="button" active>Cras justo odio</CListGroupItem>
    <CListGroupItem as="button">Dapibus ac facilisis in</CListGroupItem>
    <CListGroupItem as="button">Morbi leo risus</CListGroupItem>
    <CListGroupItem as="button">Porta ac consectetur ac</CListGroupItem>
    <CListGroupItem as="button" disabled>Vestibulum at eros</CListGroupItem>
  </CListGroup>
</template>

<script setup>
import { CListGroup, CListGroupItem } from '@coreui/vue'
</script>
