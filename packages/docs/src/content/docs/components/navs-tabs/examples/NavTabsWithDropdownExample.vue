<template>
  <CNav>
    <CNavItem>
      <CNavLink href="#" active> Active </CNavLink>
    </CNavItem>
    <CDropdown variant="nav-item">
      <CDropdownToggle color="secondary">Dropdown button</CDropdownToggle>
      <CDropdownMenu>
        <CDropdownItem href="#">Action</CDropdownItem>
        <CDropdownItem href="#">Another action</CDropdownItem>
        <CDropdownItem href="#">Something else here</CDropdownItem>
      </CDropdownMenu>
    </CDropdown>
    <CNavItem>
      <CNavLink href="#">Link</CNavLink>
    </CNavItem>
    <CNavItem>
      <CNavLink href="#" disabled> Disabled </CNavLink>
    </CNavItem>
  </CNav>
</template>

<script setup>
import {
  CNav,
  CNavItem,
  CNavLink,
  CDropdown,
  CDropdownToggle,
  CDropdownMenu,
  CDropdownItem,
} from '@coreui/vue'
import { ref } from 'vue'
const tabPaneActiveKey = ref(1)
const tabPanePillsActiveKey = ref(1)
</script>
