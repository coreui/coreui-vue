<template>
  <div class='card'>
    <div class='card-body p-0 clearfix'>
      <i :class="iconClasses" class="p-4 font-2xl mr-3 float-left"></i>
      <div class="h5 text-primary mb-0 pt-3">{{header}}</div>
      <div class="text-muted text-uppercase font-weight-bold font-xs">{{text}}</div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'CWidget03',
  props: {
    iconClasses: {
      type: String,
      default: 'fa fa-cogs bg-primary'
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
