<template>
  <div class="d-flex gap-2 flex-wrap">
    <CChip color="primary">
      <CAvatar color="primary" textColor="white">J</CAvatar>
      John Doe
    </CChip>
    <CChip color="secondary">
      <CAvatar :src="$withBase(`/images/avatars/1.jpg`)" />
      Jane Smith
    </CChip>
    <CChip color="success">
      <CAvatar color="success" textColor="white">A</CAvatar>
      Alice Brown
    </CChip>
  </div>
</template>

<script setup>
import { CChip, CAvatar } from '@coreui/vue'
</script>
