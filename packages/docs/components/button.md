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

<div class="callout callout-info">
  <h5>Conveying meaning to assistive technologies</h5>
  <p>
    Using color to add meaning only provides a visual indication, which will not be conveyed to users of assistive technologies – such as screen readers. Ensure that information denoted by the color is either obvious from the content itself (e.g. the visible text), or is included through alternative means, such as additional text hidden with the `.visually-hidden` class.
  </p>
</div>

## Disable text wrapping

If you don't want the button text to wrap, you can add the `.text-nowrap` class to the `<CButton>`. In Sass, you can set `$btn-white-space: nowrap` to disable text wrapping for each button.

## Button components

The `<CButton>` component are designed for `<button>` ,  `<a>`  or  `<input>` elements (though some browsers may apply a slightly different rendering).

If you're using `<CButton>` component as `<a>` elements that are used to trigger functionality ex. collapsing content, these links should be given a `role="button"` to adequately communicate their meaning to assistive technologies such as screen readers.

::: demo
<CButton component="a" color="primary" href="#" role="button">Link</CButton>
<CButton type="submit" color="primary">Button</CButton>
<CButton component="input" type="button" color="primary" value="Input"/>
<CButton component="input" type="submit" color="primary" value="Submit"/>
<CButton component="input" type="reset" color="primary" value="Reset"/>
:::
```vue
<CButton component="a" color="primary" href="#" role="button">Link</CButton>
<CButton type="submit" color="primary">Button</CButton>
<CButton component="input" type="button" color="primary" value="Input"/>
<CButton component="input" type="submit" color="primary" value="Submit"/>
<CButton component="input" type="reset" color="primary" value="Reset"/>
```

## Outline buttons

If you need a button, but without the strong background colors. Set `variant="outline"` prop to remove all background colors.

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

## Ghost buttons

If you need a ghost variant of button, set `variant="ghost"` prop to remove all background colors.

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


<CCallout color="info">Some of the button styles use a relatively light foreground color, and should only be used on a dark background in order to have sufficient contrast.</CCallout>

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
<CButton component="a" href="#" color="primary" size="lg" disabled>Primary link</CButton>
<CButton component="a" href="#" color="secondary" size="lg" disabled>Link</CButton>
:::
```vue
<CButton component="a" href="#" color="primary" size="lg" disabled>Primary link</CButton>
<CButton component="a" href="#" color="secondary" size="lg" disabled>Link</CButton>
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

```sass
--cui-btn-padding-x: #{$btn-padding-x};
--cui-btn-padding-y: #{$btn-padding-y};
--cui-btn-font-family: #{$btn-font-family};
--cui-btn-font-size: #{$btn-font-size};
--cui-btn-font-weight: #{$btn-font-weight};
--cui-btn-line-height: #{$btn-line-height};
--cui-btn-color: #{$body-color};
--cui-btn-bg: transparent;
--cui-btn-border-width: #{$btn-border-width};
--cui-btn-border-color: transparent;
--cui-btn-border-radius: #{$btn-border-radius};
--cui-btn-box-shadow: #{$btn-box-shadow};
--cui-btn-disabled-opacity: #{$btn-disabled-opacity};
--cui-btn-focus-box-shadow: 0 0 0 #{$btn-focus-width} rgba(var(--cui-btn-focus-shadow-rgb), .5);
```

#### How to use CSS variables

```js
const vars = { 
  '--my-css-var': 10,
  '--my-another-css-var': "red" 
}
return <CButton :style="vars">...</CButton>
```

### SASS variables

```sass
$btn-padding-y:               $input-btn-padding-y;
$btn-padding-x:               $input-btn-padding-x;
$btn-font-family:             $input-btn-font-family;
$btn-font-size:               $input-btn-font-size;
$btn-line-height:             $input-btn-line-height;
$btn-white-space:             null; // Set to `nowrap` to prevent text wrapping

$btn-padding-y-sm:            $input-btn-padding-y-sm;
$btn-padding-x-sm:            $input-btn-padding-x-sm;
$btn-font-size-sm:            $input-btn-font-size-sm;

$btn-padding-y-lg:            $input-btn-padding-y-lg;
$btn-padding-x-lg:            $input-btn-padding-x-lg;
$btn-font-size-lg:            $input-btn-font-size-lg;

$btn-border-width:            $input-btn-border-width;

$btn-font-weight:             $font-weight-normal;
$btn-box-shadow:              inset 0 1px 0 rgba($white, .15), 0 1px 1px rgba($black, .075);
$btn-focus-width:             $input-btn-focus-width;
$btn-focus-box-shadow:        $input-btn-focus-box-shadow;
$btn-disabled-opacity:        .65;
$btn-active-box-shadow:       inset 0 3px 5px rgba($black, .125);

$btn-link-color:              var(--cui-link-color);
$btn-link-hover-color:        var(--cui-link-hover-color);
$btn-link-disabled-color:     $gray-600;

// Allows for customizing button radius independently from global border radius
$btn-border-radius:           $border-radius;
$btn-border-radius-sm:        $border-radius-sm;
$btn-border-radius-lg:        $border-radius-lg;

$btn-transition:              color .15s ease-in-out, background-color .15s ease-in-out, border-color .15s ease-in-out, box-shadow .15s ease-in-out;

$btn-hover-bg-shade-amount:       15%;
$btn-hover-bg-tint-amount:        15%;
$btn-hover-border-shade-amount:   20%;
$btn-hover-border-tint-amount:    10%;
$btn-active-bg-shade-amount:      20%;
$btn-active-bg-tint-amount:       20%;
$btn-active-border-shade-amount:  25%;
$btn-active-border-tint-amount:   10%;

// scss-docs-start button-variants
$button-variants: (
  "primary": btn-color-map($primary, $primary),
  "secondary": btn-color-map($secondary, $secondary),
  "success": btn-color-map($success, $success),
  "danger": btn-color-map($danger, $danger),
  "warning": btn-color-map($warning, $warning),
  "info": btn-color-map($info, $info),
  "light": btn-color-map($light, $light),
  "dark": btn-color-map($dark, $dark)
);

$button-outline-ghost-variants: (
  "primary": btn-outline-color-map($primary),
  "secondary": btn-outline-color-map($secondary),
  "success": btn-outline-color-map($success),
  "danger": btn-outline-color-map($danger),
  "warning": btn-outline-color-map($warning),
  "info": btn-outline-color-map($info),
  "light": btn-outline-color-map($light),
  "dark": btn-outline-color-map($dark)
);
// scss-docs-end button-variants
```

## API

!!!include(./api/button/CButton.api.md)!!!