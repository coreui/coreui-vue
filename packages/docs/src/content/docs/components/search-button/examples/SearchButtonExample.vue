<template>
  <CSearchButton
    aria-label="Open search dialog"
    aria-controls="search-button-modal"
    shortcut="meta+/,ctrl+/"
    @trigger="visible = true"
  />
  <CModal
    id="search-button-modal"
    :visible="visible"
    aria-labelledby="search-button-modal-title"
    @close="visible = false"
  >
    <CModalHeader>
      <CModalTitle id="search-button-modal-title" class="w-100">
        <CFormInput type="search" placeholder="Search" aria-label="Search" />
      </CModalTitle>
    </CModalHeader>
    <CModalBody>
      <p class="text-body-secondary small mb-2">Recent searches</p>
      <CListGroup flush>
        <CListGroupItem
          as="button"
          type="button"
          class="d-flex justify-content-between align-items-center"
        >
          CoreUI components overview
          <CBadge color="secondary" shape="rounded-pill">Open</CBadge>
        </CListGroupItem>
        <CListGroupItem
          as="button"
          type="button"
          class="d-flex justify-content-between align-items-center"
        >
          Modal dialog examples
          <CBadge color="secondary" shape="rounded-pill">Open</CBadge>
        </CListGroupItem>
        <CListGroupItem
          as="button"
          type="button"
          class="d-flex justify-content-between align-items-center"
        >
          Sidebar navigation customization
          <CBadge color="secondary" shape="rounded-pill">Open</CBadge>
        </CListGroupItem>
      </CListGroup>
    </CModalBody>
  </CModal>
</template>

<script setup>
import { ref } from 'vue'
import {
  CBadge,
  CFormInput,
  CListGroup,
  CListGroupItem,
  CModal,
  CModalBody,
  CModalHeader,
  CModalTitle,
  CSearchButton,
} from '@coreui/vue'

const visible = ref(false)
</script>
