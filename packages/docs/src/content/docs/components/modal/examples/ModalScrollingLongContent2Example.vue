<template>
  <CButton
    color="primary"
    @click="
      () => {
        visibleScrollableDemo = true
      }
    "
    >Launch static backdrop modal</CButton
  >
  <CModal
    scrollable
    :visible="visibleScrollableDemo"
    aria-labelledby="ScrollingLongContentExampleLabel2"
    @close="
      () => {
        visibleScrollableDemo = false
      }
    "
  >
    <CModalHeader>
      <CModalTitle id="ScrollingLongContentExampleLabel2">Modal title</CModalTitle>
    </CModalHeader>
    <CModalBody>
      <p>
        Cras mattis consectetur purus sit amet fermentum. Cras justo odio, dapibus ac facilisis in,
        egestas eget quam. Morbi leo risus, porta ac consectetur ac, vestibulum at eros.
      </p>
      <p>
        Praesent commodo cursus magna, vel scelerisque nisl consectetur et. Vivamus sagittis lacus
        vel augue laoreet rutrum faucibus dolor auctor.
      </p>
      <p>
        Aenean lacinia bibendum nulla sed consectetur. Praesent commodo cursus magna, vel
        scelerisque nisl consectetur et. Donec sed odio dui. Donec ullamcorper nulla non metus
        auctor fringilla.
      </p>
      <p>
        Cras mattis consectetur purus sit amet fermentum. Cras justo odio, dapibus ac facilisis in,
        egestas eget quam. Morbi leo risus, porta ac consectetur ac, vestibulum at eros.
      </p>
      <p>
        Praesent commodo cursus magna, vel scelerisque nisl consectetur et. Vivamus sagittis lacus
        vel augue laoreet rutrum faucibus dolor auctor.
      </p>
      <p>
        Aenean lacinia bibendum nulla sed consectetur. Praesent commodo cursus magna, vel
        scelerisque nisl consectetur et. Donec sed odio dui. Donec ullamcorper nulla non metus
        auctor fringilla.
      </p>
      <p>
        Cras mattis consectetur purus sit amet fermentum. Cras justo odio, dapibus ac facilisis in,
        egestas eget quam. Morbi leo risus, porta ac consectetur ac, vestibulum at eros.
      </p>
      <p>
        Praesent commodo cursus magna, vel scelerisque nisl consectetur et. Vivamus sagittis lacus
        vel augue laoreet rutrum faucibus dolor auctor.
      </p>
      <p>
        Aenean lacinia bibendum nulla sed consectetur. Praesent commodo cursus magna, vel
        scelerisque nisl consectetur et. Donec sed odio dui. Donec ullamcorper nulla non metus
        auctor fringilla.
      </p>
      <p>
        Cras mattis consectetur purus sit amet fermentum. Cras justo odio, dapibus ac facilisis in,
        egestas eget quam. Morbi leo risus, porta ac consectetur ac, vestibulum at eros.
      </p>
      <p>
        Praesent commodo cursus magna, vel scelerisque nisl consectetur et. Vivamus sagittis lacus
        vel augue laoreet rutrum faucibus dolor auctor.
      </p>
      <p>
        Aenean lacinia bibendum nulla sed consectetur. Praesent commodo cursus magna, vel
        scelerisque nisl consectetur et. Donec sed odio dui. Donec ullamcorper nulla non metus
        auctor fringilla.
      </p>
      <p>
        Cras mattis consectetur purus sit amet fermentum. Cras justo odio, dapibus ac facilisis in,
        egestas eget quam. Morbi leo risus, porta ac consectetur ac, vestibulum at eros.
      </p>
      <p>
        Praesent commodo cursus magna, vel scelerisque nisl consectetur et. Vivamus sagittis lacus
        vel augue laoreet rutrum faucibus dolor auctor.
      </p>
      <p>
        Aenean lacinia bibendum nulla sed consectetur. Praesent commodo cursus magna, vel
        scelerisque nisl consectetur et. Donec sed odio dui. Donec ullamcorper nulla non metus
        auctor fringilla.
      </p>
      <p>
        Cras mattis consectetur purus sit amet fermentum. Cras justo odio, dapibus ac facilisis in,
        egestas eget quam. Morbi leo risus, porta ac consectetur ac, vestibulum at eros.
      </p>
      <p>
        Praesent commodo cursus magna, vel scelerisque nisl consectetur et. Vivamus sagittis lacus
        vel augue laoreet rutrum faucibus dolor auctor.
      </p>
      <p>
        Aenean lacinia bibendum nulla sed consectetur. Praesent commodo cursus magna, vel
        scelerisque nisl consectetur et. Donec sed odio dui. Donec ullamcorper nulla non metus
        auctor fringilla.
      </p>
    </CModalBody>
  </CModal>
</template>

<script setup>
import { CButton, CModal, CModalHeader, CModalTitle, CModalBody } from '@coreui/vue'
import { ref } from 'vue'
const visibleScrollableDemo = ref(false)
</script>
