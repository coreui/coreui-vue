---
title: Vue Toast Component
name: Toast
description: Push notifications to your visitors with a toast, a lightweight and easily customizable alert message.
other_frameworks: toast
---

Vue toasts are lightweight notifications designed to mimic the push notifications that have been popularized by mobile and desktop operating systems. They’re built with flexbox, so they’re easy to align and position.

## Overview

Things to know when using the toast plugin:

- Toasts are opt-in for performance reasons, so **you must initialize them yourself**.
- Toasts will automatically hide if you do not specify `autohide: false`.

## Examples

### Basic

To encourage extensible and predictable toasts, we recommend a header and body. Toast headers use `display: flex`, allowing easy alignment of content thanks to our margin and flexbox utilities.

Toasts are as flexible as you need and have very little required markup. At a minimum, we require a single element to contain your "toasted" content and strongly encourage a dismiss button.

::: demo
<CToast :autohide="false" visible>
<CToastHeader closeButton>
<svg
      class="rounded me-2"
      width="20"
      height="20"
      xmlns="http://www.w3.org/2000/svg"
      preserveAspectRatio="xMidYMid slice"
      focusable="false"
      role="img"
    >
<rect width="100%" height="100%" fill="#007aff"></rect>
</svg>
<span class="me-auto fw-bold">CoreUI for Vue.js</span>
<small>7 min ago</small>
</CToastHeader>
<CToastBody>Hello, world! This is a toast message.</CToastBody>
</CToast>
:::
```vue
<CToast :autohide="false" visible>
  <CToastHeader closeButton>
    <svg
      class="rounded me-2"
      width="20"
      height="20"
      xmlns="http://www.w3.org/2000/svg"
      preserveAspectRatio="xMidYMid slice"
      focusable="false"
      role="img"
    >
      <rect width="100%" height="100%" fill="#007aff"></rect>
    </svg>
    <span class="me-auto fw-bold">CoreUI for Vue.js</span>
    <small>7 min ago</small>
  </CToastHeader>
  <CToastBody>Hello, world! This is a toast message.</CToastBody>
</CToast>
```

:::demo
<CButton color="primary" @click="createToast">Send a toast</CButton>
<CToaster placement="top-end">
  <CToast v-for="(toast, index) in toasts" visible>
    <CToastHeader closeButton>
    <span class="me-auto fw-bold">{{toast.title}}</span>
    <small>7 min ago</small>
    </CToastHeader>
    <CToastBody>
      {{ toast.content }}
    </CToastBody>  
  </CToast>
</CToaster>
:::
```vue
<template>
  <CButton color="primary" @click="createToast">Send a toast</CButton>
  <CToaster placement="top-end" visible>
    <CToast v-for="(toast, index) in toasts">
      <CToastHeader closeButton>
      <span class="me-auto fw-bold">{{toast.title}}</span>
      <small>7 min ago</small>
      </CToastHeader>
      <CToastBody>
        {{ toast.content }}
      </CToastBody>  
    </CToast>
  </CToaster>
</template>
<script>
  export default {
    data() {
      return {
        toasts: []
      }
    },
    methods: {
      createToast() {
        this.toasts.push({
          title: 'new toast',
          content: 'Lorem ipsum dolor cet emit'
        })
      }
    }
  }
</script>
```

<script>
  export default {
    data() {
      return {
        toasts: []
      }
    },
    
    methods: {
      createToast() {
        this.toasts.push({
          title: 'new toast',
          content: 'Lorem ipsum dolor cet emit'
        })
      }
    }
  }
</script>

### Translucent

Toasts are slightly translucent to blend in with what's below them.

::: demo-dark
<CToast :autohide="false" visible>
<CToastHeader closeButton>
<svg
      class="rounded me-2"
      width="20"
      height="20"
      xmlns="http://www.w3.org/2000/svg"
      preserveAspectRatio="xMidYMid slice"
      focusable="false"
      role="img"
    >
<rect width="100%" height="100%" fill="#007aff"></rect>
</svg>
<span class="me-auto fw-bold">CoreUI for Vue.js</span>
<small>7 min ago</small>
</CToastHeader>
<CToastBody>Hello, world! This is a toast message.</CToastBody>
</CToast>
:::

```vue
<CToast :autohide="false" visible>
  <CToastHeader closeButton>
    <svg
      class="rounded me-2"
      width="20"
      height="20"
      xmlns="http://www.w3.org/2000/svg"
      preserveAspectRatio="xMidYMid slice"
      focusable="false"
      role="img"
    >
      <rect width="100%" height="100%" fill="#007aff"></rect>
    </svg>
    <span class="me-auto fw-bold">CoreUI for Vue.js</span>
    <small>7 min ago</small>
  </CToastHeader>
  <CToastBody>Hello, world! This is a toast message.</CToastBody>
</CToast>
```

### Stacking

You can stack toasts by wrapping them in a toast container, which will vertically add some spacing.

::: demo
<CToaster class="position-relative" >
<CToast :autohide="false" visible>
<CToastHeader closeButton>
<svg
        class="rounded me-2"
        width="20"
        height="20"
        xmlns="http://www.w3.org/2000/svg"
        preserveAspectRatio="xMidYMid slice"
        focusable="false"
        role="img"
      >
