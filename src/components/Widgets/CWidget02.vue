<template>
  <div class='card'>
    <div class="card-body p-3 clearfix">
      <i :class="iconClasses" class="fa fa-cogs bg-primary p-3 font-2xl mr-3 float-left"></i>
      <div class="h5 text-primary mb-0 mt-2">{{header}}</div>
      <div class="text-muted text-uppercase font-weight-bold font-xs">{{text}}</div>
    </div>
    <div class='card-footer px-3 py-2' v-if="showLink">
      <c-link class="font-weight-bold font-xs btn-block text-muted" :href="link">View More <i class="fa fa-angle-right float-right font-lg"></i></c-link>
    </div>
  </div>
</template>

<script>
export default {
  name: 'CWidget02',
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
    showLink: {
      type: Boolean,
      default: false
    },
    link: {
      type: String,
      default: '#'
    },
  }
}
</script>
