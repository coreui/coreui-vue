<template>
  <div>
    <CChipInput
      v-model="tags"
      @add="onAdd"
      @remove="onRemove"
      placeholder="Type to trigger events..."
    />

    <div class="mt-3 p-3 bg-light rounded" v-if="events.length">
      <h6>Event Log:</h6>
      <ul class="list-unstyled small mb-0">
        <li v-for="(event, index) in events.slice(-5)" :key="index">
          <span class="badge bg-secondary me-2">{{ event.type }}</span>
          {{ event.value }}
        </li>
      </ul>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue'
import { CChipInput } from '@coreui/vue'

const tags = ref(['Demo', 'Events'])
const events = ref([])

const onAdd = (value) => {
  events.value.push({ type: 'add', value })
}

const onRemove = (value) => {
  events.value.push({ type: 'remove', value })
}
</script>
