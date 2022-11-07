---
title: Vue Image Component
name: Image
description: Vue image component with responsive behavior (so it's never become larger than their parent element) and special styles.
other_frameworks: image
---

## Responsive images

Images in CoreUI for Vue.js are made responsive with `fluid` property. This applies `max-width: 100%;` and `height: auto;` to the image so that it scales with the parent element.

::: demo
<CImage fluid :src="$withBase('/images/vue.jpg')" />
:::
```vue
<CImage fluid src="/images/vue.jpg" />
```

## Image thumbnails

In addition to our [border-radius utilities](https://coreui.io/docs/4.0/utilities/borders), you can use prop`thumbnail` to give an image a rounded 1px border appearance.

::: demo
<CImage rounded thumbnail :src="$withBase('/images/vue400.jpg')" width="200" height="200"/>
:::
```vue
<CImage rounded thumbnail src="/images/vue400.jpg" width="200" height="200"/>
```

## Aligning images

Align images with the `align` property.

::: demo
<div class="clearfix">
  <CImage align="start" rounded :src="$withBase('/images/vue400.jpg')" width="200" height="200"/>
  <CImage align="end" rounded :src="$withBase('/images/vue400.jpg')" width="200" height="200"/>
</div>
:::
```vue
<div class="clearfix">
  <CImage align="start" rounded src="/images/vue400.jpg" width="200" height="200"/>
  <CImage align="end" rounded src="/images/vue400.jpg" width="200" height="200"/>
</div>
```

::: demo
<div class="clearfix">
  <CImage align="center" rounded :src="$withBase('/images/vue400.jpg')" width="200" height="200"/>
</div>
:::
```vue
<div class="clearfix">
  <CImage align="center" rounded src="/images/vue400.jpg" width="200" height="200"/>
</div>
```

::: demo
<div class="text-center">
  <CImage rounded :src="$withBase('/images/vue400.jpg')" width="200" height="200"/>
</div>
:::
```vue
<div class="text-center">
  <CImage rounded src="/images/vue400.jpg" width="200" height="200"/>
</div>
```


## API

!!!include(./api/image/CImage.api.md)!!!