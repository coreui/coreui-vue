<template>
  <CCarousel controls indicators>
    <CCarouselItem>
      <img class="d-block w-100" src="/images/vue.jpg" alt="slide 1" />
    </CCarouselItem>
    <CCarouselItem>
      <img class="d-block w-100" src="/images/react.jpg" alt="slide 2" />
    </CCarouselItem>
    <CCarouselItem>
      <img class="d-block w-100" src="/images/angular.jpg" alt="slide 3" />
    </CCarouselItem>
  </CCarousel>
</template>

<script setup>
import { CCarousel, CCarouselItem } from '@coreui/vue'
</script>
