---
title: Vue List Group Component
name: List group
description: Vue List Group component allows displaying a series of content. Learn how to use Vue list group to build complex list structure on your website.
other_frameworks: list-group
---

## Basic example

The default list group is an unordered list with items and the proper CSS classes. Build upon it with the options that follow, or with your CSS as required.

::: demo
<CListGroup>
  <CListGroupItem>Cras justo odio</CListGroupItem>
  <CListGroupItem>Dapibus ac facilisis in</CListGroupItem>
  <CListGroupItem>Morbi leo risus</CListGroupItem>
  <CListGroupItem>Porta ac consectetur ac</CListGroupItem>
  <CListGroupItem>Vestibulum at eros</CListGroupItem>
</CListGroup>
:::
```vue
<CListGroup>
  <CListGroupItem>Cras justo odio</CListGroupItem>
  <CListGroupItem>Dapibus ac facilisis in</CListGroupItem>
  <CListGroupItem>Morbi leo risus</CListGroupItem>
  <CListGroupItem>Porta ac consectetur ac</CListGroupItem>
  <CListGroupItem>Vestibulum at eros</CListGroupItem>
</CListGroup>
```

## Active items

Add `active` boolean property to a `<CListGroupItem>` to show the current active selection.

::: demo
<CListGroup>
  <CListGroupItem active>Cras justo odio</CListGroupItem>
  <CListGroupItem>Dapibus ac facilisis in</CListGroupItem>
  <CListGroupItem>Morbi leo risus</CListGroupItem>
  <CListGroupItem>Porta ac consectetur ac</CListGroupItem>
  <CListGroupItem>Vestibulum at eros</CListGroupItem>
</CListGroup>
:::
```vue
<CListGroup>
  <CListGroupItem active>Cras justo odio</CListGroupItem>
  <CListGroupItem>Dapibus ac facilisis in</CListGroupItem>
  <CListGroupItem>Morbi leo risus</CListGroupItem>
  <CListGroupItem>Porta ac consectetur ac</CListGroupItem>
  <CListGroupItem>Vestibulum at eros</CListGroupItem>
</CListGroup>
```

## Disabled items

Add `disabled` boolean property to a `<CListGroupItem>` to make it appear disabled.

::: demo
<CListGroup>
  <CListGroupItem disabled>Cras justo odio</CListGroupItem>
  <CListGroupItem>Dapibus ac facilisis in</CListGroupItem>
  <CListGroupItem>Morbi leo risus</CListGroupItem>
  <CListGroupItem>Porta ac consectetur ac</CListGroupItem>
  <CListGroupItem>Vestibulum at eros</CListGroupItem>
</CListGroup>
:::
```vue
<CListGroup>
  <CListGroupItem disabled>Cras justo odio</CListGroupItem>
  <CListGroupItem>Dapibus ac facilisis in</CListGroupItem>
  <CListGroupItem>Morbi leo risus</CListGroupItem>
  <CListGroupItem>Porta ac consectetur ac</CListGroupItem>
  <CListGroupItem>Vestibulum at eros</CListGroupItem>
</CListGroup>
```

## Links and buttons

Use `<a>`s or `<button>`s to create _actionable_ list group items with hover, disabled, and active states by adding `component="a|button"`. We separate these pseudo-classes to ensure list groups made of non-interactive elements (like `<li>`s or `<div>`s) don't provide a click or tap affordance.

::: demo
<CListGroup>
  <CListGroupItem component="a" href="#" active>Cras justo odio</CListGroupItem>
  <CListGroupItem component="a" href="#">Dapibus ac facilisis in</CListGroupItem>
  <CListGroupItem component="a" href="#">Morbi leo risus</CListGroupItem>
  <CListGroupItem component="a" href="#">Porta ac consectetur ac</CListGroupItem>
  <CListGroupItem component="a" href="#" disabled>Vestibulum at eros</CListGroupItem>
</CListGroup>
:::
```vue
<CListGroup>
  <CListGroupItem component="a" href="#" active>Cras justo odio</CListGroupItem>
  <CListGroupItem component="a" href="#">Dapibus ac facilisis in</CListGroupItem>
  <CListGroupItem component="a" href="#">Morbi leo risus</CListGroupItem>
  <CListGroupItem component="a" href="#">Porta ac consectetur ac</CListGroupItem>
  <CListGroupItem component="a" href="#" disabled>Vestibulum at eros</CListGroupItem>
</CListGroup>
```

