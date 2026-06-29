<template>
  <div>
    <div class="mb-3">
      <CChipInput
        id="skillsInputSm"
        v-model="smallTags"
        label="Small"
        size="sm"
        placeholder="Add a small chip"
      />
    </div>

    <div class="mb-3">
      <CChipInput
        id="skillsInputDefault"
        v-model="defaultTags"
        label="Default"
        placeholder="Add a default chip"
      />
    </div>

    <div>
      <CChipInput
        id="skillsInputLg"
        v-model="largeTags"
        label="Large"
        size="lg"
        placeholder="Add a large chip"
      />
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue'
import { CChipInput } from '@coreui/vue'

const smallTags = ref(['Small chip'])
const defaultTags = ref(['Default chip'])
const largeTags = ref(['Large chip'])
</script>
