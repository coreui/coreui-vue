---
title: Vue Tooltip Component and Directive
name: Tooltip
description: Documentation and examples for adding Vue Tooltips.
---

## Examples

Hover over the links below to see tooltips:

::: demo
<p class="text-medium-emphasis">
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
<p class="text-medium-emphasis">
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
  <template #toggler="{ on }">
    <CButton color="secondary" v-on="on">Tooltip on top</CButton>
  </template>
</CTooltip>
<CTooltip content="Vivamus sagittis lacus vel augue laoreet rutrum faucibus" placement="right">
  <template #toggler="{ on }">
    <CButton color="secondary" v-on="on">Tooltip on right</CButton>
  </template>
</CTooltip>
<CTooltip content="Vivamus sagittis lacus vel augue laoreet rutrum faucibus" placement="bottom">
  <template #toggler="{ on }">
    <CButton color="secondary" v-on="on">Tooltip on bottom</CButton>
  </template>
</CTooltip>
<CTooltip content="Vivamus sagittis lacus vel augue laoreet rutrum faucibus" placement="left">
  <template #toggler="{ on }">
    <CButton color="secondary" v-on="on">Tooltip on left</CButton>
  </template>
</CTooltip>
:::
```vue
<CTooltip content="Vivamus sagittis lacus vel augue laoreet rutrum faucibus" placement="top">
  <template #toggler="{ on }">
    <CButton color="secondary" v-on="on">Tooltip on top</CButton>
  </template>
</CTooltip>
<CTooltip content="Vivamus sagittis lacus vel augue laoreet rutrum faucibus" placement="right">
  <template #toggler="{ on }">
    <CButton color="secondary" v-on="on">Tooltip on right</CButton>
  </template>
</CTooltip>
<CTooltip content="Vivamus sagittis lacus vel augue laoreet rutrum faucibus" placement="bottom">
  <template #toggler="{ on }">
    <CButton color="secondary" v-on="on">Tooltip on bottom</CButton>
  </template>
</CTooltip>
<CTooltip content="Vivamus sagittis lacus vel augue laoreet rutrum faucibus" placement="left">
  <template #toggler="{ on }">
    <CButton color="secondary" v-on="on">Tooltip on left</CButton>
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

## API

!!!include(./api/tooltip/CTooltip.api.md)!!!