::: demo
<CListGroup>
  <CListGroupItem component="button" active>Cras justo odio</CListGroupItem>
  <CListGroupItem component="button">Dapibus ac facilisis in</CListGroupItem>
  <CListGroupItem component="button">Morbi leo risus</CListGroupItem>
  <CListGroupItem component="button">Porta ac consectetur ac</CListGroupItem>
  <CListGroupItem component="button" disabled>Vestibulum at eros</CListGroupItem>
</CListGroup>
:::
```vue
<CListGroup>
  <CListGroupItem component="button" active>Cras justo odio</CListGroupItem>
  <CListGroupItem component="button">Dapibus ac facilisis in</CListGroupItem>
  <CListGroupItem component="button">Morbi leo risus</CListGroupItem>
  <CListGroupItem component="button">Porta ac consectetur ac</CListGroupItem>
  <CListGroupItem component="button" disabled>Vestibulum at eros</CListGroupItem>
</CListGroup>
```

## Flush

Add `flush` boolean property to remove some borders and rounded corners to render list group items edge-to-edge in a parent container (e.g., cards).

::: demo
<CListGroup flush>
  <CListGroupItem>Cras justo odio</CListGroupItem>
  <CListGroupItem>Dapibus ac facilisis in</CListGroupItem>
  <CListGroupItem>Morbi leo risus</CListGroupItem>
  <CListGroupItem>Porta ac consectetur ac</CListGroupItem>
  <CListGroupItem>Vestibulum at eros</CListGroupItem>
</CListGroup>
:::
```vue
<CListGroup flush>
  <CListGroupItem>Cras justo odio</CListGroupItem>
  <CListGroupItem>Dapibus ac facilisis in</CListGroupItem>
  <CListGroupItem>Morbi leo risus</CListGroupItem>
  <CListGroupItem>Porta ac consectetur ac</CListGroupItem>
  <CListGroupItem>Vestibulum at eros</CListGroupItem>
</CListGroup>
```

## Horizontal

Add `layout="horizontal"` to change the layout of list group items from vertical to horizontal across all breakpoints. Alternatively, choose a responsive variant `.layout="horizontal-{sm|md|lg|xl|xxl}"` to make a list group horizontal starting at that breakpoint's `min-width`. Currently **horizontal list groups cannot be combined with flush list groups.**

::: demo
<template v-for="(item) in ['', '-sm', '-md', '-lg', '-xl', '-xxl']">
  <CListGroup class="mb-2" :layout="'horizontal' + item">
    <CListGroupItem>Cras justo odio</CListGroupItem>
    <CListGroupItem>Dapibus ac facilisis in</CListGroupItem>
    <CListGroupItem>Morbi leo risus</CListGroupItem>
  </CListGroup>
</template>
:::
```vue
<template v-for="(item) in ['', '-sm', '-md', '-lg', '-xl', '-xxl']">
  <CListGroup class="mb-2" :layout="'horizontal' + item">
    <CListGroupItem>Cras justo odio</CListGroupItem>
    <CListGroupItem>Dapibus ac facilisis in</CListGroupItem>
    <CListGroupItem>Morbi leo risus</CListGroupItem>
  </CListGroup>
</template>
```

## Contextual classes

Use contextual classes to style list items with a stateful background and color.

::: demo
<CListGroup>
  <CListGroupItem>Dapibus ac facilisis in</CListGroupItem>
  <CListGroupItem v-for="(item) in ['primary', 'secondary', 'success', 'danger', 'warning', 'info', 'light', 'dark']" :color="item">A simple {{item}} list group item</CListGroupItem>
</CListGroup>
:::
```vue
<CListGroup>
  <CListGroupItem>Dapibus ac facilisis in</CListGroupItem>
  <CListGroupItem v-for="(item) in ['primary', 'secondary', 'success', 'danger', 'warning', 'info', 'light', 'dark']" :color="item">A simple {{item}} list group item</CListGroupItem>
</CListGroup>
```

Contextual classes also work with `<a>`s or `<button>`s. Note the addition of the hover styles here not present in the previous example. Also supported is the `active` state; apply it to indicate an active selection on a contextual list group item.

