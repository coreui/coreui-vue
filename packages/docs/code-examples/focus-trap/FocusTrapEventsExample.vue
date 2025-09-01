<template>
  <div>
    <div class="mb-3">
      <CButton 
        color="primary" 
        class="me-2"
        @click="trapActive = !trapActive"
      >
        {{ trapActive ? 'Deactivate' : 'Activate' }} Focus Trap
      </CButton>
      <CButton 
        color="secondary" 
        @click="clearLog"
      >
        Clear Log
      </CButton>
    </div>
    
    <div class="row">
      <div class="col-md-8">
        <div class="card">
          <div class="card-header">
            <strong>Focus Trap with Event Handling</strong>
          </div>
          <div class="card-body">
            <CFocusTrap 
              :active="trapActive"
              :restore-focus="true"
              @activate="onActivate"
              @deactivate="onDeactivate"
            >
              <div class="border p-3 bg-light">
                <h5>Interactive Content</h5>
                <p>This area demonstrates focus trap event handling.</p>
                
                <div class="mb-3">
                  <CFormLabel for="username">Username</CFormLabel>
                  <CFormInput 
                    id="username" 
                    v-model="formData.username"
                    placeholder="Enter username"
                    @focus="logEvent('Username field focused')"
                  />
                </div>
                
                <div class="mb-3">
                  <CFormLabel for="email">Email</CFormLabel>
                  <CFormInput 
                    id="email" 
                    v-model="formData.email"
                    type="email" 
                    placeholder="Enter email"
                    @focus="logEvent('Email field focused')"
                  />
                </div>
                
                <div class="mb-3">
                  <CFormCheck 
                    id="subscribe" 
                    v-model="formData.subscribe"
                    label="Subscribe to newsletter"
                    @change="logEvent('Checkbox toggled: ' + formData.subscribe)"
                  />
                </div>
                
                <div class="d-flex gap-2">
                  <CButton 
                    color="success" 
                    @click="handleSubmit"
                  >
                    Submit
                  </CButton>
                  <CButton 
                    color="secondary" 
                    @click="handleCancel"
                  >
                    Cancel
                  </CButton>
                </div>
              </div>
            </CFocusTrap>
          </div>
        </div>
      </div>
      
      <div class="col-md-4">
        <div class="card">
          <div class="card-header">
            <strong>Event Log</strong>
          </div>
          <div class="card-body" style="height: 300px; overflow-y: auto;">
            <div v-if="eventLog.length === 0" class="text-muted">
              No events logged yet.
            </div>
            <div 
              v-for="(event, index) in eventLog" 
              :key="index"
              class="small mb-1 p-2 border-bottom"
            >
              <strong>{{ event.timestamp }}:</strong> {{ event.message }}
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, reactive } from 'vue'
import { 
  CButton, 
  CFormInput, 
  CFormLabel,
  CFormCheck,
  CFocusTrap 
} from '@coreui/vue'

const trapActive = ref(false)
const eventLog = ref([])

const formData = reactive({
  username: '',
  email: '',
  subscribe: false
})

const logEvent = (message) => {
  const timestamp = new Date().toLocaleTimeString()
  eventLog.value.unshift({ timestamp, message })
  
  // Limit log to 20 entries
  if (eventLog.value.length > 20) {
    eventLog.value = eventLog.value.slice(0, 20)
  }
}

const onActivate = () => {
  logEvent('🟢 Focus trap activated')
  // Announce to screen readers
  setTimeout(() => {
    const announcement = document.createElement('div')
    announcement.setAttribute('aria-live', 'polite')
    announcement.setAttribute('aria-atomic', 'true')
    announcement.className = 'visually-hidden'
    announcement.textContent = 'Focus trap is now active. Use Tab to navigate within this area.'
    document.body.appendChild(announcement)
    setTimeout(() => document.body.removeChild(announcement), 1000)
  }, 100)
}

const onDeactivate = () => {
  logEvent('🔴 Focus trap deactivated')
  // Announce to screen readers
  setTimeout(() => {
    const announcement = document.createElement('div')
    announcement.setAttribute('aria-live', 'polite')
    announcement.setAttribute('aria-atomic', 'true')
    announcement.className = 'visually-hidden'
    announcement.textContent = 'Focus trap has been deactivated. You can now navigate the entire page.'
    document.body.appendChild(announcement)
    setTimeout(() => document.body.removeChild(announcement), 1000)
  }, 100)
}

const handleSubmit = () => {
  logEvent('📝 Form submitted with data: ' + JSON.stringify(formData))
  trapActive.value = false
}

const handleCancel = () => {
  logEvent('❌ Form cancelled')
  trapActive.value = false
}

const clearLog = () => {
  eventLog.value = []
  logEvent('🧹 Event log cleared')
}
</script>