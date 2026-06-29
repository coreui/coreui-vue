<template>
  <template
    v-for="item in ['primary', 'secondary', 'success', 'info', 'warning', 'danger']"
    :key="item"
  >
    <CDropdown :color="item" :toggler-text="item" variant="btn-group">
      <CDropdownToggle :color="item">{{ item }}</CDropdownToggle>
      <CDropdownMenu>
        <CDropdownItem href="#">Action</CDropdownItem>
        <CDropdownItem href="#">Another action</CDropdownItem>
        <CDropdownItem href="#">Something else here</CDropdownItem>
      </CDropdownMenu>
    </CDropdown>
  </template>
</template>

<script setup>
import { CDropdown, CDropdownToggle, CDropdownMenu, CDropdownItem } from '@coreui/vue'
</script>
