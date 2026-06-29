<template>
  <CHeader>
    <CContainer fluid>
      <CHeaderBrand href="#">Header</CHeaderBrand>
      <CHeaderToggler @click="visible = !visible" />
      <CCollapse class="header-collapse" :visible="visible">
        <CHeaderNav>
          <CNavItem>
            <CNavLink href="#" active> Home </CNavLink>
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
            <CNavLink href="#" disabled> Disabled </CNavLink>
          </CNavItem>
        </CHeaderNav>
        <CForm class="d-flex">
          <CFormInput class="me-2" type="search" placeholder="Search" />
          <CButton type="submit" color="success" variant="outline">Search</CButton>
        </CForm>
      </CCollapse>
    </CContainer>
  </CHeader>
</template>

<script setup>
import {
  CHeader,
  CContainer,
  CHeaderBrand,
  CHeaderToggler,
  CCollapse,
  CHeaderNav,
  CNavItem,
  CNavLink,
  CDropdown,
  CDropdownToggle,
  CDropdownMenu,
  CDropdownItem,
  CDropdownDivider,
  CForm,
  CFormInput,
  CButton,
} from '@coreui/vue'
import { ref } from 'vue'
const visible = ref(true)
</script>
