---
title: Vue Progress Component
name: Progress
description: Documentation and examples for using Vue progress bars featuring support for stacked bars, animated backgrounds, and text labels.
other_frameworks: progress
---

## Example

Progress components are built with two HTML elements, some CSS to set the width, and a few attributes. We don't use [the HTML5 `<progress>` element](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/progress), ensuring you can stack progress bars, animate them, and place text labels over them.

## Basic usage

::: demo
<CProgress class="mb-3">
  <CProgressBar :value="0"/>
</CProgress>
<CProgress class="mb-3">
  <CProgressBar :value="25"/>
</CProgress>
<CProgress class="mb-3">
  <CProgressBar :value="50"/>
</CProgress>
<CProgress class="mb-3">
  <CProgressBar :value="75"/>
</CProgress>
<CProgress class="mb-3">
  <CProgressBar :value="100"/>
</CProgress>
:::
```vue
<CProgress class="mb-3">
  <CProgressBar :value="0"/>
</CProgress>
<CProgress class="mb-3">
  <CProgressBar :value="25"/>
</CProgress>
<CProgress class="mb-3">
  <CProgressBar :value="50"/>
</CProgress>
<CProgress class="mb-3">
  <CProgressBar :value="75"/>
</CProgress>
<CProgress class="mb-3">
  <CProgressBar :value="100"/>
</CProgress>
```

## Labels

Add labels to your progress bars by placing text within the `<CProgressBar>`.

::: demo
<CProgress class="mb-3">
  <CProgressBar :value="25">25%</CProgressBar>
</CProgress>
:::
```vue
<CProgress class="mb-3">
  <CProgressBar :value="25">25%</CProgressBar>
</CProgress>
```

## Height

We only set a `height` value on the `<CProgress>`, so if you change that value the inner `<CProgressBar>` will automatically resize accordingly.

::: demo
<CProgress :height="1" class="mb-3">
  <CProgressBar :value="25"></CProgressBar>
</CProgress>
<CProgress :height="20" class="mb-3">
  <CProgressBar :value="25"></CProgressBar>
</CProgress>
:::
```vue
<CProgress :height="1" class="mb-3">
  <CProgressBar :value="25"></CProgressBar>
</CProgress>
<CProgress :height="20" class="mb-3">
  <CProgressBar :value="25"></CProgressBar>
</CProgress>
```

## Backgrounds

Use `color` prop to change the appearance of individual progress bars.

::: demo
<CProgress class="mb-3">
  <CProgressBar color="success" :value="25"/>
</CProgress>
<CProgress class="mb-3">
  <CProgressBar color="info" :value="50"/>
</CProgress>
<CProgress class="mb-3">
  <CProgressBar color="warning" :value="75"/>
</CProgress>
<CProgress class="mb-3">
  <CProgressBar color="danger" :value="100"/>
</CProgress>
:::
```vue
<CProgress class="mb-3">
  <CProgressBar color="success" :value="25"/>
</CProgress>
<CProgress class="mb-3">
  <CProgressBar color="info" :value="50"/>
</CProgress>
<CProgress class="mb-3">
  <CProgressBar color="warning" :value="75"/>
</CProgress>
<CProgress class="mb-3">
  <CProgressBar color="danger" :value="100"/>
</CProgress>
```

## Multiple bars

Include multiple progress bars in a progress component if you need.

::: demo
<CProgress class="mb-3">
  <CProgressBar :value="15"/>
  <CProgressBar color="success" :value="30"/>
  <CProgressBar color="info" :value="20"/>
</CProgress>
:::
```vue
<CProgress class="mb-3">
  <CProgressBar :value="15"/>
  <CProgressBar color="success" :value="30"/>
  <CProgressBar color="info" :value="20"/>
</CProgress>
```

## Striped

Add `variant="striped"` to any `<CProgressBar>` to apply a stripe via CSS gradient over the progress bar's background color.

::: demo
<CProgress class="mb-3">
  <CProgressBar color="success" variant="striped" :value="25"/>
</CProgress>
<CProgress class="mb-3">
  <CProgressBar color="info" variant="striped" :value="50"/>
</CProgress>
<CProgress class="mb-3">
  <CProgressBar color="warning" variant="striped" :value="75"/>
</CProgress>
<CProgress class="mb-3">
  <CProgressBar color="danger" variant="striped" :value="100"/>
</CProgress>
:::
```vue
<CProgress class="mb-3">
  <CProgressBar color="success" variant="striped" :value="25"/>
</CProgress>
<CProgress class="mb-3">
  <CProgressBar color="info" variant="striped" :value="50"/>
</CProgress>
<CProgress class="mb-3">
  <CProgressBar color="warning" variant="striped" :value="75"/>
</CProgress>
<CProgress class="mb-3">
  <CProgressBar color="danger" variant="striped" :value="100"/>
</CProgress>
```

## Animated stripes

The striped gradient can also be animated. Add `animated` property to `<CProgressBar>` to animate the stripes right to left via CSS3 animations.

::: demo
<CProgress class="mb-3">
  <CProgressBar color="success" variant="striped" animated :value="25"/>
</CProgress>
<CProgress class="mb-3">
  <CProgressBar color="info" variant="striped" animated :value="50"/>
</CProgress>
<CProgress class="mb-3">
  <CProgressBar color="warning" variant="striped" animated :value="75"/>
</CProgress>
<CProgress class="mb-3">
  <CProgressBar color="danger" variant="striped" animated :value="100"/>
</CProgress>
:::
```vue
<CProgress class="mb-3">
  <CProgressBar color="success" variant="striped" animated :value="25"/>
</CProgress>
<CProgress class="mb-3">
  <CProgressBar color="info" variant="striped" animated :value="50"/>
</CProgress>
<CProgress class="mb-3">
  <CProgressBar color="warning" variant="striped" animated :value="75"/>
</CProgress>
<CProgress class="mb-3">
  <CProgressBar color="danger" variant="striped" animated :value="100"/>
</CProgress>
```

## Customizing

### CSS variables

Vue cards use local CSS variables on `.card` for enhanced real-time customization. Values for the CSS variables are set via Sass, so Sass customization is still supported, too.

<ScssDocs file="_progress.scss" capture="progress-css-vars"/>

#### How to use CSS variables

```js
const vars = { 
  '--my-css-var': 10,
  '--my-another-css-var': "red" 
}
return <CProgress :style="vars">...</CProgress>
```

### SASS variables

<ScssDocs file="_variables.scss" capture="progress-variables"/>

## API

!!!include(./api/progress/CProgress.api.md)!!!

!!!include(./api/progress/CProgressBar.api.md)!!!