---
title: Vue Buttons Component
name: Buttons
description: Vue button component for actions in tables, forms, cards, and more. CoreUI for Vue.js provides various styles, states, and size. Ready to use and easy to customize.
other_frameworks: button
---

## Examples

CoreUI includes a bunch of predefined buttons components, each serving its own semantic purpose. Buttons show what action will happen when the user clicks or touches it. CoreUI buttons are used to initialize operations, both in the background or foreground of an experience.

::: demo
<CButton color="primary" disabled>Primary</CButton>
<CButton color="secondary">Secondary</CButton>
<CButton color="success">Success</CButton>
<CButton color="danger">Danger</CButton>
<CButton color="warning">Warning</CButton>
<CButton color="info">Info</CButton>
<CButton color="light">Light</CButton>
<CButton color="dark">Dark</CButton>
<CButton color="link">Link</CButton>
:::
```vue
<CButton color="primary" disabled>Primary</CButton>
<CButton color="secondary">Secondary</CButton>
<CButton color="success">Success</CButton>
<CButton color="danger">Danger</CButton>
<CButton color="warning">Warning</CButton>
<CButton color="info">Info</CButton>
<CButton color="light">Light</CButton>
<CButton color="dark">Dark</CButton>
<CButton color="link">Link</CButton>
```

<Callout color="info" title="Conveying meaning to assistive technologies">
  Using color to add meaning only provides a visual indication, which will not be conveyed to users of assistive technologies – such as screen readers. Ensure that information denoted by the color is either obvious from the content itself (e.g. the visible text), or is included through alternative means, such as additional text hidden with the <code>.visually-hidden</code> class.
</Callout>

## Disable text wrapping

If you don't want the button text to wrap, you can add the `.text-nowrap` class to the `<CButton>`. In Sass, you can set `$btn-white-space: nowrap` to disable text wrapping for each button.

## Button components

The `<CButton>` component are designed for `<button>` ,  `<a>`  or  `<input>` elements (though some browsers may apply a slightly different rendering).

If you're using `<CButton>` component as `<a>` elements that are used to trigger functionality ex. collapsing content, these links should be given a `role="button"` to adequately communicate their meaning to assistive technologies such as screen readers.

::: demo
<CButton as="a" color="primary" href="#" role="button">Link</CButton>
<CButton type="submit" color="primary">Button</CButton>
<CButton as="input" type="button" color="primary" value="Input"/>
<CButton as="input" type="submit" color="primary" value="Submit"/>
<CButton as="input" type="reset" color="primary" value="Reset"/>
:::
```vue
<CButton as="a" color="primary" href="#" role="button">Link</CButton>
<CButton type="submit" color="primary">Button</CButton>
<CButton as="input" type="button" color="primary" value="Input"/>
<CButton as="input" type="submit" color="primary" value="Submit"/>
<CButton as="input" type="reset" color="primary" value="Reset"/>
```

## Outline buttons

### Base outline style

The `variant="outline` property provides a neutral outline button style without any color modifiers. It’s useful as a foundation for minimal buttons without background color or strong visual emphasis.

::: demo
<CButton variant="outline">Base outline button</CButton>
<CButton variant="outline" active>Active state</CButton>
<CButton variant="outline" disabled>Disabled state</CButton>
:::
```vue
<CButton variant="outline">Base outline button</CButton>
<CButton variant="outline" active>Active state</CButton>
<CButton variant="outline" disabled>Disabled state</CButton>
```

These Vue buttons use a transparent background, subtle border, and inherit text color from the parent context. They’re best suited for minimalist UI elements like modals, toolbars, or secondary actions.


### Themed outline variants

If you need a button, but without the strong background colors, set `color` and `variant=" outline"` props to remove all background colors.

::: demo
<CButton color="primary" variant="outline">Primary</CButton>
<CButton color="secondary" variant="outline">Secondary</CButton>
<CButton color="success" variant="outline">Success</CButton>
<CButton color="danger" variant="outline">Danger</CButton>
<CButton color="warning" variant="outline">Warning</CButton>
<CButton color="info" variant="outline">Info</CButton>
<CButton color="light" variant="outline">Light</CButton>
<CButton color="dark" variant="outline">Dark</CButton>
:::
```vue
<CButton color="primary" variant="outline">Primary</CButton>
<CButton color="secondary" variant="outline">Secondary</CButton>
<CButton color="success" variant="outline">Success</CButton>
<CButton color="danger" variant="outline">Danger</CButton>
<CButton color="warning" variant="outline">Warning</CButton>
<CButton color="info" variant="outline">Info</CButton>
<CButton color="light" variant="outline">Light</CButton>
<CButton color="dark" variant="outline">Dark</CButton>
```

