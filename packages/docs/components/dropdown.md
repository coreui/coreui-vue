---
title: Vue Dropdown Component
name: Dropdown
description: Vue dropdown component allows you to toggle contextual overlays for displaying lists, links, and more html elements.
other_frameworks: dropdown
---

## Overview

Dropdowns are toggleable, contextual overlays for displaying lists of links and more.

Dropdowns are built on a third party library, [Popper.js](https://popper.js.org/), which provides dynamic positioning and viewport detection. Popper.js isn't used to position dropdowns in navbars though as dynamic positioning isn't required.

## Examples

Bind the dropdown's toggle and the dropdown menu inside `<CDropdown>`, or different element that declares `position: relative;`. Dropdowns can be triggered from `<a>` or `<button>` elements to better fit your possible requirements.

### Single button

Here's how you can put them to work with either `<button>` elements:
::: demo
<CDropdown direction="dropup">
  <CDropdownToggle color="primary">Dropdown Button</CDropdownToggle>
  <CDropdownMenu>
    <CDropdownItem href="#">Action</CDropdownItem>
    <CDropdownItem href="#">Another action</CDropdownItem>
    <CDropdownItem href="#">Something else here</CDropdownItem>
  </CDropdownMenu>
</CDropdown>
<div dir="rtl">
<CDropdown direction="dropup">
  <CDropdownToggle color="primary">Dropdown Button</CDropdownToggle>
  <CDropdownMenu>
    <CDropdownItem href="#">Action</CDropdownItem>
    <CDropdownItem href="#">Another action</CDropdownItem>
    <CDropdownItem href="#">Something else here</CDropdownItem>
  </CDropdownMenu>
</CDropdown>
</div>
:::
```vue
<CDropdown>
  <CDropdownToggle color="primary">Dropdown Button</CDropdownToggle>
  <CDropdownMenu>
    <CDropdownItem href="#">Action</CDropdownItem>
    <CDropdownItem href="#">Another action</CDropdownItem>
    <CDropdownItem href="#">Something else here</CDropdownItem>
  </CDropdownMenu>
</CDropdown>
```

And with `<a>` elements:

::: demo
<CDropdown color="secondary" togglerText="Dropdown button">
  <CDropdownToggle component="a" color="primary">Dropdown Button</CDropdownToggle>
  <CDropdownMenu>
    <CDropdownItem href="#">Action</CDropdownItem>
    <CDropdownItem href="#">Another action</CDropdownItem>
    <CDropdownItem href="#">Something else here</CDropdownItem>
  </CDropdownMenu>  
</CDropdown>
:::
```vue
<CDropdown color="secondary" togglerText="Dropdown button">
  <CDropdownToggle component="a" color="primary">Dropdown Button</CDropdownToggle>
  <CDropdownMenu>
    <CDropdownItem href="#">Action</CDropdownItem>
    <CDropdownItem href="#">Another action</CDropdownItem>
    <CDropdownItem href="#">Something else here</CDropdownItem>
  </CDropdownMenu>  
</CDropdown>
```

The best part is you can do this with any button variant, too:

::: demo
<template v-for="(item) in ['primary', 'secondary', 'success', 'info', 'warning', 'danger']">
  <CDropdown :color="item" :togglerText="item" variant="btn-group">
    <CDropdownToggle :color="item">{{item}}</CDropdownToggle>
    <CDropdownMenu>
      <CDropdownItem href="#">Action</CDropdownItem>
      <CDropdownItem href="#">Another action</CDropdownItem>
      <CDropdownItem href="#">Something else here</CDropdownItem>
    </CDropdownMenu>
  </CDropdown>
</template>
:::
```vue
<template v-for="(item) in ['primary', 'secondary', 'success', 'info', 'warning', 'danger']">
  <CDropdown :color="item" :togglerText="item" variant="btn-group">
    <CDropdownToggle :color="item">{{togglerText}}</CDropdownToggle>
    <CDropdownMenu>
      <CDropdownItem href="#">Action</CDropdownItem>
      <CDropdownItem href="#">Another action</CDropdownItem>
      <CDropdownItem href="#">Something else here</CDropdownItem>
    </CDropdownMenu>
  </CDropdown>
</template>
```

### Split button

Similarly, create split button dropdowns with virtually the same markup as single button dropdowns, but with the addition of boolean prop `split` for proper spacing around the dropdown caret.

We use this extra class to reduce the horizontal `padding` on either side of the caret by 25% and remove the `margin-left` that's attached for normal button dropdowns. Those additional changes hold the caret centered in the split button and implement a more properly sized hit area next to the main button.

::: demo
<template v-for="(item) in ['primary', 'secondary', 'success', 'info', 'warning', 'danger']">
  <CDropdown :color="item" :togglerText="item" variant="btn-group">
    <CButton :color="item">{{ item }}</CButton>
    <CDropdownToggle :color="item" split>{{item}}</CDropdownToggle>
    <CDropdownMenu>
      <CDropdownItem href="#">Action</CDropdownItem>
      <CDropdownItem href="#">Another action</CDropdownItem>
      <CDropdownItem href="#">Something else here</CDropdownItem>
    </CDropdownMenu>
  </CDropdown>
</template>
:::
```vue
<template v-for="(item) in ['primary', 'secondary', 'success', 'info', 'warning', 'danger']">
  <CDropdown :color="item" :togglerText="item" variant="btn-group">
    <CButton :color="item">{{ item }}</CButton>
    <CDropdownToggle :color="item" split>{{item}}</CDropdownToggle>
    <CDropdownMenu>
      <CDropdownItem href="#">Action</CDropdownItem>
      <CDropdownItem href="#">Another action</CDropdownItem>
      <CDropdownItem href="#">Something else here</CDropdownItem>
    </CDropdownMenu>
  </CDropdown>
</template>
```

## Sizing

Button dropdowns work with buttons of all sizes, including default and split dropdown buttons.

::: demo
<CDropdown variant="btn-group">
  <CDropdownToggle color="secondary" size="lg">Large button</CDropdownToggle>
  <CDropdownMenu>
    <CDropdownItem href="#">Action</CDropdownItem>
    <CDropdownItem href="#">Another action</CDropdownItem>
    <CDropdownItem href="#">Something else here</CDropdownItem>
    <CDropdownDivider/>
    <CDropdownItem href="#">Separated link</CDropdownItem>
  </CDropdownMenu>
</CDropdown>
<CDropdown variant="btn-group">
  <CButton color="secondary" size="lg">Large split button</CButton>
  <CDropdownToggle color="secondary" size="lg" split>Large button</CDropdownToggle>
  <CDropdownMenu>
    <CDropdownItem href="#">Action</CDropdownItem>
    <CDropdownItem href="#">Another action</CDropdownItem>
    <CDropdownItem href="#">Something else here</CDropdownItem>
    <CDropdownDivider/>
    <CDropdownItem href="#">Separated link</CDropdownItem>
  </CDropdownMenu>
</CDropdown>
:::
```vue
<CDropdown variant="btn-group">
  <CDropdownToggle color="secondary" size="lg">Large button</CDropdownToggle>
  <CDropdownMenu>
    <CDropdownItem href="#">Action</CDropdownItem>
    <CDropdownItem href="#">Another action</CDropdownItem>
    <CDropdownItem href="#">Something else here</CDropdownItem>
    <CDropdownDivider/>
    <CDropdownItem href="#">Separated link</CDropdownItem>
  </CDropdownMenu>
</CDropdown>
<CDropdown variant="btn-group">
  <CButton color="secondary" size="lg">Large split button</CButton>
  <CDropdownToggle color="secondary" size="lg" split>Large button</CDropdownToggle>
  <CDropdownMenu>
    <CDropdownItem href="#">Action</CDropdownItem>
    <CDropdownItem href="#">Another action</CDropdownItem>
    <CDropdownItem href="#">Something else here</CDropdownItem>
    <CDropdownDivider/>
    <CDropdownItem href="#">Separated link</CDropdownItem>
  </CDropdownMenu>
</CDropdown>
```

::: demo
<CDropdown variant="btn-group">
  <CDropdownToggle color="secondary" size="sm">Small button</CDropdownToggle>
  <CDropdownMenu>
    <CDropdownItem href="#">Action</CDropdownItem>
    <CDropdownItem href="#">Another action</CDropdownItem>
    <CDropdownItem href="#">Something else here</CDropdownItem>
    <CDropdownDivider/>
    <CDropdownItem href="#">Separated link</CDropdownItem>
  </CDropdownMenu>
</CDropdown>
<CDropdown variant="btn-group">
  <CButton color="secondary" size="sm">Small split button</CButton>
  <CDropdownToggle color="secondary" size="sm" split>Small button</CDropdownToggle>
  <CDropdownMenu>
    <CDropdownItem href="#">Action</CDropdownItem>
    <CDropdownItem href="#">Another action</CDropdownItem>
    <CDropdownItem href="#">Something else here</CDropdownItem>
    <CDropdownDivider/>
    <CDropdownItem href="#">Separated link</CDropdownItem>
  </CDropdownMenu>
</CDropdown>
:::
```vue
<CDropdown variant="btn-group">
  <CDropdownToggle color="secondary" size="sm">Small button</CDropdownToggle>
  <CDropdownMenu>
    <CDropdownItem href="#">Action</CDropdownItem>
    <CDropdownItem href="#">Another action</CDropdownItem>
    <CDropdownItem href="#">Something else here</CDropdownItem>
    <CDropdownDivider/>
    <CDropdownItem href="#">Separated link</CDropdownItem>
  </CDropdownMenu>
</CDropdown>
<CDropdown variant="btn-group">
  <CButton color="secondary" size="sm">Small split button</CButton>
  <CDropdownToggle color="secondary" size="sm" split>Small button</CDropdownToggle>
  <CDropdownMenu>
    <CDropdownItem href="#">Action</CDropdownItem>
    <CDropdownItem href="#">Another action</CDropdownItem>
    <CDropdownItem href="#">Something else here</CDropdownItem>
    <CDropdownDivider/>
    <CDropdownItem href="#">Separated link</CDropdownItem>
  </CDropdownMenu>
</CDropdown>
```

## Dark dropdowns

Opt into darker dropdowns to match a dark navbar or custom style by set `dark` property. No changes are required to the dropdown items.

::: demo
<CDropdown color="secondary" dark>
  <CDropdownToggle color="primary">Dropdown Button</CDropdownToggle>
  <CDropdownMenu>
    <CDropdownItem href="#">Action</CDropdownItem>
    <CDropdownItem href="#">Another action</CDropdownItem>
    <CDropdownItem href="#">Something else here</CDropdownItem>
    <CDropdownDivider/>
    <CDropdownItem href="#">Separated link</CDropdownItem>
  </CDropdownMenu>
</CDropdown>
:::
```vue
<CDropdown color="secondary" dark>
  <CDropdownToggle color="primary">Dropdown Button</CDropdownToggle>
  <CDropdownMenu>
    <CDropdownItem href="#">Action</CDropdownItem>
    <CDropdownItem href="#">Another action</CDropdownItem>
    <CDropdownItem href="#">Something else here</CDropdownItem>
    <CDropdownDivider/>
    <CDropdownItem href="#">Separated link</CDropdownItem>
  </CDropdownMenu>
</CDropdown>
```

And putting it to use in a navbar:

::: demo
<CNavbar expand="lg" color-scheme="dark" class="bg-dark">
  <CContainer fluid>
    <CNavbarBrand href="#">Navbar</CNavbarBrand>
    <CNavbarNav>
      <CDropdown dark variant="nav-item">
        <CDropdownToggle color="primary">Dropdown Button</CDropdownToggle>
        <CDropdownMenu>
          <CDropdownItem href="#">Action</CDropdownItem>
          <CDropdownItem href="#">Another action</CDropdownItem>
          <CDropdownItem href="#">Something else here</CDropdownItem>
          <CDropdownDivider/>
          <CDropdownItem href="#">Separated link</CDropdownItem>
        </CDropdownMenu>
      </CDropdown>
    </CNavbarNav>
  </CContainer>
</CNavbar>
:::
```vue
<CNavbar expand="lg" color-scheme="dark" class="bg-dark">
  <CContainer fluid>
    <CNavbarBrand href="#">Navbar</CNavbarBrand>
    <CNavbarNav>
      <CDropdown dark variant="nav-item">
        <CDropdownToggle color="primary">Dropdown Button</CDropdownToggle>
        <CDropdownMenu>
          <CDropdownItem href="#">Action</CDropdownItem>
          <CDropdownItem href="#">Another action</CDropdownItem>
          <CDropdownItem href="#">Something else here</CDropdownItem>
          <CDropdownDivider/>
          <CDropdownItem href="#">Separated link</CDropdownItem>
        </CDropdownMenu>
      </CDropdown>
    </CNavbarNav>
  </CContainer>
</CNavbar>
```

## Directions

<CCallout color="info">
  <h4>RTL</h4>
  <p>
    Directions are mirrored when using CoreUI in RTL, meaning `.dropstart` will appear on the right side.
  </p>
</CCallout>

### Centered

Make the dropdown menu centered below the toggle by adding `direction="center"` to the `<CDropdown>` component.

::: demo
<CDropdown color="secondary" direction="center">
  <CDropdownToggle color="secondary">Centered dropdown</CDropdownToggle>
  <CDropdownMenu>
    <CDropdownItem href="#">Action</CDropdownItem>
    <CDropdownItem href="#">Another action</CDropdownItem>
    <CDropdownItem href="#">Something else here</CDropdownItem>
    <CDropdownDivider/>
    <CDropdownItem href="#">Separated link</CDropdownItem>
  </CDropdownMenu>
</CDropdown>
:::
```vue
<CDropdown color="secondary" direction="center">
  <CDropdownToggle color="secondary">Centered dropdown</CDropdownToggle>
  <CDropdownMenu>
    <CDropdownItem href="#">Action</CDropdownItem>
    <CDropdownItem href="#">Another action</CDropdownItem>
    <CDropdownItem href="#">Something else here</CDropdownItem>
    <CDropdownDivider/>
    <CDropdownItem href="#">Separated link</CDropdownItem>
  </CDropdownMenu>
</CDropdown>
```

### Dropup

Trigger dropdown menus above elements by adding `direction="dropup"` to the `<CDropdown>` component.

::: demo
<CDropdown color="secondary" direction="dropup">
  <CDropdownToggle color="secondary">Dropup</CDropdownToggle>
  <CDropdownMenu>
    <CDropdownItem href="#">Action</CDropdownItem>
    <CDropdownItem href="#">Another action</CDropdownItem>
    <CDropdownItem href="#">Something else here</CDropdownItem>
    <CDropdownDivider/>
    <CDropdownItem href="#">Separated link</CDropdownItem>
  </CDropdownMenu>
</CDropdown>
<CDropdown color="secondary" direction="dropup">
  <CButton color="secondary">Split dropup</CButton>
  <CDropdownToggle color="secondary" split/>
  <CDropdownMenu>
    <CDropdownItem href="#">Action</CDropdownItem>
    <CDropdownItem href="#">Another action</CDropdownItem>
    <CDropdownItem href="#">Something else here</CDropdownItem>
    <CDropdownDivider/>
    <CDropdownItem href="#">Separated link</CDropdownItem>
  </CDropdownMenu>
</CDropdown>
:::
```vue
<CDropdown color="secondary" direction="dropup">
  <CDropdownToggle color="secondary">Dropup</CDropdownToggle>
  <CDropdownMenu>
    <CDropdownItem href="#">Action</CDropdownItem>
    <CDropdownItem href="#">Another action</CDropdownItem>
    <CDropdownItem href="#">Something else here</CDropdownItem>
    <CDropdownDivider/>
    <CDropdownItem href="#">Separated link</CDropdownItem>
  </CDropdownMenu>
</CDropdown>
<CDropdown color="secondary" direction="dropup">
  <CButton color="secondary">Split dropup</CButton>
  <CDropdownToggle color="secondary" split/>
  <CDropdownMenu>
    <CDropdownItem href="#">Action</CDropdownItem>
    <CDropdownItem href="#">Another action</CDropdownItem>
    <CDropdownItem href="#">Something else here</CDropdownItem>
    <CDropdownDivider/>
    <CDropdownItem href="#">Separated link</CDropdownItem>
  </CDropdownMenu>
</CDropdown>
```

### Dropup centered

Make the dropup menu centered above the toggle by adding `direction="dropup-center"` to the `<CDropdown>` component.

::: demo
<CDropdown color="secondary" direction="dropup-center">
  <CDropdownToggle color="secondary">Centered dropup</CDropdownToggle>
  <CDropdownMenu>
    <CDropdownItem href="#">Action</CDropdownItem>
    <CDropdownItem href="#">Another action</CDropdownItem>
    <CDropdownItem href="#">Something else here</CDropdownItem>
    <CDropdownDivider/>
    <CDropdownItem href="#">Separated link</CDropdownItem>
  </CDropdownMenu>
</CDropdown>
:::
```vue
<CDropdown color="secondary" direction="dropup-center">
  <CDropdownToggle color="secondary">Centered dropup</CDropdownToggle>
  <CDropdownMenu>
    <CDropdownItem href="#">Action</CDropdownItem>
    <CDropdownItem href="#">Another action</CDropdownItem>
    <CDropdownItem href="#">Something else here</CDropdownItem>
    <CDropdownDivider/>
    <CDropdownItem href="#">Separated link</CDropdownItem>
  </CDropdownMenu>
</CDropdown>
```

### Dropend

Trigger dropdown menus at the right of the elements by adding `direction="dropend"` to the `<CDropdown>` component.

::: demo
<CDropdown color="secondary" direction="dropend">
  <CDropdownToggle color="secondary">Dropend</CDropdownToggle>
  <CDropdownMenu>
    <CDropdownItem href="#">Action</CDropdownItem>
    <CDropdownItem href="#">Another action</CDropdownItem>
    <CDropdownItem href="#">Something else here</CDropdownItem>
    <CDropdownDivider/>
    <CDropdownItem href="#">Separated link</CDropdownItem>
  </CDropdownMenu>
</CDropdown>
<CDropdown color="secondary" direction="dropend">
  <CButton color="secondary">Split dropend</CButton>
  <CDropdownToggle color="secondary" split/>
  <CDropdownMenu>
    <CDropdownItem href="#">Action</CDropdownItem>
    <CDropdownItem href="#">Another action</CDropdownItem>
    <CDropdownItem href="#">Something else here</CDropdownItem>
    <CDropdownDivider/>
    <CDropdownItem href="#">Separated link</CDropdownItem>
  </CDropdownMenu>
</CDropdown>
:::
```vue
<CDropdown color="secondary" direction="dropend">
  <CDropdownToggle color="secondary">Dropend</CDropdownToggle>
  <CDropdownMenu>
    <CDropdownItem href="#">Action</CDropdownItem>
    <CDropdownItem href="#">Another action</CDropdownItem>
    <CDropdownItem href="#">Something else here</CDropdownItem>
    <CDropdownDivider/>
    <CDropdownItem href="#">Separated link</CDropdownItem>
  </CDropdownMenu>
</CDropdown>
<CDropdown color="secondary" direction="dropend">
  <CButton color="secondary">Split dropend</CButton>
  <CDropdownToggle color="secondary" split/>
  <CDropdownMenu>
    <CDropdownItem href="#">Action</CDropdownItem>
    <CDropdownItem href="#">Another action</CDropdownItem>
    <CDropdownItem href="#">Something else here</CDropdownItem>
    <CDropdownDivider/>
    <CDropdownItem href="#">Separated link</CDropdownItem>
  </CDropdownMenu>
</CDropdown>
```

### Dropstart

Trigger dropdown menus at the left of the elements by adding `direction="dropstart"` to the `<CDropdown>` component.

::: demo
<CDropdown color="secondary" direction="dropstart">
  <CDropdownToggle color="secondary">Dropstart</CDropdownToggle>
  <CDropdownMenu>
    <CDropdownItem href="#">Action</CDropdownItem>
    <CDropdownItem href="#">Another action</CDropdownItem>
    <CDropdownItem href="#">Something else here</CDropdownItem>
    <CDropdownDivider/>
    <CDropdownItem href="#">Separated link</CDropdownItem>
  </CDropdownMenu>
</CDropdown>
<CButtonGroup>
  <CDropdown color="secondary" direction="dropstart">
    <CDropdownToggle color="secondary" split/>
    <CDropdownMenu>
      <CDropdownItem href="#">Action</CDropdownItem>
      <CDropdownItem href="#">Another action</CDropdownItem>
      <CDropdownItem href="#">Something else here</CDropdownItem>
      <CDropdownDivider/>
      <CDropdownItem href="#">Separated link</CDropdownItem>
    </CDropdownMenu>
  </CDropdown>
  <CButton color="secondary">Split dropstart</CButton>
</CButtonGroup>
:::
```vue
<CDropdown color="secondary" direction="dropstart">
  <CDropdownToggle color="secondary">Dropstart</CDropdownToggle>
  <CDropdownMenu>
    <CDropdownItem href="#">Action</CDropdownItem>
    <CDropdownItem href="#">Another action</CDropdownItem>
    <CDropdownItem href="#">Something else here</CDropdownItem>
    <CDropdownDivider/>
    <CDropdownItem href="#">Separated link</CDropdownItem>
  </CDropdownMenu>
</CDropdown>
<CButtonGroup>
  <CDropdown color="secondary" direction="dropstart">
    <CDropdownToggle color="secondary" split/>
    <CDropdownMenu>
      <CDropdownItem href="#">Action</CDropdownItem>
      <CDropdownItem href="#">Another action</CDropdownItem>
      <CDropdownItem href="#">Something else here</CDropdownItem>
      <CDropdownDivider/>
      <CDropdownItem href="#">Separated link</CDropdownItem>
    </CDropdownMenu>
  </CDropdown>
  <CButton color="secondary">Split dropstart</CButton>
</CButtonGroup>
```

### Responsive alignment

If you use responsive alignment, dynamic positioning is disabled.

To align **right** the dropdown menu with the given breakpoint or larger, add `aligment="xs|sm|md|lg|xl|xxl: end"`.

::: demo
<CDropdown color="secondary" :alignment="{ 'lg': 'end' }">
  <CDropdownToggle color="secondary">Left-aligned but right aligned when large screen</CDropdownToggle>
  <CDropdownMenu>
    <CDropdownItem href="#">Action</CDropdownItem>
    <CDropdownItem href="#">Another action</CDropdownItem>
    <CDropdownItem href="#">Something else here</CDropdownItem>
    <CDropdownDivider/>
    <CDropdownItem href="#">Separated link</CDropdownItem>
  </CDropdownMenu>
</CDropdown>
:::
```vue
<CDropdown color="secondary" :alignment="{ 'lg': 'end' }">
  <CDropdownToggle color="secondary">Left-aligned but right aligned when large screen</CDropdownToggle>
  <CDropdownMenu>
    <CDropdownItem href="#">Action</CDropdownItem>
    <CDropdownItem href="#">Another action</CDropdownItem>
    <CDropdownItem href="#">Something else here</CDropdownItem>
    <CDropdownDivider/>
    <CDropdownItem href="#">Separated link</CDropdownItem>
  </CDropdownMenu>
</CDropdown>
```

To align **left** the dropdown menu with the given breakpoint or larger, add `aligment="xs|sm|md|lg|xl|xxl: start"`.

::: demo
<CDropdown color="secondary" :alignment="{ 'xs': 'end', 'lg': 'start' }">
  <CDropdownToggle color="secondary">Right-aligned but left aligned when large screen</CDropdownToggle>
  <CDropdownMenu>
    <CDropdownItem href="#">Action</CDropdownItem>
    <CDropdownItem href="#">Another action</CDropdownItem>
    <CDropdownItem href="#">Something else here</CDropdownItem>
    <CDropdownDivider/>
    <CDropdownItem href="#">Separated link</CDropdownItem>
  </CDropdownMenu>
</CDropdown>
:::
```vue
<CDropdown color="secondary" :alignment="{ 'xs': 'end', 'lg': 'start' }">
  <CDropdownToggle color="secondary">Right-aligned but left aligned when large screen</CDropdownToggle>
  <CDropdownMenu>
    <CDropdownItem href="#">Action</CDropdownItem>
    <CDropdownItem href="#">Another action</CDropdownItem>
    <CDropdownItem href="#">Something else here</CDropdownItem>
    <CDropdownDivider/>
    <CDropdownItem href="#">Separated link</CDropdownItem>
  </CDropdownMenu>
</CDropdown>
```

## Menu content

### Headers

Add a header to label sections of actions in any dropdown menu.

In the following example we use `div` instead of `<CDropdownMenu>` to show `<CDropdownMenu>` content.

::: demo
<div class="border rounded py-2">
  <CDropdownHeader>Dropdown header</CDropdownHeader>
  <CDropdownItem href="#">Action</CDropdownItem>
  <CDropdownItem href="#">Another action</CDropdownItem>
</div>
:::
```vue
<CDropdownHeader>Dropdown header</CDropdownHeader>
<CDropdownItem href="#">Action</CDropdownItem>
<CDropdownItem href="#">Another action</CDropdownItem>
```

### Dividers

Separate groups of related menu items with a divider.

In the following example we use `div` instead of `<CDropdownMenu>` to show `<CDropdownMenu>` content.

::: demo
<div class="border rounded py-2">
  <CDropdownItem href="#">Action</CDropdownItem>
  <CDropdownItem href="#">Another action</CDropdownItem>
  <CDropdownItem href="#">Something else here</CDropdownItem>
  <CDropdownDivider/>
  <CDropdownItem href="#">Separated link</CDropdownItem>
</div>
:::
```vue
<CDropdownItem href="#">Action</CDropdownItem>
<CDropdownItem href="#">Another action</CDropdownItem>
<CDropdownItem href="#">Something else here</CDropdownItem>
<CDropdownDivider/>
<CDropdownItem href="#">Separated link</CDropdownItem>
```
### Text

Place any freeform text within a dropdown menu with text. Note that you'll likely need additional sizing styles to constrain the menu width.

::: demo
<div class="border rounded p-4 text-muted" style="max-width: 200px">
  <p>
    Some example text that's free-flowing within the dropdown menu.
  </p>
  <p class="mb-0">
    And this is more example text.
  </p>
</div>
:::
```vue
<p>
  Some example text that's free-flowing within the dropdown menu.
</p>
<p class="mb-0">
  And this is more example text.
</p>
```

### Forms

Put a form within a dropdown menu, or make it into a dropdown menu.

::: demo
<div class="border rounded py-2">
  <CForm class="px-4 py-4">
    <div class="mb-3">
      <CFormLabel for="exampleDropdownFormEmail1">Email address</CFormLabel>
      <CFormInput type="email" id="exampleDropdownFormEmail1" placeholder="email@example.com"/>
    </div>
    <div class="mb-3">
      <CFormLabel for="exampleDropdownFormPassword1">Password</CFormLabel>
      <CFormInput type="password" id="exampleDropdownFormPassword1" placeholder="Password"/>
    </div>
    <div class="mb-3">
      <CFormCheck id="dropdownCheck" label="Remember me"/>
    </div>
    <CButton type="submit">Sign in</CButton>
  </CForm>
  <CDropdownDivider/>
  <CDropdownItem href="#">New around here? Sign up</CDropdownItem>
  <CDropdownItem href="#">Forgot password?</CDropdownItem>
</div>
:::
```vue
<CForm class="px-4 py-4">
  <div class="mb-3">
    <CFormLabel for="exampleDropdownFormEmail1">Email address</CFormLabel>
    <CFormInput type="email" id="exampleDropdownFormEmail1" placeholder="email@example.com"/>
  </div>
  <div class="mb-3">
    <CFormLabel for="exampleDropdownFormPassword1">Password</CFormLabel>
    <CFormInput type="password" id="exampleDropdownFormPassword1" placeholder="Password"/>
  </div>
  <div class="mb-3">
    <CFormCheck id="dropdownCheck" label="Remember me"/>
  </div>
  <CButton type="submit">Sign in</CButton>
</CForm>
<CDropdownDivider/>
<CDropdownItem href="#">New around here? Sign up</CDropdownItem>
<CDropdownItem href="#">Forgot password?</CDropdownItem>
```

## Customizing

### CSS variables

Vue dropdowns use local CSS variables on `.dropdown` for enhanced real-time customization. Values for the CSS variables are set via Sass, so Sass customization is still supported, too.

<ScssDocs file="_dropdown.scss" capture="dropdown-css-vars"/>

Customization through CSS variables can be seen on the `.dropdown-menu-dark` class where we override specific values without adding duplicate CSS selectors.

<ScssDocs file="_dropdown.scss" capture="dropdown-dark-css-vars"/>

#### How to use CSS variables

```js
const vars = { 
  '--my-css-var': 10,
  '--my-another-css-var': "red" 
}
return <CDropdown :style="vars">...</CDropdown>
```

### SASS variables

<ScssDocs file="_variables.scss" capture="dropdown-variables"/>

Variables for the dark dropdown:

<ScssDocs file="_variables.scss" capture="dropdown-dark-variables"/>

Variables for the CSS-based carets that indicate a dropdown's interactivity:

<ScssDocs file="_variables.scss" capture="caret-variables"/>

## API

!!!include(./api/dropdown/CDropdown.api.md)!!!

!!!include(./api/dropdown/CDropdownHeader.api.md)!!!

!!!include(./api/dropdown/CDropdownItem.api.md)!!!

!!!include(./api/dropdown/CDropdownMenu.api.md)!!!

!!!include(./api/dropdown/CDropdownToggle.api.md)!!!