::: demo
<CListGroup>
  <CListGroupItem component="a" href="#">Dapibus ac facilisis in</CListGroupItem>
  <CListGroupItem v-for="(item) in ['primary', 'secondary', 'success', 'danger', 'warning', 'info', 'light', 'dark']" component="a" href="#" :color="item">A simple {{item}} list group item</CListGroupItem>
</CListGroup>
:::
```vue
<CListGroup>
  <CListGroupItem component="a" href="#">Dapibus ac facilisis in</CListGroupItem>
  <CListGroupItem v-for="(item) in ['primary', 'secondary', 'success', 'danger', 'warning', 'info', 'light', 'dark']" component="a" href="#" :color="item">A simple {{item}} list group item</CListGroupItem>
</CListGroup>
```

<CCallout color="info">
  <h5>Conveying meaning to assistive technologies</h5>
  <p>
    Using color to add meaning only provides a visual indication, which will not be conveyed to users of assistive technologies – such as screen readers. Ensure that information denoted by the color is either obvious from the content itself (e.g. the visible text), or is included through alternative means, such as additional text hidden with the `.visually-hidden` class.
  </p>
</CCallout>

## With badges

Add badges to any list group item to show unread counts, activity, and more.

::: demo
<CListGroup>
  <CListGroupItem class="d-flex justify-content-between align-items-center">Cras justo odio<CBadge color="primary" shape="rounded-pill">14</CBadge></CListGroupItem>
  <CListGroupItem class="d-flex justify-content-between align-items-center">Dapibus ac facilisis in<CBadge color="primary" shape="rounded-pill">2</CBadge></CListGroupItem>
  <CListGroupItem class="d-flex justify-content-between align-items-center">Morbi leo risus<CBadge color="primary" shape="rounded-pill">1</CBadge></CListGroupItem>
</CListGroup>
:::
```vue
<CListGroup>
  <CListGroupItem class="d-flex justify-content-between align-items-center">Cras justo odio<CBadge color="primary" shape="rounded-pill">14</CBadge></CListGroupItem>
  <CListGroupItem class="d-flex justify-content-between align-items-center">Dapibus ac facilisis in<CBadge color="primary" shape="rounded-pill">2</CBadge></CListGroupItem>
  <CListGroupItem class="d-flex justify-content-between align-items-center">Morbi leo risus<CBadge color="primary" shape="rounded-pill">1</CBadge></CListGroupItem>
</CListGroup>
```

## Custom content

