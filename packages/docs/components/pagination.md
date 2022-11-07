---
title: Vue Pagination Component
name: Pagination
description: Documentation and examples for showing pagination to indicate a series of related content exists across multiple pages.
other_frameworks: pagination
---

## Overview

We use a large block of connected links for our pagination, making links hard to miss and easily scalable—all while providing large hit areas. Pagination is built with list HTML elements so screen readers can announce the number of available links. Use a wrapping `<nav>` element to identify it as a navigation section to screen readers and other assistive technologies.

In addition, as pages likely have more than one such navigation section, it's advisable to provide a descriptive `aria-label` for the `<nav>` to reflect its purpose. For example, if the pagination component is used to navigate between a set of search results, an appropriate label could be `aria-label="Search results pages"`.

::: demo
<CPagination aria-label="Page navigation example">
  <CPaginationItem href="#">Previous</CPaginationItem>
  <CPaginationItem href="#">1</CPaginationItem>
  <CPaginationItem href="#">2</CPaginationItem>
  <CPaginationItem href="#">3</CPaginationItem>
  <CPaginationItem href="#">Next</CPaginationItem>
</CPagination>
:::
```vue
<CPagination aria-label="Page navigation example">
  <CPaginationItem href="#">Previous</CPaginationItem>
  <CPaginationItem href="#">1</CPaginationItem>
  <CPaginationItem href="#">2</CPaginationItem>
  <CPaginationItem href="#">3</CPaginationItem>
  <CPaginationItem href="#">Next</CPaginationItem>
</CPagination>
```

## Working with icons

Looking to use an icon or symbol in place of text for some pagination links? Be sure to provide proper screen reader support with `aria` attributes.

::: demo
<CPagination aria-label="Page navigation example">
  <CPaginationItem aria-label="Previous" href="#"><span aria-hidden="true">&laquo;</span></CPaginationItem>
  <CPaginationItem href="#">1</CPaginationItem>
  <CPaginationItem href="#">2</CPaginationItem>
  <CPaginationItem href="#">3</CPaginationItem>
  <CPaginationItem aria-label="Next" href="#"><span aria-hidden="true">&raquo;</span></CPaginationItem>
</CPagination>
:::
```vue
<CPagination aria-label="Page navigation example">
  <CPaginationItem aria-label="Previous" href="#"><span aria-hidden="true">&laquo;</span></CPaginationItem>
  <CPaginationItem href="#">1</CPaginationItem>
  <CPaginationItem href="#">2</CPaginationItem>
  <CPaginationItem href="#">3</CPaginationItem>
  <CPaginationItem aria-label="Next" href="#"><span aria-hidden="true">&raquo;</span></CPaginationItem>
</CPagination>
```

## Disabled and active states

Pagination links are customizable for different circumstances. Use `disabled` for links that appear un-clickable and `.active` to indicate the current page.

While the `disabled` prop uses `pointer-events: none` to _try_ to disable the link functionality of `<a>`s, that CSS property is not yet standardized and doesn't account for keyboard navigation. As such, we always add `tabindex="-1"` on disabled links and use custom JavaScript to fully disable their functionality.

::: demo
<CPagination aria-label="Page navigation example">
  <CPaginationItem aria-label="Previous" href="#" disabled><span aria-hidden="true">&laquo;</span></CPaginationItem>
  <CPaginationItem href="#" active>1</CPaginationItem>
  <CPaginationItem href="#">2</CPaginationItem>
  <CPaginationItem href="#">3</CPaginationItem>
  <CPaginationItem aria-label="Next" href="#"><span aria-hidden="true">&raquo;</span></CPaginationItem>
</CPagination>
:::
```vue
<CPagination aria-label="Page navigation example">
  <CPaginationItem aria-label="Previous" href="#" disabled><span aria-hidden="true">&laquo;</span></CPaginationItem>
  <CPaginationItem href="#" active>1</CPaginationItem>
  <CPaginationItem href="#">2</CPaginationItem>
  <CPaginationItem href="#">3</CPaginationItem>
  <CPaginationItem aria-label="Next" href="#"><span aria-hidden="true">&raquo;</span></CPaginationItem>
</CPagination>
```

## Sizing

Fancy larger or smaller pagination? Add `size="lg"` or `size="sm"` for additional sizes.

::: demo
<CPagination size="lg" aria-label="Page navigation example">
  <CPaginationItem href="#">Previous</CPaginationItem>
  <CPaginationItem href="#">1</CPaginationItem>
  <CPaginationItem href="#">2</CPaginationItem>
  <CPaginationItem href="#">3</CPaginationItem>
  <CPaginationItem href="#">Next</CPaginationItem>
</CPagination>
:::
```vue
<CPagination size="lg" aria-label="Page navigation example">
  <CPaginationItem href="#">Previous</CPaginationItem>
  <CPaginationItem href="#">1</CPaginationItem>
  <CPaginationItem href="#">2</CPaginationItem>
  <CPaginationItem href="#">3</CPaginationItem>
  <CPaginationItem href="#">Next</CPaginationItem>
</CPagination>
```

::: demo
<CPagination size="sm" aria-label="Page navigation example">
  <CPaginationItem href="#">Previous</CPaginationItem>
  <CPaginationItem href="#">1</CPaginationItem>
  <CPaginationItem href="#">2</CPaginationItem>
  <CPaginationItem href="#">3</CPaginationItem>
  <CPaginationItem href="#">Next</CPaginationItem>
