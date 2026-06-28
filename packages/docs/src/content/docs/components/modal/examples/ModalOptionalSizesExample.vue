<template>
  <CButton
    color="primary"
    @click="
      () => {
        visibleTooltipsAndPopoversDemo = true
      }
    "
    >Launch demo modal</CButton
  >
  <CModal
    :visible="visibleTooltipsAndPopoversDemo"
    @close="
      () => {
        visibleTooltipsAndPopoversDemo = false
      }
    "
    aria-labelledby="TooltipsAndPopoverExample"
  >
    <CModalHeader>
      <CModalTitle id="TooltipsAndPopoverExample">Modal title</CModalTitle>
    </CModalHeader>
    <CModalBody>
      <h5>Popover in a modal</h5>
      <p>
        This
        <CButton
          color="secondary"
          v-c-popover="{
            header: 'Popover title',
            content: 'Popover body content is set in this property.',
          }"
          >button</CButton
        >
      </p>
      <hr />
      <h5>Tooltips in a modal</h5>
      <p>
        <CLink v-c-tooltip="'Tooltip'">This link</CLink> and
        <CLink v-c-tooltip="'Tooltip'">that link</CLink> have tooltips on hover.
      </p>
    </CModalBody>
    <CModalFooter>
      <CButton
        color="secondary"
        @click="
          () => {
            visibleTooltipsAndPopoversDemo = false
          }
        "
      >
        Close
      </CButton>
      <CButton color="primary">Save changes</CButton>
    </CModalFooter>
  </CModal>
</template>

<script setup>
import {
  CButton,
  CModal,
  CModalHeader,
  CModalTitle,
  CModalBody,
  CLink,
  CModalFooter,
} from '@coreui/vue'
import { ref } from 'vue'
const visibleTooltipsAndPopoversDemo = ref(false)
</script>
