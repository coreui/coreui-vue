<template>
  <div>
    <CDropdown>
      <CDropdownToggle color="primary">
        Enhanced Dropdown with Focus Trap
      </CDropdownToggle>
      <CDropdownMenu>
        <CFocusTrap :active="true">
          <div>
            <CDropdownHeader>Search Options</CDropdownHeader>
            <div class="px-3 py-2">
              <CFormInput 
                size="sm" 
                placeholder="Search items..." 
                @keydown.escape="closeDropdown"
              />
            </div>
            <CDropdownDivider />
            <CDropdownItem href="#">Action 1</CDropdownItem>
            <CDropdownItem href="#">Action 2</CDropdownItem>
            <CDropdownItem href="#">Action 3</CDropdownItem>
            <CDropdownDivider />
            <div class="px-3 py-2">
              <CButton size="sm" color="primary" class="me-2">Apply</CButton>
              <CButton size="sm" color="secondary" @click="closeDropdown">Cancel</CButton>
            </div>
          </div>
        </CFocusTrap>
      </CDropdownMenu>
    </CDropdown>
  </div>
</template>

<script setup>
import { 
  CButton,
  CDropdown, 
  CDropdownToggle, 
  CDropdownMenu, 
  CDropdownHeader,
  CDropdownItem,
  CDropdownDivider,
  CFormInput,
  CFocusTrap
} from '@coreui/vue'

const closeDropdown = () => {
  // In a real implementation, you would close the dropdown here
  console.log('Dropdown should close')
}
</script>