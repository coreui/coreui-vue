---
title: Vue Sidebar Component
name: Sidebar
description: Vue Sidebar is a powerful and customizable responsive navigation component for any type of vertical navigation. Bootstrap Sidebar come with built-in support for branding, navigation, and more.
other_frameworks: sidebar
---

## Supported content

Sidebar come with built-in support for a handful of sub-components. Choose from the following as needed:

- `<CSidebarHeader>` for optional header.
- `<CSidebarBrand>` for your company, product, or project name.
- `<CSidebarNav>` for a full-height and lightweight navigation (including support for dropdowns).
- `<CSidebarFooter>` for optional footer.
- `<CSidebarToggler>` for use with our minimizer plugin.

## Examples

### Sidebar component

Below is an sidebar example that is shown by default on desktop devices.

::: demo-bg-secondary
<CSidebar>
  <CSidebarHeader class="border-bottom">
    <CSidebarBrand>CoreUI</CSidebarBrand>
  </CSidebarHeader>
  <CSidebarNav>
    <CNavTitle>Nav Title</CNavTitle>
    <CNavItem href="#">
      <CIcon  customClassName="nav-icon" icon="cil-speedometer"/> Nav item
    </CNavItem>
    <CNavItem href="#">
      <CIcon  customClassName="nav-icon" icon="cil-speedometer"/> With badge
      <CBadge class="ms-auto" color="primary">NEW</CBadge>
    </CNavItem>
    <CNavGroup>
      <template #togglerContent>
        <CIcon  customClassName="nav-icon" icon="cil-puzzle"/> Nav dropdown
      </template>
      <CNavItem href="#">
        <span class="nav-icon"><span class="nav-icon-bullet"></span></span> Nav dropdown item
      </CNavItem>
      <CNavItem href="#">
        <span class="nav-icon"><span class="nav-icon-bullet"></span></span> Nav dropdown item
      </CNavItem>
    </CNavGroup>
    <CNavGroup>
      <template #togglerContent>
        <CIcon  customClassName="nav-icon" icon="cil-puzzle"/> Nav dropdown2
      </template>
      <CNavItem href="#">
        <span class="nav-icon"><span class="nav-icon-bullet"></span></span> Nav dropdown item
      </CNavItem>
      <CNavItem href="#">
        <span class="nav-icon"><span class="nav-icon-bullet"></span></span> Nav dropdown item
      </CNavItem>
    </CNavGroup>
    <CNavItem href="https://coreui.io">
      <CIcon customClassName="nav-icon" icon="cil-cloud-download" /> Download CoreUI
    </CNavItem>
    <CNavItem href="https://coreui.io/pro/">
      <CIcon customClassName="nav-icon" icon="cil-layers" /> Try CoreUI PRO
    </CNavItem>
  </CSidebarNav>
  <CSidebarFooter class="border-top">
    <CSidebarToggler/>
  </CSidebarFooter>
