<template>
  <div class="card" :class="cardClasses">
    <div class="card-body pb-0">
      <slot name='dropdown'></slot>
      <h4 class="mb-0">{{header}}</h4>
      <p>{{text}}</p>
    </div>
    <div class="chart-wrapper">
      <slot name='chart'></slot>
    </div>
  </div>
</template>

<script>
export default {
  name: 'CWidget06',
  data () {
    return{
      backgroundColor: '',
    }
  },
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
    },
  }
}
</script>
