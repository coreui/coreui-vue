---
title: Vue Badge Component
name: Badge
description: Vue badge component is small count and labeling component.
other_frameworks: badge
---

## Example

Badge component scales to suit the size of the parent element by using relative font sizing and `em` units.

### Basic usage

::: demo
<h1>Example heading <CBadge color="secondary">New</CBadge></h1>
<h2>Example heading <CBadge color="secondary">New</CBadge></h2>
<h3>Example heading <CBadge color="secondary">New</CBadge></h3>
<h4>Example heading <CBadge color="secondary">New</CBadge></h4>
<h5>Example heading <CBadge color="secondary">New</CBadge></h5>
<h6>Example heading <CBadge color="secondary">New</CBadge></h6>
:::
```vue
<h1>Example heading <CBadge color="secondary">New</CBadge></h1>
<h2>Example heading <CBadge color="secondary">New</CBadge></h2>
<h3>Example heading <CBadge color="secondary">New</CBadge></h3>
<h4>Example heading <CBadge color="secondary">New</CBadge></h4>
<h5>Example heading <CBadge color="secondary">New</CBadge></h5>
<h6>Example heading <CBadge color="secondary">New</CBadge></h6>
```

Badges can be used as part of links or buttons to provide a counter.

::: demo
<CButton color="primary">
  Notifications <CBadge color="secondary">4</CBadge>
</CButton>
:::
```vue
<CButton color="primary">
  Notifications <CBadge color="secondary">4</CBadge>
</CButton>
```

Remark that depending on how you use them, badges may be complicated for users of screen readers and related assistive technologies.

Unless the context is clear, consider including additional context with a visually hidden piece of additional text.

::: demo
<CButton color="primary">
  Profile <CBadge color="secondary">9</CBadge>
  <span class="visually-hidden">unread messages</span>
</CButton>
:::
```vue
<CButton color="primary">
  Profile <CBadge color="secondary">9</CBadge>
  <span class="visually-hidden">unread messages</span>
</CButton>
```

### Positioned

Use `position` prop to modify a component and position it in the corner of a link or button.

::: demo
<CButton color="primary" class="position-relative">
  Profile
  <CBadge color="danger" position="top-start" shape="rounded-pill">
    99+ <span class="visually-hidden">unread messages</span>
  </CBadge>
</CButton>
<CButton color="primary" class="position-relative ms-1">
  Profile
  <CBadge color="danger" position="top-end" shape="rounded-pill">
    99+ <span class="visually-hidden">unread messages</span>
  </CBadge>
</CButton>
<br/>
<CButton color="primary" class="position-relative ">
  Profile
  <CBadge color="danger" position="bottom-start" shape="rounded-pill">
    99+ <span class="visually-hidden">unread messages</span>
  </CBadge>
</CButton>
<CButton color="primary" class="position-relative ms-1">
  Profile
  <CBadge color="danger" position="bottom-end" shape="rounded-pill">
    99+ <span class="visually-hidden">unread messages</span>
  </CBadge>
</CButton>
:::
```vue
<CButton color="primary" class="position-relative">
  Profile
  <CBadge color="danger" position="top-start" shape="rounded-pill">
    99+ <span class="visually-hidden">unread messages</span>
  </CBadge>
</CButton>
<CButton color="primary" class="position-relative">
  Profile
  <CBadge color="danger" position="top-end" shape="rounded-pill">
    99+ <span class="visually-hidden">unread messages</span>
  </CBadge>
</CButton>
<CButton color="primary" class="position-relative">
  Profile
  <CBadge color="danger" position="bottom-start" shape="rounded-pill">
    99+ <span class="visually-hidden">unread messages</span>
  </CBadge>
</CButton>
<CButton color="primary" class="position-relative">
  Profile
  <CBadge color="danger" position="bottom-end" shape="rounded-pill">
    99+ <span class="visually-hidden">unread messages</span>
  </CBadge>
</CButton>
```

You can also create more generic indicators without a counter using a few more utilities.

::: demo
<CButton color="primary" class="position-relative">
  Profile
  <CBadge class="border border-light p-2" color="danger" position="top-end" shape="rounded-circle">
    <span class="visually-hidden">New alerts</span>
  </CBadge>
</CButton>
:::
```vue
<CButton color="primary" class="position-relative">
  Profile
  <CBadge class="border border-light p-2" color="danger" position="top-end" shape="rounded-circle">
    <span class="visually-hidden">New alerts</span>
  </CBadge>
</CButton>
```

## Contextual variations

Add any of the below-mentioned `color` props to modify the presentation of a badge.

::: demo
<CBadge color="primary">primary</CBadge>
<CBadge color="success">success</CBadge>
<CBadge color="danger">danger</CBadge>
<CBadge color="warning">warning</CBadge>
<CBadge color="info">info</CBadge>
<CBadge color="light">light</CBadge>
<CBadge color="dark">dark</CBadge>
:::
```vue
<CBadge color="primary">primary</CBadge>
<CBadge color="success">success</CBadge>
<CBadge color="danger">danger</CBadge>
<CBadge color="warning">warning</CBadge>
<CBadge color="info">info</CBadge>
<CBadge color="light">light</CBadge>
<CBadge color="dark">dark</CBadge>
```

## Pill badges

Apply the `shape="rounded-pill"` prop to make badges rounded.

::: demo
<CBadge color="primary" shape="rounded-pill">primary</CBadge>
<CBadge color="success" shape="rounded-pill">success</CBadge>
<CBadge color="danger" shape="rounded-pill">danger</CBadge>
<CBadge color="warning" shape="rounded-pill">warning</CBadge>
<CBadge color="info" shape="rounded-pill">info</CBadge>
<CBadge color="light" shape="rounded-pill">light</CBadge>
<CBadge color="dark" shape="rounded-pill">dark</CBadge>
:::
```vue
<CBadge color="primary" shape="rounded-pill">primary</CBadge>
<CBadge color="success" shape="rounded-pill">success</CBadge>
<CBadge color="danger" shape="rounded-pill">danger</CBadge>
<CBadge color="warning" shape="rounded-pill">warning</CBadge>
<CBadge color="info" shape="rounded-pill">info</CBadge>
<CBadge color="light" shape="rounded-pill">light</CBadge>
<CBadge color="dark" shape="rounded-pill">dark</CBadge>
```

## Customizing

### CSS variables

Vue badges use local CSS variables on `.badges` for enhanced real-time customization. Values for the CSS variables are set via Sass, so Sass customization is still supported, too.

<ScssDocs file="_badge.scss" capture="badge-css-vars"/>

#### How to use CSS variables

```js
const vars = { 
  '--my-css-var': 10,
  '--my-another-css-var': "red" 
}
return <CBadge :style="vars">...</CBadge>
```

### SASS variables

<ScssDocs file="_variables.scss" capture="badge-variables" />

## API

!!!include(./api/badge/CBadge.api.md)!!!