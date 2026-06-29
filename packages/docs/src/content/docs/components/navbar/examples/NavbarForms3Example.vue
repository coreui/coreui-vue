<template>
  <CNavbar color-scheme="light" class="bg-light">
    <CForm class="container-fluid">
      <CInputGroup>
        <CInputGroupText id="basic-addon1">@</CInputGroupText>
        <CFormInput placeholder="Username" aria-label="Username" aria-describedby="basic-addon1" />
      </CInputGroup>
    </CForm>
  </CNavbar>
</template>

<script setup>
import { CNavbar, CForm, CInputGroup, CInputGroupText, CFormInput } from '@coreui/vue'
</script>
