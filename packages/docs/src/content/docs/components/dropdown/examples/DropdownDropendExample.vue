<template>
  <CDropdown color="secondary" direction="dropend">
    <CDropdownToggle color="secondary">Dropend</CDropdownToggle>
    <CDropdownMenu>
      <CDropdownItem href="#">Action</CDropdownItem>
      <CDropdownItem href="#">Another action</CDropdownItem>
      <CDropdownItem href="#">Something else here</CDropdownItem>
      <CDropdownDivider />
      <CDropdownItem href="#">Separated link</CDropdownItem>
    </CDropdownMenu>
  </CDropdown>
  <CDropdown color="secondary" direction="dropend">
    <CButton color="secondary">Split dropend</CButton>
    <CDropdownToggle color="secondary" split split-label="Toggle Dropend" />
    <CDropdownMenu>
      <CDropdownItem href="#">Action</CDropdownItem>
      <CDropdownItem href="#">Another action</CDropdownItem>
      <CDropdownItem href="#">Something else here</CDropdownItem>
      <CDropdownDivider />
      <CDropdownItem href="#">Separated link</CDropdownItem>
    </CDropdownMenu>
  </CDropdown>
</template>

<script setup>
import {
  CDropdown,
  CDropdownToggle,
  CDropdownMenu,
  CDropdownItem,
  CDropdownDivider,
  CButton,
} from '@coreui/vue'
</script>
