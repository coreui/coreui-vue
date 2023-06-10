---
title: Vue Alert Component
description: Vue alert component gives contextual feedback information for common user operations. The alert component is delivered with a bunch of usable and adjustable alert messages.
other_frameworks: alert
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
```markup
<CAlert color="primary">A simple primary alert—check it out!</CAlert>
<CAlert color="secondary">A simple secondary alert—check it out!</CAlert>
<CAlert color="success">A simple success alert—check it out!</CAlert>
<CAlert color="danger">A simple danger alert—check it out!</CAlert>
<CAlert color="warning">A simple warning alert—check it out!</CAlert>
<CAlert color="info">A simple info alert—check it out!</CAlert>
<CAlert color="light">A simple light alert—check it out!</CAlert>
<CAlert color="dark">A simple dark alert—check it out!</CAlert>
```

### Live example

Click the button below to show an alert (hidden with inline styles to start), then dismiss (and destroy) it with the built-in close button.

::: demo
<CAlert color="primary" :visible="liveExampleVisible" dismissible @close="() => { liveExampleVisible = false }">A simple primary alert—check it out!</CAlert>
<CButton color="primary" @click="() => { liveExampleVisible = true }">Show live alert</CButton>
:::
```markup
<CAlert color="primary" :visible="liveExampleVisible" dismissible @close="() => { liveExampleVisible = false }">A simple primary alert—check it out!</CAlert>
<CButton color="primary" @click="() => { liveExampleVisible = true }">Show live alert</CButton>
```

### Link color

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

```markup
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

### Additional content

Alert can also incorporate supplementary HTML elements like heading, paragraph, and divider.

::: demo
<CAlert color="success">
  <CAlertHeading>Well done!</CAlertHeading>
  <p>Aww yeah, you successfully read this important alert message. This example text is going to run a bit longer so that you can see how spacing within an alert works with this kind of content.</p>
  <hr />
  <p class="mb-0">Whenever you need to, be sure to use margin utilities to keep things nice and tidy.</p>
</CAlert>
:::

```markup
<CAlert color="success" v-bind:visible="true">
  <CAlertHeading>Well done!</CAlertHeading>
  <p>Aww yeah, you successfully read this important alert message. This example text is going to run a bit longer so that you can see how spacing within an alert works with this kind of content.</p>
  <hr />
  <p class="mb-0">Whenever you need to, be sure to use margin utilities to keep things nice and tidy.</p>
</CAlert>
```
### Icons

Similarly, you can use [flexbox utilities](https//coreui.io/docs/4.0/utilities/flex") and [CoreUI Icons](https://icons.coreui.io) to create alerts with icons. Depending on your icons and content, you may want to add more utilities or custom styles.

::: demo
<CAlert color="primary" class="d-flex align-items-center">
  <svg class="flex-shrink-0 me-2" width="24" height="24" viewBox="0 0 512 512">
    <rect width="32" height="176" x="240" y="176" fill="var(--ci-primary-color, currentColor)" class="ci-primary"></rect><rect width="32" height="32" x="240" y="384" fill="var(--ci-primary-color, currentColor)" class="ci-primary"></rect><path fill="var(--ci-primary-color, currentColor)" d="M274.014,16H237.986L16,445.174V496H496V445.174ZM464,464H48V452.959L256,50.826,464,452.959Z" class="ci-primary"></path>
  </svg>
  <div>
    An example alert with an icon
  </div>
</CAlert>
:::
```markup
<CAlert color="primary" class="d-flex align-items-center">
  <svg class="flex-shrink-0 me-2" width="24" height="24" viewBox="0 0 512 512">
    <rect width="32" height="176" x="240" y="176" fill="var(--ci-primary-color, currentColor)" class="ci-primary"></rect><rect width="32" height="32" x="240" y="384" fill="var(--ci-primary-color, currentColor)" class="ci-primary"></rect><path fill="var(--ci-primary-color, currentColor)" d="M274.014,16H237.986L16,445.174V496H496V445.174ZM464,464H48V452.959L256,50.826,464,452.959Z" class="ci-primary"></path>
  </svg>
  <div>
    An example alert with an icon
  </div>