Add nearly any HTML within, even for linked list groups like the one below, with the help of [flexbox utilities](https://coreui.io/docs/utilities/flex/).

::: demo
<CListGroup>
  <CListGroupItem component="a" href="#" active>
    <div class="d-flex w-100 justify-content-between">
    <h5 class="mb-1">List group item heading</h5>
      <small>3 days ago</small>
    </div>
    <p class="mb-1">Donec id elit non mi porta gravida at eget metus. Maecenas sed diam eget risus varius blandit.</p>
    <small>Donec id elit non mi porta.</small>
  </CListGroupItem>
  <CListGroupItem component="a" href="#">
    <div class="d-flex w-100 justify-content-between">
    <h5 class="mb-1">List group item heading</h5>
      <small class="text-muted">3 days ago</small>
    </div>
    <p class="mb-1">Donec id elit non mi porta gravida at eget metus. Maecenas sed diam eget risus varius blandit.</p>
    <small class="text-muted">Donec id elit non mi porta.</small>
  </CListGroupItem>
  <CListGroupItem component="a" href="#">
    <div class="d-flex w-100 justify-content-between">
    <h5 class="mb-1">List group item heading</h5>
      <small class="text-muted">3 days ago</small>
    </div>
    <p class="mb-1">Donec id elit non mi porta gravida at eget metus. Maecenas sed diam eget risus varius blandit.</p>
    <small class="text-muted">Donec id elit non mi porta.</small>
  </CListGroupItem>
</CListGroup>
:::
```vue
<CListGroup>
  <CListGroupItem component="a" href="#" active>
    <div class="d-flex w-100 justify-content-between">
    <h5 class="mb-1">List group item heading</h5>
      <small>3 days ago</small>
    </div>
    <p class="mb-1">Donec id elit non mi porta gravida at eget metus. Maecenas sed diam eget risus varius blandit.</p>
    <small>Donec id elit non mi porta.</small>
  </CListGroupItem>
  <CListGroupItem component="a" href="#">
    <div class="d-flex w-100 justify-content-between">
    <h5 class="mb-1">List group item heading</h5>
      <small class="text-muted">3 days ago</small>
    </div>
    <p class="mb-1">Donec id elit non mi porta gravida at eget metus. Maecenas sed diam eget risus varius blandit.</p>
    <small class="text-muted">Donec id elit non mi porta.</small>
  </CListGroupItem>
  <CListGroupItem component="a" href="#">
    <div class="d-flex w-100 justify-content-between">
    <h5 class="mb-1">List group item heading</h5>
      <small class="text-muted">3 days ago</small>
    </div>
    <p class="mb-1">Donec id elit non mi porta gravida at eget metus. Maecenas sed diam eget risus varius blandit.</p>
    <small class="text-muted">Donec id elit non mi porta.</small>
  </CListGroupItem>
</CListGroup>
```

## Checkboxes and radios

Place CoreUI's checkboxes and radios within list group items and customize as needed.

::: demo
<CListGroup>
  <CListGroupItem><CFormCheck label="Cras justo odio"/></CListGroupItem>
  <CListGroupItem><CFormCheck label="Dapibus ac facilisis in" checked/></CListGroupItem>
  <CListGroupItem><CFormCheck label="Morbi leo risus" checked/></CListGroupItem>
  <CListGroupItem><CFormCheck label="orta ac consectetur ac"/></CListGroupItem>
  <CListGroupItem><CFormCheck label="Vestibulum at eros"/></CListGroupItem>
</CListGroup>
:::
```vue
<CListGroup>
  <CListGroupItem><CFormCheck label="Cras justo odio"/></CListGroupItem>
  <CListGroupItem><CFormCheck label="Dapibus ac facilisis in" checked/></CListGroupItem>
  <CListGroupItem><CFormCheck label="Morbi leo risus" checked/></CListGroupItem>
  <CListGroupItem><CFormCheck label="orta ac consectetur ac"/></CListGroupItem>
  <CListGroupItem><CFormCheck label="Vestibulum at eros"/></CListGroupItem>
</CListGroup>
```

And if you want `<label>`s as the `.list-group-item` for large hit areas, you can do that, too.

::: demo
<CListGroup>
  <CListGroupItem><CFormCheck hitArea="full" label="Cras justo odio"/></CListGroupItem>
  <CListGroupItem><CFormCheck hitArea="full" label="Dapibus ac facilisis in" checked/></CListGroupItem>
  <CListGroupItem><CFormCheck hitArea="full" label="Morbi leo risus" checked/></CListGroupItem>
  <CListGroupItem><CFormCheck hitArea="full" label="orta ac consectetur ac"/></CListGroupItem>
  <CListGroupItem><CFormCheck hitArea="full" label="Vestibulum at eros"/></CListGroupItem>
</CListGroup>
:::
```vue
<CListGroup>
  <CListGroupItem><CFormCheck hitArea="full" label="Cras justo odio"/></CListGroupItem>
  <CListGroupItem><CFormCheck hitArea="full" label="Dapibus ac facilisis in" checked/></CListGroupItem>
  <CListGroupItem><CFormCheck hitArea="full" label="Morbi leo risus" checked/></CListGroupItem>
  <CListGroupItem><CFormCheck hitArea="full" label="orta ac consectetur ac"/></CListGroupItem>
  <CListGroupItem><CFormCheck hitArea="full" label="Vestibulum at eros"/></CListGroupItem>
</CListGroup>
```

## Customizing

### CSS variables

Vue list groups use local CSS variables on `.list-group` for enhanced real-time customization. Values for the CSS variables are set via Sass, so Sass customization is still supported, too.

<ScssDocs file="_list-group.scss" capture="list-group-css-vars"/>

#### How to use CSS variables

```js
const vars = { 
  '--my-css-var': 10,
  '--my-another-css-var': "red" 
}
return <CListGroup :style="vars">...</CListGroup>
```

### SASS variables

<ScssDocs file="_variables.scss" capture="list-group-variables"/>

## API

!!!include(./api/list-group/CListGroup.api.md)!!!

!!!include(./api/list-group/CListGroupItem.api.md)!!!