These outline variants of our Vue.js buttons retain transparent backgrounds by default, but display a background tint on hover or focus to indicate interactivity. They’re ideal for secondary actions when you want to differentiate from the standard buttons visually.

## Ghost buttons

### Base ghost style

Use the `variant="ghost"` property to create ultra-minimalist buttons with no borders and a fully transparent background. These Vue buttons rely solely on text color for visibility and apply a background highlight when hovered over or in an active state.

They’re perfect for interfaces where you want buttons to be present but visually unobtrusive—such as action buttons in modals, cards, or toolbars.

If you need a ghost variant of button, set `variant="ghost"` prop to remove all background colors.

::: demo
<CButton variant="ghost">Base ghost button</CButton>
<CButton variant="ghost" active>Active state</CButton>
<CButton variant="ghost" disabled>Disabled state</CButton>
:::
```vue
<CButton variant="ghost">Base ghost button</CButton>
<CButton variant="ghost" active>Active state</CButton>
<CButton variant="ghost" disabled>Disabled state</CButton>
```

To apply theme colors to Vue ghost buttons, use the `color` and `variant="ghost"` properties. By default, these variants color only the text. On hover or focus, they add a background that corresponds to the theme color.

::: demo
<CButton color="primary" variant="ghost">Primary</CButton>
<CButton color="secondary" variant="ghost">Secondary</CButton>
<CButton color="success" variant="ghost">Success</CButton>
<CButton color="danger" variant="ghost">Danger</CButton>
<CButton color="warning" variant="ghost">Warning</CButton>
<CButton color="info" variant="ghost">Info</CButton>
<CButton color="light" variant="ghost">Light</CButton>
<CButton color="dark" variant="ghost">Dark</CButton>
:::
```vue
<CButton color="primary" variant="ghost">Primary</CButton>
<CButton color="secondary" variant="ghost">Secondary</CButton>
<CButton color="success" variant="ghost">Success</CButton>
<CButton color="danger" variant="ghost">Danger</CButton>
<CButton color="warning" variant="ghost">Warning</CButton>
<CButton color="info" variant="ghost">Info</CButton>
<CButton color="light" variant="ghost">Light</CButton>
<CButton color="dark" variant="ghost">Dark</CButton>
```


<Callout color="info">Some of the button styles use a relatively light foreground color, and should only be used on a dark background in order to have sufficient contrast.</Callout>

## Sizes

Larger or smaller buttons? Add `size="lg"` or `size="sm"` for additional sizes.

::: demo
<CButton color="primary" size="lg">Large button</CButton>
<CButton color="secondary" size="lg">Large button</CButton>
:::
```vue
<CButton color="primary" size="lg">Large button</CButton>
<CButton color="secondary" size="lg">Large button</CButton>
```

## Shapes

### Pill buttons

::: demo
<CButton color="primary" shape="rounded-pill">Primary</CButton>
<CButton color="secondary" shape="rounded-pill">Secondary</CButton>
<CButton color="success" shape="rounded-pill">Success</CButton>
<CButton color="danger" shape="rounded-pill">Danger</CButton>
<CButton color="warning" shape="rounded-pill">Warning</CButton>
<CButton color="info" shape="rounded-pill">Info</CButton>
<CButton color="light" shape="rounded-pill">Light</CButton>
<CButton color="dark" shape="rounded-pill">Dark</CButton>
<CButton color="link" shape="rounded-pill">Link</CButton>
:::
```vue
<CButton color="primary" shape="rounded-pill">Primary</CButton>
<CButton color="secondary" shape="rounded-pill">Secondary</CButton>
<CButton color="success" shape="rounded-pill">Success</CButton>
<CButton color="danger" shape="rounded-pill">Danger</CButton>
<CButton color="warning" shape="rounded-pill">Warning</CButton>
<CButton color="info" shape="rounded-pill">Info</CButton>
<CButton color="light" shape="rounded-pill">Light</CButton>
<CButton color="dark" shape="rounded-pill">Dark</CButton>
<CButton color="link" shape="rounded-pill">Link</CButton>
```

### Square buttons

::: demo
<CButton color="primary" shape="rounded-0">Primary</CButton>
<CButton color="secondary" shape="rounded-0">Secondary</CButton>
<CButton color="success" shape="rounded-0">Success</CButton>
<CButton color="danger" shape="rounded-0">Danger</CButton>
<CButton color="warning" shape="rounded-0">Warning</CButton>
<CButton color="info" shape="rounded-0">Info</CButton>
<CButton color="light" shape="rounded-0">Light</CButton>
<CButton color="dark" shape="rounded-0">Dark</CButton>
<CButton color="link" shape="rounded-0">Link</CButton>
:::
```vue
<CButton color="primary" shape="rounded-0">Primary</CButton>
<CButton color="secondary" shape="rounded-0">Secondary</CButton>
<CButton color="success" shape="rounded-0">Success</CButton>
<CButton color="danger" shape="rounded-0">Danger</CButton>
<CButton color="warning" shape="rounded-0">Warning</CButton>
<CButton color="info" shape="rounded-0">Info</CButton>
<CButton color="light" shape="rounded-0">Light</CButton>
<CButton color="dark" shape="rounded-0">Dark</CButton>
<CButton color="link" shape="rounded-0">Link</CButton>
```

