<template>
  <div class="carousel-item" :class="classes">
    <img v-if="imgSrc" :src="imgSrc" class="d-block w-100 h-100 img-fluid"/>
    <slot>
      <div class="carousel-caption">
        <h3>{{caption}}</h3>
        <p>{{text}}</p>
      </div>
    </slot>
  </div>
</template>

<script>
export default {
  name: 'CCarouselItem',
  props: {
    imgSrc: String,
    caption: String,
    text: String,
    active: Boolean,
  },
  data () {
    return {
      classes: this.active ? 'active' : ''
    }
  }
}
</script>
