---
title: Vue Chip Set Component
name: Chip Set
description: Vue Chip Set component groups chips into an accessible, keyboard-navigable container with single or multiple selection.
pre_release: true
---

## Overview

The CoreUI **Vue Chip Set component** groups multiple [chips](/components/chip.html) into a single container that manages roving focus, keyboard navigation, and selection. While an individual chip handles its own state (selection, removal), the chip set is responsible for everything that spans the whole group:

- Arrow-key navigation between chips, with <kbd>Home</kbd>/<kbd>End</kbd> jumping to the edges.
- Moving focus to a neighboring chip after one is removed.
- Single or multiple selection through the `selection-mode` prop.
- A flexible, wrapping layout with a configurable gap.

The chip set forwards `selectable`, `filter`, `removable`, `disabled`, `removeIcon`, `selectedIcon`, and `ariaRemoveLabel` to every chip it manages, so you set them once on the set. Each `CChip` is identified by its `value` prop.

## Basic chip set

Pass a `chips` array to render the chips from data. Each item is a string or an object with a `value`, an optional `label`, and any `CChip` props (so per-chip overrides work).

:::demo
<ChipSetBasicExample />
:::
@[code vue](@example/chip-set/ChipSetBasicExample.vue)

You can also place `CChip` in the default slot instead of passing `chips`:

```vue
<CChipSet>
  <CChip value="apple">Apple</CChip>
  <CChip value="banana">Banana</CChip>
  <CChip value="cherry">Cherry</CChip>
  <CChip value="date">Date</CChip>
</CChipSet>
```

## Selectable chips

Set `selectable` to make every chip in the set selectable. With the default `selection-mode` of `multiple`, any number of chips can be active at once — useful for filters. Bind the selection with `v-model:selected` (or listen to `@select`).

:::demo
<ChipSetSelectableExample />
:::
@[code vue](@example/chip-set/ChipSetSelectableExample.vue)

### Single selection

Use `selection-mode="single"` to allow only one selected chip at a time — selecting a chip deselects its siblings. This is useful for choice chips.

:::demo
<ChipSetSingleExample />
:::
@[code vue](@example/chip-set/ChipSetSingleExample.vue)

## Filter chips

Set `filter` to turn the chips into filter chips. A check icon is shown on each selected chip and removed when it is deselected. `filter` implies `selectable`, so you don't need to set both.

:::demo
<ChipSetFilterExample />
:::
@[code vue](@example/chip-set/ChipSetFilterExample.vue)

Customize the check with the `selected-icon` prop, the same way you customize the remove icon.

## Removable chips

Set `removable` to add a remove button to every chip. The chips are controlled by your data, so drop the chip in the `@remove` handler. When a chip is removed, focus moves to a neighboring chip.

:::demo
<ChipSetRemovableExample />
:::
@[code vue](@example/chip-set/ChipSetRemovableExample.vue)

## Keyboard behavior

When a chip inside a chip set is focused:

| Key | Action |
| --- | --- |
| `Enter` / `Space` | Toggle selection of the focused chip (when `selectable` is enabled) |
| `Backspace` / `Delete` | Remove the focused chip (when `removable` is enabled) |
| `←` | Move focus to the previous chip |
| `→` | Move focus to the next chip |
| `Home` | Move focus to the first chip |
| `End` | Move focus to the last chip |

Disabled chips are skipped while navigating.

## Accessibility

- The chip set manages roving focus, so the arrow keys move focus between chips rather than relying on the browser's default tab order.
- Add a descriptive `aria-label` to the chip set when the group has a meaningful role (e.g., "Applied filters").
- Selection state is reflected on each chip via `aria-selected`; see the [Chip](/components/chip.html) accessibility notes.

## Customizing

### CSS variables

```sass
--cui-chip-set-gap: #{$chip-set-gap};
```

### SASS variables

```sass
$chip-set-gap: .25rem !default;
```

## API

!!!include(./api/chip-set/CChipSet.api.md)!!!

<script setup>
  import ChipSetBasicExample from '@example/chip-set/ChipSetBasicExample.vue'
  import ChipSetSelectableExample from '@example/chip-set/ChipSetSelectableExample.vue'
  import ChipSetSingleExample from '@example/chip-set/ChipSetSingleExample.vue'
  import ChipSetFilterExample from '@example/chip-set/ChipSetFilterExample.vue'
  import ChipSetRemovableExample from '@example/chip-set/ChipSetRemovableExample.vue'
</script>
