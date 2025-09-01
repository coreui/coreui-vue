<template>
  <div>
    <div class="mb-4">
      <h5>Conditional Focus Trap Demo</h5>
      <p class="text-muted">
        This example shows how focus traps can be conditionally activated based on application
        state.
      </p>
    </div>

    <div class="row mb-4">
      <div class="col-md-6">
        <div class="card">
          <div class="card-header">
            <strong>Application State</strong>
          </div>
          <div class="card-body">
            <div class="mb-3">
              <CFormLabel>User Role</CFormLabel>
              <CFormSelect v-model="userRole" @change="updateTrapStates">
                <option value="guest">Guest</option>
                <option value="user">Authenticated User</option>
                <option value="admin">Administrator</option>
              </CFormSelect>
            </div>

            <div class="mb-3">
              <CFormCheck
                id="editing-mode"
                v-model="isEditingMode"
                label="Editing Mode"
                @change="updateTrapStates"
              />
            </div>

            <div class="mb-3">
              <CFormCheck
                id="mobile-view"
                v-model="isMobileView"
                label="Mobile View"
                @change="updateTrapStates"
              />
            </div>

            <div class="mb-3">
              <CFormCheck
                id="high-contrast"
                v-model="isHighContrastMode"
                label="High Contrast Mode"
                @change="updateTrapStates"
              />
            </div>
          </div>
        </div>
      </div>

      <div class="col-md-6">
        <div class="card">
          <div class="card-header">
            <strong>Focus Trap Status</strong>
          </div>
          <div class="card-body">
            <div class="mb-2">
              <CBadge :color="mainPanelTrapActive ? 'success' : 'secondary'">
                Main Panel: {{ mainPanelTrapActive ? 'Active' : 'Inactive' }}
              </CBadge>
            </div>
            <div class="mb-2">
              <CBadge :color="sidebarTrapActive ? 'success' : 'secondary'">
                Sidebar: {{ sidebarTrapActive ? 'Active' : 'Inactive' }}
              </CBadge>
            </div>
            <div class="mb-2">
              <CBadge :color="toolbarTrapActive ? 'success' : 'secondary'">
                Toolbar: {{ toolbarTrapActive ? 'Active' : 'Inactive' }}
              </CBadge>
            </div>
          </div>
        </div>
      </div>
    </div>

    <div class="row">
      <!-- Main Panel -->
      <div class="col-md-8">
        <div class="card">
          <div class="card-header d-flex justify-content-between align-items-center">
            <strong>Main Content Panel</strong>
            <small class="text-muted"> Trap Active: {{ mainPanelTrapActive }} </small>
          </div>
          <div class="card-body">
            <CFocusTrap :active="mainPanelTrapActive">
              <div class="border p-3" :class="{ 'border-success': mainPanelTrapActive }">
                <h6>Content Editor</h6>
                <div class="mb-3">
                  <CFormInput placeholder="Document title..." :disabled="!isEditingMode" />
                </div>
                <div class="mb-3">
                  <CFormTextarea
                    rows="4"
                    placeholder="Document content..."
                    :disabled="!isEditingMode"
                  ></CFormTextarea>
                </div>
                <div class="d-flex gap-2">
                  <CButton color="primary" size="sm" :disabled="!isEditingMode"> Save </CButton>
                  <CButton color="secondary" size="sm" :disabled="!isEditingMode">
                    Preview
                  </CButton>
                </div>
              </div>
            </CFocusTrap>
          </div>
        </div>
      </div>

      <!-- Sidebar -->
      <div class="col-md-4">
        <div class="card mb-3">
          <div class="card-header d-flex justify-content-between align-items-center">
            <strong>Sidebar Navigation</strong>
            <small class="text-muted"> Trap Active: {{ sidebarTrapActive }} </small>
          </div>
          <div class="card-body">
            <CFocusTrap :active="sidebarTrapActive">
              <div class="border p-2" :class="{ 'border-success': sidebarTrapActive }">
                <CNav variant="pills" orientation="vertical">
                  <CNavItem>
                    <CNavLink href="#" active>Dashboard</CNavLink>
                  </CNavItem>
                  <CNavItem>
                    <CNavLink href="#" :disabled="userRole === 'guest'"> My Documents </CNavLink>
                  </CNavItem>
                  <CNavItem>
                    <CNavLink href="#" :disabled="userRole !== 'admin'"> Admin Panel </CNavLink>
                  </CNavItem>
                  <CNavItem>
                    <CNavLink href="#">Settings</CNavLink>
                  </CNavItem>
                </CNav>
              </div>
            </CFocusTrap>
          </div>
        </div>

        <!-- Toolbar -->
        <div class="card">
          <div class="card-header d-flex justify-content-between align-items-center">
            <strong>Quick Actions</strong>
            <small class="text-muted"> Trap Active: {{ toolbarTrapActive }} </small>
          </div>
          <div class="card-body">
            <CFocusTrap :active="toolbarTrapActive">
              <div class="border p-2" :class="{ 'border-success': toolbarTrapActive }">
                <div class="d-grid gap-2">
                  <CButton
                    color="primary"
                    variant="outline"
                    size="sm"
                    :disabled="userRole === 'guest'"
                  >
                    New Document
                  </CButton>
                  <CButton color="secondary" variant="outline" size="sm"> Help </CButton>
                  <CButton
                    color="info"
                    variant="outline"
                    size="sm"
                    :disabled="userRole === 'guest'"
                  >
                    Keyboard Shortcuts
                  </CButton>
                </div>
              </div>
            </CFocusTrap>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, computed } from 'vue'
import {
  CButton,
  CFormInput,
  CFormTextarea,
  CFormLabel,
  CFormSelect,
  CFormCheck,
  CBadge,
  CNav,
  CNavItem,
  CNavLink,
  CFocusTrap,
} from '@coreui/vue'

const userRole = ref('guest')
const isEditingMode = ref(false)
const isMobileView = ref(false)
const isHighContrastMode = ref(false)

// Computed properties for conditional trap activation
const mainPanelTrapActive = computed(() => {
  // Activate main panel trap when in editing mode and user has permission
  return isEditingMode.value && userRole.value !== 'guest'
})

const sidebarTrapActive = computed(() => {
  // Activate sidebar trap in mobile view for better accessibility
  return isMobileView.value
})

const toolbarTrapActive = computed(() => {
  // Activate toolbar trap in high contrast mode or for admin users
  return isHighContrastMode.value || userRole.value === 'admin'
})

const updateTrapStates = () => {
  // This function is called when any state changes
  // In a real app, you might want to emit events or update global state
  console.log('Focus trap states updated:', {
    mainPanel: mainPanelTrapActive.value,
    sidebar: sidebarTrapActive.value,
    toolbar: toolbarTrapActive.value,
  })
}
</script>
