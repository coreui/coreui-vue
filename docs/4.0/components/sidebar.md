---
title: CSidebar
description:
---

## Examples

  <CSidebar class="sidebar-show sidebar-dark sidebar-fixed sidebar-self-hiding-xl">
    <CSidebarBrand>Sidebar Brand</CSidebarBrand>
    <CSidebarNav>
      <CNavLink href="#" active="true">aaa</CNavLink>
      <CNavGroup>
        <template #togglerContent>
          group
        </template>
        <CNavLink>
          <CIconTestIcon/>
          g1e1
        </CNavLink>
        <CNavLink active="true">
          <CIconTestIcon/>
          g1e2
        </CNavLink>
        <CNavLink>g1e3</CNavLink>
        <CNavGroup>
          <template #togglerContent>
            group
          </template>
          <CNavLink>g2e1</CNavLink>
          <CNavLink>g2e2</CNavLink>
          <CNavLink>g2e3</CNavLink>
          <CNavGroup toggler="group-3">
            <CNavLink>g3e1</CNavLink>
            <CNavLink>g3e2</CNavLink>
            <CNavLink>g3e3</CNavLink>
          </CNavGroup>
        </CNavGroup>
      </CNavGroup>
      <CNavGroup toggler="group B">
        <CNavLink>g-b1e1</CNavLink>
        <CNavLink>g-b1e2</CNavLink>
        <CNavLink>g-b1e3</CNavLink>
        <CNavGroup toggler="group-B-1">
          <CNavLink>g-b2e1</CNavLink>
          <CNavLink>g-b2e2</CNavLink>
          <CNavLink>g-b2e3</CNavLink>
        </CNavGroup>
        <CNavGroup toggler="group-B-2">
          <CNavLink>g-b3e1</CNavLink>
          <CNavLink>g-b3e2</CNavLink>
          <CNavLink>g-b3e3</CNavLink>
        </CNavGroup>
      </CNavGroup>
      <CNavLink>bbb</CNavLink>
      <CCreateNavItem/>
      <CNavLink href="#">Lorem ipsum</CNavLink>
      <CNavLink href="#">Lorem ipsum</CNavLink>
      <CNavLink href="#">Lorem ipsum</CNavLink>
      <CNavLink href="#">Lorem ipsum</CNavLink>
      <CNavLink href="#">Lorem ipsum</CNavLink>
      <CNavLink href="#">Lorem ipsum</CNavLink>
      <CNavLink href="#">Lorem ipsum</CNavLink>
      <CNavLink href="#">Lorem ipsum</CNavLink>
      <CNavLink href="#">Lorem ipsum</CNavLink>
      <CNavLink href="#">Lorem ipsum</CNavLink>
    </CSidebarNav>
    <CSidebarToggler/>
  </CSidebar>

```vue
<CSidebar class="sidebar-show">
    <CSidebarNav>
      <CNavLink>aaa</CNavLink>
      <CNavGroup toggler="group">
        <CNavLink>g1</CNavLink>
        <CNavLink>g2</CNavLink>
        <CNavLink>g3</CNavLink>
        <CNavGroup toggler="group-2">
          <CNavLink>g1</CNavLink>
          <CNavLink>g2</CNavLink>
          <CNavLink>g3</CNavLink>
        </CNavGroup>
      </CNavGroup>
      <CNavLink>bbb</CNavLink>
      <CCreateNavItem items={navigation}/>
      <CNavLink>ccc</CNavLink>
    </CSidebarNav>
  </CSidebar>
```

## Additional content
