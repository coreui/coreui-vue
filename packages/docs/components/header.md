---
title: Vue Header Component
name: Header
description: Documentation and examples for the Header powerful, responsive navigation header. Includes support for branding, links, dropdowns, and more.
other_frameworks: header
---

## Example

Here's what you need to know before getting started with the header:

- Headers require a wrapping `.header` with `.header-expand{-sm|-md|-lg|-xl|-xxl}` for responsive collapsing and [color scheme](#color-schemes) classes.
- Headers and their contents are fluid by default. Change the [container](#containers) to limit their horizontal width in different ways.
- Use our [spacing](https://coreui.io/docs/utilities/spacing") and [flex](https://coreui.io/docs/4.0/utilities/flex) utility classes for controlling spacing and alignment within headers.
- Headers are responsive by default, but you can easily modify them to change that. Responsive behavior depends on our Collapse JavaScript plugin.
- Ensure accessibility by using a `<nav>` element or, if using a more generic element such as a `<div>`, add a `role="navigation"` to every header to explicitly identify it as a landmark region for users of assistive technologies.
- Indicate the current item by using `aria-current="page"` for the current page or `aria-current="true"` for the current item in a set.

## Supported content

Headers come with built-in support for a handful of sub-components. Choose from the following as needed:

- `<CHeaderBrand>` for your company, product, or project name.
- `<CHeaderNav>` for a full-height and lightweight navigation (including support for dropdowns).
- `<CHeaderToggler>` for use with our collapse plugin and other [navigation toggling](#responsive-behaviors) behaviors.
- Flex and spacing utilities for any form controls and actions.
- `<CHeaderText>` for adding vertically centered strings of text.
- `<CCollapse class="header-collapse">` for grouping and hiding header contents by a parent breakpoint.

Here's an example of all the sub-components included in a responsive light-themed header that automatically collapses at the `lg` (large) breakpoint.

::: demo
<CHeader>
  <CContainer fluid>
    <CHeaderBrand href="#">Header</CHeaderBrand>
    <CHeaderToggler @click="visible = !visible" />
    <CCollapse class="header-collapse" :visible="visible">
      <CHeaderNav>
        <CNavItem>
          <CNavLink href="#" active>
            Home
          </CNavLink>
        </CNavItem>
        <CNavItem>
          <CNavLink href="#">Link</CNavLink>
        </CNavItem>
        <CDropdown variant="nav-item">
          <CDropdownToggle color="secondary">Dropdown button</CDropdownToggle>
          <CDropdownMenu>
            <CDropdownItem href="#">Action</CDropdownItem>
            <CDropdownItem href="#">Another action</CDropdownItem>
            <CDropdownDivider />
            <CDropdownItem href="#">Something else here</CDropdownItem>
          </CDropdownMenu>
        </CDropdown>
        <CNavItem>
          <CNavLink href="#" disabled>
            Disabled
          </CNavLink>
        </CNavItem>
      </CHeaderNav>
      <CForm class="d-flex">
        <CFormInput class="me-2" type="search" placeholder="Search"/>
        <CButton type="submit" color="success" variant="outline">Search</CButton>
      </CForm> 
    </CCollapse>
  </CContainer>
</CHeader>
:::
```vue
<CHeader>
  <CContainer fluid>
    <CHeaderBrand href="#">Header</CHeaderBrand>
    <CHeaderToggler @click="visible = !visible" />
    <CCollapse class="header-collapse" :visible="visible">
      <CHeaderNav>
        <CNavItem>
          <CNavLink href="#" active>
            Home
          </CNavLink>
        </CNavItem>
        <CNavItem>
          <CNavLink href="#">Link</CNavLink>
        </CNavItem>
        <CDropdown togglerText="Dropdown" variant="nav-item">
          <CDropdownItem href="#">Action</CDropdownItem>
          <CDropdownItem href="#">Another action</CDropdownItem>
          <CDropdownItem href="#">Something else here</CDropdownItem>
        </CDropdown>
        <CNavItem>
          <CNavLink href="#" disabled>
            Disabled
          </CNavLink>
        </CNavItem>
      </CHeaderNav>
      <!-- <form class="d-flex">
        <input class="form-control me-2" type="search" placeholder="Search">
        <button class="btn btn-outline-success" type="submit">Search</button>
      </form> -->
    </CCollapse>
  </CContainer>
</CHeader>
<script>
  export default {
    data() {
      return { 
        visible: false,
      }
    }
  }
</script>
```

<script>
  export default {
    data() {
      return { 
        visible: false,
      }
    }
  }
</script>


## Customizing

### CSS variables

Vue headers use local CSS variables on `.header` for enhanced real-time customization. Values for the CSS variables are set via Sass, so Sass customization is still supported, too.

<ScssDocs file="_header.scss" capture="header-css-vars"/>

#### How to use CSS variables

```js
const vars = { 
  '--my-css-var': 10,
  '--my-another-css-var': "red" 
}
return <CHeader :style="vars">...</CHeader>
```

### SASS variables

<ScssDocs file="_variables.scss" capture="header-variables"/>

## API

!!!include(./api/header/CHeader.api.md)!!!

!!!include(./api/header/CHeaderBrand.api.md)!!!

!!!include(./api/header/CHeaderNav.api.md)!!!