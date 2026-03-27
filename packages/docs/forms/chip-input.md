---
title: Vue Chip Input Component
name: Chip Input
description: Vue Chip Input component for CoreUI helps you create tag-like multi-value inputs for skills, categories, or recipients with keyboard support, selection, and form integration.
other_frameworks: chip-input
pre_release: true
---

## Overview

The CoreUI **Vue Chip Input component** lets users enter multiple values as chips inside a single field. Use it as a tag input, multi-value selector, or token field for skills, categories, email recipients, and more. The chip input component supports keyboard-friendly entry, chip removal, and optional selection for bulk actions.

- Type values and press **Enter** or a separator to create chips
- Chips can be removable and selectable
- The input stays inline and grows as you type
- Form integration is supported with a hidden input when `name` is provided
- Full v-model support for reactive data binding

## When to use Chip Input

Use the Vue Chip Input component when you need:

- A **tag input** or **token field** for free-form multi-value entry
- An **email or recipient input** where users add multiple addresses
- A **skills or category selector** in forms
- A **filterable multi-select** that integrates with standard HTML forms

## Basic example

Use `CChipInput` to render a multi-value field with predefined chips and inline input.

:::demo
<ChipInputBasicExample />
:::
@[code vue](@example/chip-input/ChipInputBasicExample.vue)

## With label

Use the `label` prop for accessibility and better UX.

:::demo
<ChipInputLabelExample />
:::
@[code vue](@example/chip-input/ChipInputLabelExample.vue)

## Sizes

Use `size="sm"` and `size="lg"` to match surrounding form controls.

:::demo
<ChipInputSizesExample />
:::
@[code vue](@example/chip-input/ChipInputSizesExample.vue)

## Color variants

Use `chipClassName` to apply contextual chip colors based on chip text.

:::demo
<ChipInputColorVariantsExample />
:::
@[code vue](@example/chip-input/ChipInputColorVariantsExample.vue)

### Static chip class

Apply a single class to all chips.

:::demo
<ChipInputStaticClassExample />
:::
@[code vue](@example/chip-input/ChipInputStaticClassExample.vue)

## Separator

By default, chips are created when the user types a comma `,`. Change the separator using the `separator` prop.

:::demo
<ChipInputSeparatorExample />
:::
@[code vue](@example/chip-input/ChipInputSeparatorExample.vue)

### No separator

Set `separator` to empty string or `null` to disable automatic chip creation on typing. Users must press **Enter**.

:::demo
<ChipInputNoSeparatorExample />
:::
@[code vue](@example/chip-input/ChipInputNoSeparatorExample.vue)

## Maximum chips

Limit the number of chips with `maxChips`.

:::demo
<ChipInputMaxChipsExample />
:::
@[code vue](@example/chip-input/ChipInputMaxChipsExample.vue)

## Create on blur

By default, typing a value and blurring the input creates a chip. Disable this with `createOnBlur`.

:::demo
<ChipInputCreateOnBlurExample />
:::
@[code vue](@example/chip-input/ChipInputCreateOnBlurExample.vue)

## Disabled

Disable the component to prevent interaction.

:::demo
<ChipInputDisabledExample />
:::
@[code vue](@example/chip-input/ChipInputDisabledExample.vue)

## Readonly

Use `readOnly` to display chips without allowing changes.

:::demo
<ChipInputReadonlyExample />
:::
@[code vue](@example/chip-input/ChipInputReadonlyExample.vue)

## Selectable chips

Enable chip selection with the `selectable` prop. Use the `@select` event to track selected chips.

:::demo
<ChipInputSelectableExample />
:::
@[code vue](@example/chip-input/ChipInputSelectableExample.vue)

## Form integration

When `name` is provided, a hidden input is rendered for standard form submission.

:::demo
<ChipInputFormExample />
:::
@[code vue](@example/chip-input/ChipInputFormExample.vue)

## Events

The component emits several events for tracking changes:

- `@update:modelValue` - Main v-model event with updated values array
- `@change` - Fires when values change
- `@add` - Fires when a chip is added (receives the new value)
- `@remove` - Fires when a chip is removed (receives the removed value)
- `@input` - Fires when the text input value changes
- `@select` - Fires when selected chips change (when `selectable` is true)

:::demo
<ChipInputEventsExample />
:::
@[code vue](@example/chip-input/ChipInputEventsExample.vue)

## Keyboard behavior

The Chip Input component supports comprehensive keyboard interaction:

### In the text input

