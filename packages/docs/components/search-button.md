---
title: Vue Search Button Component
name: Search Button
description: Vue search button component for keyboard-aware search entry points, command palettes, modals, and offcanvas panels.
other_frameworks: search-button
pre_release: true
---

## Overview

<AddedIn version="5.9.0" />

The CoreUI **Vue Search Button component** is a trigger element designed for search entry points and command-style actions. It behaves like a regular button on click, but it can also react to a configurable keyboard shortcut such as `meta+/` or `ctrl+/`.

- Use it as a standalone trigger for a custom search UI.
- Pair it with reactive state to open a modal, offcanvas, or command palette.
- Shortcut keys are rendered automatically.
- Displayed shortcut keys react to keyboard interaction and receive an `.active` state while pressed.

## Basic example

Use `<CSearchButton>` as the entry point for a search interface. Listen to `@trigger` as the main activation callback for both direct interaction and keyboard shortcuts.

:::demo
<SearchButtonExample />
:::
@[code vue](@example/search-button/SearchButtonExample.vue)

## Custom shortcut

Configure the shortcut with the `shortcut` prop. On macOS, the component prefers the `meta` variant for the visible label. On Windows and Linux, it prefers the `ctrl` variant.

<Callout color="warning">
Shortcuts such as `meta+f`, `ctrl+f`, `meta+s`, or `ctrl+s` can override native browser or system shortcuts. Prefer safer combinations such as `meta+/` and `ctrl+/` unless replacing the default behavior is intentional.
</Callout>

:::demo
<SearchButtonCustomShortcutExample />
:::
@[code vue](@example/search-button/SearchButtonCustomShortcutExample.vue)

## Launch an offcanvas

The component works naturally with reactive state and a dedicated `@trigger` event. This demo uses `meta+shift+o` / `ctrl+shift+o` to avoid colliding with other live examples on the page.

:::demo
<SearchButtonOffcanvasExample />
:::
@[code vue](@example/search-button/SearchButtonOffcanvasExample.vue)

## Keyboard behavior

### When the configured shortcut is pressed

| Key | Action |
| --- | --- |
| `Enter` / `Space` on a focused search button | Trigger the component activation callback |
| Configured shortcut, e.g. `⌘/` / `Ctrl+/` | Trigger the component activation callback |
| Modifier key inside the visible shortcut | Add `.active` to the corresponding `.search-button-key` while pressed |
| Final key inside the visible shortcut | Add `.active` to the corresponding `.search-button-key` while pressed |

### Keyboard state behavior

| Interaction | Effect |
| --- | --- |
| Matching shortcut on `keydown` | Optionally prevents the browser's default behavior and emits `trigger` |
| Plain typing inside `input`, `textarea`, `select`, or `contenteditable` | Does not trigger the component without `meta` or `ctrl` |
| `keyup` after a shortcut key press | Removes `.active` from the rendered shortcut keys |
| Browser window `blur` | Clears all active shortcut key states |
| Multiple configured shortcuts | The component listens to all configured shortcuts and renders the platform-preferred one in the UI |

## Accessibility

Accessibility is an important part of the Search Button design. The component includes built-in behaviors that help preserve expected keyboard interaction and reduce conflicts with assistive technologies, but accessible results still depend on choosing the right markup and shortcut combinations.

### Built-in accessibility behavior

- Native button semantics are preserved because `<CSearchButton>` renders a `<button type="button">` by default.
- Rendered `.search-button-keys` are treated as visual hints only and are hidden from assistive technologies.
- Plain typing inside editable fields does not trigger the component unless the shortcut also includes `meta` or `ctrl`.
- The component keeps standard button keyboard behavior such as `Enter` and `Space`.

### Author responsibilities

- Choose shortcuts carefully and avoid overriding common browser or system shortcuts unless that behavior is intentional and clearly communicated.
- Make sure the visible button label clearly describes the action, for example `Search`, `Open search`, or `Command palette`.
- Mark decorative icons as `aria-hidden="true"` when you provide a custom icon through the `icon` slot.

## Customizing

### CSS variables

Vue Search Button uses local CSS variables on `.search-button` for enhanced real-time customization. Values for the CSS variables are set via Sass, so Sass customization is still supported, too.

```sass
--cui-search-button-height: #{$search-button-height};
--cui-search-button-padding-x: #{$search-button-padding-x};
--cui-search-button-font-family: #{$search-button-font-family};
--cui-search-button-font-size: #{$search-button-font-size};
--cui-search-button-font-weight: #{$search-button-font-weight};
--cui-search-button-color: #{$search-button-color};
--cui-search-button-bg: #{$search-button-bg};
--cui-search-button-border-width: #{$search-button-border-width};
--cui-search-button-border-color: #{$search-button-border-color};
--cui-search-button-border-radius: #{$search-button-border-radius};
```

#### How to use CSS variables

```vue
<template>
  <CSearchButton placeholder="Search docs" :style="customVars" @trigger="() => {}" />
</template>

<script setup>
import { CSearchButton } from '@coreui/vue'

const customVars = {
  '--cui-search-button-bg': 'var(--cui-tertiary-bg)',
  '--cui-search-button-color': 'var(--cui-body-color)',
  '--cui-search-button-border-color': 'var(--cui-primary)',
}
</script>
```

## API

!!!include(./api/search-button/CSearchButton.api.md)!!!

<script setup>
  import SearchButtonExample from '@example/search-button/SearchButtonExample.vue'
  import SearchButtonCustomShortcutExample from '@example/search-button/SearchButtonCustomShortcutExample.vue'
  import SearchButtonOffcanvasExample from '@example/search-button/SearchButtonOffcanvasExample.vue'
</script>
