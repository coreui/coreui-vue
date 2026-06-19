<template>
  <CButton color="primary" class="position-relative">
    Profile
    <CBadge color="danger" position="top-start" shape="rounded-pill">
      99+ <span class="visually-hidden">unread messages</span>
    </CBadge>
  </CButton>
  <CButton color="primary" class="position-relative ms-1">
    Profile
    <CBadge color="danger" position="top-end" shape="rounded-pill">
      99+ <span class="visually-hidden">unread messages</span>
    </CBadge>
  </CButton>
  <br />
  <CButton color="primary" class="position-relative">
    Profile
    <CBadge color="danger" position="bottom-start" shape="rounded-pill">
      99+ <span class="visually-hidden">unread messages</span>
    </CBadge>
  </CButton>
  <CButton color="primary" class="position-relative ms-1">
    Profile
    <CBadge color="danger" position="bottom-end" shape="rounded-pill">
      99+ <span class="visually-hidden">unread messages</span>
    </CBadge>
  </CButton>
</template>

<script setup>
import { CButton, CBadge } from '@coreui/vue'
</script>
