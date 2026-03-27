---
title: Vue Chip Component
name: Chip
description: Vue chip component for CoreUI lets you build compact, interactive labels, tags, filters, and selections with icons, avatars, remove buttons, and keyboard support.
other_frameworks: chip
pre_release: true
---

## Overview

The CoreUI **Vue Chip component** lets you build compact, interactive UI elements for labels, tags, filters, and selections. Chips support icons, avatars, removal, keyboard navigation, and theme-aware styling.

Chips are similar to badges, but they have a single size and more defined visual styles useful for indicating state and selection.

- Chips are statically sized and do not scale with the parent element by default.
- Chips can have icons, avatars, and remove buttons.
- Chips can be active or disabled.
- Chips automatically gain focus when they are `selectable` or `removable`.
- Chips support keyboard navigation and selection in their container.

See examples of all of this in action below.

## When to use chips

Use the Vue Chip component when you need:

- Multi-select filters in search or form interfaces
- Removable tags for selected items or applied filters
- Keyboard-navigable selection groups
- Compact status indicators with icon or avatar support

## Basic chips

Use `CChip` for standalone chips.

:::demo
<ChipBasicExample />
:::
@[code vue](@example/chip/ChipBasicExample.vue)

## Outline chips

Use `variant="outline"` to remove all background images and colors on any chip.

:::demo
<ChipOutlineExample />
:::
@[code vue](@example/chip/ChipOutlineExample.vue)

## Chips with icons

Wrap `CIcon` from `@coreui/icons-vue` in a `<span class="chip-icon">` to render a leading icon.

:::demo
<ChipIconsExample />
:::
@[code vue](@example/chip/ChipIconsExample.vue)

## Chips with avatars

Use `.chip-img` for an image-like avatar or combine `CChip` with `CAvatar`.

:::demo
<ChipAvatarsExample />
:::
@[code vue](@example/chip/ChipAvatarsExample.vue)

## Sizes

Use `size="sm"` or `size="lg"` for different sizes.

:::demo
<ChipSizesExample />
:::
@[code vue](@example/chip/ChipSizesExample.vue)

## Active state

Add `active` to make chips use the solid appearance. This is useful for toggle-style chip selections.

:::demo
<ChipActiveExample />
:::
@[code vue](@example/chip/ChipActiveExample.vue)

## Interactive chips

### Clickable

Enable interactive hover styling and pointer cursor with the `clickable` prop.

:::demo
<ChipClickableExample />
:::
@[code vue](@example/chip/ChipClickableExample.vue)

### Selectable

Use `selectable` to enable selection behavior. Chips become keyboard-navigable and toggle on click or Enter/Space.

:::demo
<ChipSelectableExample />
:::
@[code vue](@example/chip/ChipSelectableExample.vue)

## Remove button

If `removable` is enabled, the remove button is rendered automatically.

:::demo
<ChipRemovableExample />
:::
@[code vue](@example/chip/ChipRemovableExample.vue)

### Custom remove icon

Replace the default remove icon with a custom icon.

:::demo
<ChipCustomRemoveIconExample />
:::
@[code vue](@example/chip/ChipCustomRemoveIconExample.vue)

## Disabled state

Disable chips to prevent interaction.

:::demo
<ChipDisabledExample />
:::
@[code vue](@example/chip/ChipDisabledExample.vue)

## Keyboard behavior

Chips support keyboard navigation when they are `selectable` and/or `removable`.

### When a chip is focused

- **Enter** / **Space**: toggle selection when `selectable` is enabled
- **Backspace** / **Delete**: close chip when `removable` is enabled
- **ArrowLeft**: move focus to previous chip
- **ArrowRight**: move focus to next chip
- **Home**: move focus to the first chip in the container
- **End**: move focus to the last chip in the container

### Mouse interaction

- **Click chip**: toggle selection when `selectable` is enabled
- **Click remove button**: close chip when `removable` is enabled

## Accessibility

The Vue Chip component follows WAI-ARIA authoring practices and includes:

- `aria-selected` attribute for selectable chips indicating selection state
- `aria-disabled` attribute for disabled chips
- `aria-label` on remove button for screen reader support
- `tabindex="0"` for keyboard-focusable chips
- Proper keyboard event handling for navigation and interaction

## Customizing

### CSS variables

Vue chips use local CSS variables on `.chip` for enhanced real-time customization. Values for the CSS variables are set via Sass, so Sass customization is still supported, too.

<ScssDocs file="_chip.scss" capture="chip-css-vars"/>

#### How to use CSS variables

```js
const vars = { 
  '--my-css-var': 10,
  '--my-another-css-var': "red" 
}
return <CChip :style="vars">...</CChip>
```

### SASS variables

<ScssDocs file="_chip.scss" capture="chip-variables"/>

## API

!!!include(./api/chip/CChip.api.md)!!!

<script setup>
  import ChipBasicExample from '@example/chip/ChipBasicExample.vue'
  import ChipOutlineExample from '@example/chip/ChipOutlineExample.vue'
  import ChipIconsExample from '@example/chip/ChipIconsExample.vue'
  import ChipAvatarsExample from '@example/chip/ChipAvatarsExample.vue'
  import ChipSizesExample from '@example/chip/ChipSizesExample.vue'
  import ChipActiveExample from '@example/chip/ChipActiveExample.vue'
  import ChipClickableExample from '@example/chip/ChipClickableExample.vue'
  import ChipSelectableExample from '@example/chip/ChipSelectableExample.vue'
  import ChipRemovableExample from '@example/chip/ChipRemovableExample.vue'
  import ChipCustomRemoveIconExample from '@example/chip/ChipCustomRemoveIconExample.vue'
  import ChipDisabledExample from '@example/chip/ChipDisabledExample.vue'
</script>
