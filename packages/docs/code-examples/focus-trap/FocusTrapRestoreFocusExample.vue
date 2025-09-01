<template>
  <div>
    <div class="mb-3">
      <p><strong>Instructions:</strong> Focus on one of the buttons below, then activate a focus trap. When you deactivate the trap, notice where focus returns based on the restore-focus setting.</p>
    </div>
    
    <div class="row mb-4">
      <div class="col">
        <CButton 
          id="trigger-btn-1" 
          color="primary" 
          class="me-2"
          @click="activateTrap(true)"
        >
          Activate with Restore Focus
        </CButton>
        <CButton 
          id="trigger-btn-2" 
          color="secondary" 
          class="me-2"
          @click="activateTrap(false)"
        >
          Activate without Restore Focus
        </CButton>
        <CButton 
          id="trigger-btn-3" 
          color="info"
        >
          Another Focusable Button
        </CButton>
      </div>
    </div>
    
    <div class="row">
      <div class="col-md-6">
        <div class="card">
          <div class="card-header">
            <strong>With Restore Focus</strong>
          </div>
          <div class="card-body">
            <CFocusTrap 
              :active="trapActive && restoreFocusEnabled" 
              :restore-focus="true"
              @deactivate="onDeactivate"
            >
              <div class="border p-3">
                <p>Focus will return to the triggering button when deactivated.</p>
                <div class="mb-2">
                  <CFormInput placeholder="Type here..." />
                </div>
                <div class="d-flex gap-2">
                  <CButton color="success" size="sm">Save</CButton>
                  <CButton color="danger" size="sm" @click="deactivateTrap">Close</CButton>
                </div>
              </div>
            </CFocusTrap>
          </div>
        </div>
      </div>
      
      <div class="col-md-6">
        <div class="card">
          <div class="card-header">
            <strong>Without Restore Focus</strong>
          </div>
          <div class="card-body">
            <CFocusTrap 
              :active="trapActive && !restoreFocusEnabled" 
              :restore-focus="false"
              @deactivate="onDeactivate"
            >
              <div class="border p-3">
                <p>Focus will not automatically return when deactivated.</p>
                <div class="mb-2">
                  <CFormInput placeholder="Type here..." />
                </div>
                <div class="d-flex gap-2">
                  <CButton color="success" size="sm">Save</CButton>
                  <CButton color="danger" size="sm" @click="deactivateTrap">Close</CButton>
                </div>
              </div>
            </CFocusTrap>
          </div>
        </div>
      </div>
    </div>
    
    <div v-if="lastEvent" class="alert alert-success mt-3">
      <strong>Last Event:</strong> {{ lastEvent }}
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue'
import { 
  CButton, 
  CFormInput,
  CFocusTrap 
} from '@coreui/vue'

const trapActive = ref(false)
const restoreFocusEnabled = ref(true)
const lastEvent = ref('')

const activateTrap = (restoreFocus) => {
  restoreFocusEnabled.value = restoreFocus
  trapActive.value = true
  lastEvent.value = `Focus trap activated with restore-focus: ${restoreFocus}`
}

const deactivateTrap = () => {
  trapActive.value = false
}

const onDeactivate = () => {
  lastEvent.value = `Focus trap deactivated with restore-focus: ${restoreFocusEnabled.value}`
}
</script>