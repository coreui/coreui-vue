---
title: Vue Spinner Component
name: Spinner
description: Indicate the loading state of a component or page with CoreUI spinners, built entirely with HTML, CSS, and no JavaScript.
other_frameworks: spinner
---

## About

CoreUI "spinners" can be used to show the loading state in your projects. They're built only with HTML and CSS, meaning you don't need any JavaScript to create them. You will, however, need some custom JavaScript to toggle their visibility. Their appearance, alignment, and sizing can be easily customized with our amazing utility classes.

For accessibility purposes, each loader here includes `role="status"` and a nested `<span class="visually-hidden">Loading...</span>`.

## Border spinner

Use the border spinners for a lightweight loading indicator.

## Basic usage

::: demo
<CSpinner/>
:::
```vue
<CSpinner/>
```

### Colors

The border spinner uses `currentColor` for its `border-color`. You can use any of our text color utilities on the standard spinner.

::: demo
<CSpinner color="primary"/>
<CSpinner color="secondary"/>
<CSpinner color="success"/>
<CSpinner color="danger"/>
<CSpinner color="warning"/>
<CSpinner color="info"/>
<CSpinner color="light"/>
<CSpinner color="dark"/>
:::
```vue
<CSpinner color="primary"/>
<CSpinner color="secondary"/>
<CSpinner color="success"/>
<CSpinner color="danger"/>
<CSpinner color="warning"/>
<CSpinner color="info"/>
<CSpinner color="light"/>
<CSpinner color="dark"/>
```

## Growing spinner

If you don't fancy a border spinner, switch to the grow spinner. While it doesn't technically spin, it does repeatedly grow!

::: demo
<CSpinner variant="grow"/>
:::
```vue
<CSpinner variant="grow"/>
```

Once again, this spinner is built with `currentColor`, so you can easily change its appearance. Here it is in blue, along with the supported variants.

::: demo
<CSpinner color="primary" variant="grow"/>
<CSpinner color="secondary" variant="grow"/>
<CSpinner color="success" variant="grow"/>
<CSpinner color="danger" variant="grow"/>
<CSpinner color="warning" variant="grow"/>
<CSpinner color="info" variant="grow"/>
<CSpinner color="light" variant="grow"/>
<CSpinner color="dark" variant="grow"/>
:::
```vue
<CSpinner color="primary" variant="grow"/>
<CSpinner color="secondary" variant="grow"/>
<CSpinner color="success" variant="grow"/>
<CSpinner color="danger" variant="grow"/>
<CSpinner color="warning" variant="grow"/>
<CSpinner color="info" variant="grow"/>
<CSpinner color="light" variant="grow"/>
<CSpinner color="dark" variant="grow"/>
```

## Size

Add `size="sm"`property` to make a smaller spinner that can quickly be used within other components.

::: demo
<CSpinner size="sm"/>
<CSpinner size="sm" variant="grow"/>
:::
```vue
<CSpinner size="sm"/>
<CSpinner size="sm" variant="grow"/>
```

## Buttons

Use spinners within buttons to indicate an action is currently processing or taking place. You may also swap the text out of the spinner element and utilize button text as needed.

::: demo
<CButton disabled>
  <CSpinner component="span" size="sm" aria-hidden="true"/>
</CButton>
<CButton disabled>
  <CSpinner component="span" size="sm" aria-hidden="true"/>
  Loading...
</CButton>
:::
```vue
<CButton disabled>
  <CSpinner component="span" size="sm" aria-hidden="true"/>
</CButton>
<CButton disabled>
  <CSpinner component="span" size="sm" aria-hidden="true"/>
  Loading...
</CButton>
```

::: demo
<CButton disabled>
  <CSpinner component="span" size="sm" variant="grow" aria-hidden="true"/>
</CButton>
<CButton disabled>
  <CSpinner component="span" size="sm" variant="grow" aria-hidden="true"/>
  Loading...
</CButton>
:::
```vue
<CButton disabled>
  <CSpinner component="span" size="sm" variant="grow" aria-hidden="true"/>
</CButton>
<CButton disabled>
  <CSpinner component="span" size="sm" variant="grow" aria-hidden="true"/>
  Loading...
</CButton>
```

## Customizing

### CSS variables

Vue spinners use local CSS variables on `.spinner-border` and `.spinner-grow` for enhanced real-time customization. Values for the CSS variables are set via Sass, so Sass customization is still supported, too.

Border spinner variables:

<ScssDocs file="_spinners.scss" capture="spinner-border-css-vars"/>

Growing spinner variables:

<ScssDocs file="_spinners.scss" capture="spinner-grow-css-vars"/>

For both spinners, small spinner modifier classes are used to update the values of these CSS variables as needed. For example, the `.spinner-border-sm` class does the following:

<ScssDocs file="_spinners.scss" capture="spinner-border-sm-css-vars"/>

#### How to use CSS variables

```js
const vars = { 
  '--my-css-var': 10,
  '--my-another-css-var': "red" 
}
return <CSpinner :style="vars">...</CSpinner>
```

### SASS variables

<ScssDocs file="_variables.scss" capture="spinner-variables"/>

## API

!!!include(./api/spinner/CSpinner.api.md)!!!