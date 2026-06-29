<template>
  <CInputGroup class="mb-3">
    <CDropdown variant="input-group">
      <CButton type="button" color="secondary" variant="outline">Action</CButton>
      <CDropdownToggle color="secondary" variant="outline" split />
      <CDropdownMenu>
        <CDropdownItem href="#">Action</CDropdownItem>
        <CDropdownItem href="#">Another action</CDropdownItem>
        <CDropdownItem href="#">Something else here</CDropdownItem>
        <CDropdownDivider />
        <CDropdownItem href="#">Separated link</CDropdownItem>
      </CDropdownMenu>
    </CDropdown>
    <CFormInput aria-label="Text input with segmented dropdown button" />
  </CInputGroup>
  <CInputGroup>
    <CFormInput aria-label="Text input with segmented dropdown button" />
    <CDropdown alignment="end" variant="input-group">
      <CButton type="button" color="secondary" variant="outline">Action</CButton>
      <CDropdownToggle color="secondary" variant="outline" split />
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
  CButton,
  CDropdownToggle,
  CDropdownMenu,
  CDropdownItem,
  CDropdownDivider,
  CFormInput,
} from '@coreui/vue'
</script>
