<template>
  <CForm @submit.prevent="handleSubmit">
    <CChipInput
      name="tags"
      label="Tags"
      v-model="tags"
      placeholder="Add tags..."
    />
    <CButton type="submit" color="primary" class="mt-2">Submit</CButton>
    <div v-if="submitted" class="mt-2 text-success">
      <small>Form submitted with tags: {{ submittedTags }}</small>
    </div>
  </CForm>
</template>

<script setup>
import { ref } from 'vue'
import { CChipInput, CForm, CButton } from '@coreui/vue'

const tags = ref(['Tag1', 'Tag2'])
const submitted = ref(false)
const submittedTags = ref('')

const handleSubmit = () => {
  submitted.value = true
  submittedTags.value = tags.value.join(', ')
  setTimeout(() => {
    submitted.value = false
  }, 3000)
}
</script>
