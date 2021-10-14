---
title: Vue Sidebar Component
description: Vue Sidebar is a powerful and customizable responsive navigation component for any type of vertical navigation. Bootstrap Sidebar come with built-in support for branding, navigation, and more.
---

## Supported content

Sidebar come with built-in support for a handful of sub-components. Choose from the following as needed:

- `<CSidebarHeader>` for optional header.
- `<CSidebarBrand>` for your company, product, or project name.
- `<CSidebarNav>` for a full-height and lightweight navigation (including support for dropdowns).
- `<CSidebarFooter>` for optional footer.
- `<CSidebarToggler>` for use with our minimizer plugin.

## Examples

::: demo
<CSidebar visible>
  <CSidebarBrand>Sidebar Brand</CSidebarBrand>
  <CSidebarNav>
    <li class="nav-title">Nav Title</li>
    <CNavItem href="#">
      <CIcon  customClassName="nav-icon" icon="cil-speedometer"/>
      Nav item
    </CNavItem>
    <CNavItem href="#">
      <CIcon  customClassName="nav-icon" icon="cil-speedometer"/>
      With badge
      <CBadge class="ms-auto" color="primary">NEW</CBadge>
    </CNavItem>
    <CNavGroup>
      <template #togglerContent>
        <CIcon  customClassName="nav-icon" icon="cil-puzzle"/> Nav dropdown
      </template>
      <CNavItem href="#">
        <CIcon  customClassName="nav-icon" icon="cil-puzzle"/> Nav dropdown item
      </CNavItem>
      <CNavItem href="#">
         <CIcon  customClassName="nav-icon" icon="cil-puzzle"/> Nav dropdown item
      </CNavItem>
    </CNavGroup>
    <CNavGroup>
      <template #togglerContent>
        <CIcon  customClassName="nav-icon" icon="cil-puzzle"/> Nav dropdown2
      </template>
      <CNavItem href="#">
        <CIcon  customClassName="nav-icon" icon="cil-puzzle"/> Nav dropdown item
      </CNavItem>
      <CNavItem href="#">
         <CIcon  customClassName="nav-icon" icon="cil-puzzle"/> Nav dropdown item
      </CNavItem>
    </CNavGroup>
  </CSidebarNav>
  <CSidebarToggler/>
</CSidebar>
:::
```vue
<CSidebar visible>
  <CSidebarBrand>Sidebar Brand</CSidebarBrand>
  <CSidebarNav>
    <li class="nav-title">Nav Title</li>
    <CNavItem href="#">
      <CIcon  customClassName="nav-icon" icon="cil-speedometer"/>
      Nav item
    </CNavItem>
    <CNavItem href="#">
        <CIcon  customClassName="nav-icon" icon="cil-speedometer"/>
        With badge
        <CBadge color="primary ms-auto">NEW</CBadge>
    </CNavItem>
    <CNavGroup>
      <template #togglerContent>
        <CIcon  customClassName="nav-icon" icon="cil-puzzle"/> Nav dropdown
      </template>
      <CNavItem href="#">
        <CIcon  customClassName="nav-icon" icon="cil-puzzle"/> Nav dropdown item
      </CNavItem>
      <CNavItem href="#">
         <CIcon  customClassName="nav-icon" icon="cil-puzzle"/> Nav dropdown item
      </CNavItem>
    </CNavGroup>
  </CSidebarNav>
  <CSidebarToggler/>
</CSidebar>
```

## API

!!!include(./api/sidebar/CSidebar.api.md)!!!