</CSidebar>
:::
```vue
<CSidebar>
  <CSidebarHeader class="border-bottom">
    <CSidebarBrand>CoreUI</CSidebarBrand>
  </CSidebarHeader>
  <CSidebarNav>
    <CNavTitle>Nav Title</CNavTitle>
    <CNavItem href="#">
      <CIcon  customClassName="nav-icon" icon="cil-speedometer"/> Nav item
    </CNavItem>
    <CNavItem href="#">
      <CIcon  customClassName="nav-icon" icon="cil-speedometer"/> With badge
      <CBadge class="ms-auto" color="primary">NEW</CBadge>
    </CNavItem>
    <CNavGroup>
      <template #togglerContent>
        <CIcon  customClassName="nav-icon" icon="cil-puzzle"/> Nav dropdown
      </template>
      <CNavItem href="#">
        <span class="nav-icon"><span class="nav-icon-bullet"></span></span> Nav dropdown item
      </CNavItem>
      <CNavItem href="#">
        <span class="nav-icon"><span class="nav-icon-bullet"></span></span> Nav dropdown item
      </CNavItem>
    </CNavGroup>
    <CNavGroup>
      <template #togglerContent>
        <CIcon  customClassName="nav-icon" icon="cil-puzzle"/> Nav dropdown2
      </template>
      <CNavItem href="#">
        <span class="nav-icon"><span class="nav-icon-bullet"></span></span> Nav dropdown item
      </CNavItem>
      <CNavItem href="#">
        <span class="nav-icon"><span class="nav-icon-bullet"></span></span> Nav dropdown item
      </CNavItem>
    </CNavGroup>
    <CNavItem href="https://coreui.io">
      <CIcon customClassName="nav-icon" icon="cil-cloud-download" /> Download CoreUI
    </CNavItem>
    <CNavItem href="https://coreui.io/pro/">
      <CIcon customClassName="nav-icon" icon="cil-layers" /> Try CoreUI PRO
    </CNavItem>
  </CSidebarNav>
  <CSidebarFooter class="border-top">
    <CSidebarToggler/>
  </CSidebarFooter>
</CSidebar>
```

### Narrow sidebar

Add the `narrow` property to make the sidebar narrow.

::: demo-bg-secondary
<CSidebar narrow>
  <CSidebarHeader class="border-bottom">
    <CSidebarBrand>CUI</CSidebarBrand>
  </CSidebarHeader>
  <CSidebarNav>
    <CNavTitle>Nav Title</CNavTitle>
    <CNavItem href="#">
      <CIcon  customClassName="nav-icon" icon="cil-speedometer"/>
    </CNavItem>
    <CNavItem href="#">
      <CIcon  customClassName="nav-icon" icon="cil-speedometer"/>
    </CNavItem>
    <CNavItem href="https://coreui.io">
      <CIcon customClassName="nav-icon" icon="cil-cloud-download" />
    </CNavItem>
    <CNavItem href="https://coreui.io/pro/">
      <CIcon customClassName="nav-icon" icon="cil-layers" />
    </CNavItem>
  </CSidebarNav>
</CSidebar>
:::
```vue
<CSidebar narrow>
  <CSidebarHeader class="border-bottom">
    <CSidebarBrand>CUI</CSidebarBrand>
  </CSidebarHeader>
  <CSidebarNav>
    <CNavTitle>Nav Title</CNavTitle>
    <CNavItem href="#">
      <CIcon  customClassName="nav-icon" icon="cil-speedometer"/>
    </CNavItem>
    <CNavItem href="#">
      <CIcon  customClassName="nav-icon" icon="cil-speedometer"/>
    </CNavItem>
    <CNavItem href="https://coreui.io">
      <CIcon customClassName="nav-icon" icon="cil-cloud-download" />
    </CNavItem>
    <CNavItem href="https://coreui.io/pro/">
      <CIcon customClassName="nav-icon" icon="cil-layers" />
    </CNavItem>
  </CSidebarNav>
</CSidebar>
```

### Unfoldable sidebar

Add the `unfoldable` property to make the sidebar narrow with unfoldable on hover.

