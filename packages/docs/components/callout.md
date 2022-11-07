---
title: Vue Callout Component
name: Callout
description: Vue callout component provides presentation of content in a visually distinct manner. Includes a heading, icon and typically text-based content.
other_frameworks: callout
---

## Examples

Callout component is prepared for any length of text, as well as an optional elements like icons, headings, etc. For a styling, use one of the **required** contextual props (e.g., `color="success"`).

::: demo
<CCallout color="primary">
  New to or unfamiliar with flexbox? Read this CSS Tricks flexbox guide for background, terminology, guidelines, and code snippets.
</CCallout>
<CCallout color="secondary">
  New to or unfamiliar with flexbox? Read this CSS Tricks flexbox guide for background, terminology, guidelines, and code snippets.
</CCallout>
<CCallout color="success">
  New to or unfamiliar with flexbox? Read this CSS Tricks flexbox guide for background, terminology, guidelines, and code snippets.
</CCallout>
<CCallout color="danger">
  New to or unfamiliar with flexbox? Read this CSS Tricks flexbox guide for background, terminology, guidelines, and code snippets.
</CCallout>
<CCallout color="warning">
  New to or unfamiliar with flexbox? Read this CSS Tricks flexbox guide for background, terminology, guidelines, and code snippets.
</CCallout>
<CCallout color="info">
  New to or unfamiliar with flexbox? Read this CSS Tricks flexbox guide for background, terminology, guidelines, and code snippets.
</CCallout>
<CCallout color="light">
  New to or unfamiliar with flexbox? Read this CSS Tricks flexbox guide for background, terminology, guidelines, and code snippets.
</CCallout>
<CCallout color="dark">
  New to or unfamiliar with flexbox? Read this CSS Tricks flexbox guide for background, terminology, guidelines, and code snippets.
</CCallout>
:::
```vue
<CCallout color="primary">
  New to or unfamiliar with flexbox? Read this CSS Tricks flexbox guide for background, terminology, guidelines, and code snippets.
</CCallout>
<CCallout color="secondary">
  New to or unfamiliar with flexbox? Read this CSS Tricks flexbox guide for background, terminology, guidelines, and code snippets.
</CCallout>
<CCallout color="success">
  New to or unfamiliar with flexbox? Read this CSS Tricks flexbox guide for background, terminology, guidelines, and code snippets.
</CCallout>
<CCallout color="danger">
  New to or unfamiliar with flexbox? Read this CSS Tricks flexbox guide for background, terminology, guidelines, and code snippets.
</CCallout>
<CCallout color="warning">
  New to or unfamiliar with flexbox? Read this CSS Tricks flexbox guide for background, terminology, guidelines, and code snippets.
</CCallout>
<CCallout color="info">
  New to or unfamiliar with flexbox? Read this CSS Tricks flexbox guide for background, terminology, guidelines, and code snippets.
</CCallout>
<CCallout color="light">
  New to or unfamiliar with flexbox? Read this CSS Tricks flexbox guide for background, terminology, guidelines, and code snippets.
</CCallout>
<CCallout color="dark">
  New to or unfamiliar with flexbox? Read this CSS Tricks flexbox guide for background, terminology, guidelines, and code snippets.
</CCallout>
```

<CCallout color="info">
  <h5>Conveying meaning to assistive technologies</h5>
  <p>
    Using color to add meaning only provides a visual indication, which will not be conveyed to users of assistive technologies – such as screen readers. Ensure that information denoted by the color is either obvious from the content itself (e.g. the visible text), or is included through alternative means, such as additional text hidden with the `.visually-hidden` class.
  </p>
</CCallout>

## Customizing

### CSS variables

Vue callouts use local CSS variables on `.callout` for enhanced real-time customization. Values for the CSS variables are set via Sass, so Sass customization is still supported, too.

```sass
--cui-callout-padding-x: #{$callout-padding-x};
--cui-callout-padding-y: #{$callout-padding-y};
--cui-callout-margin-x: #{$callout-margin-x};
--cui-callout-margin-y: #{$callout-margin-y};
--cui-callout-border-width: #{$callout-border-width};
--cui-callout-border-color: #{$callout-border-color};
--cui-callout-border-left-width: #{$callout-border-left-width};
--cui-callout-border-radius: #{$callout-border-radius};
```

#### How to use CSS variables

```js
const vars = { 
  '--my-css-var': 10,
  '--my-another-css-var': "red" 
}
return <CCallout :style="vars">...</CCallout>
```

### SASS variables

```sass
$callout-padding-y:                 $spacer;
$callout-padding-x:                 $spacer;
$callout-margin-y:                  $spacer;
$callout-margin-x:                  0;
$callout-border-radius:             $border-radius;
$callout-border-width:              $border-width;
$callout-border-color:              $border-color;
$callout-border-left-width:         (4 * $callout-border-width);

$callout-variants: (
  "primary":    $primary,
  "secondary":  $secondary,
  "success":    $success,
  "danger":     $danger,
  "warning":    $warning,
  "info":       $info,
  "light":      $light,
  "dark":       $dark
);
```

## API

!!!include(./api/callout/CCallout.api.md)!!!