---
title: Vue Popover Component and Directive
name: Popover
description: Documentation and examples for adding Vue popovers, like those found in iOS, to any element on your site.
---

## Example

### Component

::: demo
<CPopover title="Popover title" content="And here\’s some amazing content. It’s very engaging. Right?" placement="right">
  <template #toggler="{ on }">
    <CButton color="danger" size="lg" v-on="on">Click to toggle popover</CButton>
  </template>
</CPopover>
:::
```vue
<CPopover title="Popover title" content="And here\’s some amazing content. It’s very engaging. Right?" placement="right">
  <template #toggler="{ on }">
    <CButton color="danger" size="lg" v-on="on">Click to toggle popover</CButton>
  </template>
</CPopover>
```

### Directive

::: demo
<CButton color="danger" size="lg" v-c-popover="{header: 'Popover title', content: 'And here\’s some amazing content. It’s very engaging. Right?', placement: 'right'}">Click to toggle popover</CButton>
:::
```vue
<CButton color="danger" size="lg" v-c-popover="{header: 'Popover title', content: 'And here\’s some amazing content. It’s very engaging. Right?', placement: 'right'}">Click to toggle popover</CButton>
```

### Four directions

Four options are available: top, right, bottom, and left aligned. Directions are mirrored when using CoreUI for Vue in RTL.

#### Component

::: demo
<CPopover content="Vivamus sagittis lacus vel augue laoreet rutrum faucibus" placement="top">
  <template #toggler="{ on }">
    <CButton color="secondary" v-on="on">Popover on top</CButton>
  </template>
</CPopover>
<CPopover content="Vivamus sagittis lacus vel augue laoreet rutrum faucibus" placement="right">
  <template #toggler="{ on }">
    <CButton color="secondary" v-on="on">Popover on right</CButton>
  </template>
</CPopover>
<CPopover content="Vivamus sagittis lacus vel augue laoreet rutrum faucibus" placement="bottom">
  <template #toggler="{ on }">
    <CButton color="secondary" v-on="on">Popover on bottom</CButton>
  </template>
</CPopover>
<CPopover content="Vivamus sagittis lacus vel augue laoreet rutrum faucibus" placement="left">
  <template #toggler="{ on }">
    <CButton color="secondary" v-on="on">Popover on left</CButton>
  </template>
</CPopover>
:::
```vue
<CPopover content="Vivamus sagittis lacus vel augue laoreet rutrum faucibus" placement="top">
  <template #toggler="{ on }">
    <CButton color="secondary" v-on="on">Popover on top</CButton>
  </template>
</CPopover>
<CPopover content="Vivamus sagittis lacus vel augue laoreet rutrum faucibus" placement="right">
  <template #toggler="{ on }">
    <CButton color="secondary" v-on="on">Popover on right</CButton>
  </template>
</CPopover>
<CPopover content="Vivamus sagittis lacus vel augue laoreet rutrum faucibus" placement="bottom">
  <template #toggler="{ on }">
    <CButton color="secondary" v-on="on">Popover on bottom</CButton>
  </template>
</CPopover>
<CPopover content="Vivamus sagittis lacus vel augue laoreet rutrum faucibus" placement="left">
  <template #toggler="{ on }">
    <CButton color="secondary" v-on="on">Popover on left</CButton>
  </template>
</CPopover>
```

#### Directive

::: demo
<CButton color="secondary" v-c-popover="{content: 'Vivamus sagittis lacus vel augue laoreet rutrum faucibus.', placement: 'top'}">Popover on top</CButton>
<CButton color="secondary" v-c-popover="{content: 'Vivamus sagittis lacus vel augue laoreet rutrum faucibus.', placement: 'right'}">Popover on right</CButton>
<CButton color="secondary" v-c-popover="{content: 'Vivamus sagittis lacus vel augue laoreet rutrum faucibus.', placement: 'bottom'}">Popover on bottom</CButton>
<CButton color="secondary" v-c-popover="{content: 'Vivamus sagittis lacus vel augue laoreet rutrum faucibus.', placement: 'left'}">Popover on left</CButton>
:::
```vue
<CButton color="secondary" v-c-popover="{content: 'Vivamus sagittis lacus vel augue laoreet rutrum faucibus.', placement: 'top'}">Popover on top</CButton>
<CButton color="secondary" v-c-popover="{content: 'Vivamus sagittis lacus vel augue laoreet rutrum faucibus.', placement: 'right'}">Popover on right</CButton>
<CButton color="secondary" v-c-popover="{content: 'Vivamus sagittis lacus vel augue laoreet rutrum faucibus.', placement: 'bottom'}">Popover on bottom</CButton>
<CButton color="secondary" v-c-popover="{content: 'Vivamus sagittis lacus vel augue laoreet rutrum faucibus.', placement: 'left'}">Popover on left</CButton>
```

## API

!!!include(./api/popover/CPopover.api.md)!!!