<template>
  <CDropdown color="secondary" direction="dropstart">
    <CDropdownToggle color="secondary">Dropstart</CDropdownToggle>
    <CDropdownMenu>
      <CDropdownItem href="#">Action</CDropdownItem>
      <CDropdownItem href="#">Another action</CDropdownItem>
      <CDropdownItem href="#">Something else here</CDropdownItem>
      <CDropdownDivider />
      <CDropdownItem href="#">Separated link</CDropdownItem>
    </CDropdownMenu>
  </CDropdown>
  <CButtonGroup>
    <CDropdown color="secondary" direction="dropstart">
      <CDropdownToggle color="secondary" split split-label="Toggle Dropstart" />
      <CDropdownMenu>
        <CDropdownItem href="#">Action</CDropdownItem>
        <CDropdownItem href="#">Another action</CDropdownItem>
        <CDropdownItem href="#">Something else here</CDropdownItem>
        <CDropdownDivider />
        <CDropdownItem href="#">Separated link</CDropdownItem>
      </CDropdownMenu>
    </CDropdown>
    <CButton color="secondary">Split dropstart</CButton>
  </CButtonGroup>
</template>

<script setup>
import {
  CDropdown,
  CDropdownToggle,
  CDropdownMenu,
  CDropdownItem,
  CDropdownDivider,
  CButtonGroup,
  CButton,
} from '@coreui/vue'
</script>
