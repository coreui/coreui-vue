<template>
  <CForm>
    <fieldset disabled>
      <legend>Disabled fieldset example</legend>
      <div class="mb-3">
        <CFormLabel for="disabledTextInput">Disabled input</CFormLabel>
        <CFormInput id="disabledTextInput" placeholder="Disabled input" />
      </div>
      <div class="mb-3">
        <CFormLabel for="disabledSelect">Disabled select menu</CFormLabel>
        <CFormSelect id="disabledSelect">
          <option>Disabled select</option>
        </CFormSelect>
      </div>
      <div class="mb-3">
        <CFormCheck id="disabledFieldsetCheck" label="Can't check this" disabled />
      </div>
      <CButton color="primary" type="submit">Submit</CButton>
    </fieldset>
  </CForm>
</template>

<script setup>
import { CForm, CFormLabel, CFormInput, CFormSelect, CFormCheck, CButton } from '@coreui/vue'
</script>
