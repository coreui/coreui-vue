<template>
  <div>
    <CButton color="primary" @click="modalVisible = true">
      Open Modal with Focus Trap
    </CButton>
    
    <CModal 
      :visible="modalVisible" 
      @close="modalVisible = false"
      aria-labelledby="modal-title"
      aria-describedby="modal-description"
    >
      <CModalHeader>
        <CModalTitle id="modal-title">Modal with Built-in Focus Trap</CModalTitle>
      </CModalHeader>
      <CModalBody>
        <p id="modal-description">
          This modal includes built-in focus trapping. Try using Tab to navigate - 
          focus will stay within this modal dialog.
        </p>
        <div class="mb-3">
          <CFormLabel for="modal-input-1">First Field</CFormLabel>
          <CFormInput id="modal-input-1" placeholder="Enter text here" />
        </div>
        <div class="mb-3">
          <CFormLabel for="modal-input-2">Second Field</CFormLabel>
          <CFormInput id="modal-input-2" placeholder="Enter more text" />
        </div>
      </CModalBody>
      <CModalFooter>
        <CButton color="secondary" @click="modalVisible = false">
          Close
        </CButton>
        <CButton color="primary">
          Save Changes
        </CButton>
      </CModalFooter>
    </CModal>
  </div>
</template>

<script setup>
import { ref } from 'vue'
import { 
  CButton, 
  CModal, 
  CModalHeader, 
  CModalTitle, 
  CModalBody, 
  CModalFooter,
  CFormLabel,
  CFormInput
} from '@coreui/vue'

const modalVisible = ref(false)
</script>