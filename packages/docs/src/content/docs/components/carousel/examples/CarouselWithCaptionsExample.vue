<template>
  <CCarousel controls indicators>
    <CCarouselItem>
      <img class="d-block w-100" src="/assets/img/vue.jpg" alt="slide 1" />
      <CCarouselCaption class="d-none d-md-block">
        <h5>First slide label</h5>
        <p>Some representative placeholder content for the first slide.</p>
      </CCarouselCaption>
    </CCarouselItem>
    <CCarouselItem>
      <img class="d-block w-100" src="/assets/img/react.jpg" alt="slide 2" />
      <CCarouselCaption class="d-none d-md-block">
        <h5>First slide label</h5>
        <p>Some representative placeholder content for the first slide.</p>
      </CCarouselCaption>
    </CCarouselItem>
    <CCarouselItem>
      <img class="d-block w-100" src="/assets/img/angular.jpg" alt="slide 3" />
      <CCarouselCaption class="d-none d-md-block">
        <h5>First slide label</h5>
        <p>Some representative placeholder content for the first slide.</p>
      </CCarouselCaption>
    </CCarouselItem>
  </CCarousel>
</template>

<script setup>
import { CCarousel, CCarouselItem, CCarouselCaption } from '@coreui/vue'
</script>
