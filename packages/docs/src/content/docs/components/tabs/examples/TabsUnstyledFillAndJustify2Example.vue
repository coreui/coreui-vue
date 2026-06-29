<template>
  <CTabs :active-item-key="2">
    <CTabList variant="tabs" layout="justified">
      <CTab aria-controls="home-tab-pane" :item-key="1">Home</CTab>
      <CTab aria-controls="profile-tab-pane" :item-key="2">Profile</CTab>
      <CTab aria-controls="contact-tab-pane" :item-key="3">Contact</CTab>
      <CTab aria-controls="disabled-tab-pane" disabled :item-key="4">Disabled</CTab>
    </CTabList>
    <CTabContent>
      <CTabPanel class="py-3" aria-labelledby="home-tab-pane" :item-key="1">
        Home tab content
      </CTabPanel>
      <CTabPanel class="py-3" aria-labelledby="profile-tab-pane" :item-key="2">
        Profile tab content
      </CTabPanel>
      <CTabPanel class="py-3" aria-labelledby="contact-tab-pane" :item-key="3">
        Contact tab content
      </CTabPanel>
      <CTabPanel class="py-3" aria-labelledby="disabled-tab-pane" :item-key="4">
        Disabled tab content
      </CTabPanel>
    </CTabContent>
  </CTabs>
</template>

<script setup>
import { CTabs, CTabList, CTab, CTabContent, CTabPanel } from '@coreui/vue'
</script>
