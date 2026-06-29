<template>
  <CButton color="primary" href="#" @click.prevent="visible = !visible">Link</CButton>
  <CButton color="primary" @click="visible = !visible">Button</CButton>
  <CCollapse :visible="visible">
    <CCard class="mt-3">
      <CCardBody>
        Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad
        squid. Nihil anim keffiyeh helvetica, craft beer labore wes anderson cred nesciunt sapiente
        ea proident.
      </CCardBody>
    </CCard>
  </CCollapse>
</template>

<script setup>
import { CButton, CCollapse, CCard, CCardBody } from '@coreui/vue'
import { ref } from 'vue'
const visible = ref(false)
</script>
