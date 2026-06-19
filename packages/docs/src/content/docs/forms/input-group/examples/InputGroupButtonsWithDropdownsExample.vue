<template>
  <CInputGroup class="mb-3">
    <CDropdown variant="input-group">
      <CDropdownToggle color="secondary" variant="outline">Dropdown</CDropdownToggle>
      <CDropdownMenu>
        <CDropdownItem href="#">Action</CDropdownItem>
        <CDropdownItem href="#">Another action</CDropdownItem>
        <CDropdownItem href="#">Something else here</CDropdownItem>
        <CDropdownDivider />
        <CDropdownItem href="#">Separated link</CDropdownItem>
      </CDropdownMenu>
    </CDropdown>
    <CFormInput aria-label="Text input with dropdown button" />
  </CInputGroup>
  <CInputGroup class="mb-3">
    <CFormInput aria-label="Text input with dropdown button" />
    <CDropdown alignment="end" variant="input-group">
      <CDropdownToggle color="secondary" variant="outline">Dropdown</CDropdownToggle>
      <CDropdownMenu>
        <CDropdownItem href="#">Action</CDropdownItem>
        <CDropdownItem href="#">Another action</CDropdownItem>
        <CDropdownItem href="#">Something else here</CDropdownItem>
        <CDropdownDivider />
        <CDropdownItem href="#">Separated link</CDropdownItem>
      </CDropdownMenu>
    </CDropdown>
  </CInputGroup>
  <CInputGroup>
    <CDropdown variant="input-group">
      <CDropdownToggle color="secondary" variant="outline">Dropdown</CDropdownToggle>
      <CDropdownMenu>
        <CDropdownItem href="#">Action</CDropdownItem>
        <CDropdownItem href="#">Another action</CDropdownItem>
        <CDropdownItem href="#">Something else here</CDropdownItem>
        <CDropdownDivider />
        <CDropdownItem href="#">Separated link</CDropdownItem>
      </CDropdownMenu>
    </CDropdown>
    <CFormInput aria-label="Text input with 2 dropdown buttons" />
    <CDropdown alignment="end" variant="input-group">
      <CDropdownToggle color="secondary" variant="outline">Dropdown</CDropdownToggle>
      <CDropdownMenu>
        <CDropdownItem href="#">Action</CDropdownItem>
        <CDropdownItem href="#">Another action</CDropdownItem>
        <CDropdownItem href="#">Something else here</CDropdownItem>
        <CDropdownDivider />
        <CDropdownItem href="#">Separated link</CDropdownItem>
      </CDropdownMenu>
    </CDropdown>
  </CInputGroup>
</template>

<script setup>
import {
  CInputGroup,
  CDropdown,
  CDropdownToggle,
  CDropdownMenu,
  CDropdownItem,
  CDropdownDivider,
  CFormInput,
} from '@coreui/vue'
</script>
