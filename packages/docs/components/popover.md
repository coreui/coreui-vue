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

## Customizing

### CSS variables

Vue popovers use local CSS variables on `.popover` for enhanced real-time customization. Values for the CSS variables are set via Sass, so Sass customization is still supported, too.

```sass
--cui-popover-zindex: #{$zindex-popover};
--cui-popover-max-width: #{$popover-max-width};
--cui-popover-font-size: {$popover-font-size};
--cui-popover-bg: #{$popover-bg};
--cui-popover-border-width: #{$popover-border-width};
--cui-popover-border-color: #{$popover-border-color};
--cui-popover-border-radius: #{$popover-border-radius};
--cui-popover-inner-border-radius: #{$popover-inner-border-radius};
--cui-popover-box-shadow: #{$popover-box-shadow};
--cui-popover-header-padding-x: #{$popover-header-padding-x};
--cui-popover-header-padding-y: #{$popover-header-padding-y};
--cui-popover-header-font-size: {$popover-header-font-size};
--cui-popover-header-color: #{$popover-header-color};
--cui-popover-header-bg: #{$popover-header-bg};
--cui-popover-body-padding-x: #{$popover-body-padding-x};
--cui-popover-body-padding-y: #{$popover-body-padding-y};
--cui-popover-body-color: #{$popover-body-color};
--cui-popover-arrow-width: #{$popover-arrow-width};
--cui-popover-arrow-height: #{$popover-arrow-height};
--cui-popover-arrow-border: var(--cui-popover-border-color);
```

#### How to use CSS variables

```js
const vars = { 
  '--my-css-var': 10,
  '--my-another-css-var': "red" 
}
return <CPopover :style="vars">...</CPopover>
```

### SASS variables

```sass
$popover-font-size:                 $font-size-sm;
$popover-bg:                        $white;
$popover-max-width:                 276px;
$popover-border-width:              $border-width;
$popover-border-color:              var(--cui-border-color-translucent);
$popover-border-radius:             $border-radius-lg;
$popover-inner-border-radius:       subtract($popover-border-radius, $popover-border-width);
$popover-box-shadow:                $box-shadow;

$popover-header-font-size:          $font-size-base;
$popover-header-bg:                 shade-color($popover-bg, 6%);
$popover-header-color:              var(--cui-heading-color);
$popover-header-padding-y:          .5rem;
$popover-header-padding-x:          $spacer;

$popover-body-color:                $body-color;
$popover-body-padding-y:            $spacer;
$popover-body-padding-x:            $spacer;

$popover-arrow-width:               1rem;
$popover-arrow-height:              .5rem;
```

## API

!!!include(./api/popover/CPopover.api.md)!!!