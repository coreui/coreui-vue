<template>
  <div class="mb-3">
    <CFormLabel for="formFile">Default file input example</CFormLabel>
    <CFormInput type="file" id="formFile" />
  </div>
  <div class="mb-3">
    <CFormLabel for="formFileMultiple">Multiple files input example</CFormLabel>
    <CFormInput type="file" id="formFileMultiple" multiple />
  </div>
  <div class="mb-3">
    <CFormLabel for="formFileDisabled">Disabled file input example</CFormLabel>
    <CFormInput type="file" id="formFileDisabled" disabled />
  </div>
  <div class="mb-3">
    <CFormLabel for="formFileSm">Small file input example</CFormLabel>
    <CFormInput type="file" size="sm" id="formFileSm" />
  </div>
  <div>
    <CFormLabel for="formFileLg">Large file input example</CFormLabel>
    <CFormInput type="file" size="lg" id="formFileLg" />
  </div>
</template>

<script setup>
import { CFormLabel, CFormInput } from '@coreui/vue'
</script>
