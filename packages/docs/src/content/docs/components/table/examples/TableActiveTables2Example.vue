<template>
  <CTable color="dark" :columns="columnsActiveTableExample" :items="itemsActiveTableExample" />
</template>

<script setup>
import { CTable } from '@coreui/vue'
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
</script>
