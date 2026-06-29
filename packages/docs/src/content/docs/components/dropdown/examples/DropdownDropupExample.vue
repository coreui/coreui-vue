<template>
  <CDropdown color="secondary" direction="dropup">
    <CDropdownToggle color="secondary">Dropup</CDropdownToggle>
    <CDropdownMenu>
      <CDropdownItem href="#">Action</CDropdownItem>
      <CDropdownItem href="#">Another action</CDropdownItem>
      <CDropdownItem href="#">Something else here</CDropdownItem>
      <CDropdownDivider />
      <CDropdownItem href="#">Separated link</CDropdownItem>
    </CDropdownMenu>
  </CDropdown>
  <CDropdown color="secondary" direction="dropup">
    <CButton color="secondary">Split dropup</CButton>
    <CDropdownToggle color="secondary" split />
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
