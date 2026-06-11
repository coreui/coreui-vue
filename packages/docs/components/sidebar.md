---
title: Vue Sidebar Component
name: Sidebar
description: Vue Sidebar is a powerful and customizable responsive navigation component for any type of vertical navigation. Bootstrap Sidebar come with built-in support for branding, navigation, and more.
other_frameworks: sidebar
---

## How it works

Here's what you need to know before getting started with the Vue Sidebar component:

- `CSidebar` renders the `.sidebar` container.
- On mobile devices, the sidebar is hidden by default. Control it with the `visible` prop.
- On desktop devices, the sidebar is shown by default. Hide it with `:visible="false"`.
- Use `narrow` to switch the sidebar to the narrow variant.
- Use `unfoldable` to switch the sidebar to the narrow-unfoldable variant.
- `CSidebarNav` renders `.sidebar-nav` and supports nested groups through `CNavGroup`.
- For accessibility, prefer semantic elements such as `nav`, or add `role="navigation"` when using `as="div"` on `CSidebarNav`.

## Supported content

Sidebar comes with built-in support for a handful of sub-components. Choose from the following as needed:

- `<CSidebarHeader>` for an optional header.
- `<CSidebarBrand>` for your company, product, or project name.
- `<CSidebarNav>` for a full-height and lightweight navigation, including nested groups.
- `<CSidebarFooter>` for an optional footer.
- `<CSidebarToggler>` for toggling the sidebar state.

## Examples

Below is a more complete sidebar example shown by default on desktop devices. It combines several optional features in a single demo, including narrow visibility helpers, tree navigation, nested groups, a custom group indicator, badges, and a footer dropdown.

::: demo-bg-secondary
<SidebarExample />
:::
@[code vue](@example/sidebar/SidebarExample.vue)

### Narrow sidebar

Add the `narrow` prop to make the sidebar narrow.

Use `.d-sidebar-narrow` to show content only in the narrow state and `.d-sidebar-narrow-none` to hide content in the narrow state. These utility classes replace older brand-specific visibility helpers.

::: demo-bg-secondary
<SidebarNarrowExample />
:::
@[code vue](@example/sidebar/SidebarNarrowExample.vue)

### Unfoldable sidebar

Add the `unfoldable` prop to make the sidebar narrow and expand it on hover.

Use `.d-sidebar-narrow-unfoldable` and `.d-sidebar-narrow-unfoldable-none` to control content visibility for unfoldable sidebars.

::: demo-bg-secondary
<SidebarUnfoldableExample />
:::
@[code vue](@example/sidebar/SidebarUnfoldableExample.vue)

### Narrow visibility helpers

Use the sidebar visibility helpers to swap content between regular, narrow, and narrow-unfoldable variants:

- `.d-sidebar-narrow` shows content only in the narrow state.
- `.d-sidebar-narrow-none` hides content in the narrow state.
- `.d-sidebar-narrow-unfoldable` shows content only when the sidebar uses the unfoldable variant.
- `.d-sidebar-narrow-unfoldable-none` hides content when the sidebar uses the unfoldable variant.

## Navigation

Use `CSidebarNav` as the main navigation container inside a sidebar. It supports plain links, section titles, nested groups, tree navigation, compact navigation, and custom group indicators.

### Basic navigation

Use the following building blocks inside `CSidebarNav`:

- `<CNavTitle>` for section headings.
- `<CNavItem>` for each navigation entry.
- `<CNavLink>` for standalone navigation links.
- `CIcon` with `customClassName="nav-icon"` for optional leading icons.
- `<CBadge>` or utility classes such as `ms-auto` for trailing metadata.

### Navigation groups

Use `<CNavGroup>` for expandable navigation sections. The `togglerContent` slot defines the clickable label, and nested `CNavItem` or `CNavGroup` components become the group content.

Set `visible` on `CNavGroup` when the group should be expanded by default.

Use the `compact` prop on `CNavGroup` to reduce spacing only for that nested group.

### Compact navigation

<AddedIn version="5.9.0" />

Add the `compact` prop to `CSidebarNav` to reduce the vertical padding across the entire navigation.

Use the `compact` prop on `CNavGroup` to compact only a nested section.

::: demo-bg-secondary
<SidebarCompactExample />
:::
@[code vue](@example/sidebar/SidebarCompactExample.vue)

### Tree navigation

<AddedIn version="5.9.0" />

