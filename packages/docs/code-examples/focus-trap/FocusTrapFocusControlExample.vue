<template>
  <div>
    <div class="mb-3">
      <CButton 
        color="primary" 
        class="me-2"
        @click="activateTrap(true)"
      >
        Focus First Element
      </CButton>
      <CButton 
        color="secondary" 
        class="me-2"
        @click="activateTrap(false)"
      >
        Focus Container
      </CButton>
      <CButton 
        color="danger" 
        @click="deactivateTrap"
      >
        Deactivate
      </CButton>
    </div>
    
    <div class="alert alert-info">
      <strong>Instructions:</strong> Click one of the activation buttons above, then use Tab to see the difference in initial focus behavior.
    </div>
    
    <div class="row">
      <div class="col-md-6">
        <div class="card">
          <div class="card-header">
            <strong>Focus First Element ({{ focusFirstEnabled }})</strong>
          </div>
          <div class="card-body">
            <CFocusTrap 
              :active="trapActive && focusFirstEnabled" 
              :focus-first-element="true"
            >
              <div class="border p-3" tabindex="-1">
                <p>Container with tabindex="-1"</p>
                <div class="mb-2">
                  <CFormInput placeholder="First tabbable element" />
                </div>
                <div class="mb-2">
                  <CFormTextarea rows="2" placeholder="Textarea"></CFormTextarea>
                </div>
                <CButton color="success">Submit</CButton>
              </div>
            </CFocusTrap>
          </div>
        </div>
      </div>
      
      <div class="col-md-6">
        <div class="card">
          <div class="card-header">
            <strong>Focus Container ({{ !focusFirstEnabled }})</strong>
          </div>
          <div class="card-body">
            <CFocusTrap 
              :active="trapActive && !focusFirstEnabled" 
              :focus-first-element="false"
            >
              <div class="border p-3" tabindex="-1">
                <p>Container receives focus first</p>
                <div class="mb-2">
                  <CFormInput placeholder="Input field" />
                </div>
                <div class="mb-2">
                  <CFormTextarea rows="2" placeholder="Textarea"></CFormTextarea>
                </div>
                <CButton color="success">Submit</CButton>
              </div>
            </CFocusTrap>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue'
import { 
  CButton, 
  CFormInput, 
  CFormTextarea,
  CFocusTrap 
} from '@coreui/vue'

const trapActive = ref(false)
const focusFirstEnabled = ref(true)

const activateTrap = (focusFirst) => {
  focusFirstEnabled.value = focusFirst
  trapActive.value = true
}

const deactivateTrap = () => {
  trapActive.value = false
}
</script>