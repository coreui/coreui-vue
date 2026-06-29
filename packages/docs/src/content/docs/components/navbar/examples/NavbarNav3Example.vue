<template>
  <CNavbar expand="lg" color-scheme="light" class="bg-light">
    <CContainer fluid>
      <CNavbarBrand href="#">Navbar</CNavbarBrand>
      <CNavbarToggler
        aria-label="Toggle navigation"
        aria-expanded="{visible}"
        @click="visible = !visible"
      />
      <CCollapse class="navbar-collapse" :visible="visible">
        <CNavbarNav>
          <CNavItem>
            <CNavLink href="#" active> Home </CNavLink>
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
</template>

<script setup>
import {
  CNavbar,
  CContainer,
  CNavbarBrand,
  CNavbarToggler,
  CCollapse,
  CNavbarNav,
  CNavItem,
  CNavLink,
  CDropdown,
  CDropdownToggle,
  CDropdownMenu,
  CDropdownItem,
  CDropdownDivider,
} from '@coreui/vue'
import { ref } from 'vue'
const visible = ref(true)
</script>