<rect width="100%" height="100%" fill="#007aff"></rect>
</svg>
<span class="me-auto fw-bold">CoreUI for Vue.js</span>
<small>7 min ago</small>
</CToastHeader>
<CToastBody>Hello, world! This is a toast message.</CToastBody>
</CToast>
<CToast :autohide="false" visible>
<CToastHeader closeButton>
<svg
        class="rounded me-2"
        width="20"
        height="20"
        xmlns="http://www.w3.org/2000/svg"
        preserveAspectRatio="xMidYMid slice"
        focusable="false"
        role="img"
      >
<rect width="100%" height="100%" fill="#007aff"></rect>
</svg>
<span class="me-auto fw-bold">CoreUI for Vue.js</span>
<small>7 min ago</small>
</CToastHeader>
<CToastBody>Hello, world! This is a toast message.</CToastBody>
</CToast>
</CToaster>
:::

```vue
<CToaster>
  <CToast :autohide="false" visible>
    <CToastHeader closeButton>
      <svg
        class="rounded me-2"
        width="20"
        height="20"
        xmlns="http://www.w3.org/2000/svg"
        preserveAspectRatio="xMidYMid slice"
        focusable="false"
        role="img"
      >
        <rect width="100%" height="100%" fill="#007aff"></rect>
      </svg>
      <span class="me-auto fw-bold">CoreUI for Vue.js</span>
      <small>7 min ago</small>
    </CToastHeader>
    <CToastBody>Hello, world! This is a toast message.</CToastBody>
  </CToast>
  <CToast :autohide="false" visible>
    <CToastHeader closeButton>
      <svg
        class="rounded me-2"
        width="20"
        height="20"
        xmlns="http://www.w3.org/2000/svg"
        preserveAspectRatio="xMidYMid slice"
        focusable="false"
        role="img"
      >
        <rect width="100%" height="100%" fill="#007aff"></rect>
      </svg>
      <span class="me-auto fw-bold">CoreUI for Vue.js</span>
      <small>7 min ago</small>
    </CToastHeader>
    <CToastBody>Hello, world! This is a toast message.</CToastBody>
  </CToast>
</CToaster>
```

### Custom content

Customize your toasts by removing sub-components, tweaking them with [utilities](https://coreui.io/docs/4.0/utilities/api), or by adding your own markup. Here we've created a simpler toast by removing the default `<CToastHeader>`, adding a custom hide icon from [CoreUI Icons](https://icons.coreui.io), and using some [flexbox utilities](https://coreui.io/docs/4.0/utilities/flex) to adjust the layout.

::: demo
<CToast :autohide="false" class="align-items-center" visible>
  <div class="d-flex">
    <CToastBody>Hello, world! This is a toast message.</CToastBody>
    <CToastClose class="me-2 m-auto"/>
  </div>
</CToast>
:::
```vue
<CToast :autohide="false" class="align-items-center" visible>
  <div class="d-flex">
    <CToastBody>Hello, world! This is a toast message.</CToastBody>
    <CToastClose class="me-2 m-auto"/>
  </div>
</CToast>
```

Alternatively, you can also add additional controls and components to toasts.

::: demo
<CToast :autohide="false" class="align-items-center" visible>
  <CToastBody>
    Hello, world! This is a toast message.
    <div class="mt-2 pt-2 border-top">
    <CButton type="button" color="primary" size="sm">
    Take action
    </CButton>
    <CToastClose component="CButton" color="secondary" size="sm" class="ms-1">Close</CToastClose>
    </div>
  </CToastBody>
</CToast>
:::
```vue
<CToast :autohide="false" class="align-items-center" visible>
  <CToastBody>
    Hello, world! This is a toast message.
    <div class="mt-2 pt-2 border-top">
    <CButton type="button" color="primary" size="sm">
    Take action
    </CButton>
    <CToastClose component="CButton" color="secondary" size="sm" class="ms-1">Close</CToastClose>
    </div>
  </CToastBody>
</CToast>
```

### Color schemes

Building on the above example, you can create different toast color schemes with our [color](https://coreui.io/docs/4.0/utilities/colors) and [background](https://coreui.io/docs/4.0//utilities/background) utilities. Here we've set `color="primary"` and added `.text-white` class to the `<Ctoast>`, and then set `white` property to our close button. For a crisp edge, we remove the default border with `.border-0`.

::: demo
<CToast :autohide="false" color="primary" class="text-white align-items-center" visible>
  <div class="d-flex">
    <CToastBody>Hello, world! This is a toast message.</CToastBody>
    <CToastClose class="me-2 m-auto" white />
  </div>
</CToast>
:::
```vue
<CToast :autohide="false" color="primary" class="text-white align-items-center" visible>
  <div class="d-flex">
    <CToastBody>Hello, world! This is a toast message.</CToastBody>
    <CToastClose class="me-2 m-auto" white />
  </div>
</CToast>
```

## Customizing

### CSS variables

Vue toasts use local CSS variables on `.toast` for enhanced real-time customization. Values for the CSS variables are set via Sass, so Sass customization is still supported, too.

<ScssDocs file="_toasts.scss" capture="toast-css-vars"/>

#### How to use CSS variables

```js
const vars = { 
  '--my-css-var': 10,
  '--my-another-css-var': "red" 
}
return <CToast :style="vars">...</CToast>
```

### SASS variables

<ScssDocs file="_variables.scss" capture="toast-variables"/>

## API

!!!include(./api/toast/CToast.api.md)!!!

!!!include(./api/toast/CToastClose.api.md)!!!

!!!include(./api/toast/CToastHeader.api.md)!!!

!!!include(./api/toast/CToaster.api.md)!!!