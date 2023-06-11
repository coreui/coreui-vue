---
title: Vue Select Component
name: Select
description: Vue select component. Customize the native `<select>`s with custom CSS that changes the element's initial appearance.
other_frameworks: select
---

## Default

::: demo
<CFormSelect
aria-label="Default select example"
:options="[
'Open this select menu',
{ label: 'One', value: '1' },
{ label: 'Two', value: '2' },
{ label: 'Three', value: '3', disabled: true }]"></CFormSelect>
:::
```vue
<CFormSelect
  aria-label="Default select example"
  :options="[
    'Open this select menu',
    { label: 'One', value: '1' },
    { label: 'Two', value: '2' },
    { label: 'Three', value: '3', disabled: true }
  ]">
</CFormSelect>

// You can also add options manually
<CFormSelect aria-label="Default select example">
  <option>Open this select menu</option>
  <option value="1">One</option>
  <option value="2">Two</option>
  <option value="3" disabled>Three</option>
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

As is the `html-size` property:

::: demo
<CFormSelect :html-size="3" multiple aria-label="size 3 select example">
  <option>Open this select menu</option>
  <option value="1">One</option>
  <option value="2">Two</option>
  <option value="3">Three</option>
</CFormSelect>
:::
```vue
<CFormSelect :html-size="3" multiple aria-label="size 3 select example">
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

## Customizing

### SASS variables

<ScssDocs file="_variables.scss" capture="form-select-variables" />

## API

!!!include(./api/form/CFormSelect.api.md)!!!