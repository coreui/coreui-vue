<template>
  <CNavbar expand="lg" color-scheme="dark" class="bg-dark">
    <CContainer fluid>
      <CNavbarBrand href="#">Navbar</CNavbarBrand>
      <CNavbarNav>
        <CDropdown dark variant="nav-item">
          <CDropdownToggle color="dark" :nav-link="false">Dropdown Button</CDropdownToggle>
          <CDropdownMenu>
            <CDropdownItem href="#">Action</CDropdownItem>
            <CDropdownItem href="#">Another action</CDropdownItem>
            <CDropdownItem href="#">Something else here</CDropdownItem>
            <CDropdownDivider />
            <CDropdownItem href="#">Separated link</CDropdownItem>
          </CDropdownMenu>
        </CDropdown>
      </CNavbarNav>
    </CContainer>
  </CNavbar>
</template>

<script setup>
import {
  CNavbar,
  CContainer,
  CNavbarBrand,
  CNavbarNav,
  CDropdown,
  CDropdownToggle,
  CDropdownMenu,
  CDropdownItem,
  CDropdownDivider,
} from '@coreui/vue'
</script>
