<template>
  <CRow :xs="{ gutter: 2 }">
    <CCol md>
      <CFormFloating>
        <CFormInput
          id="floatingInputGrid"
          type="email"
          floating-label="Email address"
          placeholder="name@example.com"
          value="email@example.com"
        />
      </CFormFloating>
    </CCol>
    <CCol md>
      <CFormFloating>
        <CFormSelect
          id="floatingSelectGrid"
          floating-label="Works with selects"
          aria-label="Floating label select example"
        >
          <option>Open this select menu</option>
          <option value="1">One</option>
          <option value="2">Two</option>
          <option value="3">Three</option>
        </CFormSelect>
      </CFormFloating>
    </CCol>
  </CRow>
</template>

<script setup>
import { CRow, CCol, CFormFloating, CFormInput, CFormSelect } from '@coreui/vue'
</script>
