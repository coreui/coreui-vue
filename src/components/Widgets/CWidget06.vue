<template functional>
  <div class="card" :class="props.cardClasses">
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
  name: 'CWidget06',
  props: {
    cardClasses: {
      type: String,
      default: ''
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
