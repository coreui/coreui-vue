---
title: Vue Navbar Component
name: Navbar
description: Documentation and examples for the Vue navbar powerful, responsive navigation header component. Includes support for branding, links, dropdowns, and more.
other_frameworks: navbar
---

## Supported content

`<CNavbar>` come with built-in support for a handful of sub-components. Choose from the following as needed:

- `<CNavbarBrand>` for your company, product, or project name.
- `<CNavbarNav>` for a full-height and lightweight navigation (including support for dropdowns).
- `<CNavbarToggler>` for use with our collapse plugin and other [navigation toggling](#responsive-behaviors) behaviors.
- Flex and spacing utilities for any form controls and actions.
- `<CNavbarText>` for adding vertically centered strings of text.
- `<CCollapse>` for grouping and hiding navbar contents by a parent breakpoint.

Here's an example of all the sub-components included in a responsive light-themed navbar that automatically collapses at the `lg` (large) breakpoint.

## Basic usage

::: demo
<CNavbar expand="lg" color-scheme="light" class="bg-light">
  <CContainer fluid>
    <CNavbarBrand href="#">Navbar</CNavbarBrand>
    <CNavbarToggler @click="visible = !visible"/>
    <CCollapse class="navbar-collapse" :visible="visible">
      <CNavbarNav>
        <CNavItem>
          <CNavLink href="#" active>
            Home
          </CNavLink>
        </CNavItem>
        <CNavItem>
          <CNavLink href="#">Link</CNavLink>
        </CNavItem>
        <CDropdown variant="nav-item" :popper="false">
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
      </CNavbarNav>
      <CForm class="d-flex">
        <CFormInput type="search" class="me-2" placeholder="Search"/>
        <CButton type="submit" color="success" variant="outline">Search</CButton>
      </CForm>
    </CCollapse>
  </CContainer>
</CNavbar>
:::
```vue
<CNavbar expand="lg" color-scheme="light" class="bg-light">
  <CContainer fluid>
    <CNavbarBrand href="#">Navbar</CNavbarBrand>
    <CNavbarToggler @click="visible = !visible"/>
    <CCollapse class="navbar-collapse" :visible="visible">
      <CNavbarNav>
        <CNavItem>
          <CNavLink href="#" active>
            Home
          </CNavLink>
        </CNavItem>
        <CNavItem>
          <CNavLink href="#">Link</CNavLink>
        </CNavItem>
        <CDropdown variant="nav-item" :popper="false">
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
      </CNavbarNav>
      <CForm class="d-flex">
        <CFormInput type="search" class="me-2" placeholder="Search"/>
        <CButton type="submit" color="success" variant="outline">Search</CButton>
      </CForm>
    </CCollapse>
  </CContainer>
</CNavbar>
```

### Brand

The `<CNavbarBrand>` can be applied to most elements, but an anchor works best, as some elements might require utility classes or custom styles.

::: demo
<CNavbar color-scheme="light" class="bg-light">
  <CContainer fluid>
    <CNavbarBrand href="#">Navbar</CNavbarBrand>
  </CContainer>
</CNavbar>
<br/>
<CNavbar color-scheme="light" class="bg-light">
  <CContainer fluid>
    <CNavbarBrand class="mb-0 h1">Navbar</CNavbarBrand>
  </CContainer>
</CNavbar>
:::
```vue
// As a link
<CNavbar color-scheme="light" class="bg-light">
  <CContainer fluid>
    <CNavbarBrand href="#">Navbar</CNavbarBrand>
  </CContainer>
</CNavbar>
<br/>
// As a heading
<CNavbar color-scheme="light" class="bg-light">
  <CContainer fluid>
    <CNavbarBrand class="mb-0 h1">Navbar</CNavbarBrand>
  </CContainer>
</CNavbar>
```

Adding images to the `<CNavbarBrand>` will likely always require custom styles or utilities to properly size. Here are some examples to demonstrate.

::: demo
<CNavbar color-scheme="light" class="bg-light">
  <CContainer fluid>
    <CNavbarBrand href="#">
      <img :src="$withBase('/images/brand/coreui-signet.svg')" alt="" width="22" height="24"/>
    </CNavbarBrand>
  </CContainer>
</CNavbar>
:::
```vue
// Just an image
<CNavbar color-scheme="light" class="bg-light">
  <CContainer fluid>
    <CNavbarBrand href="#">
      <img src="/images/brand/coreui-signet.svg" alt="" width="22" height="24"/>
    </CNavbarBrand>
  </CContainer>
</CNavbar>
```

::: demo
<CNavbar color-scheme="light" class="bg-light">
  <CContainer fluid>
    <CNavbarBrand href="#">
      <img :src="$withBase('/images/brand/coreui-signet.svg')" alt="" width="22" height="24" class="d-inline-block align-top"/> CoreUI
    </CNavbarBrand>
  </CContainer>
</CNavbar>
:::
```vue
// Image and text
<CNavbar color-scheme="light" class="bg-light">
  <CContainer fluid>
    <CNavbarBrand href="#">
      <img src="/images/brand/coreui-signet.svg" alt="" width="22" height="24" class="d-inline-block align-top"/> CoreUI
    </CNavbarBrand>
  </CContainer>
</CNavbar>
```

### Nav

`<CNavbar>` navigation is based on `<CNavbarNav>`. **Navigation in navbars will also grow to occupy as much horizontal space as possible** to keep your navbar contents securely aligned.

::: demo
<CNavbar expand="lg" color-scheme="light" class="bg-light">
  <CContainer fluid>
    <CNavbarBrand href="#">Navbar</CNavbarBrand>
    <CNavbarToggler aria-label="Toggle navigation" aria-expanded={visible} @click="visible = !visible"/>
    <CCollapse class="navbar-collapse" :visible="visible">
      <CNavbarNav>
        <CNavItem>
          <CNavLink href="#" active>
            Home
          </CNavLink>
        </CNavItem>
        <CNavItem>
          <CNavLink href="#">Features</CNavLink>
        </CNavItem>
        <CNavItem>
          <CNavLink href="#">Pricing</CNavLink>
        </CNavItem>
        <CNavItem>
          <CNavLink href="#" disabled>Disabled</CNavLink>
        </CNavItem>
      </CNavbarNav>
    </CCollapse>
  </CContainer>
</CNavbar>
:::
```vue
<CNavbar expand="lg" color-scheme="light" class="bg-light">
  <CContainer fluid>
    <CNavbarBrand href="#">Navbar</CNavbarBrand>
    <CNavbarToggler aria-label="Toggle navigation" aria-expanded={visible} @click="visible = !visible"/>
    <CCollapse class="navbar-collapse" :visible="visible">
      <CNavbarNav>
        <CNavItem>
          <CNavLink href="#" active>
            Home
          </CNavLink>
        </CNavItem>
        <CNavItem>
          <CNavLink href="#">Features</CNavLink>
        </CNavItem>
        <CNavItem>
          <CNavLink href="#">Pricing</CNavLink>
        </CNavItem>
        <CNavItem>
          <CNavLink href="#" disabled>Disabled</CNavLink>
        </CNavItem>
      </CNavbarNav>
    </CCollapse>
  </CContainer>
</CNavbar>
```

And because we use classes for our navs, you can avoid the list-based approach entirely if you like.

::: demo
<CNavbar expand="lg" color-scheme="light" class="bg-light">
  <CContainer fluid>
    <CNavbarBrand href="#">Navbar</CNavbarBrand>
    <CNavbarToggler aria-label="Toggle navigation" aria-expanded={visible} @click="visible = !visible"/>
    <CCollapse class="navbar-collapse" :visible="visible">
      <CNavbarNav component="nav">
        <CNavLink href="#" active>
            Home
          </CNavLink>
        <CNavLink href="#">Features</CNavLink>
        <CNavLink href="#">Pricing</CNavLink>
        <CNavLink href="#" disabled>Disabled</CNavLink>
      </CNavbarNav>
    </CCollapse>
  </CContainer>
</CNavbar>
:::
```vue
<CNavbar expand="lg" color-scheme="light" class="bg-light">
  <CContainer fluid>
    <CNavbarBrand href="#">Navbar</CNavbarBrand>
    <CNavbarToggler aria-label="Toggle navigation" aria-expanded={visible} @click="visible = !visible"/>
    <CCollapse class="navbar-collapse" :visible="visible">
      <CNavbarNav component="nav">
        <CNavLink href="#" active>
            Home
          </CNavLink>
        <CNavLink href="#">Features</CNavLink>
        <CNavLink href="#">Pricing</CNavLink>
        <CNavLink href="#" disabled>Disabled</CNavLink>
      </CNavbarNav>
    </CCollapse>
  </CContainer>
</CNavbar>
```



You can also use dropdowns in your navbar. Please note that `<CDropdown>` component requires `variant="nav-item"`.

::: demo
<CNavbar expand="lg" color-scheme="light" class="bg-light">
  <CContainer fluid>
    <CNavbarBrand href="#">Navbar</CNavbarBrand>
    <CNavbarToggler aria-label="Toggle navigation" aria-expanded={visible} @click="visible = !visible"/>
    <CCollapse class="navbar-collapse" :visible="visible">
      <CNavbarNav>
        <CNavItem>
          <CNavLink href="#" active>
            Home
          </CNavLink>
        </CNavItem>
        <CNavItem>
          <CNavLink href="#">Features</CNavLink>
        </CNavItem>
        <CNavItem>
          <CNavLink href="#">Pricing</CNavLink>
        </CNavItem>
        <CDropdown variant="nav-item" :popper="false">
          <CDropdownToggle>Dropdown link</CDropdownToggle>
          <CDropdownMenu>
            <CDropdownItem href="#">Action</CDropdownItem>
            <CDropdownItem href="#">Another action</CDropdownItem>
            <CDropdownDivider />
            <CDropdownItem href="#">Something else here</CDropdownItem>
          </CDropdownMenu>
        </CDropdown>
      </CNavbarNav>
    </CCollapse>
  </CContainer>
</CNavbar>
:::
```vue
<CNavbar expand="lg" color-scheme="light" class="bg-light">
  <CContainer fluid>
    <CNavbarBrand href="#">Navbar</CNavbarBrand>
    <CNavbarToggler aria-label="Toggle navigation" aria-expanded={visible} @click="visible = !visible"/>
    <CCollapse class="navbar-collapse" :visible="visible">
      <CNavbarNav>
        <CNavItem>
          <CNavLink href="#" active>
            Home
          </CNavLink>
        </CNavItem>
        <CNavItem>
          <CNavLink href="#">Features</CNavLink>
        </CNavItem>
        <CNavItem>
          <CNavLink href="#">Pricing</CNavLink>
        </CNavItem>
        <CDropdown variant="nav-item" :popper="false">
          <CDropdownToggle>Dropdown link</CDropdownToggle>
          <CDropdownMenu>
            <CDropdownItem href="#">Action</CDropdownItem>
            <CDropdownItem href="#">Another action</CDropdownItem>
            <CDropdownDivider />
            <CDropdownItem href="#">Something else here</CDropdownItem>
          </CDropdownMenu>
        </CDropdown>
      </CNavbarNav>
    </CCollapse>
  </CContainer>
</CNavbar>
```

### Forms

Place various form controls and components within a navbar:

::: demo
<CNavbar color-scheme="light" class="bg-light">
  <CContainer fluid>
    <CForm class="d-flex">
      <CFormInput type="search" class="me-2" placeholder="Search"/>
      <CButton type="submit" color="success" variant="outline">Search</CButton>
    </CForm>
  </CContainer>
</CNavbar>
:::
```vue
<CNavbar color-scheme="light" class="bg-light">
  <CContainer fluid>
    <CForm class="d-flex">
      <CFormInput type="search" class="me-2" placeholder="Search"/>
      <CButton type="submit" color="success" variant="outline">Search</CButton>
    </CForm>
  </CContainer>
</CNavbar>
```

Immediate child elements of `<CNavbar>` use flex layout and will default to `justify-content: space-between`. Use additional [flex utilities](https://coreui.io/docs/4.0/utilities/flex/) as needed to adjust this behavior.

::: demo
<CNavbar color-scheme="light" class="bg-light">
  <CContainer fluid>
    <CNavbarBrand href="#">Navbar</CNavbarBrand>
    <CForm class="d-flex">
      <CFormInput type="search" class="me-2" placeholder="Search"/>
      <CButton type="submit" color="success" variant="outline">Search</CButton>
    </CForm>
  </CContainer>
</CNavbar>
:::
```vue
<CNavbar color-scheme="light" class="bg-light">
  <CContainer fluid>
    <CNavbarBrand href="#">Navbar</CNavbarBrand>
    <CForm class="d-flex">
      <CFormInput type="search" class="me-2" placeholder="Search"/>
      <CButton type="submit" color="success" variant="outline">Search</CButton>
    </CForm>
  </CContainer>
</CNavbar>
```

Input groups work, too. If your navbar is an entire form, or mostly a form, you can use the `<CForm>` element as the container and save some HTML.

::: demo
<CNavbar color-scheme="light" class="bg-light">
  <CForm class="container-fluid">
    <CInputGroup>
      <CInputGroupText id="basic-addon1">@</CInputGroupText>
      <CFormInput placeholder="Username" aria-label="Username" aria-describedby="basic-addon1"/> 
    </CInputGroup>
  </CForm>
</CNavbar>
:::
```vue
<CNavbar color-scheme="light" class="bg-light">
  <CForm class="container-fluid">
    <CInputGroup>
      <CInputGroupText id="basic-addon1">@</CInputGroupText>
      <CFormInput placeholder="Username" aria-label="Username" aria-describedby="basic-addon1"/> 
    </CInputGroup>
  </CForm>
</CNavbar>
```

Various buttons are supported as part of these navbar forms, too. This is also a great reminder that vertical alignment utilities can be used to align different sized elements.

::: demo
<CNavbar color-scheme="light" class="bg-light">
  <CForm class="container-fluid justify-content-start">
    <CButton type="button" color="success" variant="outline" class="me-2">Main button</CButton>
    <CButton type="button" color="secondary" variant="outline" size="sm">Smaller button</CButton>
  </CForm>
</CNavbar>
:::
```vue
<CNavbar color-scheme="light" class="bg-light">
  <CForm class="container-fluid justify-content-start">
    <CButton type="button" color="success" variant="outline" class="me-2">Main button</CButton>
    <CButton type="button" color="secondary" variant="outline" size="sm">Smaller button</CButton>
  </CForm>
</CNavbar>
```

### Text

Navbars may contain bits of text with the help of `<CNavbarText>`. This class adjusts vertical alignment and horizontal spacing for strings of text.

::: demo
<CNavbar color-scheme="light" class="bg-light">
  <CContainer fluid>
    <CNavbarText>Navbar text with an inline element</CNavbarText>
  </CContainer>
</CNavbar>
:::
```vue
<CNavbar color-scheme="light" class="bg-light">
  <CContainer fluid>
    <CNavbarText>Navbar text with an inline element</CNavbarText>
  </CContainer>
</CNavbar>
```

## Color schemes

Theming the navbar has never been easier thanks to the combination of theming classes and `background-color` utilities. Set `color-scheme="light"` for use with light background colors, or `color-scheme="dark"` for dark background colors. Then, customize with `.bg-*` utilities.

::: demo
<CNavbar expand="lg" color-scheme="dark" class="bg-dark">
  <CContainer fluid>
    <CNavbarBrand href="#">Navbar</CNavbarBrand>
    <CNavbarToggler aria-label="Toggle navigation" aria-expanded={visible} @click="visible = !visible"/>
    <CCollapse class="navbar-collapse" :visible="visible">
      <CNavbarNav>
        <CNavItem>
          <CNavLink href="#" active>
            Home
          </CNavLink>
        </CNavItem>
        <CNavItem>
          <CNavLink href="#">Link</CNavLink>
        </CNavItem>
        <CDropdown variant="nav-item" :popper="false">
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
      </CNavbarNav>
      <CForm class="d-flex">
        <CFormInput type="search" class="me-2" placeholder="Search"/>
        <CButton type="submit" color="light" variant="outline">Search</CButton>
      </CForm>
    </CCollapse>
  </CContainer>
</CNavbar>
<br/>
<CNavbar expand="lg" color-scheme="dark" class="bg-primary">
  <CContainer fluid>
    <CNavbarBrand href="#">Navbar</CNavbarBrand>
    <CNavbarToggler aria-label="Toggle navigation" aria-expanded={visible} @click="visible = !visible"/>
    <CCollapse class="navbar-collapse" :visible="visible">
      <CNavbarNav>
        <CNavItem>
          <CNavLink href="#" active>
            Home
          </CNavLink>
        </CNavItem>
        <CNavItem>
          <CNavLink href="#">Link</CNavLink>
        </CNavItem>
        <CDropdown variant="nav-item" :popper="false">
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
      </CNavbarNav>
      <CForm class="d-flex">
        <CFormInput type="search" class="me-2" placeholder="Search"/>
        <CButton type="submit" color="light" variant="outline">Search</CButton>
      </CForm>
    </CCollapse>
  </CContainer>
</CNavbar>
<br/>
<CNavbar expand="lg" color-scheme="light" style="background-color: #e3f2fd">
  <CContainer fluid>
    <CNavbarBrand href="#">Navbar</CNavbarBrand>
    <CNavbarToggler aria-label="Toggle navigation" aria-expanded={visible} @click="visible = !visible"/>
    <CCollapse class="navbar-collapse" :visible="visible">
      <CNavbarNav>
        <CNavItem>
          <CNavLink href="#" active>
            Home
          </CNavLink>
        </CNavItem>
        <CNavItem>
          <CNavLink href="#">Link</CNavLink>
        </CNavItem>
        <CDropdown variant="nav-item" :popper="false">
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
      </CNavbarNav>
      <CForm class="d-flex">
        <CFormInput type="search" class="me-2" placeholder="Search"/>
        <CButton type="submit" color="primary" variant="outline">Search</CButton>
      </CForm>
    </CCollapse>
  </CContainer>
</CNavbar>
:::
```vue
<CNavbar expand="lg" color-scheme="dark" class="bg-dark">
  <CContainer fluid>
    <CNavbarBrand href="#">Navbar</CNavbarBrand>
    <CNavbarToggler aria-label="Toggle navigation" aria-expanded={visible} @click="visible = !visible"/>
    <CCollapse class="navbar-collapse" :visible="visible">
      <CNavbarNav>
        <CNavItem>
          <CNavLink href="#" active>
            Home
          </CNavLink>
        </CNavItem>
        <CNavItem>
          <CNavLink href="#">Link</CNavLink>
        </CNavItem>
        <CDropdown variant="nav-item" :popper="false">
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
      </CNavbarNav>
      <CForm class="d-flex">
        <CFormInput type="search" class="me-2" placeholder="Search"/>
        <CButton type="submit" color="light" variant="outline">Search</CButton>
      </CForm>
    </CCollapse>
  </CContainer>
</CNavbar>
<br/>
<CNavbar expand="lg" color-scheme="dark" class="bg-primary">
  <CContainer fluid>
    <CNavbarBrand href="#">Navbar</CNavbarBrand>
    <CNavbarToggler aria-label="Toggle navigation" aria-expanded={visible} @click="visible = !visible"/>
    <CCollapse class="navbar-collapse" :visible="visible">
      <CNavbarNav>
        <CNavItem>
          <CNavLink href="#" active>
            Home
          </CNavLink>
        </CNavItem>
        <CNavItem>
          <CNavLink href="#">Link</CNavLink>
        </CNavItem>
        <CDropdown variant="nav-item" :popper="false">
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
      </CNavbarNav>
      <CForm class="d-flex">
        <CFormInput type="search" class="me-2" placeholder="Search"/>
        <CButton type="submit" color="light" variant="outline">Search</CButton>
      </CForm>
    </CCollapse>
  </CContainer>
</CNavbar>
<br/>
<CNavbar expand="lg" color-scheme="light" style="background-color: #e3f2fd">
  <CContainer fluid>
    <CNavbarBrand href="#">Navbar</CNavbarBrand>
    <CNavbarToggler aria-label="Toggle navigation" aria-expanded={visible} @click="visible = !visible"/>
    <CCollapse class="navbar-collapse" :visible="visible">
      <CNavbarNav>
        <CNavItem>
          <CNavLink href="#" active>
            Home
          </CNavLink>
        </CNavItem>
        <CNavItem>
          <CNavLink href="#">Link</CNavLink>
        </CNavItem>
        <CDropdown variant="nav-item" :popper="false">
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
      </CNavbarNav>
      <CForm class="d-flex">
        <CFormInput type="search" class="me-2" placeholder="Search"/>
        <CButton type="submit" color="primary" variant="outline">Search</CButton>
      </CForm>
    </CCollapse>
  </CContainer>
</CNavbar>
```

## Containers

Although it's not required, you can wrap a `<CNavbar>` in a `<CContainer>` to center it on a page–though note that an inner container is still required. Or you can add a container inside the `<CNavbar>` to only center the contents of a [fixed or static top navbar](#placement).

::: demo
<CContainer>
  <CNavbar color-scheme="light" class="bg-light">
    <CContainer fluid>
      <CNavbarBrand href="#">Navbar</CNavbarBrand>
    </CContainer>
  </CNavbar>
</CContainer>
:::
```vue
<CContainer>
  <CNavbar color-scheme="light" class="bg-light">
    <CContainer fluid>
      <CNavbarBrand href="#">Navbar</CNavbarBrand>
    </CContainer>
  </CNavbar>
</CContainer>
```

Use any of the responsive containers to change how wide the content in your navbar is presented.

::: demo
<CNavbar color-scheme="light" class="bg-light">
  <CContainer breakpoint="md">
    <CNavbarBrand href="#">Navbar</CNavbarBrand>
  </CContainer>
</CNavbar>
:::
```vue
<CNavbar color-scheme="light" class="bg-light">
  <CContainer breakpoint="md">
    <CNavbarBrand href="#">Navbar</CNavbarBrand>
  </CContainer>
</CNavbar>
```

## Placement

Use our `placement` properly to place navbars in non-static positions. Choose from fixed to the top, fixed to the bottom, or stickied to the top (scrolls with the page until it reaches the top, then stays there). Fixed navbars use `position: fixed`, meaning they're pulled from the normal flow of the DOM and may require custom CSS (e.g., `padding-top` on the `<body>`) to prevent overlap with other elements.

Also note that **`.sticky-top` uses `position: sticky`, which [isn't fully supported in every browser](https://caniuse.com/css-sticky)**.

::: demo
<CNavbar color-scheme="light" class="bg-light">
  <CContainer fluid>
    <CNavbarBrand href="#">Default</CNavbarBrand>
  </CContainer>
</CNavbar>
:::
```vue
<CNavbar color-scheme="light" class="bg-light">
  <CContainer fluid>
    <CNavbarBrand href="#">Default</CNavbarBrand>
  </CContainer>
</CNavbar>
```

::: demo
<CNavbar color-scheme="light" class="bg-light" placement="fixed-top">
  <CContainer fluid>
    <CNavbarBrand href="#">Fixed top</CNavbarBrand>
  </CContainer>
</CNavbar>
:::
```vue
<CNavbar color-scheme="light" class="bg-light" placement="fixed-top">
  <CContainer fluid>
    <CNavbarBrand href="#">Fixed top</CNavbarBrand>
  </CContainer>
</CNavbar>
```

::: demo
<CNavbar color-scheme="light" class="bg-light" placement="fixed-bottom">
  <CContainer fluid>
    <CNavbarBrand href="#">Fixed bottom</CNavbarBrand>
  </CContainer>
</CNavbar>
:::
```vue
<CNavbar color-scheme="light" class="bg-light" placement="fixed-bottom">
  <CContainer fluid>
    <CNavbarBrand href="#">Fixed bottom</CNavbarBrand>
  </CContainer>
</CNavbar>
```

::: demo
<CNavbar color-scheme="light" class="bg-light" placement="sticky-top">
  <CContainer fluid>
    <CNavbarBrand href="#">Sticky top</CNavbarBrand>
  </CContainer>
</CNavbar>
:::
```vue
<CNavbar color-scheme="light" class="bg-light" placement="sticky-top">
  <CContainer fluid>
    <CNavbarBrand href="#">Sticky top</CNavbarBrand>
  </CContainer>
</CNavbar>
```

## Responsive behaviors

Navbars can use `<CNavbarToggler>`, `<CCollapse>`, and `expand="{sm|md|lg|xl|xxl}"` property to determine when their content collapses behind a button. In combination with other utilities, you can easily choose when to show or hide particular elements.

For navbars that never collapse, add the `expand` boolean property on the `<CNavbar>`. For navbars that always collapse, don't add any property.

### Toggler

Navbar togglers are left-aligned by default, but should they follow a sibling element like a `<CNavbarBrand>`, they'll automatically be aligned to the far right. Reversing your markup will reverse the placement of the toggler. Below are examples of different toggle styles.

With no `<CNavbarBrand>` shown at the smallest breakpoint:

::: demo
<CNavbar expand="lg" color-scheme="light" class="bg-light">
  <CContainer fluid>
    <CNavbarToggler aria-label="Toggle navigation" aria-expanded={visible} @click="visible = !visible"/>
    <CCollapse class="navbar-collapse" :visible="visible">
      <CNavbarBrand href="#">Hidden brand</CNavbarBrand>
      <CNavbarNav class="me-auto mb-2 mb-lg-0">
        <CNavItem>
          <CNavLink href="#" active>
            Home
          </CNavLink>
        </CNavItem>
        <CNavItem>
          <CNavLink href="#">Link</CNavLink>
        </CNavItem>
        <CNavItem>
          <CNavLink href="#" disabled>
            Disabled
          </CNavLink>
        </CNavItem>
      </CNavbarNav>
      <CForm class="d-flex">
        <CFormInput type="search" class="me-2" placeholder="Search"/>
        <CButton type="submit" color="success" variant="outline">Search</CButton>
      </CForm>
    </CCollapse>
  </CContainer>
</CNavbar>
:::
```vue
<CNavbar expand="lg" color-scheme="light" class="bg-light">
  <CContainer fluid>
    <CNavbarToggler aria-label="Toggle navigation" aria-expanded={visible} @click="visible = !visible"/>
    <CCollapse class="navbar-collapse" :visible="visible">
      <CNavbarBrand href="#">Hidden brand</CNavbarBrand>
      <CNavbarNav class="me-auto mb-2 mb-lg-0">
        <CNavItem>
          <CNavLink href="#" active>
            Home
          </CNavLink>
        </CNavItem>
        <CNavItem>
          <CNavLink href="#">Link</CNavLink>
        </CNavItem>
        <CNavItem>
          <CNavLink href="#" disabled>
            Disabled
          </CNavLink>
        </CNavItem>
      </CNavbarNav>
      <CForm class="d-flex">
        <CFormInput type="search" class="me-2" placeholder="Search"/>
        <CButton type="submit" color="success" variant="outline">Search</CButton>
      </CForm>
    </CCollapse>
  </CContainer>
</CNavbar>
```

With a brand name shown on the left and toggler on the right:

::: demo
<CNavbar expand="lg" color-scheme="light" class="bg-light">
  <CContainer fluid>
    <CNavbarBrand href="#">Navbar</CNavbarBrand>
    <CNavbarToggler aria-label="Toggle navigation" aria-expanded={visible} @click="visible = !visible"/>
    <CCollapse class="navbar-collapse" :visible="visible">
      <CNavbarNav class="me-auto mb-2 mb-lg-0">
        <CNavItem>
          <CNavLink href="#" active>
            Home
          </CNavLink>
        </CNavItem>
        <CNavItem>
          <CNavLink href="#">Link</CNavLink>
        </CNavItem>
        <CNavItem>
          <CNavLink href="#" disabled>
            Disabled
          </CNavLink>
        </CNavItem>
      </CNavbarNav>
      <CForm class="d-flex">
        <CFormInput type="search" class="me-2" placeholder="Search"/>
        <CButton type="submit" color="success" variant="outline">Search</CButton>
      </CForm>
    </CCollapse>
  </CContainer>
</CNavbar>
:::
```vue
<CNavbar expand="lg" color-scheme="light" class="bg-light">
  <CContainer fluid>
    <CNavbarBrand href="#">Navbar</CNavbarBrand>
    <CNavbarToggler aria-label="Toggle navigation" aria-expanded={visible} @click="visible = !visible"/>
    <CCollapse class="navbar-collapse" :visible="visible">
      <CNavbarNav class="me-auto mb-2 mb-lg-0">
        <CNavItem>
          <CNavLink href="#" active>
            Home
          </CNavLink>
        </CNavItem>
        <CNavItem>
          <CNavLink href="#">Link</CNavLink>
        </CNavItem>
        <CNavItem>
          <CNavLink href="#" disabled>
            Disabled
          </CNavLink>
        </CNavItem>
      </CNavbarNav>
      <CForm class="d-flex">
        <CFormInput type="search" class="me-2" placeholder="Search"/>
        <CButton type="submit" color="success" variant="outline">Search</CButton>
      </CForm>
    </CCollapse>
  </CContainer>
</CNavbar>
```

With a toggler on the left and brand name on the right:

::: demo
<CNavbar expand="lg" color-scheme="light" class="bg-light">
  <CContainer fluid>
    <CNavbarToggler aria-label="Toggle navigation" aria-expanded={visible} @click="visible = !visible"/>
    <CNavbarBrand href="#">Navbar</CNavbarBrand>
    <CCollapse class="navbar-collapse" :visible="visible">
      <CNavbarNav class="me-auto mb-2 mb-lg-0">
        <CNavItem>
          <CNavLink href="#" active>
            Home
          </CNavLink>
        </CNavItem>
        <CNavItem>
          <CNavLink href="#">Link</CNavLink>
        </CNavItem>
        <CNavItem>
          <CNavLink href="#" disabled>
            Disabled
          </CNavLink>
        </CNavItem>
      </CNavbarNav>
      <CForm class="d-flex">
        <CFormInput type="search" class="me-2" placeholder="Search"/>
        <CButton type="submit" color="success" variant="outline">Search</CButton>
      </CForm>
    </CCollapse>
  </CContainer>
</CNavbar>
:::
```vue
<CNavbar expand="lg" color-scheme="light" class="bg-light">
  <CContainer fluid>
    <CNavbarToggler aria-label="Toggle navigation" aria-expanded={visible} @click="visible = !visible"/>
    <CNavbarBrand href="#">Navbar</CNavbarBrand>
    <CCollapse class="navbar-collapse" :visible="visible">
      <CNavbarNav class="me-auto mb-2 mb-lg-0">
        <CNavItem>
          <CNavLink href="#" active>
            Home
          </CNavLink>
        </CNavItem>
        <CNavItem>
          <CNavLink href="#">Link</CNavLink>
        </CNavItem>
        <CNavItem>
          <CNavLink href="#" disabled>
            Disabled
          </CNavLink>
        </CNavItem>
      </CNavbarNav>
      <CForm class="d-flex">
        <CFormInput type="search" class="me-2" placeholder="Search"/>
        <CButton type="submit" color="success" variant="outline">Search</CButton>
      </CForm>
    </CCollapse>
  </CContainer>
</CNavbar>
```

### External content

Sometimes you want to use the collapse plugin to trigger a container element for content that structurally sits outside of the `<CNavbar>`.

::: demo
<CCollapse id="navbarToggleExternalContent" :visible="visibleExternalContent">
  <div class="bg-dark p-4">
    <h5 class="text-white h4">Collapsed content</h5>
    <span class="text-medium-emphasis-inverse">Toggleable via the navbar brand.</span>
  </div>
</CCollapse>
<CNavbar colorScheme="dark" class="bg-dark">
  <CContainer fluid>
    <CNavbarToggler
      aria-controls="navbarToggleExternalContent"
      aria-label="Toggle navigation"
      @click="visibleExternalContent = !visibleExternalContent"
    />
  </CContainer>
</CNavbar>
:::
```vue
<template>
  <CCollapse id="navbarToggleExternalContent" :visible="visibleExternalContent">
    <div class="bg-dark p-4">
      <h5 class="text-white h4">Collapsed content</h5>
      <span class="text-medium-emphasis-inverse">Toggleable via the navbar brand.</span>
    </div>
  </CCollapse>
  <CNavbar colorScheme="dark" class="bg-dark">
    <CContainer fluid>
      <CNavbarToggler
        aria-controls="navbarToggleExternalContent"
        aria-label="Toggle navigation"
        @click="visibleExternalContent = !visibleExternalContent"
      />
    </CContainer>
  </CNavbar>
</template>
<script>
  export default {
    data() {
      return { 
        visibleExternalContent: false,
      }
    }
  }
</script>
```

### Offcanvas

Transform your expanding and collapsing navbar into an offcanvas drawer with the offcanvas plugin. We extend both the offcanvas default styles and use our `expand="*"` prop to create a dynamic and flexible navigation sidebar.

In the example below, to create an offcanvas navbar that is always collapsed across all breakpoints, omit the `expand="*"` prop entirely.

:::demo
<CNavbar colorScheme="light" class="bg-light">
  <CContainer fluid>
    <CNavbarBrand>Offcanvas navbar</CNavbarBrand>
    <CNavbarToggler
      aria-controls="offcanvasNavbar"
      aria-label="Toggle navigation"
      @click="visibleOffcanvas = !visibleOffcanvas"
    />
    <COffcanvas id="offcanvasNavbar" placement="end" :visible="visibleOffcanvas" @hide="visibleOffcanvas = false">
      <COffcanvasHeader>
        <COffcanvasTitle>Offcanvas</COffcanvasTitle>
        <CCloseButton class="text-reset" @click="visibleOffcanvas = false" />
      </COffcanvasHeader>
      <COffcanvasBody>
        <CNavbarNav>
          <CNavItem>
            <CNavLink href="#" active>
              Home
            </CNavLink>
          </CNavItem>
          <CNavItem>
            <CNavLink href="#">Link</CNavLink>
          </CNavItem>
          <CDropdown variant="nav-item" :popper="false">
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
        </CNavbarNav>
        <CForm class="d-flex">
          <CFormInput type="search" class="me-2" placeholder="Search" />
          <CButton type="submit" color="success" variant="outline">
            Search
          </CButton>
        </CForm>
      </COffcanvasBody>
    </COffcanvas>
  </CContainer>
</CNavbar>
:::
```vue
<template>
  <CNavbar colorScheme="light" class="bg-light">
    <CContainer fluid>
      <CNavbarBrand>Offcanvas navbar</CNavbarBrand>
      <CNavbarToggler
        aria-controls="offcanvasNavbar"
        aria-label="Toggle navigation"
        @click="visibleOffcanvas = !visibleOffcanvas"
      />
      <COffcanvas id="offcanvasNavbar" placement="end" :visible="visibleOffcanvas" @hide="visibleOffcanvas = false">
        <COffcanvasHeader>
          <COffcanvasTitle>Offcanvas</COffcanvasTitle>
          <CCloseButton class="text-reset" @click="visibleOffcanvas = false" />
        </COffcanvasHeader>
        <COffcanvasBody>
          <CNavbarNav>
            <CNavItem>
              <CNavLink href="#" active>
                Home
              </CNavLink>
            </CNavItem>
            <CNavItem>
              <CNavLink href="#">Link</CNavLink>
            </CNavItem>
            <CDropdown variant="nav-item" :popper="false">
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
          </CNavbarNav>
          <CForm class="d-flex">
            <CFormInput type="search" class="me-2" placeholder="Search" />
            <CButton type="submit" color="success" variant="outline">
              Search
            </CButton>
          </CForm>
        </COffcanvasBody>
      </COffcanvas>
    </CContainer>
  </CNavbar>
</template>
<script>
  export default {
    data() {
      return { 
        visibleOffcanvas: false,
      }
    }
  }
</script>
```

To create an offcanvas navbar that expands into a normal navbar at a specific breakpoint like `xxl`, use `expand="xxl"` property.

:::demo
<CNavbar colorScheme="light" class="bg-light" expand="xxl">
  <CContainer fluid>
    <CNavbarBrand>Offcanvas navbar</CNavbarBrand>
    <CNavbarToggler
      aria-controls="offcanvasNavbar2"
      aria-label="Toggle navigation"
      @click="visibleOffcanvas2 = !visibleOffcanvas2"
    />
    <COffcanvas id="offcanvasNavbar2" placement="end" :visible="visibleOffcanvas2" @hide="visibleOffcanvas2 = false">
      <COffcanvasHeader>
        <COffcanvasTitle>Offcanvas</COffcanvasTitle>
        <CCloseButton class="text-reset" @click="visibleOffcanvas2 = false" />
      </COffcanvasHeader>
      <COffcanvasBody>
        <CNavbarNav>
          <CNavItem>
            <CNavLink href="#" active>
              Home
            </CNavLink>
          </CNavItem>
          <CNavItem>
            <CNavLink href="#">Link</CNavLink>
          </CNavItem>
          <CDropdown variant="nav-item" :popper="false">
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
        </CNavbarNav>
        <CForm class="d-flex">
          <CFormInput type="search" class="me-2" placeholder="Search" />
          <CButton type="submit" color="success" variant="outline">
            Search
          </CButton>
        </CForm>
      </COffcanvasBody>
    </COffcanvas>
  </CContainer>
</CNavbar>
:::
```vue
<template>
  <CNavbar colorScheme="light" class="bg-light" expand="xxl">
    <CContainer fluid>
      <CNavbarBrand>Offcanvas navbar</CNavbarBrand>
      <CNavbarToggler
        aria-controls="offcanvasNavbar2"
        aria-label="Toggle navigation"
        @click="visibleOffcanvas2 = !visibleOffcanvas2"
      />
      <COffcanvas id="offcanvasNavbar2" placement="end" :visible="visibleOffcanvas2" @hide="visibleOffcanvas2 = false">
        <COffcanvasHeader>
          <COffcanvasTitle>Offcanvas</COffcanvasTitle>
          <CCloseButton class="text-reset" @click="visibleOffcanvas2 = false" />
        </COffcanvasHeader>
        <COffcanvasBody>
          <CNavbarNav>
            <CNavItem>
              <CNavLink href="#" active>
                Home
              </CNavLink>
            </CNavItem>
            <CNavItem>
              <CNavLink href="#">Link</CNavLink>
            </CNavItem>
            <CDropdown variant="nav-item" :popper="false">
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
          </CNavbarNav>
          <CForm class="d-flex">
            <CFormInput type="search" class="me-2" placeholder="Search" />
            <CButton type="submit" color="success" variant="outline">
              Search
            </CButton>
          </CForm>
        </COffcanvasBody>
      </COffcanvas>
    </CContainer>
  </CNavbar>
</template>
<script>
  export default {
    data() {
      return { 
        visibleOffcanvas2: false,
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
        visibleExternalContent: false,
        visibleOffcanvas: false,
        visibleOffcanvas2: false,
      }
    }
  }
</script>


## Customizing

### CSS variables

Vue navbars use local CSS variables on `.navbar` for enhanced real-time customization. Values for the CSS variables are set via Sass, so Sass customization is still supported, too.

<ScssDocs file="_navbar.scss" capture="navbar-css-vars"/>

Some additional CSS variables are also present on `.navbar-nav`:

<ScssDocs file="_navbar.scss" capture="navbar-nav-css-vars"/>

Customization through CSS variables can be seen on the `.navbar-dark` class where we override specific values without adding duplicate CSS selectors.

<ScssDocs file="_navbar.scss" capture="navbar-dark-css-vars"/>

#### How to use CSS variables

```js
const vars = { 
  '--my-css-var': 10,
  '--my-another-css-var': "red" 
}
return <CNavbar :style="vars">...</CNavbar>
```

### SASS variables

Variables for all navbars:

<ScssDocs file="_variables.scss" capture="navbar-variables"/>

### SASS loops

[Responsive navbar expand/collapse classes](#responsive-behaviors) (e.g., `.navbar-expand-lg`) are combined with the `$breakpoints` map and generated through a loop in `scss/_navbar.scss`.

<ScssDocs file="_navbar.scss" capture="navbar-expand-loop"/>

## API

!!!include(./api/navbar/CNavbar.api.md)!!!

!!!include(./api/navbar/CNavbarBrand.api.md)!!!

!!!include(./api/navbar/CNavbarNav.api.md)!!!