<template>
  <CFormFloating>
    <CFormTextarea
      id="floatingTextarea"
      floatingLabel="Comments"
      placeholder="Leave a comment here"
    ></CFormTextarea>
  </CFormFloating>
</template>

<script setup>
import { CFormFloating, CFormTextarea } from '@coreui/vue'
</script>
