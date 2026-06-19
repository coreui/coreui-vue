<template>
  <CTabs activeItemKey="profile">
    <CTabList variant="tabs">
      <CTab itemKey="home">Home</CTab>
      <CTab itemKey="profile">Profile</CTab>
      <CTab itemKey="contact">Contact</CTab>
      <CTab disabled itemKey="disabled">Disabled</CTab>
    </CTabList>
    <CTabContent>
      <CTabPanel class="p-3" itemKey="home"> Home tab content </CTabPanel>
      <CTabPanel class="p-3" itemKey="profile"> Profile tab content </CTabPanel>
      <CTabPanel class="p-3" itemKey="contact"> Contact tab content </CTabPanel>
      <CTabPanel class="p-3" itemKey="disabled"> Disabled tab content </CTabPanel>
    </CTabContent>
  </CTabs>
</template>

<script setup>
import { CTabs, CTabList, CTab, CTabContent, CTabPanel } from '@coreui/vue'
</script>
