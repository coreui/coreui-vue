<template>
  <div class="card">
    <div class="card-body text-center">
      <div
        v-if="header"
        class="text-muted small text-uppercase font-weight-bold"
      >
        {{header}}
      </div>
      <div v-if="text" class="h2 py-3">
        {{text}}
      </div>
      <slot></slot>
    </div>
  </div>
</template>

<script>
export default {
  name: 'CWidgetSimple',
  props: {
    header: String,
    text: String
  }
}
</script>
