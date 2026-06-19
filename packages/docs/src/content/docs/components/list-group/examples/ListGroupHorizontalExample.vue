<template>
  <template v-for="item in ['', '-sm', '-md', '-lg', '-xl', '-xxl']">
    <CListGroup class="mb-2" :layout="'horizontal' + item">
      <CListGroupItem>Cras justo odio</CListGroupItem>
      <CListGroupItem>Dapibus ac facilisis in</CListGroupItem>
      <CListGroupItem>Morbi leo risus</CListGroupItem>
    </CListGroup>
  </template>
</template>

<script setup>
import { CListGroup, CListGroupItem } from '@coreui/vue'
</script>
