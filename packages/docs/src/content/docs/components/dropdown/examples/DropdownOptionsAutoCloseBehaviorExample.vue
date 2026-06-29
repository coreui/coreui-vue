<template>
  <div class="d-flex gap-1">
    <CDropdown>
      <CDropdownToggle color="secondary">Default dropdown</CDropdownToggle>
      <CDropdownMenu>
        <CDropdownItem href="#">Action</CDropdownItem>
        <CDropdownItem href="#">Another action</CDropdownItem>
        <CDropdownItem href="#">Something else here</CDropdownItem>
      </CDropdownMenu>
    </CDropdown>
    <CDropdown auto-close="inside">
      <CDropdownToggle color="secondary">Clickable inside</CDropdownToggle>
      <CDropdownMenu>
        <CDropdownItem href="#">Action</CDropdownItem>
        <CDropdownItem href="#">Another action</CDropdownItem>
        <CDropdownItem href="#">Something else here</CDropdownItem>
      </CDropdownMenu>
    </CDropdown>
    <CDropdown auto-close="outside">
      <CDropdownToggle color="secondary">Clickable outside</CDropdownToggle>
      <CDropdownMenu>
        <CDropdownItem href="#">Action</CDropdownItem>
        <CDropdownItem href="#">Another action</CDropdownItem>
        <CDropdownItem href="#">Something else here</CDropdownItem>
      </CDropdownMenu>
    </CDropdown>
    <CDropdown :auto-close="false">
      <CDropdownToggle color="secondary">Manual close</CDropdownToggle>
      <CDropdownMenu>
        <CDropdownItem href="#">Action</CDropdownItem>
        <CDropdownItem href="#">Another action</CDropdownItem>
        <CDropdownItem href="#">Something else here</CDropdownItem>
      </CDropdownMenu>
    </CDropdown>
  </div>
</template>

<script setup>
import { CDropdown, CDropdownToggle, CDropdownMenu, CDropdownItem } from '@coreui/vue'
</script>