</CAlert>
```

Need more than one icon for your alerts? Consider using [CoreUI Icons](https://icons.coreui.io).

::: demo
<CAlert color="primary" class="d-flex align-items-center">
  <CIcon icon="cil-info" class="flex-shrink-0 me-2" width="24" height="24" />
  <div>
    An example alert with an icon
  </div>
</CAlert>
<CAlert color="success" class="d-flex align-items-center">
  <CIcon icon="cil-check-circle" class="flex-shrink-0 me-2" width="24" height="24" />
  <div>
    An example success alert with an icon
  </div>
</CAlert>
<CAlert color="warning" class="d-flex align-items-center">
  <CIcon icon="cil-warning" class="flex-shrink-0 me-2" width="24" height="24" />
  <div>
    An example warning alert with an icon
  </div>
</CAlert>
<CAlert color="danger" class="d-flex align-items-center">
  <CIcon icon="cil-burn" class="flex-shrink-0 me-2" width="24" height="24" />
  <div>
    An example danger alert with an icon
  </div>
</CAlert>
:::
```markup
<CAlert color="primary" class="d-flex align-items-center">
  <CIcon icon="cil-info" class="flex-shrink-0 me-2" width="24" height="24" />
  <div>
    An example alert with an icon
  </div>
</CAlert>
<CAlert color="success" class="d-flex align-items-center">
  <CIcon icon="cil-check-circle" class="flex-shrink-0 me-2" width="24" height="24" />
  <div>
    An example success alert with an icon
  </div>
</CAlert>
<CAlert color="warning" class="d-flex align-items-center">
  <CIcon icon="cil-warning" class="flex-shrink-0 me-2" width="24" height="24" />
  <div>
    An example warning alert with an icon
  </div>
</CAlert>
<CAlert color="danger" class="d-flex align-items-center">
  <CIcon icon="cil-burn" class="flex-shrink-0 me-2" width="24" height="24" />
  <div>
    An example danger alert with an icon
  </div>
</CAlert>
```

### Solid

Use `variant="solid"` to change contextual colors to solid.

::: demo
<CAlert color="primary" variant="solid">A simple solid primary alert—check it out!</CAlert>
<CAlert color="secondary" variant="solid">A simple solid secondary alert—check it out!</CAlert>
<CAlert color="success" variant="solid">A simple solid success alert—check it out!</CAlert>
<CAlert color="danger" variant="solid">A simple solid danger alert—check it out!</CAlert>
<CAlert color="warning" variant="solid">A simple solid warning alert—check it out!</CAlert>
<CAlert color="info" variant="solid">A simple solid info alert—check it out!</CAlert>
<CAlert color="light" variant="solid" class="text-high-emphasis">A simple solid light alert—check it out!</CAlert>
<CAlert color="dark" variant="solid">A simple solid dark alert—check it out!</CAlert>
:::

```markup
<CAlert color="primary" variant="solid">A simple solid primary alert—check it out!</CAlert>
<CAlert color="secondary" variant="solid">A simple solid secondary alert—check it out!</CAlert>
<CAlert color="success" variant="solid">A simple solid success alert—check it out!</CAlert>
<CAlert color="danger" variant="solid">A simple solid danger alert—check it out!</CAlert>
<CAlert color="warning" variant="solid">A simple solid warning alert—check it out!</CAlert>
<CAlert color="info" variant="solid">A simple solid info alert—check it out!</CAlert>
<CAlert color="light" variant="solid" class="text-high-emphasis">A simple solid light alert—check it out!</CAlert>
<CAlert color="dark" variant="solid">A simple solid dark alert—check it out!</CAlert>
```

### Dismissing

Alerts can also be easily dismissed. Just add the `dismissible` prop.

::: demo
<CAlert color="warning" dismissible @close="alert">
  <strong>Go right ahead</strong> and click that dimiss over there on the right.
</CAlert>
:::

```markup
<CAlert color="warning" dismissible @close="alert">
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

<script>
  export default {
    data() {
      return { 
        liveExampleVisible: false,
      }
    },
    methods: {
      alert () {
        alert("👋 Well, hi there! Thanks for dismissing me.")
      },
    }
  }
</script>

## Customizing

### CSS variables

Vue alerts use local CSS variables on `.alert` for enhanced real-time customization. Values for the CSS variables are set via Sass, so Sass customization is still supported, too.

<ScssDocs file="_alert.scss" capture="alert-css-vars"/>

#### How to use CSS variables

```js
const vars = { 
  '--my-css-var': 10,
  '--my-another-css-var': "red" 
}
return <CAlert :style="vars">...</CAlert>
```

### SASS variables

<ScssDocs file="_variables.scss" capture="alert-variables" />

## API

!!!include(./api/alert/CAlert.api.md)!!!

!!!include(./api/alert/CAlertHeading.api.md)!!!