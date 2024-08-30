---
title: Vue Tooltip Component and Directive
name: Tooltip
description: Documentation and examples for adding Vue Tooltips.
other_frameworks: tooltip
---

## Examples

### Tooltips on links

Hover over the links below to see tooltips:

::: demo
<p class="text-body-secondary">
  Tight pants next level keffiyeh
  <CLink v-c-tooltip="'Tooltip text'"> you&nbsp;probably </CLink>
    haven't heard of them.
  Photo booth beard raw denim letterpress vegan messenger
  bag stumptown. Farm-to-table seitan, mcsweeney's fixie
  sustainable quinoa 8-bit american apparel
  <CLink v-c-tooltip="'Tooltip text'"> have&nbsp;a </CLink>
  terry richardson vinyl chambray. Beard stumptown,
  cardigans banh mi lomo thundercats. Tofu biodiesel
  williamsburg marfa, four loko mcsweeney''s cleanse
  vegan chambray. A really ironic artisan
  <CLink v-c-tooltip="'Tooltip text'"> whatever&nbsp;keytar </CLink>
  scenester farm-to-table banksy Austin
  <CLink v-c-tooltip="'Tooltip text'"> twitter&nbsp;handle </CLink>
  freegan cred raw denim single-origin coffee viral.
</p>
:::
```vue demo
<p class="text-body-secondary">
  Tight pants next level keffiyeh
  <CLink v-c-tooltip="'Tooltip text'"> you probably </CLink>
    haven't heard of them.
  Photo booth beard raw denim letterpress vegan messenger
  bag stumptown. Farm-to-table seitan, mcsweeney's fixie
  sustainable quinoa 8-bit american apparel
  <CLink v-c-tooltip="'Tooltip text'"> have a </CLink>
  terry richardson vinyl chambray. Beard stumptown,
  cardigans banh mi lomo thundercats. Tofu biodiesel
  williamsburg marfa, four loko mcsweeney''s cleanse
  vegan chambray. A really ironic artisan
  <CLink v-c-tooltip="'Tooltip text'"> whatever keytar </CLink>
  scenester farm-to-table banksy Austin
  <CLink v-c-tooltip="'Tooltip text'"> twitter handle </CLink>
  freegan cred raw denim single-origin coffee viral.
</p>
```

### Component

Hover over the buttons below to see the four tooltips directions: top, right, bottom, and left. Directions are mirrored when using CoreUI in RTL.

::: demo
<CTooltip content="Vivamus sagittis lacus vel augue laoreet rutrum faucibus" placement="top">
  <template #toggler="{ id, on }">
    <CButton color="secondary" :aria-describedby="id" v-on="on">Tooltip on top</CButton>
  </template>
</CTooltip>
<CTooltip content="Vivamus sagittis lacus vel augue laoreet rutrum faucibus" placement="right">
  <template #toggler="{ id, on }">
    <CButton color="secondary" :aria-describedby="id" v-on="on">Tooltip on right</CButton>
  </template>
</CTooltip>
<CTooltip content="Vivamus sagittis lacus vel augue laoreet rutrum faucibus" placement="bottom">
  <template #toggler="{ id, on }">
    <CButton color="secondary" :aria-describedby="id" v-on="on">Tooltip on bottom</CButton>
  </template>
</CTooltip>
<CTooltip content="Vivamus sagittis lacus vel augue laoreet rutrum faucibus" placement="left">
  <template #toggler="{ id, on }">
    <CButton color="secondary" :aria-describedby="id" v-on="on">Tooltip on left</CButton>
  </template>
</CTooltip>
:::
```vue
<CTooltip content="Vivamus sagittis lacus vel augue laoreet rutrum faucibus" placement="top">
  <template #toggler="{ id, on }">
    <CButton color="secondary" :aria-describedby="id" v-on="on">Tooltip on top</CButton>
  </template>
</CTooltip>
<CTooltip content="Vivamus sagittis lacus vel augue laoreet rutrum faucibus" placement="right">
  <template #toggler="{ id, on }">
    <CButton color="secondary" :aria-describedby="id" v-on="on">Tooltip on right</CButton>
  </template>
</CTooltip>
<CTooltip content="Vivamus sagittis lacus vel augue laoreet rutrum faucibus" placement="bottom">
  <template #toggler="{ id, on }">
    <CButton color="secondary" :aria-describedby="id" v-on="on">Tooltip on bottom</CButton>
  </template>
</CTooltip>
<CTooltip content="Vivamus sagittis lacus vel augue laoreet rutrum faucibus" placement="left">
  <template #toggler="{ id, on }">
    <CButton color="secondary" :aria-describedby="id" v-on="on">Tooltip on left</CButton>
  </template>
</CTooltip>
```