</CPagination>
:::
```vue
<CPagination size="sm" aria-label="Page navigation example">
  <CPaginationItem href="#">Previous</CPaginationItem>
  <CPaginationItem href="#">1</CPaginationItem>
  <CPaginationItem href="#">2</CPaginationItem>
  <CPaginationItem href="#">3</CPaginationItem>
  <CPaginationItem href="#">Next</CPaginationItem>
</CPagination>
```

## Alignment

Change the alignment of pagination components with `align` property.

::: demo
<CPagination align="center" aria-label="Page navigation example">
  <CPaginationItem disabled>Previous</CPaginationItem>
  <CPaginationItem href="#">1</CPaginationItem>
  <CPaginationItem href="#">2</CPaginationItem>
  <CPaginationItem href="#">3</CPaginationItem>
  <CPaginationItem href="#">Next</CPaginationItem>
</CPagination>
:::
```vue
<CPagination align="center" aria-label="Page navigation example">
  <CPaginationItem disabled>Previous</CPaginationItem>
  <CPaginationItem href="#">1</CPaginationItem>
  <CPaginationItem href="#">2</CPaginationItem>
  <CPaginationItem href="#">3</CPaginationItem>
  <CPaginationItem href="#">Next</CPaginationItem>
</CPagination>
```

::: demo
<CPagination align="end" aria-label="Page navigation example">
  <CPaginationItem disabled>Previous</CPaginationItem>
  <CPaginationItem href="#">1</CPaginationItem>
  <CPaginationItem href="#">2</CPaginationItem>
  <CPaginationItem href="#">3</CPaginationItem>
  <CPaginationItem href="#">Next</CPaginationItem>
</CPagination>
:::
```vue
<CPagination align="end" aria-label="Page navigation example">
  <CPaginationItem disabled>Previous</CPaginationItem>
  <CPaginationItem href="#">1</CPaginationItem>
  <CPaginationItem href="#">2</CPaginationItem>
  <CPaginationItem href="#">3</CPaginationItem>
  <CPaginationItem href="#">Next</CPaginationItem>
</CPagination>
```

## Customizing

### CSS variables

Vue pagination use local CSS variables on `.pagination` for enhanced real-time customization. Values for the CSS variables are set via Sass, so Sass customization is still supported, too.

```sass
--cui-pagination-padding-x: #{$pagination-padding-x};
--cui-pagination-padding-y: #{$pagination-padding-y};
--cui-pagination-font-size: #{$pagination-font-size});
--cui-pagination-color: #{$pagination-color};
--cui-pagination-bg: #{$pagination-bg};
--cui-pagination-border-width: #{$pagination-border-width};
--cui-pagination-border-color: #{$pagination-border-color};
--cui-pagination-border-radius: #{$pagination-border-radius};
--cui-pagination-hover-color: #{$pagination-hover-color};
--cui-pagination-hover-bg: #{$pagination-hover-bg};
--cui-pagination-hover-border-color: #{$pagination-hover-border-color};
--cui-pagination-focus-color: #{$pagination-focus-color};
--cui-pagination-focus-bg: #{$pagination-focus-bg};
--cui-pagination-focus-box-shadow: #{$pagination-focus-box-shadow};
--cui-pagination-active-color: #{$pagination-active-color};
--cui-pagination-active-bg: #{$pagination-active-bg};
--cui-pagination-active-border-color: #{$pagination-active-border-color};
--cui-pagination-disabled-color: #{$pagination-disabled-color};
--cui-pagination-disabled-bg: #{$pagination-disabled-bg};
--cui-pagination-disabled-border-color: #{$pagination-disabled-border-color};
```

#### How to use CSS variables

```js
const vars = { 
  '--my-css-var': 10,
  '--my-another-css-var': "red" 
}
return <CPagination :style="vars">...</CCard>
```

### SASS variables

```sass
$pagination-padding-y:              .375rem;
$pagination-padding-x:              .75rem;
$pagination-padding-y-sm:           .25rem;
$pagination-padding-x-sm:           .5rem;
$pagination-padding-y-lg:           .75rem;
$pagination-padding-x-lg:           1.5rem;

$pagination-font-size:              $font-size-base;

$pagination-color:                  var(--cui-link-color);
$pagination-bg:                     $white;
$pagination-border-radius:          $border-radius;
$pagination-border-width:           $border-width;
$pagination-margin-start:           calc($pagination-border-width * -1); // stylelint-disable-line function-disallowed-list
$pagination-border-color:           $gray-300;

$pagination-focus-color:            var(--cui-link-hover-color);
$pagination-focus-bg:               $gray-200;
$pagination-focus-box-shadow:       $input-btn-focus-box-shadow;
$pagination-focus-outline:          0;

$pagination-hover-color:            var(--cui-link-hover-color);
$pagination-hover-bg:               $gray-200;
$pagination-hover-border-color:     $gray-300;

$pagination-active-color:           $component-active-color;
$pagination-active-bg:              $component-active-bg;
$pagination-active-border-color:    $pagination-active-bg;

$pagination-disabled-color:         $gray-600;
$pagination-disabled-bg:            $white;
$pagination-disabled-border-color:  $gray-300;

$pagination-transition:              color .15s ease-in-out, background-color .15s ease-in-out, border-color .15s ease-in-out, box-shadow .15s ease-in-out;

$pagination-border-radius-sm:       $border-radius-sm;
$pagination-border-radius-lg:       $border-radius-lg;
```

## API

!!!include(./api/pagination/CPagination.api.md)!!!

!!!include(./api/pagination/CPaginationItem.api.md)!!!