## Disabled state

Add the `disabled` boolean prop to any `<CButton>` component to make buttons look inactive. Disabled button has `pointer-events: none` applied to, disabling hover and active states from triggering.

::: demo
<CButton color="primary" size="lg" disabled>Primary button</CButton>
<CButton color="secondary" size="lg" disabled>Button</CButton>
:::
```vue
<CButton color="primary" size="lg" disabled>Primary button</CButton>
<CButton color="secondary" size="lg" disabled>Button</CButton>
```

Disabled buttons using the `<a>` component act a little different:

`<a>`s don't support the `disabled` attribute, so CoreUI has to add `.disabled` class to make buttons look inactive. CoreUI also has to add to the disabled button component `aria-disabled="true"` attribute to show the state of the component to assistive technologies.

::: demo
<CButton as="a" href="#" color="primary" size="lg" disabled>Primary link</CButton>
<CButton as="a" href="#" color="secondary" size="lg" disabled>Link</CButton>
:::
```vue
<CButton as="a" href="#" color="primary" size="lg" disabled>Primary link</CButton>
<CButton as="a" href="#" color="secondary" size="lg" disabled>Link</CButton>
```

The `.disabled` class uses `pointer-events: none` to try to disable the link functionality of `<a>`s, but that CSS property is not yet standardized. Besides, even in browsers that do support `pointer-events: none`, keyboard navigation remains unaffected, meaning that sighted keyboard users and users of assistive technologies will still be able to activate these links. So to be safe, we automatically add a `tabindex="-1"` attribute on disabled links (to prevent them from receiving keyboard focus) and use custom JavaScript to disable their functionality.

## Block buttons

Create buttons that span the full width of a parent—by using utilities.

::: demo
<div class="d-grid gap-2">
  <CButton color="primary">Button</CButton>
  <CButton color="primary">Button</CButton>
</div>
:::
```vue
<div class="d-grid gap-2">
  <CButton color="primary">Button</CButton>
  <CButton color="primary">Button</CButton>
</div>
```

Here we create a responsive variation, starting with vertically stacked buttons until the `md` breakpoint, where `.d-md-block` replaces the `.d-grid` class, thus nullifying the `gap-2` utility. Resize your browser to see them change.

::: demo
<div class="d-grid gap-2 d-md-block">
  <CButton color="primary">Button</CButton>
  <CButton color="primary">Button</CButton>
</div>
:::
```vue
<div class="d-grid gap-2 d-md-block">
  <CButton color="primary">Button</CButton>
  <CButton color="primary">Button</CButton>
</div>
```

You can adjust the width of your block buttons with grid column width classes. For example, for a half-width "block button", use `.col-6`. Center it horizontally with `.mx-auto`, too.

::: demo
<div class="d-grid gap-2 col-6 mx-auto">
  <CButton color="primary">Button</CButton>
  <CButton color="primary">Button</CButton>
</div>
:::
```vue
<div class="d-grid gap-2 col-6 mx-auto">
  <CButton color="primary">Button</CButton>
  <CButton color="primary">Button</CButton>
</div>
```

Additional utilities can be used to adjust the alignment of buttons when horizontal. Here we've taken our previous responsive example and added some flex utilities and a margin utility on the button to right align the buttons when they're no longer stacked.

::: demo
<div class="d-grid gap-2 d-md-flex justify-content-md-end">
  <CButton color="primary" class="me-md-2">Button</CButton>
  <CButton color="primary">Button</CButton>
</div>
:::
```vue
<div class="d-grid gap-2 d-md-flex justify-content-md-end">
  <CButton color="primary" class="me-md-2">Button</CButton>
  <CButton color="primary">Button</CButton>
</div>
```

## Customizing

### CSS variables

Vue buttons use local CSS variables on `.btn` for enhanced real-time customization. Values for the CSS variables are set via Sass, so Sass customization is still supported, too.


<ScssDocs file="_buttons.scss" capture="btn-css-vars"/>

#### How to use CSS variables

```js
const vars = { 
  '--my-css-var': 10,
  '--my-another-css-var': "red" 
}
return <CButton :style="vars">...</CButton>
```

### SASS variables

<ScssDocs file="_variables.scss" capture="btn-variables"/>

## API

!!!include(./api/button/CButton.api.md)!!!