### Directive

::: demo
<CButton color="secondary" v-c-tooltip="{content: 'Vivamus sagittis lacus vel augue laoreet rutrum faucibus.', placement: 'top'}">Tooltip on top</CButton>
<CButton color="secondary" v-c-tooltip="{content: 'Vivamus sagittis lacus vel augue laoreet rutrum faucibus.', placement: 'right'}">Tooltip on right</CButton>
<CButton color="secondary" v-c-tooltip="{content: 'Vivamus sagittis lacus vel augue laoreet rutrum faucibus.', placement: 'bottom'}">Tooltip on bottom</CButton>
<CButton color="secondary" v-c-tooltip="{content: 'Vivamus sagittis lacus vel augue laoreet rutrum faucibus.', placement: 'left'}">Tooltip on left</CButton>
:::
```vue
<CButton color="secondary" v-c-tooltip="{content: 'Vivamus sagittis lacus vel augue laoreet rutrum faucibus.', placement: 'top'}">Tooltip on top</CButton>
<CButton color="secondary" v-c-tooltip="{content: 'Vivamus sagittis lacus vel augue laoreet rutrum faucibus.', placement: 'right'}">Tooltip on right</CButton>
<CButton color="secondary" v-c-tooltip="{content: 'Vivamus sagittis lacus vel augue laoreet rutrum faucibus.', placement: 'bottom'}">Tooltip on bottom</CButton>
<CButton color="secondary" v-c-tooltip="{content: 'Vivamus sagittis lacus vel augue laoreet rutrum faucibus.', placement: 'left'}">Tooltip on left</CButton>
```

### Custom tooltips

You can customize the appearance of tooltips using [CSS variables](#css-variables). We set a custom `style` to scope our custom appearance and use it to override some of the local CSS variables.

::: demo
<CTooltip
  content="This top tooltip is themed via CSS variables."
  placement="top"
  :style="customTooltipStyle"
>
  <template #toggler="{ id, on }">
    <CButton color="secondary" :aria-describedby="id" v-on="on">Custom tooltip</CButton>
  </template>
</CTooltip>
:::
```vue
<script setup>
  const customTooltipStyle = {
    '--cui-tooltip-bg': 'var(--cui-primary)',
  }
</script>
<template>
  <CTooltip
    content="This top tooltip is themed via CSS variables."
    placement="top"
    :style="customTooltipStyle"
  >
    <template #toggler="{ id, on }">
      <CButton color="secondary" :aria-describedby="id" v-on="on">Custom tooltip</CButton>
    </template>
  </CTooltip>
</template>
```

## Usage

### Disabled elements

Elements with the disabled attribute aren’t interactive, meaning users cannot focus, hover, or click them to trigger a tooltip (or popover). As a workaround, you’ll want to trigger the tooltip from a wrapper `<div>` or `<span>`, ideally made keyboard-focusable using `tabindex="0"`.

:::demo
<CTooltip content="Disabled tooltip">
  <template #toggler="{ id, on }">
    <span class="d-inline-block" :tabindex="0" :aria-describedby="id" v-on="on">
      <CButton color="primary" disabled>Disabled button</CButton>
    </span>
  </template>
</CTooltip>
:::
```vue
<CTooltip content="Disabled tooltip">
  <template #toggler="{ id, on }">
    <span class="d-inline-block" :tabindex="0" :aria-describedby="id" v-on="on">
      <CButton color="primary" disabled>Disabled button</CButton>
    </span>
  </template>
</CTooltip>
```

## Customizing

### CSS variables

Vue toltips use local CSS variables on `.tooltip` for enhanced real-time customization. Values for the CSS variables are set via Sass, so Sass customization is still supported, too.

<ScssDocs file="_tooltip.scss" capture="tooltip-css-vars"/>

#### How to use CSS variables

```js
const vars = { 
  '--my-css-var': 10,
  '--my-another-css-var': "red" 
}
return <CTooltip :style="vars">...</CTooltip>
```

### SASS variables

<ScssDocs file="_variables.scss" capture="tooltip-variables"/>

## API


!!!include(./api/tooltip/CTooltip.api.md)!!!

<script setup>
  const customTooltipStyle = {
    '--cui-tooltip-bg': 'var(--cui-primary)',
  }
</script>