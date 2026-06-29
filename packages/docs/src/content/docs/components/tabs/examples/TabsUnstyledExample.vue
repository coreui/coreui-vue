<template>
  <CTabs active-item-key="profile">
    <CTabList>
      <CTab item-key="home">Home</CTab>
      <CTab item-key="profile">Profile</CTab>
      <CTab item-key="contact">Contact</CTab>
      <CTab disabled item-key="disabled">Disabled</CTab>
    </CTabList>
    <CTabContent>
      <CTabPanel class="p-3" item-key="home"> Home tab content </CTabPanel>
      <CTabPanel class="p-3" item-key="profile"> Profile tab content </CTabPanel>
      <CTabPanel class="p-3" item-key="contact"> Contact tab content </CTabPanel>
      <CTabPanel class="p-3" item-key="disabled"> Disabled tab content </CTabPanel>
    </CTabContent>
  </CTabs>
</template>

<script setup>
import { CTabs, CTabList, CTab, CTabContent, CTabPanel } from '@coreui/vue'
</script>
