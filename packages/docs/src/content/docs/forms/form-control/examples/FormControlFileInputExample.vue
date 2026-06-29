<template>
  <div class="mb-3">
    <CFormLabel for="formFile">Default file input example</CFormLabel>
    <CFormInput id="formFile" type="file" />
  </div>
  <div class="mb-3">
    <CFormLabel for="formFileMultiple">Multiple files input example</CFormLabel>
    <CFormInput id="formFileMultiple" type="file" multiple />
  </div>
  <div class="mb-3">
    <CFormLabel for="formFileDisabled">Disabled file input example</CFormLabel>
    <CFormInput id="formFileDisabled" type="file" disabled />
  </div>
  <div class="mb-3">
    <CFormLabel for="formFileSm">Small file input example</CFormLabel>
    <CFormInput id="formFileSm" type="file" size="sm" />
  </div>
  <div>
    <CFormLabel for="formFileLg">Large file input example</CFormLabel>
    <CFormInput id="formFileLg" type="file" size="lg" />
  </div>
</template>

<script setup>
import { CFormLabel, CFormInput } from '@coreui/vue'
</script>
