<template>
  <div class="mb-3">
    <CFormInput id="formFile" type="file" label="Default file input example" />
  </div>
  <div class="mb-3">
    <CFormInput id="formFileMultiple" type="file" label="Multiple files input example" multiple />
  </div>
  <div class="mb-3">
    <CFormInput id="formFileDisabled" type="file" label="Disabled file input example" disabled />
  </div>
  <div class="mb-3">
    <CFormInput id="formFileSm" type="file" size="sm" label="Small file input example" />
  </div>
  <div>
    <CFormInput id="formFileLg" type="file" size="lg" label="Large file input example" />
  </div>
</template>

<script setup>
import { CFormInput } from '@coreui/vue'
</script>
