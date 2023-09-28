---
title: Vue Close Button Component
name: Close Button
description: A generic close button component for dismissing content like modals and alerts.
other_frameworks: close-button
---

## Example

Provide an option to dismiss or close a component with `<CCloseButton>`. Default styling is limited, but highly customizable. Modify the Sass variables to replace the default `background-image`.

::: demo
<CCloseButton/>
:::
```vue
<CCloseButton/>
```

## Disabled state

Disabled close buttons change their `opacity`. We've also applied `pointer-events: none` and `user-select: none` to preventing hover and active states from triggering.

::: demo
<CCloseButton disabled/>
:::
```vue
<CCloseButton disabled/>
```

## Dark variant

Add `dark` boolean property to the `<CCloseButton>`, to invert the close button. This uses the filter property to invert the background-image without overriding its value.

::: demo-dark
<CCloseButton dark/>
<CCloseButton dark disabled/>
:::
```vue
<CCloseButton dark/>
<CCloseButton dark disabled/>
```

## API

!!!include(./api/close-button/CCloseButton.api.md)!!!