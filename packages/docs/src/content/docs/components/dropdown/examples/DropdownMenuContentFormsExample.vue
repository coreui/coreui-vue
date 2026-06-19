<template>
  <div class="dropdown-menu">
    <CForm class="px-4 py-4">
      <div class="mb-3">
        <CFormLabel for="exampleDropdownFormEmail1">Email address</CFormLabel>
        <CFormInput type="email" id="exampleDropdownFormEmail1" placeholder="email@example.com" />
      </div>
      <div class="mb-3">
        <CFormLabel for="exampleDropdownFormPassword1">Password</CFormLabel>
        <CFormInput type="password" id="exampleDropdownFormPassword1" placeholder="Password" />
      </div>
      <div class="mb-3">
        <CFormCheck id="dropdownCheck" label="Remember me" />
      </div>
      <CButton color="primary" type="submit">Sign in</CButton>
    </CForm>
    <CDropdownDivider />
    <CDropdownItem href="#">New around here? Sign up</CDropdownItem>
    <CDropdownItem href="#">Forgot password?</CDropdownItem>
  </div>
</template>

<script setup>
import {
  CForm,
  CFormLabel,
  CFormInput,
  CFormCheck,
  CButton,
  CDropdownDivider,
  CDropdownItem,
} from '@coreui/vue'
</script>
