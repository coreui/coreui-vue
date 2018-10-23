<template>
  <div class='card' :class="styleClasses">
    <div class='card-body'>
      <div class="h4 m-0">{{header}}</div>
      <div>{{text}}</div>
      <c-progress height={} :variant="variant" :value="value"
                  :class="[backgroundColor ? 'progress-white' : '', 'progress-xs my-3 mb-0']"/>
      <small class="text-muted">{{footer}}</small>
    </div>
  </div>
</template>

<script>
export default {
  name: 'CWidget01',
  data () {
    return{
      backgroundColor: '',
      styleClasses: '',
    }
  },
  created ()  {
    if(this.variant.includes('background')){
      this.backgroundColor = this.variant.replace('background-','');
      this.styleClasses = 'text-white bg-' + this.backgroundColor
    }
  },
  props: {
    header: {
      type: String,
      default: 'header:string'
    },
    text: {
      type: String,
      default: 'text:string'
    },
    variant: {
      type: String,
      default: ''
    },
    footer: {
      type: String,
      default: 'footer:string'
    },
    value: {
      type: Number,
      default: 25
    },
  }
}
</script>
