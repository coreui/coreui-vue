---
title: Vue Carousel Component
name: Carousel
description: Vue carousel is a slideshow component for cycling through elements—images or slides of text—like a carousel.
---

## How it works

The Vue carousel is a slideshow for cycling within a group of content. It runs with a group of images, text, or html elements. It also incorporates support for previous/next buttons.

In browsers where the [Page Visibility API](https://www.w3.org/TR/page-visibility/) is supported, the carousel will avoid sliding when the webpage is not visible to the user (such as when the browser tab is inactive, the browser window is minimized, etc.).

## Example

Carousels don't automatically normalize slide dimensions. As such, you may want to use extra utilities or custom methods to properly size content. While carousels support previous/next controls and indicators, they're not explicitly expected. Add and customize as you see fit.

### Slides only

::: demo
<CCarousel>
  <CCarouselItem>
    <img class="d-block w-100" :src="$withBase('/images/vue.jpg')" alt="slide 1"/>
  </CCarouselItem>
  <CCarouselItem>
    <img class="d-block w-100" :src="$withBase('/images/react.jpg')" alt="slide 2"/>
  </CCarouselItem>
  <CCarouselItem>
    <img class="d-block w-100" :src="$withBase('/images/angular.jpg')" alt="slide 3"/>
  </CCarouselItem>
</CCarousel>
:::
```vue
<CCarousel>
  <CCarouselItem>
    <img class="d-block w-100" src="/images/vue.jpg" alt="slide 1"/>
  </CCarouselItem>
  <CCarouselItem>
    <img class="d-block w-100" src="/images/react.jpg" alt="slide 2"/>
  </CCarouselItem>
  <CCarouselItem>
    <img class="d-block w-100" src="/images/angular.jpg" alt="slide 3"/>
  </CCarouselItem>
</CCarousel>
```

### With controls

Adding in the previous and next controls by `controls` property.

::: demo
<CCarousel controls>
  <CCarouselItem>
    <img class="d-block w-100" :src="$withBase('/images/vue.jpg')" alt="slide 1"/>
  </CCarouselItem>
  <CCarouselItem>
    <img class="d-block w-100" :src="$withBase('/images/react.jpg')" alt="slide 2"/>
  </CCarouselItem>
  <CCarouselItem>
    <img class="d-block w-100" :src="$withBase('/images/angular.jpg')" alt="slide 3"/>
  </CCarouselItem>
</CCarousel>
:::
```vue
<CCarousel controls>
  <CCarouselItem>
    <img class="d-block w-100" src="/images/vue.jpg" alt="slide 1"/>
  </CCarouselItem>
  <CCarouselItem>
    <img class="d-block w-100" src="/images/react.jpg" alt="slide 2"/>
  </CCarouselItem>
  <CCarouselItem>
    <img class="d-block w-100" src="/images/angular.jpg" alt="slide 3"/>
  </CCarouselItem>
</CCarousel>
```

### With indicators

You can attach the indicators to the carousel, lengthwise the controls, too.

::: demo
<CCarousel controls indicators>
  <CCarouselItem>
    <img class="d-block w-100" :src="$withBase('/images/vue.jpg')" alt="slide 1"/>
  </CCarouselItem>
  <CCarouselItem>
    <img class="d-block w-100" :src="$withBase('/images/react.jpg')" alt="slide 2"/>
  </CCarouselItem>
  <CCarouselItem>
    <img class="d-block w-100" :src="$withBase('/images/angular.jpg')" alt="slide 3"/>
  </CCarouselItem>
</CCarousel>
:::
```vue
<CCarousel controls>
  <CCarouselItem>
    <img class="d-block w-100" src="/images/vue.jpg" alt="slide 1"/>
  </CCarouselItem>
  <CCarouselItem>
    <img class="d-block w-100" src="/images/react.jpg" alt="slide 2"/>
  </CCarouselItem>
  <CCarouselItem>
    <img class="d-block w-100" src="/images/angular.jpg" alt="slide 3"/>
  </CCarouselItem>
</CCarousel>
```

### With captions

You can add captions to slides with the `<CCarouselCaption>` element within any `<CCarouselItem>`. They can be immediately hidden on smaller viewports, as shown below, with optional [display utilities](https://coreui.io/4.0/utilities/display). We hide them with `.d-none` and draw them back on medium-sized devices with `.d-md-block`.

::: demo
<CCarousel controls indicators>
  <CCarouselItem>
    <img class="d-block w-100" :src="$withBase('/images/vue.jpg')" alt="slide 1"/>
    <CCarouselCaption class="d-none d-md-block">
      <h5>First slide label</h5>
      <p>Some representative placeholder content for the first slide.</p>
    </CCarouselCaption>
  </CCarouselItem>
  <CCarouselItem>
    <img class="d-block w-100" :src="$withBase('/images/react.jpg')" alt="slide 2"/>
    <CCarouselCaption class="d-none d-md-block">
      <h5>First slide label</h5>
      <p>Some representative placeholder content for the first slide.</p>
    </CCarouselCaption>
  </CCarouselItem>
  <CCarouselItem>
    <img class="d-block w-100" :src="$withBase('/images/angular.jpg')" alt="slide 3"/>
    <CCarouselCaption class="d-none d-md-block">
      <h5>First slide label</h5>
      <p>Some representative placeholder content for the first slide.</p>
    </CCarouselCaption>
  </CCarouselItem>
</CCarousel>
:::
```vue
<CCarousel controls indicators>
  <CCarouselItem>
    <img class="d-block w-100" src="/images/vue.jpg" alt="slide 1"/>
    <CCarouselCaption class="d-none d-md-block">
      <h5>First slide label</h5>
      <p>Some representative placeholder content for the first slide.</p>
    </CCarouselCaption>
  </CCarouselItem>
  <CCarouselItem>
    <img class="d-block w-100" src="/images/react.jpg" alt="slide 2"/>
    <CCarouselCaption class="d-none d-md-block">
      <h5>First slide label</h5>
      <p>Some representative placeholder content for the first slide.</p>
    </CCarouselCaption>
  </CCarouselItem>
  <CCarouselItem>
    <img class="d-block w-100" src="/images/angular.jpg" alt="slide 3"/>
    <CCarouselCaption class="d-none d-md-block">
      <h5>First slide label</h5>
      <p>Some representative placeholder content for the first slide.</p>
    </CCarouselCaption>
  </CCarouselItem>
</CCarousel>
```

### Crossfade

Add `transition="crossfade"` to your carousel to animate slides with a fade transition instead of a slide.


::: demo
<CCarousel controls indicators transition="crossfade">
  <CCarouselItem>
    <img class="d-block w-100" :src="$withBase('/images/vue.jpg')" alt="slide 1"/>
  </CCarouselItem>
  <CCarouselItem>
    <img class="d-block w-100" :src="$withBase('/images/react.jpg')" alt="slide 2"/>
  </CCarouselItem>
  <CCarouselItem>
    <img class="d-block w-100" :src="$withBase('/images/angular.jpg')" alt="slide 3"/>
  </CCarouselItem>
</CCarousel>
:::
```vue
<CCarousel controls indicators transition="crossfade">
  <CCarouselItem>
    <img class="d-block w-100" src="/images/vue.jpg" alt="slide 1"/>
  </CCarouselItem>
  <CCarouselItem>
    <img class="d-block w-100" src="/images/react.jpg" alt="slide 2"/>
  </CCarouselItem>
  <CCarouselItem>
    <img class="d-block w-100" src="/images/angular.jpg" alt="slide 3"/>
  </CCarouselItem>
</CCarousel>
```

## Dark variant

Add `dark` property to the `CCarousel` for darker controls, indicators, and captions. Controls have been inverted from their default white fill with the `filter` CSS property. Captions and controls have additional Sass variables that customize the `color` and `background-color`.

::: demo
<CCarousel controls indicators dark>
  <CCarouselItem>
    <img class="d-block w-100" :src="$withBase('/images/vue.jpg')" alt="slide 1"/>
  </CCarouselItem>
  <CCarouselItem>
    <img class="d-block w-100" :src="$withBase('/images/react.jpg')" alt="slide 2"/>
  </CCarouselItem>
  <CCarouselItem>
    <img class="d-block w-100" :src="$withBase('/images/angular.jpg')" alt="slide 3"/>
  </CCarouselItem>
</CCarousel>
:::
```vue
<CCarousel controls indicators transition="crossfade">
  <CCarouselItem>
    <img class="d-block w-100" src="/images/vue.jpg" alt="slide 1"/>
  </CCarouselItem>
  <CCarouselItem>
    <img class="d-block w-100" src="/images/react.jpg" alt="slide 2"/>
  </CCarouselItem>
  <CCarouselItem>
    <img class="d-block w-100" src="/images/angular.jpg" alt="slide 3"/>
  </CCarouselItem>
</CCarousel>
```

## Customizing

### SASS variables

```sass
$carousel-control-color:             $high-emphasis-inverse;
$carousel-control-width:             15%;
$carousel-control-opacity:           .5;
$carousel-control-hover-opacity:     .9;
$carousel-control-transition:        opacity .15s ease;

$carousel-indicator-width:           30px;
$carousel-indicator-height:          3px;
$carousel-indicator-hit-area-height: 10px;
$carousel-indicator-spacer:          3px;
$carousel-indicator-opacity:         .5;
$carousel-indicator-active-bg:       $white;
$carousel-indicator-active-opacity:  1;
$carousel-indicator-transition:      opacity .6s ease;

$carousel-caption-width:             70%;
$carousel-caption-color:             $high-emphasis-inverse;
$carousel-caption-padding-y:         1.25rem;
$carousel-caption-spacer:            1.25rem;

$carousel-control-icon-width:        2rem;

$carousel-control-prev-icon-bg:      url("data:image/svg+xml,<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 16 16' fill='#{$carousel-control-color}'><path d='M11.354 1.646a.5.5 0 0 1 0 .708L5.707 8l5.647 5.646a.5.5 0 0 1-.708.708l-6-6a.5.5 0 0 1 0-.708l6-6a.5.5 0 0 1 .708 0z'/></svg>");
$carousel-control-next-icon-bg:      url("data:image/svg+xml,<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 16 16' fill='#{$carousel-control-color}'><path d='M4.646 1.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1 0 .708l-6 6a.5.5 0 0 1-.708-.708L10.293 8 4.646 2.354a.5.5 0 0 1 0-.708z'/></svg>");

$carousel-transition-duration:       .6s;
$carousel-transition:                transform $carousel-transition-duration ease-in-out; // Define transform transition first if using multiple transitions (e.g., `transform 2s ease, opacity .5s ease-out`)

$carousel-dark-indicator-active-bg:  $black;
$carousel-dark-caption-color:        $high-emphasis;
$carousel-dark-control-icon-filter:  invert(1) grayscale(100);
```

## API

!!!include(./api/carousel/CCarousel.api.md)!!!

!!!include(./api/carousel/CCarouselItem.api.md)!!!