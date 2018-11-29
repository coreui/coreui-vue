<template functional>
  <div class="card">
    <div class="card-body text-center">
      <div class="text-muted small text-uppercase font-weight-bold">{{props.header}}</div>
        <div class="h2 py-3">{{props.text}}</div>
        <slot></slot>
    </div>
  </div>
</template>

<script>
export default {
  name: 'CWidget08',
  props: {
    header: {
      type: String,
      default: 'header:string'
    },
    text: {
      type: String,
      default: 'text:string'
    }
  }
}
</script>
