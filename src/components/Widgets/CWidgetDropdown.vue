<template functional>
  <div class="card" :class="`bg-${props.variant}`">
    <div class="card-body pb-0">
      <slot name="dropdown"></slot>
      <h4 class="mb-0">{{props.header}}</h4>
      <p>{{props.text}}</p>
    </div>
    <slot></slot>
  </div>
</template>

<script>
export default {
  name: 'CWidgetDropdown',
  props: {
    variant: {
      type: String,
      default: 'primary'
    },
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