::: demo-bg-secondary
<CSidebar unfoldable>
  <CSidebarHeader class="border-bottom">
    <CSidebarBrand>CUI</CSidebarBrand>
  </CSidebarHeader>
  <CSidebarNav>
    <CNavTitle>Nav Title</CNavTitle>
    <CNavItem href="#">
      <CIcon  customClassName="nav-icon" icon="cil-speedometer"/> Nav item
    </CNavItem>
    <CNavItem href="#">
      <CIcon  customClassName="nav-icon" icon="cil-speedometer"/> With badge
      <CBadge class="ms-auto" color="primary">NEW</CBadge>
    </CNavItem>
    <CNavGroup>
      <template #togglerContent>
        <CIcon  customClassName="nav-icon" icon="cil-puzzle"/> Nav dropdown
      </template>
      <CNavItem href="#">
        <span class="nav-icon"><span class="nav-icon-bullet"></span></span> Nav dropdown item
      </CNavItem>
      <CNavItem href="#">
        <span class="nav-icon"><span class="nav-icon-bullet"></span></span> Nav dropdown item
      </CNavItem>
    </CNavGroup>
    <CNavGroup>
      <template #togglerContent>
        <CIcon  customClassName="nav-icon" icon="cil-puzzle"/> Nav dropdown2
      </template>
      <CNavItem href="#">
        <span class="nav-icon"><span class="nav-icon-bullet"></span></span> Nav dropdown item
      </CNavItem>
      <CNavItem href="#">
        <span class="nav-icon"><span class="nav-icon-bullet"></span></span> Nav dropdown item
      </CNavItem>
    </CNavGroup>
    <CNavItem href="https://coreui.io">
      <CIcon customClassName="nav-icon" icon="cil-cloud-download" /> Download CoreUI
    </CNavItem>
    <CNavItem href="https://coreui.io/pro/">
      <CIcon customClassName="nav-icon" icon="cil-layers" /> Try CoreUI PRO
    </CNavItem>
  </CSidebarNav>
</CSidebar>
:::
```vue
<CSidebar unfoldable>
  <CSidebarHeader class="border-bottom">
    <CSidebarBrand>CUI</CSidebarBrand>
  </CSidebarHeader>
  <CSidebarNav>
    <CNavTitle>Nav Title</CNavTitle>
    <CNavItem href="#">
      <CIcon  customClassName="nav-icon" icon="cil-speedometer"/> Nav item
    </CNavItem>
    <CNavItem href="#">
      <CIcon  customClassName="nav-icon" icon="cil-speedometer"/> With badge
      <CBadge class="ms-auto" color="primary">NEW</CBadge>
    </CNavItem>
    <CNavGroup>
      <template #togglerContent>
        <CIcon  customClassName="nav-icon" icon="cil-puzzle"/> Nav dropdown
      </template>
      <CNavItem href="#">
        <span class="nav-icon"><span class="nav-icon-bullet"></span></span> Nav dropdown item
      </CNavItem>
      <CNavItem href="#">
        <span class="nav-icon"><span class="nav-icon-bullet"></span></span> Nav dropdown item
      </CNavItem>
    </CNavGroup>
    <CNavGroup>
      <template #togglerContent>
        <CIcon  customClassName="nav-icon" icon="cil-puzzle"/> Nav dropdown2
      </template>
      <CNavItem href="#">
        <span class="nav-icon"><span class="nav-icon-bullet"></span></span> Nav dropdown item
      </CNavItem>
      <CNavItem href="#">
        <span class="nav-icon"><span class="nav-icon-bullet"></span></span> Nav dropdown item
      </CNavItem>
    </CNavGroup>
    <CNavItem href="https://coreui.io">
      <CIcon customClassName="nav-icon" icon="cil-cloud-download" /> Download CoreUI
    </CNavItem>
    <CNavItem href="https://coreui.io/pro/">
      <CIcon customClassName="nav-icon" icon="cil-layers" /> Try CoreUI PRO
    </CNavItem>
  </CSidebarNav>
</CSidebar>
```

## Dark sidebar

Change the appearance of sidebars with the `colorScheme="dark"`.

