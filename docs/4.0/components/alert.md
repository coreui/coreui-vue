---
title: Alert
description: Vue alert component gives contextual feedback information for common user operations. The alert component is delivered with a bunch of usable and adjustable alert messages.
---

## Examples

Vue Alert is prepared for any length of text, as well as an optional close button. For a styling, use one of the **required** contextual `color` props (e.g., `primary`). For inline dismissal, use the [dismissing prop](#dismissing).

::: demo
<CAlert color="primary">A simple primary alert—check it out!</CAlert>
<CAlert color="secondary">A simple secondary alert—check it out!</CAlert>
<CAlert color="success">A simple success alert—check it out!</CAlert>
<CAlert color="danger">A simple danger alert—check it out!</CAlert>
<CAlert color="warning">A simple warning alert—check it out!</CAlert>
<CAlert color="info">A simple info alert—check it out!</CAlert>
<CAlert color="light">A simple light alert—check it out!</CAlert>
<CAlert color="dark">A simple dark alert—check it out!</CAlert>
:::

```vue
<CAlert color="primary">A simple primary alert—check it out!</CAlert>
<CAlert color="secondary">A simple secondary alert—check it out!</CAlert>
<CAlert color="success">A simple success alert—check it out!</CAlert>
<CAlert color="danger">A simple danger alert—check it out!</CAlert>
<CAlert color="warning">A simple warning alert—check it out!</CAlert>
<CAlert color="info">A simple info alert—check it out!</CAlert>
<CAlert color="light">A simple light alert—check it out!</CAlert>
<CAlert color="dark">A simple dark alert—check it out!</CAlert>
```

## Link color

Use the `<CAlertLink>` component to immediately give matching colored links inside any alert.
::: demo
<CAlert color="primary">
  A simple primary alert with <CAlertLink href="#">an example link</CAlertLink>. Give it a click if you like.
</CAlert>
<CAlert color="secondary">
  A simple secondary alert with <CAlertLink href="#">an example link</CAlertLink>. Give it a click if you like.
</CAlert>
<CAlert color="success">
  A simple success alert with <CAlertLink href="#">an example link</CAlertLink>. Give it a click if you like.
</CAlert>
<CAlert color="danger">
  A simple danger alert with <CAlertLink href="#">an example link</CAlertLink>. Give it a click if you like.
</CAlert>
<CAlert color="warning">
  A simple warning alert with <CAlertLink href="#">an example link</CAlertLink>. Give it a click if you like.
</CAlert>
<CAlert color="info">
  A simple info alert with <CAlertLink href="#">an example link</CAlertLink>. Give it a click if you like.
</CAlert>
<CAlert color="light">
  A simple light alert with <CAlertLink href="#">an example link</CAlertLink>. Give it a click if you like.
</CAlert>
<CAlert color="dark">
  A simple dark alert with <CAlertLink href="#">an example link</CAlertLink>. Give it a click if you like.
</CAlert>
:::

```vue
<CAlert color="primary">
  A simple primary alert with <CAlertLink href="#">an example link</CAlertLink>. Give it a click if you like.
</CAlert>
<CAlert color="secondary">
  A simple secondary alert with <CAlertLink href="#">an example link</CAlertLink>. Give it a click if you like.
</CAlert>
<CAlert color="success">
  A simple success alert with <CAlertLink href="#">an example link</CAlertLink>. Give it a click if you like.
</CAlert>
<CAlert color="danger">
  A simple danger alert with <CAlertLink href="#">an example link</CAlertLink>. Give it a click if you like.
</CAlert>
<CAlert color="warning">
  A simple warning alert with <CAlertLink href="#">an example link</CAlertLink>. Give it a click if you like.
</CAlert>
<CAlert color="info">
  A simple info alert with <CAlertLink href="#">an example link</CAlertLink>. Give it a click if you like.
</CAlert>
<CAlert color="light">
  A simple light alert with <CAlertLink href="#">an example link</CAlertLink>. Give it a click if you like.
</CAlert>
<CAlert color="dark">
  A simple dark alert with <CAlertLink href="#">an example link</CAlertLink>. Give it a click if you like.
</CAlert>
```

## Additional content

Alert can also incorporate supplementary HTML elements like heading, paragraph, and divider.

::: demo
<CAlert color="success">
  <CAlertHeading>Well done!</CAlertHeading>
  <p>Aww yeah, you successfully read this important alert message. This example text is going to run a bit longer so that you can see how spacing within an alert works with this kind of content.</p>
  <hr />
  <p class="mb-0">Whenever you need to, be sure to use margin utilities to keep things nice and tidy.</p>
</CAlert>
:::

```vue
<CAlert color="success" v-bind:visible="true">
  <CAlertHeading>Well done!</CAlertHeading>
  <p>Aww yeah, you successfully read this important alert message. This example text is going to run a bit longer so that you can see how spacing within an alert works with this kind of content.</p>
  <hr />
  <p class="mb-0">Whenever you need to, be sure to use margin utilities to keep things nice and tidy.</p>
</CAlert>
```

## Dismissing

Alerts can also be easily dismissed. Just add the `dismissible` prop.

::: demo
<CAlert color="warning" dismissible @dismiss="alert">
  <strong>Go right ahead</strong> and click that dimiss over there on the right.
</CAlert>

<script>
  export default {
    methods: {
      alert () {
        alert("👋 Well, hi there! Thanks for dismissing me.")
      },
    }
  }
</script>
:::

```vue
<CAlert color="warning" dismissible @dismiss="alert">
  <strong>Go right ahead</strong> and click that dimiss over there on the right.
</CAlert>

<script>
  export default {
    methods: {
      alert () {
        alert("👋 Well, hi there! Thanks for dismissing me.")
      },
    }
  }
</script>
```

## API

!!!include(./docs/4.0/api/alert/CAlert.api.md)!!!

!!!include(./docs/4.0/api/alert/CAlertHeading.api.md)!!!