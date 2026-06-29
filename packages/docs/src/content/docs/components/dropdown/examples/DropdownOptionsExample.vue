<template>
  <div class="d-flex gap-1">
    <CDropdown :offset="[10, 20]">
      <CDropdownToggle color="secondary">Offset</CDropdownToggle>
      <CDropdownMenu>
        <CDropdownItem href="#">Action</CDropdownItem>
        <CDropdownItem href="#">Another action</CDropdownItem>
        <CDropdownItem href="#">Something else here</CDropdownItem>
      </CDropdownMenu>
    </CDropdown>
    <CDropdown teleport>
      <CDropdownToggle color="secondary" aria-controls="dropdownMenuInTeleport">
        Teleport
      </CDropdownToggle>
      <CDropdownMenu id="dropdownMenuInTeleport">
        <CDropdownItem href="#">Action</CDropdownItem>
        <CDropdownItem href="#">Another action</CDropdownItem>
        <CDropdownItem href="#">Something else here</CDropdownItem>
      </CDropdownMenu>
    </CDropdown>
    <CDropdown reference="parent">
      <CButton color="secondary">Reference</CButton>
      <CDropdownToggle color="secondary" split />
      <CDropdownMenu>
        <CDropdownItem href="#">Action</CDropdownItem>
        <CDropdownItem href="#">Another action</CDropdownItem>
        <CDropdownItem href="#">Something else here</CDropdownItem>
      </CDropdownMenu>
    </CDropdown>
  </div>
</template>

<script setup>
import { CDropdown, CDropdownToggle, CDropdownMenu, CDropdownItem, CButton } from '@coreui/vue'
</script>
