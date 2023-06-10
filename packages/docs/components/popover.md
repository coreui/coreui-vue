---
title: Vue Popover Component and Directive
name: Popover
description: Documentation and examples for adding Vue popovers, like those found in iOS, to any element on your site.
other_frameworks: popover
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

### Custom popovers

You can customize the appearance of popovers using [CSS variables](#css-variables). We set a custom `style` to scope our custom appearance and use it to override some of the local CSS variables.

::: demo
<CPopover
  content="This popover is themed via CSS variables."
  placement="right"
  title="Custom popover"
  :style="customPopoverStyle"
>
  <template #toggler="{ on }">
    <CButton color="secondary" v-on="on">Custom popover</CButton>
  </template>
</CPopover>
:::
```vue
<template>
  <CPopover
    content="This popover is themed via CSS variables."
    placement="right"
    title="Custom popover"
    :style="customPopoverStyle"
  >
    <template #toggler="{ on }">
      <CButton color="secondary" v-on="on">Custom popover</CButton>
    </template>
  </CPopover>
</template>
<script>
  export default {
    data() {
      return { 
       customPopoverStyle: {
          '--cui-popover-max-width': '200px',
          '--cui-popover-border-color': 'var(--cui-primary)',
          '--cui-popover-header-bg': 'var(--cui-primary)',
          '--cui-popover-header-color': 'var(--cui-white)',
          '--cui-popover-body-padding-x': '1rem',
          '--cui-popover-body-padding-y': '.5rem',
        }
      }
    }
  }
</script>
```

## Usage

### Disabled elements

Elements with the disabled attribute aren't interactive, meaning users cannot hover or click them to trigger a popover (or tooltip). As a workaround, you'll want to trigger the popover from a wrapper `<div>` or `<span>`, ideally made keyboard-focusable using `tabindex="0"`.

For disabled popover triggers, you may also prefer `:trigger="['hover', 'focus']"` so that the popover appears as immediate visual feedback to your users as they may not expect to click on a disabled element.

:::demo
<CPopover
  content="Disabled popover"
  placement="right"
  :trigger="['hover', 'focus']"
>
  <template #toggler="{ on }">
    <span class="d-inline-block" :tabindex="0" v-on="on">
      <CButton color="primary" disabled>Disabled button</CButton>
    </span>
  </template>
</CPopover>
:::
```vue
<CPopover
  content="Disabled popover"
  placement="right"
  :trigger="['hover', 'focus']"
>
  <template #toggler="{ on }">
    <span class="d-inline-block" :tabindex="0" v-on="on">
      <CButton color="primary" disabled>Disabled button</CButton>
    </span>
  </template>
</CPopover>
```

## Customizing

### CSS variables

Vue popovers use local CSS variables on `.popover` for enhanced real-time customization. Values for the CSS variables are set via Sass, so Sass customization is still supported, too.

<ScssDocs file="_popover.scss" capture="popover-css-vars"/>

#### How to use CSS variables

```js
const vars = { 
  '--my-css-var': 10,
  '--my-another-css-var': "red" 
}
return <CPopover :style="vars">...</CPopover>
```

### SASS variables

<ScssDocs file="_variables.scss" capture="popover-variables"/>

## API

!!!include(./api/popover/CPopover.api.md)!!!

<script>
  export default {
    data() {
      return { 
       customPopoverStyle: {
          '--cui-popover-max-width': '200px',
          '--cui-popover-border-color': 'var(--cui-primary)',
          '--cui-popover-header-bg': 'var(--cui-primary)',
          '--cui-popover-header-color': 'var(--cui-white)',
          '--cui-popover-body-padding-x': '1rem',
          '--cui-popover-body-padding-y': '.5rem',
        }
      }
    }
  }
</script>