- **Enter**: Create a chip from the current input value
- **Backspace** (when input is empty): Focus the last chip
- **Delete** (when input is empty): Focus the last chip
- **ArrowLeft** (at start of input): Focus the last chip
- **Escape**: Clear the input and blur

### On a focused chip

- **Backspace** / **Delete**: Remove the chip
- **ArrowLeft** / **ArrowRight**: Navigate between chips
- **Home** / **End**: Jump to first/last chip
- **Enter** / **Space** (if selectable): Toggle chip selection

## Accessibility

The Vue Chip Input component follows WAI-ARIA authoring practices:

- `aria-disabled` and `aria-readonly` attributes for state indication
- Label association via `for` and `id` attributes
- Proper keyboard focus management
- Screen reader friendly chip removal announcements
- Focusable chips with `tabindex` management

## Usage with v-model

For reactive data binding, use `v-model`:

:::demo
<ChipInputVModelExample />
:::
@[code vue](@example/chip-input/ChipInputVModelExample.vue)

### Default values

For initial values without reactive binding, use `defaultValue`:

:::demo
<ChipInputDefaultValueExample />
:::
@[code vue](@example/chip-input/ChipInputDefaultValueExample.vue)

## Paste support

Users can paste multiple values at once. If the pasted text contains the separator character, it's automatically split into multiple chips.

:::demo
<ChipInputPasteExample />
:::
@[code vue](@example/chip-input/ChipInputPasteExample.vue)

## Examples with real-world scenarios

### Email recipients

:::demo
<ChipInputEmailExample />
:::
@[code vue](@example/chip-input/ChipInputEmailExample.vue)

### Skills selector

:::demo
<ChipInputSkillsExample />
:::
@[code vue](@example/chip-input/ChipInputSkillsExample.vue)

### Product tags

:::demo
<ChipInputProductTagsExample />
:::
@[code vue](@example/chip-input/ChipInputProductTagsExample.vue)

## Customizing

### CSS variables

Vue Chips inputs use local CSS variables on `.chip-input` for enhanced real-time customization. Values for the CSS variables are set via Sass, so Sass customization is still supported, too.

<ScssDocs file="forms/_chip-input.scss" capture="chip-input-css-vars"/>

#### How to use CSS variables

```js
const vars = { 
  '--my-css-var': 10,
  '--my-another-css-var': "red" 
}
return <CChip :style="vars">...</CChip>
```

### SASS variables

<ScssDocs file="forms/_chip-input.scss" capture="chip-input-variables"/>

## API

!!!include(./api/chip-input/CChipInput.api.md)!!!

<script setup>
  import ChipInputBasicExample from '@example/chip-input/ChipInputBasicExample.vue'
  import ChipInputLabelExample from '@example/chip-input/ChipInputLabelExample.vue'
  import ChipInputSelectableExample from '@example/chip-input/ChipInputSelectableExample.vue'
  import ChipInputSizesExample from '@example/chip-input/ChipInputSizesExample.vue'
  import ChipInputEventsExample from '@example/chip-input/ChipInputEventsExample.vue'
  import ChipInputNoSeparatorExample from '@example/chip-input/ChipInputNoSeparatorExample.vue'
  import ChipInputMaxChipsExample from '@example/chip-input/ChipInputMaxChipsExample.vue'
  import ChipInputColorVariantsExample from '@example/chip-input/ChipInputColorVariantsExample.vue'
  import ChipInputStaticClassExample from '@example/chip-input/ChipInputStaticClassExample.vue'
  import ChipInputSeparatorExample from '@example/chip-input/ChipInputSeparatorExample.vue'
  import ChipInputCreateOnBlurExample from '@example/chip-input/ChipInputCreateOnBlurExample.vue'
  import ChipInputPasteExample from '@example/chip-input/ChipInputPasteExample.vue'
  import ChipInputDisabledExample from '@example/chip-input/ChipInputDisabledExample.vue'
  import ChipInputReadonlyExample from '@example/chip-input/ChipInputReadonlyExample.vue'
  import ChipInputFormExample from '@example/chip-input/ChipInputFormExample.vue'
  import ChipInputEmailExample from '@example/chip-input/ChipInputEmailExample.vue'
  import ChipInputSkillsExample from '@example/chip-input/ChipInputSkillsExample.vue'
  import ChipInputProductTagsExample from '@example/chip-input/ChipInputProductTagsExample.vue'
  import ChipInputVModelExample from '@example/chip-input/ChipInputVModelExample.vue'
  import ChipInputDefaultValueExample from '@example/chip-input/ChipInputDefaultValueExample.vue'
</script>
