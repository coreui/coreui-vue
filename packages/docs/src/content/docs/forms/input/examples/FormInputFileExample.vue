<template>
  <div class="mb-3">
    <CFormInput type="file" id="formFile" label="Default file input example" />
  </div>
  <div class="mb-3">
    <CFormInput type="file" id="formFileMultiple" label="Multiple files input example" multiple />
  </div>
  <div class="mb-3">
    <CFormInput type="file" id="formFileDisabled" label="Disabled file input example" disabled />
  </div>
  <div class="mb-3">
    <CFormInput type="file" size="sm" id="formFileSm" label="Small file input example" />
  </div>
  <div>
    <CFormInput type="file" size="lg" id="formFileLg" label="Large file input example" />
  </div>
</template>

<script setup>
import { CFormInput } from '@coreui/vue'
</script>
