---
title: Vue Table Component
name: Table
description: Documentation and examples for opt-in styling of tables.
other_frameworks: table
---

## How to use Vue Table Component

Due to the widespread use of `<CTable>` elements across third-party widgets like calendars and date pickers, CoreUI's tables are **opt-in**. All table styles are not inherited in CoreUI, meaning any nested tables can be styled independent from the parent.

Using the most basic table CoreUI, here's how `<CTable>`-based tables look in CoreUI.

::: demo-rounded
<CTable :columns="columns" :items="items" />
:::

In version **4.5.0** we introduced a new way to create a table, similarly to our [Smart Table component](https://coreui.io/vue/docs/components/smart-table.html).


```vue
<template>
  <CTable :columns="columns" :items="items" />
</template>
<script>
  export default {
    data: () => {
      return {
        columns: [
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
        ],
        items: [
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
      }
    },
  }
</script>
```

You can also put all table components together manually as hitherto.

```vue
<CTable>
  <CTableHead>
    <CTableRow>
      <CTableHeaderCell scope="col">#</CTableHeaderCell>
      <CTableHeaderCell scope="col">Class</CTableHeaderCell>
      <CTableHeaderCell scope="col">Heading</CTableHeaderCell>
      <CTableHeaderCell scope="col">Heading</CTableHeaderCell>
    </CTableRow>
  </CTableHead>
  <CTableBody>
    <CTableRow>
      <CTableHeaderCell scope="row">1</CTableHeaderCell>
      <CTableDataCell>Mark</CTableDataCell>
      <CTableDataCell>Otto</CTableDataCell>
      <CTableDataCell>@mdo</CTableDataCell>
    </CTableRow>
    <CTableRow>
      <CTableHeaderCell scope="row">2</CTableHeaderCell>
      <CTableDataCell>Jacob</CTableDataCell>
      <CTableDataCell>Thornton</CTableDataCell>
      <CTableDataCell>@fat</CTableDataCell>
    </CTableRow>
    <CTableRow>
      <CTableHeaderCell scope="row">3</CTableHeaderCell>
      <CTableDataCell colspan="2">Larry the Bird</CTableDataCell>
      <CTableDataCell>@twitter</CTableDataCell>
    </CTableRow>
  </CTableBody>
</CTable>
```

## Variants

Use contextual classes to color tables, table rows or individual cells.

::: demo
<CTable :columns="columnsVariantExample" :items="itemsVariantExample" />
:::
```vue
<CTable>
  <CTableHead>
    <CTableRow>
      <CTableHeaderCell scope="col">Class</CTableHeaderCell>
      <CTableHeaderCell scope="col">Heading</CTableHeaderCell>
      <CTableHeaderCell scope="col">Heading</CTableHeaderCell>
    </CTableRow>
  </CTableHead>
  <CTableBody>
    <CTableRow>
      <CTableHeaderCell scope="row">Default</CTableHeaderCell>
      <CTableDataCell>Cell</CTableDataCell>
      <CTableDataCell>Cell</CTableDataCell>
    </CTableRow>
    <CTableRow color="primary">
      <CTableHeaderCell scope="row">Primary</CTableHeaderCell>
      <CTableDataCell>Cell</CTableDataCell>
      <CTableDataCell>Cell</CTableDataCell>
    </CTableRow>
    <CTableRow color="secondary">
      <CTableHeaderCell scope="row">Secondary</CTableHeaderCell>
      <CTableDataCell>Cell</CTableDataCell>
      <CTableDataCell>Cell</CTableDataCell>
    </CTableRow>
    <CTableRow color="success">
      <CTableHeaderCell scope="row">Success</CTableHeaderCell>
      <CTableDataCell>Cell</CTableDataCell>
      <CTableDataCell>Cell</CTableDataCell>
    </CTableRow>
    <CTableRow color="danger">
      <CTableHeaderCell scope="row">Danger</CTableHeaderCell>
      <CTableDataCell>Cell</CTableDataCell>
      <CTableDataCell>Cell</CTableDataCell>
    </CTableRow>
    <CTableRow color="warning">
      <CTableHeaderCell scope="row">Warning</CTableHeaderCell>
      <CTableDataCell>Cell</CTableDataCell>
      <CTableDataCell>Cell</CTableDataCell>
    </CTableRow>
    <CTableRow color="info">
      <CTableHeaderCell scope="row">Info</CTableHeaderCell>
      <CTableDataCell>Cell</CTableDataCell>
      <CTableDataCell>Cell</CTableDataCell>
    </CTableRow>
    <CTableRow color="light">
      <CTableHeaderCell scope="row">Light</CTableHeaderCell>
      <CTableDataCell>Cell</CTableDataCell>
      <CTableDataCell>Cell</CTableDataCell>
    </CTableRow>
    <CTableRow color="dark">
      <CTableHeaderCell scope="row">Dark</CTableHeaderCell>
      <CTableDataCell>Cell</CTableDataCell>
      <CTableDataCell>Cell</CTableDataCell>
    </CTableRow>
  </CTableBody>
</CTable>
```

Since version **4.5.0** also this way.

```vue
<template>
  <CTable :columns="columnsVariantExample" :items="itemsVariantExample" />
</template>
<script>
  export default {
    data: () => {
      return {
        columnsVariantExample: [
          { key: 'class', _props: { scope: 'col' } },
          { key: 'heading_1', label: 'Heading', _props: { scope: 'col' } },
          { key: 'heading_2', label: 'Heading', _props: { scope: 'col' } },
        ],
        itemsVariantExample: [
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
      }
    },
  }
</script>
```

## Accented tables

### Striped rows

Use `striped` property to add zebra-striping to any table row within the `<CTableBody>`.

::: demo
<CTable striped>
  <CTableHead>
    <CTableRow>
      <CTableHeaderCell scope="col">#</CTableHeaderCell>
      <CTableHeaderCell scope="col">Class</CTableHeaderCell>
      <CTableHeaderCell scope="col">Heading</CTableHeaderCell>
      <CTableHeaderCell scope="col">Heading</CTableHeaderCell>
    </CTableRow>
  </CTableHead>
  <CTableBody>
    <CTableRow>
      <CTableHeaderCell scope="row">1</CTableHeaderCell>
      <CTableDataCell>Mark</CTableDataCell>
      <CTableDataCell>Otto</CTableDataCell>
      <CTableDataCell>@mdo</CTableDataCell>
    </CTableRow>
    <CTableRow>
      <CTableHeaderCell scope="row">2</CTableHeaderCell>
      <CTableDataCell>Jacob</CTableDataCell>
      <CTableDataCell>Thornton</CTableDataCell>
      <CTableDataCell>@fat</CTableDataCell>
    </CTableRow>
    <CTableRow>
      <CTableHeaderCell scope="row">3</CTableHeaderCell>
      <CTableDataCell colspan="2">Larry the Bird</CTableDataCell>
      <CTableDataCell>@twitter</CTableDataCell>
    </CTableRow>
  </CTableBody>
</CTable>
:::
```vue
<CTable striped>
  ...
</CTable>
```

### Striped columns

Use `stripedColumns` boolean property to add zebra-striping to any table column.

::: demo
<CTable stripedColumns>
  <CTableHead>
    <CTableRow>
      <CTableHeaderCell scope="col">#</CTableHeaderCell>
      <CTableHeaderCell scope="col">Class</CTableHeaderCell>
      <CTableHeaderCell scope="col">Heading</CTableHeaderCell>
      <CTableHeaderCell scope="col">Heading</CTableHeaderCell>
    </CTableRow>
  </CTableHead>
  <CTableBody>
    <CTableRow>
      <CTableHeaderCell scope="row">1</CTableHeaderCell>
      <CTableDataCell>Mark</CTableDataCell>
      <CTableDataCell>Otto</CTableDataCell>
      <CTableDataCell>@mdo</CTableDataCell>
    </CTableRow>
    <CTableRow>
      <CTableHeaderCell scope="row">2</CTableHeaderCell>
      <CTableDataCell>Jacob</CTableDataCell>
      <CTableDataCell>Thornton</CTableDataCell>
      <CTableDataCell>@fat</CTableDataCell>
    </CTableRow>
    <CTableRow>
      <CTableHeaderCell scope="row">3</CTableHeaderCell>
      <CTableDataCell colSpan="2">Larry the Bird</CTableDataCell>
      <CTableDataCell>@twitter</CTableDataCell>
    </CTableRow>
  </CTableBody>
</CTable>
:::

```vue
<CTable stripedColumns>
  ...
</CTable>
```

These classes can also be added to table variants:

::: demo
<CTable color="dark" striped>
  <CTableHead>
    <CTableRow>
      <CTableHeaderCell scope="col">#</CTableHeaderCell>
      <CTableHeaderCell scope="col">Class</CTableHeaderCell>
      <CTableHeaderCell scope="col">Heading</CTableHeaderCell>
      <CTableHeaderCell scope="col">Heading</CTableHeaderCell>
    </CTableRow>
  </CTableHead>
  <CTableBody>
    <CTableRow>
      <CTableHeaderCell scope="row">1</CTableHeaderCell>
      <CTableDataCell>Mark</CTableDataCell>
      <CTableDataCell>Otto</CTableDataCell>
      <CTableDataCell>@mdo</CTableDataCell>
    </CTableRow>
    <CTableRow>
      <CTableHeaderCell scope="row">2</CTableHeaderCell>
      <CTableDataCell>Jacob</CTableDataCell>
      <CTableDataCell>Thornton</CTableDataCell>
      <CTableDataCell>@fat</CTableDataCell>
    </CTableRow>
    <CTableRow>
      <CTableHeaderCell scope="row">3</CTableHeaderCell>
      <CTableDataCell colspan="2">Larry the Bird</CTableDataCell>
      <CTableDataCell>@twitter</CTableDataCell>
    </CTableRow>
  </CTableBody>
</CTable>
:::
```vue
<CTable color="dark" striped>
  ...
</CTable>
```

::: demo
<CTable color="dark" stripedColumns>
  <CTableHead>
    <CTableRow>
      <CTableHeaderCell scope="col">#</CTableHeaderCell>
      <CTableHeaderCell scope="col">Class</CTableHeaderCell>
      <CTableHeaderCell scope="col">Heading</CTableHeaderCell>
      <CTableHeaderCell scope="col">Heading</CTableHeaderCell>
    </CTableRow>
  </CTableHead>
  <CTableBody>
    <CTableRow>
      <CTableHeaderCell scope="row">1</CTableHeaderCell>
      <CTableDataCell>Mark</CTableDataCell>
      <CTableDataCell>Otto</CTableDataCell>
      <CTableDataCell>@mdo</CTableDataCell>
    </CTableRow>
    <CTableRow>
      <CTableHeaderCell scope="row">2</CTableHeaderCell>
      <CTableDataCell>Jacob</CTableDataCell>
      <CTableDataCell>Thornton</CTableDataCell>
      <CTableDataCell>@fat</CTableDataCell>
    </CTableRow>
    <CTableRow>
      <CTableHeaderCell scope="row">3</CTableHeaderCell>
      <CTableDataCell colspan="2">Larry the Bird</CTableDataCell>
      <CTableDataCell>@twitter</CTableDataCell>
    </CTableRow>
  </CTableBody>
</CTable>
:::
```vue
<CTable color="dark" stripedColumns>
  ...
</CTable>
```

::: demo
<CTable color="success" striped>
  <CTableHead>
    <CTableRow>
      <CTableHeaderCell scope="col">#</CTableHeaderCell>
      <CTableHeaderCell scope="col">Class</CTableHeaderCell>
      <CTableHeaderCell scope="col">Heading</CTableHeaderCell>
      <CTableHeaderCell scope="col">Heading</CTableHeaderCell>
    </CTableRow>
  </CTableHead>
  <CTableBody>
    <CTableRow>
      <CTableHeaderCell scope="row">1</CTableHeaderCell>
      <CTableDataCell>Mark</CTableDataCell>
      <CTableDataCell>Otto</CTableDataCell>
      <CTableDataCell>@mdo</CTableDataCell>
    </CTableRow>
    <CTableRow>
      <CTableHeaderCell scope="row">2</CTableHeaderCell>
      <CTableDataCell>Jacob</CTableDataCell>
      <CTableDataCell>Thornton</CTableDataCell>
      <CTableDataCell>@fat</CTableDataCell>
    </CTableRow>
    <CTableRow>
      <CTableHeaderCell scope="row">3</CTableHeaderCell>
      <CTableDataCell colspan="2">Larry the Bird</CTableDataCell>
      <CTableDataCell>@twitter</CTableDataCell>
    </CTableRow>
  </CTableBody>
</CTable>
:::
```vue
<CTable color="success" striped>
  ...
</CTable>
```

::: demo
<CTable color="success" stripedColumns>
  <CTableHead>
    <CTableRow>
      <CTableHeaderCell scope="col">#</CTableHeaderCell>
      <CTableHeaderCell scope="col">Class</CTableHeaderCell>
      <CTableHeaderCell scope="col">Heading</CTableHeaderCell>
      <CTableHeaderCell scope="col">Heading</CTableHeaderCell>
    </CTableRow>
  </CTableHead>
  <CTableBody>
    <CTableRow>
      <CTableHeaderCell scope="row">1</CTableHeaderCell>
      <CTableDataCell>Mark</CTableDataCell>
      <CTableDataCell>Otto</CTableDataCell>
      <CTableDataCell>@mdo</CTableDataCell>
    </CTableRow>
    <CTableRow>
      <CTableHeaderCell scope="row">2</CTableHeaderCell>
      <CTableDataCell>Jacob</CTableDataCell>
      <CTableDataCell>Thornton</CTableDataCell>
      <CTableDataCell>@fat</CTableDataCell>
    </CTableRow>
    <CTableRow>
      <CTableHeaderCell scope="row">3</CTableHeaderCell>
      <CTableDataCell colspan="2">Larry the Bird</CTableDataCell>
      <CTableDataCell>@twitter</CTableDataCell>
    </CTableRow>
  </CTableBody>
</CTable>
:::
```vue
<CTable color="success" striped>
  ...
</CTable>
```

### Hoverable rows

Use `hover` property to enable a hover state on table rows within a `<CTableBody>`.

::: demo
<CTable hover>
  <CTableHead>
    <CTableRow>
      <CTableHeaderCell scope="col">#</CTableHeaderCell>
      <CTableHeaderCell scope="col">Class</CTableHeaderCell>
      <CTableHeaderCell scope="col">Heading</CTableHeaderCell>
      <CTableHeaderCell scope="col">Heading</CTableHeaderCell>
    </CTableRow>
  </CTableHead>
  <CTableBody>
    <CTableRow>
      <CTableHeaderCell scope="row">1</CTableHeaderCell>
      <CTableDataCell>Mark</CTableDataCell>
      <CTableDataCell>Otto</CTableDataCell>
      <CTableDataCell>@mdo</CTableDataCell>
    </CTableRow>
    <CTableRow>
      <CTableHeaderCell scope="row">2</CTableHeaderCell>
      <CTableDataCell>Jacob</CTableDataCell>
      <CTableDataCell>Thornton</CTableDataCell>
      <CTableDataCell>@fat</CTableDataCell>
    </CTableRow>
    <CTableRow>
      <CTableHeaderCell scope="row">3</CTableHeaderCell>
      <CTableDataCell colspan="2">Larry the Bird</CTableDataCell>
      <CTableDataCell>@twitter</CTableDataCell>
    </CTableRow>
  </CTableBody>
</CTable>
:::
```vue
<CTable hover>
  <CTableHead>
    <CTableRow>
      <CTableHeaderCell scope="col">#</CTableHeaderCell>
      <CTableHeaderCell scope="col">Class</CTableHeaderCell>
      <CTableHeaderCell scope="col">Heading</CTableHeaderCell>
      <CTableHeaderCell scope="col">Heading</CTableHeaderCell>
    </CTableRow>
  </CTableHead>
  <CTableBody>
    <CTableRow>
      <CTableHeaderCell scope="row">1</CTableHeaderCell>
      <CTableDataCell>Mark</CTableDataCell>
      <CTableDataCell>Otto</CTableDataCell>
      <CTableDataCell>@mdo</CTableDataCell>
    </CTableRow>
    <CTableRow>
      <CTableHeaderCell scope="row">2</CTableHeaderCell>
      <CTableDataCell>Jacob</CTableDataCell>
      <CTableDataCell>Thornton</CTableDataCell>
      <CTableDataCell>@fat</CTableDataCell>
    </CTableRow>
    <CTableRow>
      <CTableHeaderCell scope="row">3</CTableHeaderCell>
      <CTableDataCell colspan="2">Larry the Bird</CTableDataCell>
      <CTableDataCell>@twitter</CTableDataCell>
    </CTableRow>
  </CTableBody>
</CTable>
```

::: demo
<CTable color="dark" hover>
  <CTableHead>
    <CTableRow>
      <CTableHeaderCell scope="col">#</CTableHeaderCell>
      <CTableHeaderCell scope="col">Class</CTableHeaderCell>
      <CTableHeaderCell scope="col">Heading</CTableHeaderCell>
      <CTableHeaderCell scope="col">Heading</CTableHeaderCell>
    </CTableRow>
  </CTableHead>
  <CTableBody>
    <CTableRow>
      <CTableHeaderCell scope="row">1</CTableHeaderCell>
      <CTableDataCell>Mark</CTableDataCell>
      <CTableDataCell>Otto</CTableDataCell>
      <CTableDataCell>@mdo</CTableDataCell>
    </CTableRow>
    <CTableRow>
      <CTableHeaderCell scope="row">2</CTableHeaderCell>
      <CTableDataCell>Jacob</CTableDataCell>
      <CTableDataCell>Thornton</CTableDataCell>
      <CTableDataCell>@fat</CTableDataCell>
    </CTableRow>
    <CTableRow>
      <CTableHeaderCell scope="row">3</CTableHeaderCell>
      <CTableDataCell colspan="2">Larry the Bird</CTableDataCell>
      <CTableDataCell>@twitter</CTableDataCell>
    </CTableRow>
  </CTableBody>
</CTable>
:::
```vue
<CTable color="dark" hover>
  <CTableHead>
    <CTableRow>
      <CTableHeaderCell scope="col">#</CTableHeaderCell>
      <CTableHeaderCell scope="col">Class</CTableHeaderCell>
      <CTableHeaderCell scope="col">Heading</CTableHeaderCell>
      <CTableHeaderCell scope="col">Heading</CTableHeaderCell>
    </CTableRow>
  </CTableHead>
  <CTableBody>
    <CTableRow>
      <CTableHeaderCell scope="row">1</CTableHeaderCell>
      <CTableDataCell>Mark</CTableDataCell>
      <CTableDataCell>Otto</CTableDataCell>
      <CTableDataCell>@mdo</CTableDataCell>
    </CTableRow>
    <CTableRow>
      <CTableHeaderCell scope="row">2</CTableHeaderCell>
      <CTableDataCell>Jacob</CTableDataCell>
      <CTableDataCell>Thornton</CTableDataCell>
      <CTableDataCell>@fat</CTableDataCell>
    </CTableRow>
    <CTableRow>
      <CTableHeaderCell scope="row">3</CTableHeaderCell>
      <CTableDataCell colspan="2">Larry the Bird</CTableDataCell>
      <CTableDataCell>@twitter</CTableDataCell>
    </CTableRow>
  </CTableBody>
</CTable>
```

These hoverable rows can also be combined with the striped variant:

::: demo
<CTable striped hover>
  <CTableHead>
    <CTableRow>
      <CTableHeaderCell scope="col">#</CTableHeaderCell>
      <CTableHeaderCell scope="col">Class</CTableHeaderCell>
      <CTableHeaderCell scope="col">Heading</CTableHeaderCell>
      <CTableHeaderCell scope="col">Heading</CTableHeaderCell>
    </CTableRow>
  </CTableHead>
  <CTableBody>
    <CTableRow>
      <CTableHeaderCell scope="row">1</CTableHeaderCell>
      <CTableDataCell>Mark</CTableDataCell>
      <CTableDataCell>Otto</CTableDataCell>
      <CTableDataCell>@mdo</CTableDataCell>
    </CTableRow>
    <CTableRow>
      <CTableHeaderCell scope="row">2</CTableHeaderCell>
      <CTableDataCell>Jacob</CTableDataCell>
      <CTableDataCell>Thornton</CTableDataCell>
      <CTableDataCell>@fat</CTableDataCell>
    </CTableRow>
    <CTableRow>
      <CTableHeaderCell scope="row">3</CTableHeaderCell>
      <CTableDataCell colspan="2">Larry the Bird</CTableDataCell>
      <CTableDataCell>@twitter</CTableDataCell>
    </CTableRow>
  </CTableBody>
</CTable>
:::
```vue
<CTable striped hover>
  <CTableHead>
    <CTableRow>
      <CTableHeaderCell scope="col">#</CTableHeaderCell>
      <CTableHeaderCell scope="col">Class</CTableHeaderCell>
      <CTableHeaderCell scope="col">Heading</CTableHeaderCell>
      <CTableHeaderCell scope="col">Heading</CTableHeaderCell>
    </CTableRow>
  </CTableHead>
  <CTableBody>
    <CTableRow>
      <CTableHeaderCell scope="row">1</CTableHeaderCell>
      <CTableDataCell>Mark</CTableDataCell>
      <CTableDataCell>Otto</CTableDataCell>
      <CTableDataCell>@mdo</CTableDataCell>
    </CTableRow>
    <CTableRow>
      <CTableHeaderCell scope="row">2</CTableHeaderCell>
      <CTableDataCell>Jacob</CTableDataCell>
      <CTableDataCell>Thornton</CTableDataCell>
      <CTableDataCell>@fat</CTableDataCell>
    </CTableRow>
    <CTableRow>
      <CTableHeaderCell scope="row">3</CTableHeaderCell>
      <CTableDataCell colspan="2">Larry the Bird</CTableDataCell>
      <CTableDataCell>@twitter</CTableDataCell>
    </CTableRow>
  </CTableBody>
</CTable>
```

### Active tables

Highlight a table row or cell by adding a `active` property.

::: demo-rounded
<CTable :columns="columnsActiveTableExample" :items="itemsActiveTableExample" />
:::

As mentioned before since version **4.5.0** we have two ways to generate tables, also with custom properties for rows, and cells.

```vue
<template>
  <CTable :columns="columnsActiveTableExample" :items="itemsActiveTableExample" />
</template>
<script>
  export default {
    data: () => {
      return {
        columnsActiveTableExample: [
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
        ],
        itemsActiveTableExample: [
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
        ],
      }
    },
  }
</script>
```

```vue
<CTable>
  <CTableHead>
    <CTableRow>
      <CTableHeaderCell scope="col">#</CTableHeaderCell>
      <CTableHeaderCell scope="col">Class</CTableHeaderCell>
      <CTableHeaderCell scope="col">Heading</CTableHeaderCell>
      <CTableHeaderCell scope="col">Heading</CTableHeaderCell>
    </CTableRow>
  </CTableHead>
  <CTableBody>
    <CTableRow active>
      <CTableHeaderCell scope="row">1</CTableHeaderCell>
      <CTableDataCell>Mark</CTableDataCell>
      <CTableDataCell>Otto</CTableDataCell>
      <CTableDataCell>@mdo</CTableDataCell>
    </CTableRow>
    <CTableRow>
      <CTableHeaderCell scope="row">2</CTableHeaderCell>
      <CTableDataCell>Jacob</CTableDataCell>
      <CTableDataCell>Thornton</CTableDataCell>
      <CTableDataCell>@fat</CTableDataCell>
    </CTableRow>
    <CTableRow>
      <CTableHeaderCell scope="row">3</CTableHeaderCell>
      <CTableDataCell colspan="2" active>Larry the Bird</CTableDataCell>
      <CTableDataCell>@twitter</CTableDataCell>
    </CTableRow>
  </CTableBody>
</CTable>
```

::: demo
<CTable color="dark" :columns="columnsActiveTableExample" :items="itemsActiveTableExample" />
:::
```vue
<template>
  <CTable color="dark" :columns="columnsActiveTableExample" :items="itemsActiveTableExample" />
</template>
<script>
  export default {
    data: () => {
      return {
        columnsActiveTableExample: [
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
        ],
        itemsActiveTableExample: [
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
        ],
      }
    },
  }
</script>
```

## Table borders

### Bordered tables

Add `bordered` property for borders on all sides of the table and cells.

::: demo
<CTable bordered :columns="columns" :items="items" />
:::
```vue
<CTable bordered>
  ...
</CTable>
```

[Border color utilities](https://coreui.io/docs/4.0/utilities/borders#border-color) can be added to change colors:

::: demo
<CTable bordered border-color="primary" :columns="columns" :items="items" />
:::
```vue
<CTable bordered border-color="primary">
  ...
</CTable>
```

### Tables without borders

Add `borderless` property for a table without borders.

::: demo
<CTable borderless :columns="columns" :items="items" />
:::
```vue
<CTable borderless>
  ...
</CTable>
```

::: demo
<CTable color="dark" borderless :columns="columns" :items="items" />
:::
```vue
<CTable color="dark" borderless>
  ...
</CTable>
```

## Small tables

Add `small` property to make any `<CTable>` more compact by cutting all cell `padding` in half.

::: demo
<CTable small :columns="columns" :items="items" />
:::
```vue
<CTable small>
  ...
</CTable>
```

## Vertical alignment

Table cells of `<CTableHead>` are always vertical aligned to the bottom. Table cells in `<CTableBody>` inherit their alignment from `<CTable>` and are aligned to the the top by default. Use the align property to re-align where needed.

::: demo
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
      <CTableDataCell>This cell inherits <code>vertical-align: middle;</code> from the table</CTableDataCell>
      <CTableDataCell>This cell inherits <code>vertical-align: middle;</code> from the table</CTableDataCell>
      <CTableDataCell>This cell inherits <code>vertical-align: middle;</code> from the table</CTableDataCell>
      <CTableDataCell>This here is some placeholder text, intended to take up quite a bit of vertical space, to demonsCTableRowate how the vertical alignment works in the preceding cells.</CTableDataCell>
    </CTableRow>
    <CTableRow align="bottom">
      <CTableDataCell>This cell inherits <code>vertical-align: bottom;</code> from the table row</CTableDataCell>
      <CTableDataCell>This cell inherits <code>vertical-align: bottom;</code> from the table row</CTableDataCell>
      <CTableDataCell>This cell inherits <code>vertical-align: bottom;</code> from the table row</CTableDataCell>
      <CTableDataCell>This here is some placeholder text, intended to take up quite a bit of vertical space, to demonsCTableRowate how the vertical alignment works in the preceding cells.</CTableDataCell>
    </CTableRow>
    <CTableRow>
      <CTableDataCell>This cell inherits <code>vertical-align: middle;</code> from the table</CTableDataCell>
      <CTableDataCell>This cell inherits <code>vertical-align: middle;</code> from the table</CTableDataCell>
      <CTableDataCell align="top">This cell is aligned to the top.</CTableDataCell>
      <CTableDataCell>This here is some placeholder text, intended to take up quite a bit of vertical space, to demonsCTableRowate how the vertical alignment works in the preceding cells.</CTableDataCell>
    </CTableRow>
  </CTableBody>
</CTable> 
:::
```vue
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
      <CTableDataCell>This cell inherits <code>vertical-align: middle;</code> from the table</CTableDataCell>
      <CTableDataCell>This cell inherits <code>vertical-align: middle;</code> from the table</CTableDataCell>
      <CTableDataCell>This cell inherits <code>vertical-align: middle;</code> from the table</CTableDataCell>
      <CTableDataCell>This here is some placeholder text, intended to take up quite a bit of vertical space, to demonsCTableRowate how the vertical alignment works in the preceding cells.</CTableDataCell>
    </CTableRow>
    <CTableRow align="bottom">
      <CTableDataCell>This cell inherits <code>vertical-align: bottom;</code> from the table row</CTableDataCell>
      <CTableDataCell>This cell inherits <code>vertical-align: bottom;</code> from the table row</CTableDataCell>
      <CTableDataCell>This cell inherits <code>vertical-align: bottom;</code> from the table row</CTableDataCell>
      <CTableDataCell>This here is some placeholder text, intended to take up quite a bit of vertical space, to demonsCTableRowate how the vertical alignment works in the preceding cells.</CTableDataCell>
    </CTableRow>
    <CTableRow>
      <CTableDataCell>This cell inherits <code>vertical-align: middle;</code> from the table</CTableDataCell>
      <CTableDataCell>This cell inherits <code>vertical-align: middle;</code> from the table</CTableDataCell>
      <CTableDataCell align="top">This cell is aligned to the top.</CTableDataCell>
      <CTableDataCell>This here is some placeholder text, intended to take up quite a bit of vertical space, to demonsCTableRowate how the vertical alignment works in the preceding cells.</CTableDataCell>
    </CTableRow>
  </CTableBody>
</CTable> 
```

## Nesting

Border styles, active styles, and table variants are not inherited by nested tables.

::: demo
<CTable striped>
  <CTableHead>
    <CTableRow>
      <CTableHeaderCell scope="col">#</CTableHeaderCell>
      <CTableHeaderCell scope="col">Class</CTableHeaderCell>
      <CTableHeaderCell scope="col">Heading</CTableHeaderCell>
      <CTableHeaderCell scope="col">Heading</CTableHeaderCell>
    </CTableRow>
  </CTableHead>
  <CTableBody>
    <CTableRow>
      <CTableHeaderCell scope="row">1</CTableHeaderCell>
      <CTableDataCell>Mark</CTableDataCell>
      <CTableDataCell>Otto</CTableDataCell>
      <CTableDataCell>@mdo</CTableDataCell>
    </CTableRow>
    <CTableRow>
      <CTableHeaderCell colspan="4">
        <CTable>
          <CTableHead>
            <CTableRow>
              <CTableHeaderCell scope="col">Header</CTableHeaderCell>
              <CTableHeaderCell scope="col">Header</CTableHeaderCell>
              <CTableHeaderCell scope="col">Header</CTableHeaderCell>
            </CTableRow>
          </CTableHead>
          <CTableBody>
            <CTableRow>
              <CTableHeaderCell scope="row">A</CTableHeaderCell>
              <CTableDataCell>First</CTableDataCell>
              <CTableDataCell>Last</CTableDataCell>
            </CTableRow>
            <CTableRow>
              <CTableHeaderCell scope="row">B</CTableHeaderCell>
              <CTableDataCell>First</CTableDataCell>
              <CTableDataCell>Last</CTableDataCell>
            </CTableRow>
            <CTableRow>
              <CTableHeaderCell scope="row">C</CTableHeaderCell>
              <CTableDataCell>First</CTableDataCell>
              <CTableDataCell>Last</CTableDataCell>
            </CTableRow>
          </CTableBody>
        </CTable>
      </CTableHeaderCell>
    </CTableRow>
    <CTableRow>
      <CTableHeaderCell scope="row">3</CTableHeaderCell>
      <CTableDataCell colspan="2">Larry the Bird</CTableDataCell>
      <CTableDataCell>@twitter</CTableDataCell>
    </CTableRow>
  </CTableBody>
</CTable>
:::
```vue
<CTable striped>
  <CTableHead>
    <CTableRow>
      <CTableHeaderCell scope="col">#</CTableHeaderCell>
      <CTableHeaderCell scope="col">Class</CTableHeaderCell>
      <CTableHeaderCell scope="col">Heading</CTableHeaderCell>
      <CTableHeaderCell scope="col">Heading</CTableHeaderCell>
    </CTableRow>
  </CTableHead>
  <CTableBody>
    <CTableRow>
      <CTableHeaderCell scope="row">1</CTableHeaderCell>
      <CTableDataCell>Mark</CTableDataCell>
      <CTableDataCell>Otto</CTableDataCell>
      <CTableDataCell>@mdo</CTableDataCell>
    </CTableRow>
    <CTableRow>
      <CTableHeaderCell colspan="4">
        <CTable>
          <CTableHead>
            <CTableRow>
              <CTableHeaderCell scope="col">Header</CTableHeaderCell>
              <CTableHeaderCell scope="col">Header</CTableHeaderCell>
              <CTableHeaderCell scope="col">Header</CTableHeaderCell>
            </CTableRow>
          </CTableHead>
          <CTableBody>
            <CTableRow>
              <CTableHeaderCell scope="row">A</CTableHeaderCell>
              <CTableDataCell>First</CTableDataCell>
              <CTableDataCell>Last</CTableDataCell>
            </CTableRow>
            <CTableRow>
              <CTableHeaderCell scope="row">B</CTableHeaderCell>
              <CTableDataCell>First</CTableDataCell>
              <CTableDataCell>Last</CTableDataCell>
            </CTableRow>
            <CTableRow>
              <CTableHeaderCell scope="row">C</CTableHeaderCell>
              <CTableDataCell>First</CTableDataCell>
              <CTableDataCell>Last</CTableDataCell>
            </CTableRow>
          </CTableBody>
        </CTable>
      </CTableHeaderCell>
    </CTableRow>
    <CTableRow>
      <CTableHeaderCell scope="row">3</CTableHeaderCell>
      <CTableDataCell colspan="2">Larry the Bird</CTableDataCell>
      <CTableDataCell>@twitter</CTableDataCell>
    </CTableRow>
  </CTableBody>
</CTable>
```

## Anatomy

### Table head

Similar to tables and dark tables, use the modifier prop `color="light"` or `color="dark"` to make `<CTableHead>`s appear light or dark gray.

::: demo
<CTable>
  <CTableHead color="light">
    <CTableRow>
      <CTableHeaderCell scope="col">#</CTableHeaderCell>
      <CTableHeaderCell scope="col">Class</CTableHeaderCell>
      <CTableHeaderCell scope="col">Heading</CTableHeaderCell>
      <CTableHeaderCell scope="col">Heading</CTableHeaderCell>
    </CTableRow>
  </CTableHead>
  <CTableBody>
    <CTableRow>
      <CTableHeaderCell scope="row">1</CTableHeaderCell>
      <CTableDataCell>Mark</CTableDataCell>
      <CTableDataCell>Otto</CTableDataCell>
      <CTableDataCell>@mdo</CTableDataCell>
    </CTableRow>
    <CTableRow>
      <CTableHeaderCell scope="row">2</CTableHeaderCell>
      <CTableDataCell>Jacob</CTableDataCell>
      <CTableDataCell>Thornton</CTableDataCell>
      <CTableDataCell>@fat</CTableDataCell>
    </CTableRow>
    <CTableRow>
      <CTableHeaderCell scope="row">3</CTableHeaderCell>
      <CTableDataCell>Larry</CTableDataCell>
      <CTableDataCell>the Bird</CTableDataCell>
      <CTableDataCell>@twitter</CTableDataCell>
    </CTableRow>
  </CTableBody>
</CTable>
:::
```vue
<CTable>
  <CTableHead color="light">
    ...
  </CTableHead>
  <CTableBody>
    ...
  </CTableBody>
</CTable>
```

If you generate a table using the new method incorporated in version **4.5.0**, you have to use tableHeadProps property to pass properties to the table header component.

```vue
<template>
  <CTable :columns="columns" :items="items" :tableHeadProps="{ color: 'light' }" />
</template>
<script>
 export default {
    data: () => {
      return {
        columns: [ ... ],
        items: [ ... ]
      }
    },
  }
</script>
```

::: demo
<CTable>
  <CTableHead color="dark">
    <CTableRow>
      <CTableHeaderCell scope="col">#</CTableHeaderCell>
      <CTableHeaderCell scope="col">Class</CTableHeaderCell>
      <CTableHeaderCell scope="col">Heading</CTableHeaderCell>
      <CTableHeaderCell scope="col">Heading</CTableHeaderCell>
    </CTableRow>
  </CTableHead>
  <CTableBody>
    <CTableRow>
      <CTableHeaderCell scope="row">1</CTableHeaderCell>
      <CTableDataCell>Mark</CTableDataCell>
      <CTableDataCell>Otto</CTableDataCell>
      <CTableDataCell>@mdo</CTableDataCell>
    </CTableRow>
    <CTableRow>
      <CTableHeaderCell scope="row">2</CTableHeaderCell>
      <CTableDataCell>Jacob</CTableDataCell>
      <CTableDataCell>Thornton</CTableDataCell>
      <CTableDataCell>@fat</CTableDataCell>
    </CTableRow>
    <CTableRow>
      <CTableHeaderCell scope="row">3</CTableHeaderCell>
      <CTableDataCell colspan="2">Larry the Bird</CTableDataCell>
      <CTableDataCell>@twitter</CTableDataCell>
    </CTableRow>
  </CTableBody>
</CTable>
:::
```vue
<CTable>
  <CTableHead color="dark">
    ...
  </CTableHead>
  <CTableBody>
    ...
  </CTableBody>
</CTable>
```

Starting from version **4.5.0** also this way.

```vue
<template>
  <CTable :columns="columns" :items="items" :tableHeadProps="{ color: 'dark' }" />
</template>
<script>
 export default {
    data: () => {
      return {
        columns: [ ... ],
        items: [ ... ]
      }
    },
  }
</script>
```

### Table foot

::: demo
<CTable>
  <CTableHead color="light">
    <CTableRow>
      <CTableHeaderCell scope="col">#</CTableHeaderCell>
      <CTableHeaderCell scope="col">Class</CTableHeaderCell>
      <CTableHeaderCell scope="col">Heading</CTableHeaderCell>
      <CTableHeaderCell scope="col">Heading</CTableHeaderCell>
    </CTableRow>
  </CTableHead>
  <CTableBody>
    <CTableRow>
      <CTableHeaderCell scope="row">1</CTableHeaderCell>
      <CTableDataCell>Mark</CTableDataCell>
      <CTableDataCell>Otto</CTableDataCell>
      <CTableDataCell>@mdo</CTableDataCell>
    </CTableRow>
    <CTableRow>
      <CTableHeaderCell scope="row">2</CTableHeaderCell>
      <CTableDataCell>Jacob</CTableDataCell>
      <CTableDataCell>Thornton</CTableDataCell>
      <CTableDataCell>@fat</CTableDataCell>
    </CTableRow>
    <CTableRow>
      <CTableHeaderCell scope="row">3</CTableHeaderCell>
      <CTableDataCell colspan="2">Larry the Bird</CTableDataCell>
      <CTableDataCell>@twitter</CTableDataCell>
    </CTableRow>
  </CTableBody>
</CTable>
:::
```vue
<CTable>
  <CTableHead color="light">
    ...
  </CTableHead>
  <CTableBody>
    ...
  </CTableBody>
  <CTableHead>
    <CTableRow>
      <CTableDataCell>Footer</CTableDataCell>
      <CTableDataCell>Footer</CTableDataCell>
      <CTableDataCell>Footer</CTableDataCell>
      <CTableDataCell>Footer</CTableDataCell>
    </CTableRow>
  </CTableHead>
</CTable>
```

Starting from version **4.5.0** also this way.

```vue
<template>
  <CTable :columns="columns" :footer="footer" :items="items" :tableHeadProps="{ color: 'dark' }" />
</template>
<script>
 export default {
    data: () => {
      return {
        columns: [ ... ],
        footer: [
          'Footer',
          'Footer',
          'Footer',
          'Footer',
        ],
        items: [ ... ]
      }
    },
  }
</script>
```

### Captions

A `<CTableCaption>` functions like a heading for a table. It helps users with screen readers to find a table and understand what it's about and decide if they want to read it.

::: demo
<CTable>
  <CTableCaption>List of users</CTableCaption>
  <CTableHead>
    <CTableRow>
      <CTableHeaderCell scope="col">#</CTableHeaderCell>
      <CTableHeaderCell scope="col">Class</CTableHeaderCell>
      <CTableHeaderCell scope="col">Heading</CTableHeaderCell>
      <CTableHeaderCell scope="col">Heading</CTableHeaderCell>
    </CTableRow>
  </CTableHead>
  <CTableBody>
    <CTableRow>
      <CTableHeaderCell scope="row">1</CTableHeaderCell>
      <CTableDataCell>Mark</CTableDataCell>
      <CTableDataCell>Otto</CTableDataCell>
      <CTableDataCell>@mdo</CTableDataCell>
    </CTableRow>
    <CTableRow>
      <CTableHeaderCell scope="row">2</CTableHeaderCell>
      <CTableDataCell>Jacob</CTableDataCell>
      <CTableDataCell>Thornton</CTableDataCell>
      <CTableDataCell>@fat</CTableDataCell>
    </CTableRow>
    <CTableRow>
      <CTableHeaderCell scope="row">3</CTableHeaderCell>
      <CTableDataCell>Larry</CTableDataCell>
      <CTableDataCell>the Bird</CTableDataCell>
      <CTableDataCell>@twitter</CTableDataCell>
    </CTableRow>
  </CTableBody>
</CTable>
:::
```vue
<CTable>
  <CTableCaption>List of users</CTableCaption>
  <CTableHead>
    ...
  </CTableHead>
  <CTableBody>
    ...
  </CTableBody>
</CTable>
```

Starting from version **4.5.0** also this way.

```vue
<template>
  <CTable caption="List of users" :columns="columns" :items="items"  />
</template>
<script>
 export default {
    data: () => {
      return {
        columns: [ ... ],
        items: [ ... ]
      }
    },
  }
</script>
```

You can also put the `<CTableCaption>` on the top of the table with `caption="top"`.

::: demo
<CTable caption="top">
  <CTableCaption>List of users</CTableCaption>
  <CTableHead>
    <CTableRow>
      <CTableHeaderCell scope="col">#</CTableHeaderCell>
      <CTableHeaderCell scope="col">Class</CTableHeaderCell>
      <CTableHeaderCell scope="col">Heading</CTableHeaderCell>
      <CTableHeaderCell scope="col">Heading</CTableHeaderCell>
    </CTableRow>
  </CTableHead>
  <CTableBody>
    <CTableRow>
      <CTableHeaderCell scope="row">1</CTableHeaderCell>
      <CTableDataCell>Mark</CTableDataCell>
      <CTableDataCell>Otto</CTableDataCell>
      <CTableDataCell>@mdo</CTableDataCell>
    </CTableRow>
    <CTableRow>
      <CTableHeaderCell scope="row">2</CTableHeaderCell>
      <CTableDataCell>Jacob</CTableDataCell>
      <CTableDataCell>Thornton</CTableDataCell>
      <CTableDataCell>@fat</CTableDataCell>
    </CTableRow>
    <CTableRow>
      <CTableHeaderCell scope="row">3</CTableHeaderCell>
      <CTableDataCell>Larry</CTableDataCell>
      <CTableDataCell>the Bird</CTableDataCell>
      <CTableDataCell>@twitter</CTableDataCell>
    </CTableRow>
  </CTableBody>
</CTable>
:::
```vue
<CTable caption="top">
  <CTableCaption>List of users</CTableCaption>
  <CTableHead>
    <CTableRow>
      <CTableHeaderCell scope="col">#</CTableHeaderCell>
      <CTableHeaderCell scope="col">Class</CTableHeaderCell>
      <CTableHeaderCell scope="col">Heading</CTableHeaderCell>
      <CTableHeaderCell scope="col">Heading</CTableHeaderCell>
    </CTableRow>
  </CTableHead>
  <CTableBody>
    <CTableRow>
      <CTableHeaderCell scope="row">1</CTableHeaderCell>
      <CTableDataCell>Mark</CTableDataCell>
      <CTableDataCell>Otto</CTableDataCell>
      <CTableDataCell>@mdo</CTableDataCell>
    </CTableRow>
    <CTableRow>
      <CTableHeaderCell scope="row">2</CTableHeaderCell>
      <CTableDataCell>Jacob</CTableDataCell>
      <CTableDataCell>Thornton</CTableDataCell>
      <CTableDataCell>@fat</CTableDataCell>
    </CTableRow>
    <CTableRow>
      <CTableHeaderCell scope="row">3</CTableHeaderCell>
      <CTableDataCell>Larry</CTableDataCell>
      <CTableDataCell>the Bird</CTableDataCell>
      <CTableDataCell>@twitter</CTableDataCell>
    </CTableRow>
  </CTableBody>
</CTable>
```

Since version **4.5.0** also this way.

```vue
<template>
  <CTable captionTop="List of users" :columns="columns" :items="items"  />
</template>
<script>
 export default {
    data: () => {
      return {
        columns: [ ... ],
        items: [ ... ]
      }
    },
  }
</script>
```
## Responsive tables

Responsive tables allow tables to be scrolled horizontally with ease. Make any table responsive across all viewports by adding a `responsive` property. Or, pick a maximum breakpoint with which to have a responsive table up to by using `responsive="{-sm|-md|-lg|-xl|-xxl}"`.

::: demo
<CTable responsive>
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
:::
```vue
<CTable responsive>
  ...
</CTable>
```

::: demo
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
:::
```vue
<CTable responsive="sm">
  ...
</CTable>
```

::: demo
<CTable responsive="md">
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
:::
```vue
<CTable responsive="md">
  ...
</CTable>
```

::: demo
<CTable responsive="lg">
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
:::
```vue
<CTable responsive="lg">
  ...
</CTable>
```

::: demo
<CTable responsive="xl">
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
:::
```vue
<CTable responsive="xl">
  ...
</CTable>
```

::: demo
<CTable responsive="xxl">
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
:::
```vue
<CTable responsive="xxl">
  ...
</CTable>
```

<script>
  export default {
    data: () => {
      return {
        columns: [
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
        ],
        items: [
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
        ],
        columnsActiveTableExample: [
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
        ],
        itemsActiveTableExample: [
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
        ],
        columnsVariantExample: [
          { key: 'class', _props: { scope: 'col' } },
          { key: 'heading_1', label: 'Heading', _props: { scope: 'col' } },
          { key: 'heading_2', label: 'Heading', _props: { scope: 'col' } },
        ],
        itemsVariantExample: [
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
      }
    },
  }
</script>

## API

!!!include(./api/table/CTable.api.md)!!!

!!!include(./api/table/CTableBody.api.md)!!!

!!!include(./api/table/CTableDataCell.api.md)!!!

!!!include(./api/table/CTableFoot.api.md)!!!

!!!include(./api/table/CTableHead.api.md)!!!

!!!include(./api/table/CTableHeaderCell.api.md)!!!

!!!include(./api/table/CTableRow.api.md)!!!