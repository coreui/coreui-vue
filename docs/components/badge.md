---
title: Vue Badge Component
name: Badge
description: Vue badge component is small count and labeling component.
---

## Example

Badge component scales to suit the size of the parent element by using relative font sizing and `em` units.

## Basic usage

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

## API

!!!include(./docs/api/badge/CBadge.api.md)!!!