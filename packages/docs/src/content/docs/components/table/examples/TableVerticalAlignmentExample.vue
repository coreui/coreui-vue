<template>
  <CTable align="middle" reponsive>
    <CTableHead>
      <CTableRow>
        <CTableHeaderCell scope="col" class="w-25">Heading 1</CTableHeaderCell>
        <CTableHeaderCell scope="col" class="w-25">Heading 2</CTableHeaderCell>
        <CTableHeaderCell scope="col" class="w-25">Heading 3</CTableHeaderCell>
        <CTableHeaderCell scope="col" class="w-25">Heading 4</CTableHeaderCell>
      </CTableRow>
    </CTableHead>
    <CTableBody>
      <CTableRow>
        <CTableDataCell
          >This cell inherits <code>vertical-align: middle;</code> from the table</CTableDataCell
        >
        <CTableDataCell
          >This cell inherits <code>vertical-align: middle;</code> from the table</CTableDataCell
        >
        <CTableDataCell
          >This cell inherits <code>vertical-align: middle;</code> from the table</CTableDataCell
        >
        <CTableDataCell
          >This here is some placeholder text, intended to take up quite a bit of vertical space, to
          demonsCTableRowate how the vertical alignment works in the preceding
          cells.</CTableDataCell
        >
      </CTableRow>
      <CTableRow align="bottom">
        <CTableDataCell
          >This cell inherits <code>vertical-align: bottom;</code> from the table
          row</CTableDataCell
        >
        <CTableDataCell
          >This cell inherits <code>vertical-align: bottom;</code> from the table
          row</CTableDataCell
        >
        <CTableDataCell
          >This cell inherits <code>vertical-align: bottom;</code> from the table
          row</CTableDataCell
        >
        <CTableDataCell
          >This here is some placeholder text, intended to take up quite a bit of vertical space, to
          demonsCTableRowate how the vertical alignment works in the preceding
          cells.</CTableDataCell
        >
      </CTableRow>
      <CTableRow>
        <CTableDataCell
          >This cell inherits <code>vertical-align: middle;</code> from the table</CTableDataCell
        >
        <CTableDataCell
          >This cell inherits <code>vertical-align: middle;</code> from the table</CTableDataCell
        >
        <CTableDataCell align="top">This cell is aligned to the top.</CTableDataCell>
        <CTableDataCell
          >This here is some placeholder text, intended to take up quite a bit of vertical space, to
          demonsCTableRowate how the vertical alignment works in the preceding
          cells.</CTableDataCell
        >
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
