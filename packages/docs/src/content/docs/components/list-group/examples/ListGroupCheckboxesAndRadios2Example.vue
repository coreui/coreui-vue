<template>
  <CListGroup>
    <CListGroupItem><CFormCheck hitArea="full" label="Cras justo odio" /></CListGroupItem>
    <CListGroupItem
      ><CFormCheck hitArea="full" label="Dapibus ac facilisis in" checked
    /></CListGroupItem>
    <CListGroupItem><CFormCheck hitArea="full" label="Morbi leo risus" checked /></CListGroupItem>
    <CListGroupItem><CFormCheck hitArea="full" label="orta ac consectetur ac" /></CListGroupItem>
    <CListGroupItem><CFormCheck hitArea="full" label="Vestibulum at eros" /></CListGroupItem>
  </CListGroup>
</template>

<script setup>
import { CListGroup, CListGroupItem, CFormCheck } from '@coreui/vue'
</script>
