---
title: Vue Header Component
name: Header
description: Documentation and examples for the Header powerful, responsive navigation header. Includes support for branding, links, dropdowns, and more.
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
        visible: true,
      }
    }
  }
</script>
```

<script>
  export default {
    data() {
      return { 
        visible: true,
      }
    }
  }
</script>


## Customizing

### CSS variables

Vue headers use local CSS variables on `.header` for enhanced real-time customization. Values for the CSS variables are set via Sass, so Sass customization is still supported, too.

```sass
--cui-header-min-height: #{$header-min-height};
--cui-header-padding-x: #{$header-padding-x};
--cui-header-padding-y: #{$header-padding-y};
--cui-header-bg: #{$header-bg};
--cui-header-color: #{$header-color};
--cui-header-border-color: #{$header-border-color};
--cui-header-border: #{$header-border-width} solid var(--cui-header-border-color);
--cui-header-hover-color: #{$header-hover-color};
--cui-header-disabled-color: #{$header-disabled-color};
--cui-header-active-color: #{$header-active-color};
--cui-header-brand-padding-y: #{$header-brand-padding-y};
--cui-header-brand-color: #{$header-brand-color};
--cui-header-brand-hover-color: #{$header-brand-hover-color};
--cui-header-toggler-padding-x: #{$header-toggler-padding-x};
--cui-header-toggler-padding-y: #{$header-toggler-padding-y};
--cui-header-toggler-bg: #{$header-toggler-bg};
--cui-header-toggler-color: #{$header-toggler-color};
--cui-header-toggler-border-radius: #{$header-toggler-border-radius};
--cui-header-toggler-hover-color: #{$header-toggler-hover-color};
--cui-header-toggler-icon-bg: #{escape-svg($header-toggler-icon-bg)};
--cui-header-toggler-hover-icon-bg: #{escape-svg($header-toggler-hover-icon-bg)};
--cui-header-nav-link-padding-x: #{$header-nav-link-padding-x};
--cui-header-nav-link-padding-y: #{$header-nav-link-padding-y};
--cui-header-divider-border-color: #{$header-divider-border-color};
--cui-header-divider-border: #{$header-divider-border-width} solid var(--cui-header-divider-border-color);
--cui-subheader-min-height: #{$subheader-min-height};
```

#### How to use CSS variables

```js
const vars = { 
  '--my-css-var': 10,
  '--my-another-css-var': "red" 
}
return <CHeader :style="vars">...</CHeader>
```

### SASS variables

```sass
$header-min-height:             4rem;
$header-padding-y:              $spacer * .5;
$header-padding-x:              $spacer * .5;
$header-brand-font-size:        $font-size-lg;
$header-color:                  $medium-emphasis;
$header-bg:                     $white;
$header-border-color:           $border-color;
$header-border-width:           1px;
$header-hover-color:            $high-emphasis;
$header-active-color:           $high-emphasis;
$header-disabled-color:         $disabled;

// Compute the header-brand padding-y so the header-brand will have the same height as header-text and nav-link
$nav-link-height:               $font-size-base * $line-height-base + $nav-link-padding-y * 2;
$header-brand-height:           $header-brand-font-size * $line-height-base;
$header-brand-padding-y:        ($nav-link-height - $header-brand-height) * .5;
$header-brand-margin-end:       1rem;
$header-brand-font-size:        $font-size-lg;
$header-brand-color:            $gray-900;
$header-brand-hover-color:      shade-color($gray-900, 10%);

$header-toggler-padding-y:      .25rem;
$header-toggler-padding-x:      .75rem;
$header-toggler-font-size:      $font-size-lg;
$header-toggler-color:          $header-color;
$header-toggler-bg:             transparent;
$header-toggler-border-radius:  $btn-border-radius;
$header-toggler-hover-color:    $header-active-color;

$header-toggler-icon-bg:        url("data:image/svg+xml;charset=utf8,%3Csvg viewBox='0 0 30 30' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath stroke='#{$header-color}' stroke-width='2.25' stroke-linecap='round' stroke-miterlimit='10' d='M4 7h22M4 15h22M4 23h22'/%3E%3C/svg%3E");
$header-toggler-hover-icon-bg:  url("data:image/svg+xml;charset=utf8,%3Csvg viewBox='0 0 30 30' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath stroke='#{$header-hover-color}' stroke-width='2.25' stroke-linecap='round' stroke-miterlimit='10' d='M4 7h22M4 15h22M4 23h22'/%3E%3C/svg%3E");

$header-nav-link-padding-x:     .5rem;
$header-nav-link-padding-y:     .5rem;

$header-divider-border-width:   1px;
$header-divider-border-color:   $header-border-color;
```

## API

!!!include(./api/header/CHeader.api.md)!!!

!!!include(./api/header/CHeaderBrand.api.md)!!!

!!!include(./api/header/CHeaderNav.api.md)!!!