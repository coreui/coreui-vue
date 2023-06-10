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

<ScssDocs file="_pagination.scss" capture="pagination-css-vars"/>

#### How to use CSS variables

```js
const vars = { 
  '--my-css-var': 10,
  '--my-another-css-var': "red" 
}
return <CPagination :style="vars">...</CCard>
```

### SASS variables

<ScssDocs file="_variables.scss" capture="pagination-variables"/>

## API

!!!include(./api/pagination/CPagination.api.md)!!!

!!!include(./api/pagination/CPaginationItem.api.md)!!!