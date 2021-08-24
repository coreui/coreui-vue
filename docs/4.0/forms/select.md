---
title: Vue Select Component
name: Select
description: Vue select component. Customize the native `<select>`s with custom CSS that changes the element's initial appearance.
---

## Default

::: demo
<CFormSelect aria-label="Default select example">
  <option>Open this select menu</option>
  <option value="1">One</option>
  <option value="2">Two</option>
  <option value="3">Three</option>
</CFormSelect>
:::
```vue
<CFormSelect aria-label="Default select example">
  <option>Open this select menu</option>
  <option value="1">One</option>
  <option value="2">Two</option>
  <option value="3">Three</option>
</CFormSelect>
```

## Sizing

You may also choose from small and large custom selects to match our similarly sized text inputs.

::: demo
<CFormSelect size="lg" class="mb-3" aria-label="Large select example">
  <option>Open this select menu</option>
  <option value="1">One</option>
  <option value="2">Two</option>
  <option value="3">Three</option>
</CFormSelect>
<CFormSelect size="sm" class="mb-3" aria-label="Small select example">
  <option>Open this select menu</option>
  <option value="1">One</option>
  <option value="2">Two</option>
  <option value="3">Three</option>
</CFormSelect>
:::
```vue
<CFormSelect size="lg" class="mb-3" aria-label="Large select example">
  <option>Open this select menu</option>
  <option value="1">One</option>
  <option value="2">Two</option>
  <option value="3">Three</option>
</CFormSelect>
<CFormSelect size="sm" class="mb-3" aria-label="Small select example">
  <option>Open this select menu</option>
  <option value="1">One</option>
  <option value="2">Two</option>
  <option value="3">Three</option>
</CFormSelect>
```

The `multiple` attribute is also supported:

::: demo
<CFormSelect size="lg" multiple aria-label="Multiple select example">
  <option>Open this select menu</option>
  <option value="1">One</option>
  <option value="2">Two</option>
  <option value="3">Three</option>
</CFormSelect>
:::
```vue
<CFormSelect size="lg" multiple aria-label="Multiple select example">
  <option>Open this select menu</option>
  <option value="1">One</option>
  <option value="2">Two</option>
  <option value="3">Three</option>
</CFormSelect>
```

As is the `htmlSize` property:

::: demo
<CFormSelect :htmlSize="3" multiple aria-label="size 3 select example">
  <option>Open this select menu</option>
  <option value="1">One</option>
  <option value="2">Two</option>
  <option value="3">Three</option>
</CFormSelect>
:::
```vue
<CFormSelect :htmlSize="3" multiple aria-label="size 3 select example">
  <option>Open this select menu</option>
  <option value="1">One</option>
  <option value="2">Two</option>
  <option value="3">Three</option>
</CFormSelect>
```

## Disabled

Add the `disabled` boolean attribute on a select to give it a grayed out appearance and remove pointer events.

::: demo
<CFormSelect aria-label="Disabled select example" disabled>
  <option>Open this select menu</option>
  <option value="1">One</option>
  <option value="2">Two</option>
  <option value="3">Three</option>
</CFormSelect>
:::
```vue
<CFormSelect aria-label="Disabled select example" disabled>
  <option>Open this select menu</option>
  <option value="1">One</option>
  <option value="2">Two</option>
  <option value="3">Three</option>
</CFormSelect>
```

## API

!!!include(./docs/4.0/api/form/CFormSelect.api.md)!!!