<template>
  <div>
    <div class="mb-3">
      <CChipInput
        id="skillsInputSm"
        label="Small"
        size="sm"
        v-model="smallTags"
        placeholder="Add a small chip"
      />
    </div>

    <div class="mb-3">
      <CChipInput
        id="skillsInputDefault"
        label="Default"
        v-model="defaultTags"
        placeholder="Add a default chip"
      />
    </div>

    <div>
      <CChipInput
        id="skillsInputLg"
        label="Large"
        size="lg"
        v-model="largeTags"
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
