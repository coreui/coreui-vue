<template functional>
  <div class="card">
    <div class="card-body p-3 clearfix">
      <i class="p-3 font-2xl mr-3 float-left"
         :class="props.iconClasses">
      </i>
      <div class="h5 text-primary mb-0 mt-2">{{props.header}}</div>
      <div class="text-muted text-uppercase font-weight-bold font-xs">{{props.text}}</div>
    </div>
    <div class="card-footer px-3 py-2"
         v-if="props.showLink">
      <slot>
        <CLink class="font-weight-bold font-xs btn-block text-muted"
                :href="props.link">
          View More
          <i class="fa fa-angle-right float-right font-lg"></i>
        </CLink>
      </slot>
    </div>
  </div>
</template>

<script>
import CLink from '../Link/CLink'
export default {
  name: 'CWidget02',
  components: {
    CLink
  },
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
    }
  }
}
</script>
