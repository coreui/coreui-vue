<template>
  <CInputGroup class="mb-3">
    <CInputGroupText as="label" for="inputGroupSelect01">Options</CInputGroupText>
    <CFormSelect id="inputGroupSelect01">
      <option>Choose...</option>
      <option value="1">One</option>
      <option value="2">Two</option>
      <option value="3">Three</option>
    </CFormSelect>
  </CInputGroup>
  <CInputGroup class="mb-3">
    <CFormSelect id="inputGroupSelect02">
      <option>Choose...</option>
      <option value="1">One</option>
      <option value="2">Two</option>
      <option value="3">Three</option>
    </CFormSelect>
    <CInputGroupText as="label" for="inputGroupSelect02">Options</CInputGroupText>
  </CInputGroup>
  <CInputGroup class="mb-3">
    <CButton type="button" color="secondary" variant="outline">Button</CButton>
    <CFormSelect id="inputGroupSelect03" aria-label="Example select with button addon">
      <option>Choose...</option>
      <option value="1">One</option>
      <option value="2">Two</option>
      <option value="3">Three</option>
    </CFormSelect>
  </CInputGroup>
  <CInputGroup>
    <CFormSelect id="inputGroupSelect04" aria-label="Example select with button addon">
      <option>Choose...</option>
      <option value="1">One</option>
      <option value="2">Two</option>
      <option value="3">Three</option>
    </CFormSelect>
    <CButton type="button" color="secondary" variant="outline">Button</CButton>
  </CInputGroup>
</template>

<script setup>
import { CInputGroup, CInputGroupText, CFormSelect, CButton } from '@coreui/vue'
</script>
