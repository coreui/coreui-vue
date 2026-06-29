<template>
  <CButtonGroup role="group" aria-label="Button group with nested dropdown">
    <CButton color="primary">1</CButton>
    <CButton color="primary">2</CButton>
    <CDropdown variant="btn-group">
      <CDropdownToggle color="primary">Dropdown</CDropdownToggle>
      <CDropdownMenu>
        <CDropdownItem href="#">Action</CDropdownItem>
        <CDropdownItem href="#">Another action</CDropdownItem>
        <CDropdownItem href="#">Something else here</CDropdownItem>
        <CDropdownDivider />
        <CDropdownItem href="#">Separated link</CDropdownItem>
      </CDropdownMenu>
    </CDropdown>
  </CButtonGroup>
</template>

<script setup>
import {
  CButtonGroup,
  CButton,
  CDropdown,
  CDropdownToggle,
  CDropdownMenu,
  CDropdownItem,
  CDropdownDivider,
} from '@coreui/vue'
</script>
