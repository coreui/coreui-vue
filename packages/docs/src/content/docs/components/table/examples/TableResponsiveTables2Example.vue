<template>
  <CTable responsive="sm">
    <CTableHead>
      <CTableRow>
        <CTableHeaderCell scope="col">#</CTableHeaderCell>
        <CTableHeaderCell scope="col">Heading</CTableHeaderCell>
        <CTableHeaderCell scope="col">Heading</CTableHeaderCell>
        <CTableHeaderCell scope="col">Heading</CTableHeaderCell>
        <CTableHeaderCell scope="col">Heading</CTableHeaderCell>
        <CTableHeaderCell scope="col">Heading</CTableHeaderCell>
        <CTableHeaderCell scope="col">Heading</CTableHeaderCell>
        <CTableHeaderCell scope="col">Heading</CTableHeaderCell>
        <CTableHeaderCell scope="col">Heading</CTableHeaderCell>
      </CTableRow>
    </CTableHead>
    <CTableBody>
      <CTableRow>
        <CTableHeaderCell scope="row">1</CTableHeaderCell>
        <CTableDataCell>Cell</CTableDataCell>
        <CTableDataCell>Cell</CTableDataCell>
        <CTableDataCell>Cell</CTableDataCell>
        <CTableDataCell>Cell</CTableDataCell>
        <CTableDataCell>Cell</CTableDataCell>
        <CTableDataCell>Cell</CTableDataCell>
        <CTableDataCell>Cell</CTableDataCell>
        <CTableDataCell>Cell</CTableDataCell>
      </CTableRow>
      <CTableRow>
        <CTableHeaderCell scope="row">2</CTableHeaderCell>
        <CTableDataCell>Cell</CTableDataCell>
        <CTableDataCell>Cell</CTableDataCell>
        <CTableDataCell>Cell</CTableDataCell>
        <CTableDataCell>Cell</CTableDataCell>
        <CTableDataCell>Cell</CTableDataCell>
        <CTableDataCell>Cell</CTableDataCell>
        <CTableDataCell>Cell</CTableDataCell>
        <CTableDataCell>Cell</CTableDataCell>
      </CTableRow>
      <CTableRow>
        <CTableHeaderCell scope="row">3</CTableHeaderCell>
        <CTableDataCell>Cell</CTableDataCell>
        <CTableDataCell>Cell</CTableDataCell>
        <CTableDataCell>Cell</CTableDataCell>
        <CTableDataCell>Cell</CTableDataCell>
        <CTableDataCell>Cell</CTableDataCell>
        <CTableDataCell>Cell</CTableDataCell>
        <CTableDataCell>Cell</CTableDataCell>
        <CTableDataCell>Cell</CTableDataCell>
      </CTableRow>
    </CTableBody>
  </CTable>
</template>

<script setup>
import {
  CTable,
  CTableHead,
  CTableRow,
  CTableHeaderCell,
  CTableBody,
  CTableDataCell,
} from '@coreui/vue'
</script>
