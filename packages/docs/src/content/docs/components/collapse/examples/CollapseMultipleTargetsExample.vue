<template>
  <CButton color="primary" @click="visibleA = !visibleA">Toggle first element</CButton>
  <CButton color="primary" @click="visibleB = !visibleB">Toggle second element</CButton>
  <CButton
    color="primary"
    @click="
      () => {
        visibleA = !visibleA
        visibleB = !visibleB
      }
    "
  >
    Toggle both elements
  </CButton>
  <CRow>
    <CCol xs="6">
      <CCollapse :visible="visibleA">
        <CCard class="mt-3">
          <CCardBody>
            Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad
            squid. Nihil anim keffiyeh helvetica, craft beer labore wes anderson cred nesciunt
            sapiente ea proident.
          </CCardBody>
        </CCard>
      </CCollapse>
    </CCol>
    <CCol xs="6">
      <CCollapse :visible="visibleB">
        <CCard class="mt-3">
          <CCardBody>
            Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad
            squid. Nihil anim keffiyeh helvetica, craft beer labore wes anderson cred nesciunt
            sapiente ea proident.
          </CCardBody>
        </CCard>
      </CCollapse>
    </CCol>
  </CRow>
</template>

<script setup>
import { CButton, CRow, CCol, CCollapse, CCard, CCardBody } from '@coreui/vue'
import { ref } from 'vue'
const visibleA = ref(false)
const visibleB = ref(false)
</script>
