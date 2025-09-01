<template>
  <div>
    <CButton 
      color="primary" 
      @click="trapActive = !trapActive"
    >
      {{ trapActive ? 'Deactivate' : 'Activate' }} Focus Trap
    </CButton>
    
    <div class="mt-3 p-3 border rounded">
      <CFocusTrap :active="trapActive">
        <div class="p-3 bg-light border rounded">
          <h5>Focus Trapped Area</h5>
          <p>Tab and Shift+Tab will cycle within this area when active.</p>
          <div class="d-flex gap-2">
            <input type="text" class="form-control" placeholder="First input" />
            <input type="text" class="form-control" placeholder="Second input" />
            <CButton color="secondary">Button</CButton>
          </div>
        </div>
      </CFocusTrap>
    </div>
    
    <div class="mt-3 p-3 border rounded">
      <h5>Outside Trapped Area</h5>
      <p>These elements are not accessible via Tab when focus trap is active.</p>
      <input type="text" class="form-control mb-2" placeholder="Outside input" />
      <CButton color="warning">Outside Button</CButton>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue'
import { CButton, CFocusTrap } from '@coreui/vue'

const trapActive = ref(false)
</script>