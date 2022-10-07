---
title: Vue Table Component
name: Table
description: Documentation and examples for opt-in styling of tables.
---

## Overview

Due to the widespread use of `<CTable>` elements across third-party widgets like calendars and date pickers, CoreUI's tables are **opt-in**. All table styles are not inherited in CoreUI, meaning any nested tables can be styled independent from the parent.

Using the most basic table CoreUI, here's how `<CTable>`-based tables look in CoreUI.

::: demo
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
:::
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

::: demo
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
:::
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
<CTable color="dark">
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
:::
```vue
<CTable color="dark">
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

## Table borders

### Bordered tables

Add `bordered` property for borders on all sides of the table and cells.

::: demo
<CTable bordered>
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
<CTable bordered>
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

[Border color utilities](https://coreui.io/docs/4.0/utilities/borders#border-color) can be added to change colors:

::: demo
<CTable bordered border-color="primary">
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
<CTable bordered border-color="primary">
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

### Tables without borders

Add `borderless` property for a table without borders.

::: demo
<CTable borderless>
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
<CTable borderless>
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
<CTable color="dark" borderless>
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
<CTable color="dark" borderless>
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

## Small tables

Add `small` property to make any `<CTable>` more compact by cutting all cell `padding` in half.

::: demo
<CTable small>
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
<CTable small>
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
  <CTableHead>
    <CTableRow>
      <CTableDataCell>Footer</CTableDataCell>
      <CTableDataCell>Footer</CTableDataCell>
      <CTableDataCell>Footer</CTableDataCell>
      <CTableDataCell>Footer</CTableDataCell>
    </CTableRow>
  </CTableHead>
</CTable>
:::
```vue
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
```

## API

!!!include(./api/table/CTable.api.md)!!!

!!!include(./api/table/CTableBody.api.md)!!!

!!!include(./api/table/CTableDataCell.api.md)!!!

!!!include(./api/table/CTableFoot.api.md)!!!

!!!include(./api/table/CTableHead.api.md)!!!

!!!include(./api/table/CTableHeaderCell.api.md)!!!

!!!include(./api/table/CTableRow.api.md)!!!