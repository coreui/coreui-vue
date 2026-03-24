<template>
  <div>
    <div class="d-flex gap-2 flex-wrap">
      <CChip
        v-for="(tag, index) in tags"
        :key="index"
        removable
        color="primary"
        @remove="removeTag(index)"
      >
        {{ tag }}
      </CChip>
    </div>

    <CButton
      v-if="tags.length === 0"
      size="sm"
      color="secondary"
      class="mt-3"
      @click="resetTags"
    >
      Reset Tags
    </CButton>
  </div>
</template>

<script setup>
import { ref } from 'vue'
import { CChip, CButton } from '@coreui/vue'

const tags = ref(['Vue.js', 'TypeScript', 'CoreUI', 'Components'])

const removeTag = (index) => {
  tags.value.splice(index, 1)
}

const resetTags = () => {
  tags.value = ['Vue.js', 'TypeScript', 'CoreUI', 'Components']
}
</script>
