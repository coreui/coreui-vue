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
const columns = [
  {
    key: 'id',
    label: '#',
    _props: { scope: 'col' },
  },
  {
    key: 'class',
    _props: { scope: 'col' },
  },
  {
    key: 'heading_1',
    label: 'Heading',
    _props: { scope: 'col' },
  },
  {
    key: 'heading_2',
    label: 'Heading',
    _props: { scope: 'col' },
  },
]
const items = [
  {
    id: 1,
    class: 'Mark',
    heading_1: 'Otto',
    heading_2: '@mdo',
    _cellProps: { id: { scope: 'row' } },
  },
  {
    id: 2,
    class: 'Jacob',
    heading_1: 'Thornton',
    heading_2: '@fat',
    _cellProps: { id: { scope: 'row' } },
  },
  {
    id: 3,
    class: 'Larry the Bird',
    heading_2: '@twitter',
    _cellProps: { id: { scope: 'row' }, class: { colSpan: 2 } },
  },
]
const columnsVariantExample = [
  { key: 'class', _props: { scope: 'col' } },
  { key: 'heading_1', label: 'Heading', _props: { scope: 'col' } },
  { key: 'heading_2', label: 'Heading', _props: { scope: 'col' } },
]
const itemsVariantExample = [
  {
    class: 'Default',
    heading_1: 'Cell',
    heading_2: 'Cell',
    _cellProps: { class: { scope: 'row' } },
  },
  {
    class: 'Primary',
    heading_1: 'Cell',
    heading_2: 'Cell',
    _cellProps: { class: { scope: 'row' } },
    _props: { color: 'primary' },
  },
  {
    class: 'Secondary',
    heading_1: 'Cell',
    heading_2: 'Cell',
    _cellProps: { class: { scope: 'row' } },
    _props: { color: 'secondary' },
  },
  {
    class: 'Success',
    heading_1: 'Cell',
    heading_2: 'Cell',
    _cellProps: { class: { scope: 'row' } },
    _props: { color: 'success' },
  },
  {
    class: 'Danger',
    heading_1: 'Cell',
    heading_2: 'Cell',
    _cellProps: { class: { scope: 'row' } },
    _props: { color: 'danger' },
  },
  {
    class: 'Warning',
    heading_1: 'Cell',
    heading_2: 'Cell',
    _cellProps: { class: { scope: 'row' } },
    _props: { color: 'warning' },
  },
  {
    class: 'Info',
    heading_1: 'Cell',
    heading_2: 'Cell',
    _cellProps: { class: { scope: 'row' } },
    _props: { color: 'info' },
  },
  {
    class: 'Light',
    heading_1: 'Cell',
    heading_2: 'Cell',
    _cellProps: { class: { scope: 'row' } },
    _props: { color: 'light' },
  },
  {
    class: 'Dark',
    heading_1: 'Cell',
    heading_2: 'Cell',
    _cellProps: { class: { scope: 'row' } },
    _props: { color: 'dark' },
  },
]
const columnsActiveTableExample = [
  {
    key: 'id',
    label: '#',
    _props: { scope: 'col' },
  },
  {
    key: 'class',
    _props: { scope: 'col' },
  },
  {
    key: 'heading_1',
    label: 'Heading',
    _props: { scope: 'col' },
  },
  {
    key: 'heading_2',
    label: 'Heading',
    _props: { scope: 'col' },
  },
]
const itemsActiveTableExample = [
  {
    id: 1,
    class: 'Mark',
    heading_1: 'Otto',
    heading_2: '@mdo',
    _props: { active: true },
    _cellProps: { id: { scope: 'row' } },
  },
  {
    id: 2,
    class: 'Jacob',
    heading_1: 'Thornton',
    heading_2: '@fat',
    _cellProps: { id: { scope: 'row' } },
  },
  {
    id: 3,
    class: 'Larry the Bird',
    heading_2: '@twitter',
    _cellProps: { id: { scope: 'row' }, class: { active: true, colSpan: 2 } },
  },
]
const footer = ['Footer', 'Footer', 'Footer', 'Footer']
</script>
