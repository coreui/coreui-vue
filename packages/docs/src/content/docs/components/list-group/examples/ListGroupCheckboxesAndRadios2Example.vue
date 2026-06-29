<template>
  <CListGroup>
    <CListGroupItem><CFormCheck hit-area="full" label="Cras justo odio" /></CListGroupItem>
    <CListGroupItem
      ><CFormCheck hit-area="full" label="Dapibus ac facilisis in" checked
    /></CListGroupItem>
    <CListGroupItem><CFormCheck hit-area="full" label="Morbi leo risus" checked /></CListGroupItem>
    <CListGroupItem><CFormCheck hit-area="full" label="orta ac consectetur ac" /></CListGroupItem>
    <CListGroupItem><CFormCheck hit-area="full" label="Vestibulum at eros" /></CListGroupItem>
  </CListGroup>
</template>

<script setup>
import { CListGroup, CListGroupItem, CFormCheck } from '@coreui/vue'
</script>