Add `variant="tree"` to `CSidebarNav` to render nested groups as a tree. Nested groups automatically keep their hierarchy, making deeper navigation levels easier to scan.

::: demo-bg-secondary
<SidebarTreeExample />
:::
@[code vue](@example/sidebar/SidebarTreeExample.vue)

### Group indicator

By default, `CNavGroup` renders the standard group indicator through the `.nav-group-toggle` styles, so no additional markup is required.

::: demo-bg-secondary
<SidebarGroupIndicatorExample />
:::
@[code vue](@example/sidebar/SidebarGroupIndicatorExample.vue)

### Custom group indicator

To replace the default indicator, pass custom indicator markup inside the `togglerContent` slot using a `.nav-group-toggle-indicator` element. The `togglerContent` slot is a scoped slot that receives `{ visible }`, so you can swap icons yourself based on the group state.

::: demo-bg-secondary
<SidebarCustomIndicatorExample />
:::
@[code vue](@example/sidebar/SidebarCustomIndicatorExample.vue)

### Controlled navigation group

<AddedIn version="5.9.0" />

`CNavGroup` works uncontrolled by default—clicking the toggler expands and collapses it. To control it from the parent, bind `visible` and listen to `update:visible` (or use `v-model:visible`). In controlled mode the toggler only requests a change through `update:visible`; the group follows the `visible` prop, so the parent has the final say.

This makes it possible to keep a section open even when the user clicks to collapse it—useful for a route-aware sidebar that must keep the active section expanded. Toggle the lock and try to collapse the group: while locked, the parent rejects the change and the group stays open.

::: demo-bg-secondary
<SidebarControlledGroupExample />
:::
@[code vue](@example/sidebar/SidebarControlledGroupExample.vue)

## Dark sidebar

Change the appearance of sidebars with `colorScheme="dark"`.

::: demo-bg-secondary
<SidebarDarkExample />
:::
@[code vue](@example/sidebar/SidebarDarkExample.vue)

## Placement

By default, placement for sidebar components is on the left side of the viewport, but you can change it with the `placement` prop:

- `placement="start"` places the sidebar on the left side of the viewport.
- `placement="end"` places the sidebar on the right side of the viewport.

## Customizing

### CSS variables

Vue sidebars use local CSS variables on `.sidebar` and `.sidebar-backdrop` for enhanced real-time customization. Values for the CSS variables are set via Sass, so Sass customization is still supported, too.

<ScssDocs file="sidebar/_sidebar.scss" capture="sidebar-css-vars" />

<ScssDocs file="sidebar/_sidebar.scss" capture="sidebar-overlaid-css-vars" />

<ScssDocs file="sidebar/_sidebar-narrow.scss" capture="sidebar-narrow-css-vars" />

<ScssDocs file="sidebar/_sidebar-nav.scss" capture="sidebar-nav-css-vars" />

<ScssDocs file="sidebar/_sidebar.scss" capture="sidebar-toggler-css-vars" />

<ScssDocs file="sidebar/_sidebar.scss" capture="sidebar-backdrop-css-vars" />

#### How to use CSS variables

```js
const vars = { 
  '--my-css-var': 10,
  '--my-another-css-var': "red" 
}
return <CSidebar :style="vars">...</CSidebar>
```

### SASS variables

<ScssDocs file="_variables.scss" capture="sidebar-variables" />

<ScssDocs file="_variables.scss" capture="sidebar-toggler" />

## API

!!!include(./api/sidebar/CSidebar.api.md)!!!

!!!include(./api/sidebar/CSidebarNav.api.md)!!!

<script setup>
  import SidebarExample from '@example/sidebar/SidebarExample.vue'
  import SidebarNarrowExample from '@example/sidebar/SidebarNarrowExample.vue'
  import SidebarUnfoldableExample from '@example/sidebar/SidebarUnfoldableExample.vue'
  import SidebarCompactExample from '@example/sidebar/SidebarCompactExample.vue'
  import SidebarTreeExample from '@example/sidebar/SidebarTreeExample.vue'
  import SidebarGroupIndicatorExample from '@example/sidebar/SidebarGroupIndicatorExample.vue'
  import SidebarCustomIndicatorExample from '@example/sidebar/SidebarCustomIndicatorExample.vue'
  import SidebarControlledGroupExample from '@example/sidebar/SidebarControlledGroupExample.vue'
  import SidebarDarkExample from '@example/sidebar/SidebarDarkExample.vue'
</script>
