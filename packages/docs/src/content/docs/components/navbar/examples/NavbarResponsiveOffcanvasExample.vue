<template>
  <CNavbar colorScheme="light" class="bg-light">
    <CContainer fluid>
      <CNavbarBrand>Offcanvas navbar</CNavbarBrand>
      <CNavbarToggler
        aria-controls="offcanvasNavbar"
        aria-label="Toggle navigation"
        @click="visibleOffcanvas = !visibleOffcanvas"
      />
      <COffcanvas
        id="offcanvasNavbar"
        placement="end"
        :visible="visibleOffcanvas"
        @hide="visibleOffcanvas = false"
      >
        <COffcanvasHeader>
          <COffcanvasTitle>Offcanvas</COffcanvasTitle>
          <CCloseButton class="text-reset" @click="visibleOffcanvas = false" />
        </COffcanvasHeader>
        <COffcanvasBody>
          <CNavbarNav>
            <CNavItem>
              <CNavLink href="#" active> Home </CNavLink>
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
              <CNavLink href="#" disabled> Disabled </CNavLink>
            </CNavItem>
          </CNavbarNav>
          <CForm class="d-flex">
            <CFormInput type="search" class="me-2" placeholder="Search" />
            <CButton type="submit" color="success" variant="outline"> Search </CButton>
          </CForm>
        </COffcanvasBody>
      </COffcanvas>
    </CContainer>
  </CNavbar>
</template>

<script setup>
import {
  CNavbar,
  CContainer,
  CNavbarBrand,
  CNavbarToggler,
  COffcanvas,
  COffcanvasHeader,
  COffcanvasTitle,
  CCloseButton,
  COffcanvasBody,
  CNavbarNav,
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
const visibleExternalContent = ref(false)
const visibleOffcanvas = ref(false)
const visibleOffcanvas2 = ref(false)
</script>
