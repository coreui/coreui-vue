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
const visibleLiveDemo = ref(false)
const visibleStaticBackdropDemo = ref(false)
const visibleScrollingLongContentDemo = ref(false)
const visibleScrollableDemo = ref(false)
const visibleVerticallyCenteredDemo = ref(false)
const visibleVerticallyCenteredScrollableDemo = ref(false)
const visibleTooltipsAndPopoversDemo = ref(false)
const visibleToggleBetweenModalsDemo1 = ref(false)
const visibleToggleBetweenModalsDemo2 = ref(false)
const xlDemo = ref(false)
const lgDemo = ref(false)
const smDemo = ref(false)
const fullscreenDemo = ref(false)
const fullscreenSmDemo = ref(false)
const fullscreenMdDemo = ref(false)
const fullscreenLgDemo = ref(false)
const fullscreenXlDemo = ref(false)
const fullscreenXxlDemo = ref(false)
</script>
