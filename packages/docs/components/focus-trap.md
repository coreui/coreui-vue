---
title: Vue Focus Trap Component
name: Vue Focus Trap
description: Vue Focus Trap component ensures keyboard navigation stays within a designated container element. Essential for creating accessible modal dialogs, dropdown menus, and overlay components that comply with WCAG 2.1 accessibility standards.
route: /components/focus-trap/
---

## Overview

The Vue Focus Trap component is an accessibility utility that constrains keyboard focus within a specific container element. When active, it prevents Tab and Shift+Tab navigation from leaving the trapped area, ensuring users stay within the intended interactive region. This is essential for modal dialogs, dropdown menus, and other overlay components that need to maintain focus for screen reader users and keyboard navigation compliance.

Focus traps are a critical accessibility pattern required by WCAG 2.1 guidelines for modal dialogs and temporary overlay content. By containing focus within the relevant UI section, focus traps help create predictable and accessible user experiences.

## Key Features

- **WCAG 2.1 Compliant**: Meets accessibility standards for focus management
- **Lightweight**: No extra DOM wrappers - uses direct slot content
- **Flexible**: Works with any slot content that can receive focus
- **Smart Focus**: Configurable first focus target and automatic focus restoration
- **Event Callbacks**: Activation and deactivation event handlers

## Basic Usage

The most basic implementation wraps slot content and activates the focus trap:

:::demo
<FocusTrapBasicExample />
:::
@[code vue](@example/focus-trap/FocusTrapBasicExample.vue)

## CoreUI Components with Built-in Focus Trapping

Most CoreUI overlay components already include Vue Focus Trap internally, so you don't need to add it manually:

- **CModal** - Includes built-in focus trapping for modal dialogs
- **COffcanvas** - Has focus trapping for slide-out panels  
- **CDropdown** - Can be enhanced with focus trapping for better accessibility

For these components, focus trapping is handled automatically with proper focus restoration, escape key support, and WCAG 2.1 compliance.

### Modal Dialog with CModal

CModal includes built-in focus trapping, so you don't need to add CFocusTrap manually:

:::demo
<FocusTrapModalExample />
:::
@[code vue](@example/focus-trap/FocusTrapModalExample.vue)

### Enhanced Dropdown Menu

You can enhance CDropdown with CFocusTrap for improved keyboard accessibility:

:::demo
<FocusTrapDropdownExample />
:::
@[code vue](@example/focus-trap/FocusTrapDropdownExample.vue)

### Sidebar Navigation with COffcanvas

COffcanvas includes built-in focus trapping for slide-out navigation panels:

:::demo
<FocusTrapSidebarExample />
:::
@[code vue](@example/focus-trap/FocusTrapSidebarExample.vue)

## Focus Control Options

### Focus First Element vs Container

The `focus-first-element` prop controls the initial focus behavior:

- `focus-first-element="true"`: Focuses the first tabbable element (good for menus, forms)
- `focus-first-element="false"`: Focuses the container element (good for panels, scrollable regions)

:::demo
<FocusTrapFocusControlExample />
:::
@[code vue](@example/focus-trap/FocusTrapFocusControlExample.vue)

### Focus Restoration

The `restore-focus` prop controls whether focus returns to the previously focused element when the trap deactivates. Focus on a button, then activate the trap. When you deactivate it, notice where focus returns based on the `restore-focus` setting:

:::demo
<FocusTrapRestoreFocusExample />
:::
@[code vue](@example/focus-trap/FocusTrapRestoreFocusExample.vue)

## Event Handling

Use the `@activate` and `@deactivate` events to trigger additional behavior such as screen reader announcements, analytics events, updating application state, or managing other UI components:

:::demo
<FocusTrapEventsExample />
:::
@[code vue](@example/focus-trap/FocusTrapEventsExample.vue)

## Conditional Focus Trapping

Focus traps can be conditionally activated based on application state:

:::demo
<FocusTrapConditionalExample />
:::
@[code vue](@example/focus-trap/FocusTrapConditionalExample.vue)

## Usage Guidelines

### When to Use Focus Traps

- **Modal Dialogs**: Always use focus traps for modal dialogs and overlays
- **Dropdown Menus**: Implement focus traps for keyboard-navigable dropdown menus
- **Slide-out Panels**: Use focus traps for temporary navigation panels or sidebars
- **Custom Overlays**: Any overlay content that should contain keyboard focus

### Accessibility Best Practices

1. **Always include focusable elements** within the trapped container
2. **Use `restore-focus`** for temporary overlays like modals and dropdowns
3. **Include proper ARIA attributes** on the container (`role="dialog"`, `aria-modal="true"`)
4. **Provide escape mechanisms** like Escape key handling or close buttons
5. **Test with keyboard navigation** to ensure proper focus flow

### Container Requirements

The slot content must meet these requirements:

- **Focusable content**: Should contain elements that can receive focus
- **Proper structure**: Should be a single container element or have clear focus boundaries

```vue
<!-- ✅ Good - Single container with focusable elements -->
<CFocusTrap :active="true">
  <div tabindex="-1">
    <input type="text" />
    <button>Submit</button>
  </div>
</CFocusTrap>

<!-- ✅ Good - Multiple focusable elements -->
<CFocusTrap :active="true">
  <div>
    <input type="text" />
    <textarea></textarea>
    <button>Save</button>
  </div>
</CFocusTrap>
```

## API

!!!include(./api/focus-trap/CFocusTrap.api.md)!!!

<script setup>
  import FocusTrapBasicExample from '@example/focus-trap/FocusTrapBasicExample.vue'
  import FocusTrapModalExample from '@example/focus-trap/FocusTrapModalExample.vue'
  import FocusTrapDropdownExample from '@example/focus-trap/FocusTrapDropdownExample.vue'
  import FocusTrapSidebarExample from '@example/focus-trap/FocusTrapSidebarExample.vue'
  import FocusTrapFocusControlExample from '@example/focus-trap/FocusTrapFocusControlExample.vue'
  import FocusTrapRestoreFocusExample from '@example/focus-trap/FocusTrapRestoreFocusExample.vue'
  import FocusTrapEventsExample from '@example/focus-trap/FocusTrapEventsExample.vue'
  import FocusTrapConditionalExample from '@example/focus-trap/FocusTrapConditionalExample.vue'
</script>