::: demo-bg-secondary
<CSidebar colorScheme="dark">
  <CSidebarHeader class="border-bottom">
    <CSidebarBrand>CoreUI</CSidebarBrand>
  </CSidebarHeader>
  <CSidebarNav>
    <CNavTitle>Nav Title</CNavTitle>
    <CNavItem href="#">
      <CIcon  customClassName="nav-icon" icon="cil-speedometer"/> Nav item
    </CNavItem>
    <CNavItem href="#">
      <CIcon  customClassName="nav-icon" icon="cil-speedometer"/> With badge
      <CBadge class="ms-auto" color="primary">NEW</CBadge>
    </CNavItem>
    <CNavGroup>
      <template #togglerContent>
        <CIcon  customClassName="nav-icon" icon="cil-puzzle"/> Nav dropdown
      </template>
      <CNavItem href="#">
        <span class="nav-icon"><span class="nav-icon-bullet"></span></span> Nav dropdown item
      </CNavItem>
      <CNavItem href="#">
        <span class="nav-icon"><span class="nav-icon-bullet"></span></span> Nav dropdown item
      </CNavItem>
    </CNavGroup>
    <CNavGroup>
      <template #togglerContent>
        <CIcon  customClassName="nav-icon" icon="cil-puzzle"/> Nav dropdown2
      </template>
      <CNavItem href="#">
        <span class="nav-icon"><span class="nav-icon-bullet"></span></span> Nav dropdown item
      </CNavItem>
      <CNavItem href="#">
        <span class="nav-icon"><span class="nav-icon-bullet"></span></span> Nav dropdown item
      </CNavItem>
    </CNavGroup>
    <CNavItem href="https://coreui.io">
      <CIcon customClassName="nav-icon" icon="cil-cloud-download" /> Download CoreUI
    </CNavItem>
    <CNavItem href="https://coreui.io/pro/">
      <CIcon customClassName="nav-icon" icon="cil-layers" /> Try CoreUI PRO
    </CNavItem>
  </CSidebarNav>
  <CSidebarFooter class="border-top">
    <CSidebarToggler/>
  </CSidebarFooter>
</CSidebar>
:::
```vue
<CSidebar colorScheme="dark">
  <CSidebarHeader class="border-bottom">
    <CSidebarBrand>CoreUI</CSidebarBrand>
  </CSidebarHeader>
  <CSidebarNav>
    <CNavTitle>Nav Title</CNavTitle>
    <CNavItem href="#">
      <CIcon  customClassName="nav-icon" icon="cil-speedometer"/> Nav item
    </CNavItem>
    <CNavItem href="#">
      <CIcon  customClassName="nav-icon" icon="cil-speedometer"/> With badge
      <CBadge class="ms-auto" color="primary">NEW</CBadge>
    </CNavItem>
    <CNavGroup>
      <template #togglerContent>
        <CIcon  customClassName="nav-icon" icon="cil-puzzle"/> Nav dropdown
      </template>
      <CNavItem href="#">
        <span class="nav-icon"><span class="nav-icon-bullet"></span></span> Nav dropdown item
      </CNavItem>
      <CNavItem href="#">
        <span class="nav-icon"><span class="nav-icon-bullet"></span></span> Nav dropdown item
      </CNavItem>
    </CNavGroup>
    <CNavGroup>
      <template #togglerContent>
        <CIcon  customClassName="nav-icon" icon="cil-puzzle"/> Nav dropdown2
      </template>
      <CNavItem href="#">
        <span class="nav-icon"><span class="nav-icon-bullet"></span></span> Nav dropdown item
      </CNavItem>
      <CNavItem href="#">
        <span class="nav-icon"><span class="nav-icon-bullet"></span></span> Nav dropdown item
      </CNavItem>
    </CNavGroup>
    <CNavItem href="https://coreui.io">
      <CIcon customClassName="nav-icon" icon="cil-cloud-download" /> Download CoreUI
    </CNavItem>
    <CNavItem href="https://coreui.io/pro/">
      <CIcon customClassName="nav-icon" icon="cil-layers" /> Try CoreUI PRO
    </CNavItem>
  </CSidebarNav>
  <CSidebarFooter class="border-top">
    <CSidebarToggler/>
  </CSidebarFooter>
</CSidebar>
```

## Placement

By default placement for sidebar components is on the left of the viewport, but you can add one of the modifier classes below.

- `placement="start"` places sidebar on the left of the viewport (shown above)
- `placement="end"` places sidebar on the right of the viewport

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
