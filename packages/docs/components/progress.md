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
<CProgress :value="0"/>
<CProgress :value="25"/>
<CProgress :value="50"/>
<CProgress :value="75"/>
<CProgress :value="100"/>
:::
```vue
<CProgress :value="0"/>
<CProgress :value="25"/>
<CProgress :value="50"/>
<CProgress :value="75"/>
<CProgress :value="100"/>
```

## Labels

Add labels to your progress bars by placing text within the `<CProgressBar>`.

::: demo
<CProgress :value="25">25%</CProgress>
:::
```vue
<CProgress :value="25">25%</CProgress>
```

Please note that the default setting for the content within the `<CProgressBar />` is to be limited by the `overflow: hidden property`, preventing it from extending beyond the bar's boundaries. If the progress bar is shorter than its label, the content will be truncated and could be difficult to read. To modify this behavior, you can utilize the `.overflow-visible` class from the overflow utilities. However, it is important to specify a specific text color to ensure readability. It's worth noting that this approach currently does not consider color modes.

:::demo
<CProgress :value="10" color="success">
  <CProgressBar class="overflow-visible text-dark px-2">Long label text for the progress bar, set to a dark color</CProgressBar>
</CProgress>
:::
```vue
<CProgress :value="10" color="success">
  <CProgressBar class="overflow-visible text-dark px-2">Long label text for the progress bar, set to a dark color</CProgressBar>
</CProgress>
```

Since **v5.0.0** you can also use the `progressBarClassName` property directly on the `<CProgress />` component to achieve the same.

```vue
<CProgress progressBarClassName="overflow-visible text-dark px-2" color="success" :value="10">Long label text for the progress bar, set to a dark color</CProgress>
```

## Height

We only set a `height` value on the `<CProgress>`, so if you change that value the inner `<CProgressBar>` will automatically resize accordingly.

::: demo
<CProgress :height="1" :value="25" />
<CProgress :height="20" :value="25" />
:::
```vue
<CProgress :height="1" :value="25" />
<CProgress :height="20" :value="25" />
```

## Backgrounds

Use `color` prop to change the appearance of individual progress bars.

::: demo
<CProgress color="success" :value="25"/>
<CProgress color="info" :value="50"/>
<CProgress color="warning" :value="75"/>
<CProgress color="danger" :value="100"/>
:::
```vue
<CProgress color="success" :value="25"/>
<CProgress color="info" :value="50"/>
<CProgress color="warning" :value="75"/>
<CProgress color="danger" :value="100"/>
```

Ensure that when you incorporate labels into progress bars featuring a custom background color, you also select an appropriate text color to ensure readability and maintain adequate contrast for the labels.

::: demo
<CProgress color="success" :value="25">
  <CProgressBar>25%</CProgressBar>
</CProgress>
<CProgress color="info" :value="50">
  <CProgressBar class="text-dark">50%</CProgressBar>
</CProgress>
<CProgress color="warning" :value="75">
  <CProgressBar class="text-dark">75%</CProgressBar>
</CProgress>
<CProgress color="danger" :value="100">
  <CProgressBar>100%</CProgressBar>
</CProgress>
:::
```vue
<CProgress color="success" :value="25">
  <CProgressBar>25%</CProgressBar>
</CProgress>
<CProgress color="info" :value="50">
  <CProgressBar class="text-dark">50%</CProgressBar>
</CProgress>
<CProgress color="warning" :value="75">
  <CProgressBar class="text-dark">75%</CProgressBar>
</CProgress>
<CProgress color="danger" :value="100">
  <CProgressBar>100%</CProgressBar>
</CProgress>
```


Since **v5.0.0** you can also use the `progressBarClassName` property directly on the `<CProgress />` component to achieve the same.

```vue
<CProgress color="success" :value="25">25%</CProgress>
<CProgress color="info" progressBarClassName="text-dark" :value="50">50%</CProgress>
<CProgress color="warning" progressBarClassName="text-dark" :value="75">75%</CProgress>
<CProgress color="danger" :value="100">100%</CProgress>
```

## Multiple bars

Include multiple progress bars in a progress component if you need.

<Callout color="info" title="New markup in v5.0.0">
  In version 5.0.0, we introduced a new <code>&lt;CProgressStacked&gt;</code> component to more logically wrap multiple progress bars into a single stacked progress bar. The previous structure will continue to work until the next major version.
</Callout>


**New markup**

::: demo
<CProgressStacked>
  <CProgress :value="15" />
  <CProgress color="success" :value="30" />
  <CProgress color="info" :value="20" />
</CProgressStacked>
:::
```vue
<CProgressStacked>
  <CProgress :value="15" />
  <CProgress color="success" :value="30" />
  <CProgress color="info" :value="20" />
</CProgressStacked>
```


**Previous markup**
```vue
<CProgress>
  <CProgressBar :value="15" />
  <CProgressBar color="success" :value="30" />
  <CProgressBar color="info" :value="20" />
</CProgress>
```

## Striped

Add `variant="striped"` to any `<CProgressBar>` to apply a stripe via CSS gradient over the progress bar's background color.

::: demo
<CProgress color="success" variant="striped" :value="25"/>
<CProgress color="info" variant="striped" :value="50"/>
<CProgress color="warning" variant="striped" :value="75"/>
<CProgress color="danger" variant="striped" :value="100"/>
:::
```vue
<CProgress color="success" variant="striped" :value="25"/>
<CProgress color="info" variant="striped" :value="50"/>
<CProgress color="warning" variant="striped" :value="75"/>
<CProgress color="danger" variant="striped" :value="100"/>
```

## Animated stripes

The striped gradient can also be animated. Add `animated` property to `<CProgressBar>` to animate the stripes right to left via CSS3 animations.

::: demo
<CProgress color="success" variant="striped" animated :value="25"/>
<CProgress color="info" variant="striped" animated :value="50"/>
<CProgress color="warning" variant="striped" animated :value="75"/>
<CProgress color="danger" variant="striped" animated :value="100"/>
:::
```vue
<CProgress color="success" variant="striped" animated :value="25"/>
<CProgress color="info" variant="striped" animated :value="50"/>
<CProgress color="warning" variant="striped" animated :value="75"/>
<CProgress color="danger" variant="striped" animated :value="100"/>
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