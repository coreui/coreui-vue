<template>
  <CButton
    class="mb-3"
    color="primary"
    aria-expanded="{visible}"
    aria-controls="collapseWidthExample"
    @click="visibleHorizontal = !visibleHorizontal"
    >Button</CButton
  >
  <div style="min-height: 120px">
    <CCollapse horizontal :visible="visibleHorizontal">
      <CCard style="width: 300px">
        <CCardBody>
          This is some placeholder content for a horizontal collapse. It's hidden by default and
          shown when triggered.
        </CCardBody>
      </CCard>
    </CCollapse>
  </div>
</template>

<script setup>
import { CButton, CCollapse, CCard, CCardBody } from '@coreui/vue'
import { ref } from 'vue'
const visible = ref(false)
const visibleHorizontal = ref(false)
</script>
