---
title: Vue Accordion Component
name: Accordion
description: Build vertically collapsing accordions in combination with our Vue Collapse component.
other_frameworks: accordion
---

## Examples

Click the accordions below to expand/collapse the accordion content.

::: demo
<CAccordion>
  <CAccordionItem :item-key="1">
    <CAccordionHeader>
      Accordion Item #1
    </CAccordionHeader>
    <CAccordionBody>
      <strong>This is the first item's accordion body.</strong> It is hidden by default,
      until the collapse plugin adds the appropriate classes that we use to style each
      element. These classes control the overall appearance, as well as the showing and
      hiding via CSS transitions. You can modify any of this with custom CSS or overriding
      our default variables. It's also worth noting that just about any HTML can go within
      the <code>.accordion-body</code>, though the transition does limit overflow.
    </CAccordionBody>
  </CAccordionItem>
  <CAccordionItem :item-key="2">
    <CAccordionHeader>
      Accordion Item #2
    </CAccordionHeader>
    <CAccordionBody>
      <strong>This is the second item's accordion body.</strong> It is hidden by default,
      until the collapse plugin adds the appropriate classes that we use to style each
      element. These classes control the overall appearance, as well as the showing and
      hiding via CSS transitions. You can modify any of this with custom CSS or overriding
      our default variables. It's also worth noting that just about any HTML can go within
      the <code>.accordion-body</code>, though the transition does limit overflow.
    </CAccordionBody>
  </CAccordionItem>
  <CAccordionItem :item-key="3">
    <CAccordionHeader>
      Accordion Item #3
    </CAccordionHeader>
    <CAccordionBody>
      <strong>This is the third item's accordion body.</strong> It is hidden by default,
      until the collapse plugin adds the appropriate classes that we use to style each
      element. These classes control the overall appearance, as well as the showing and
      hiding via CSS transitions. You can modify any of this with custom CSS or overriding
      our default variables. It's also worth noting that just about any HTML can go within
      the <code>.accordion-body</code>, though the transition does limit overflow.
    </CAccordionBody>
  </CAccordionItem>
</CAccordion>
:::
```vue
<CAccordion>
  <CAccordionItem :item-key="1">
    <CAccordionHeader>
      Accordion Item #1
    </CAccordionHeader>
    <CAccordionBody>
      <strong>This is the first item's accordion body.</strong> It is hidden by default,
      until the collapse plugin adds the appropriate classes that we use to style each
      element. These classes control the overall appearance, as well as the showing and
      hiding via CSS transitions. You can modify any of this with custom CSS or overriding
      our default variables. It's also worth noting that just about any HTML can go within
      the <code>.accordion-body</code>, though the transition does limit overflow.
    </CAccordionBody>
  </CAccordionItem>
  <CAccordionItem :item-key="2">
    <CAccordionHeader>
      Accordion Item #2
    </CAccordionHeader>
    <CAccordionBody>
      <strong>This is the second item's accordion body.</strong> It is hidden by default,
      until the collapse plugin adds the appropriate classes that we use to style each
      element. These classes control the overall appearance, as well as the showing and
      hiding via CSS transitions. You can modify any of this with custom CSS or overriding
      our default variables. It's also worth noting that just about any HTML can go within
      the <code>.accordion-body</code>, though the transition does limit overflow.
    </CAccordionBody>
  </CAccordionItem>
  <CAccordionItem :item-key="3">
    <CAccordionHeader>
      Accordion Item #3
    </CAccordionHeader>
    <CAccordionBody>
      <strong>This is the third item's accordion body.</strong> It is hidden by default,
      until the collapse plugin adds the appropriate classes that we use to style each
      element. These classes control the overall appearance, as well as the showing and
      hiding via CSS transitions. You can modify any of this with custom CSS or overriding
      our default variables. It's also worth noting that just about any HTML can go within
      the <code>.accordion-body</code>, though the transition does limit overflow.
    </CAccordionBody>
  </CAccordionItem>
</CAccordion>
```

### Flush

Add `flush` to remove the default `background-color`, some borders, and some rounded corners to render accordions edge-to-edge with their parent container.

:::demo
<CAccordion flush>
  <CAccordionItem>
    <CAccordionHeader>
      Accordion Item #1
    </CAccordionHeader>
    <CAccordionBody>
      <strong>This is the first item's accordion body.</strong> It is hidden by default,
      until the collapse plugin adds the appropriate classes that we use to style each
      element. These classes control the overall appearance, as well as the showing and
      hiding via CSS transitions. You can modify any of this with custom CSS or overriding
      our default variables. It's also worth noting that just about any HTML can go within
      the <code>.accordion-body</code>, though the transition does limit overflow.
    </CAccordionBody>
  </CAccordionItem>
  <CAccordionItem>
    <CAccordionHeader>
      Accordion Item #2
    </CAccordionHeader>
    <CAccordionBody>
      <strong>This is the second item's accordion body.</strong> It is hidden by default,
      until the collapse plugin adds the appropriate classes that we use to style each
      element. These classes control the overall appearance, as well as the showing and
      hiding via CSS transitions. You can modify any of this with custom CSS or overriding
      our default variables. It's also worth noting that just about any HTML can go within
      the <code>.accordion-body</code>, though the transition does limit overflow.
    </CAccordionBody>
  </CAccordionItem>
  <CAccordionItem>
    <CAccordionHeader>
      Accordion Item #3
    </CAccordionHeader>
    <CAccordionBody>
      <strong>This is the third item's accordion body.</strong> It is hidden by default,
      until the collapse plugin adds the appropriate classes that we use to style each
      element. These classes control the overall appearance, as well as the showing and
      hiding via CSS transitions. You can modify any of this with custom CSS or overriding
      our default variables. It's also worth noting that just about any HTML can go within
      the <code>.accordion-body</code>, though the transition does limit overflow.
    </CAccordionBody>
  </CAccordionItem>
</CAccordion>
:::
```vue
<CAccordion flush>
  <CAccordionItem>
    <CAccordionHeader>
      Accordion Item #1
    </CAccordionHeader>
    <CAccordionBody>
      <strong>This is the first item's accordion body.</strong> It is hidden by default,
      until the collapse plugin adds the appropriate classes that we use to style each
      element. These classes control the overall appearance, as well as the showing and
      hiding via CSS transitions. You can modify any of this with custom CSS or overriding
      our default variables. It's also worth noting that just about any HTML can go within
      the <code>.accordion-body</code>, though the transition does limit overflow.
    </CAccordionBody>
  </CAccordionItem>
  <CAccordionItem>
    <CAccordionHeader>
      Accordion Item #2
    </CAccordionHeader>
    <CAccordionBody>
      <strong>This is the second item's accordion body.</strong> It is hidden by default,
      until the collapse plugin adds the appropriate classes that we use to style each
      element. These classes control the overall appearance, as well as the showing and
      hiding via CSS transitions. You can modify any of this with custom CSS or overriding
      our default variables. It's also worth noting that just about any HTML can go within
      the <code>.accordion-body</code>, though the transition does limit overflow.
    </CAccordionBody>
  </CAccordionItem>
  <CAccordionItem>
    <CAccordionHeader>
      Accordion Item #3
    </CAccordionHeader>
    <CAccordionBody>
      <strong>This is the third item's accordion body.</strong> It is hidden by default,
      until the collapse plugin adds the appropriate classes that we use to style each
      element. These classes control the overall appearance, as well as the showing and
      hiding via CSS transitions. You can modify any of this with custom CSS or overriding
      our default variables. It's also worth noting that just about any HTML can go within
      the <code>.accordion-body</code>, though the transition does limit overflow.
    </CAccordionBody>
  </CAccordionItem>
</CAccordion>
```

### Always open

Add `always-open` property to make accordion items stay open when another item is opened.

:::demo
<CAccordion :active-item-key="2" always-open>
  <CAccordionItem :item-key="1">
    <CAccordionHeader>
      Accordion Item #1
    </CAccordionHeader>
    <CAccordionBody>
      <strong>This is the first item's accordion body.</strong> It is hidden by default,
      until the collapse plugin adds the appropriate classes that we use to style each
      element. These classes control the overall appearance, as well as the showing and
      hiding via CSS transitions. You can modify any of this with custom CSS or overriding
      our default variables. It's also worth noting that just about any HTML can go within
      the <code>.accordion-body</code>, though the transition does limit overflow.
    </CAccordionBody>
  </CAccordionItem>
  <CAccordionItem :item-key="2">
    <CAccordionHeader>
      Accordion Item #2
    </CAccordionHeader>
    <CAccordionBody>
      <strong>This is the second item's accordion body.</strong> It is hidden by default,
      until the collapse plugin adds the appropriate classes that we use to style each
      element. These classes control the overall appearance, as well as the showing and
      hiding via CSS transitions. You can modify any of this with custom CSS or overriding
      our default variables. It's also worth noting that just about any HTML can go within
      the <code>.accordion-body</code>, though the transition does limit overflow.
    </CAccordionBody>
  </CAccordionItem>
  <CAccordionItem :item-key="3">
    <CAccordionHeader>
      Accordion Item #3
    </CAccordionHeader>
    <CAccordionBody>
      <strong>This is the third item's accordion body.</strong> It is hidden by default,
      until the collapse plugin adds the appropriate classes that we use to style each
      element. These classes control the overall appearance, as well as the showing and
      hiding via CSS transitions. You can modify any of this with custom CSS or overriding
      our default variables. It's also worth noting that just about any HTML can go within
      the <code>.accordion-body</code>, though the transition does limit overflow.
    </CAccordionBody>
  </CAccordionItem>
</CAccordion>
:::
```vue
<CAccordion :active-item-key="2" always-open>
  <CAccordionItem :item-key="1">
    <CAccordionHeader>
      Accordion Item #1
    </CAccordionHeader>
    <CAccordionBody>
      <strong>This is the first item's accordion body.</strong> It is hidden by default,
      until the collapse plugin adds the appropriate classes that we use to style each
      element. These classes control the overall appearance, as well as the showing and
      hiding via CSS transitions. You can modify any of this with custom CSS or overriding
      our default variables. It's also worth noting that just about any HTML can go within
      the <code>.accordion-body</code>, though the transition does limit overflow.
    </CAccordionBody>
  </CAccordionItem>
  <CAccordionItem :item-key="2">
    <CAccordionHeader>
      Accordion Item #2
    </CAccordionHeader>
    <CAccordionBody>
      <strong>This is the second item's accordion body.</strong> It is hidden by default,
      until the collapse plugin adds the appropriate classes that we use to style each
      element. These classes control the overall appearance, as well as the showing and
      hiding via CSS transitions. You can modify any of this with custom CSS or overriding
      our default variables. It's also worth noting that just about any HTML can go within
      the <code>.accordion-body</code>, though the transition does limit overflow.
    </CAccordionBody>
  </CAccordionItem>
  <CAccordionItem :item-key="3">
    <CAccordionHeader>
      Accordion Item #3
    </CAccordionHeader>
    <CAccordionBody>
      <strong>This is the third item's accordion body.</strong> It is hidden by default,
      until the collapse plugin adds the appropriate classes that we use to style each
      element. These classes control the overall appearance, as well as the showing and
      hiding via CSS transitions. You can modify any of this with custom CSS or overriding
      our default variables. It's also worth noting that just about any HTML can go within
      the <code>.accordion-body</code>, though the transition does limit overflow.
    </CAccordionBody>
  </CAccordionItem>
</CAccordion>
```

## Customizing

### CSS variables

Vue accordions use local CSS variables on `.accordion` for enhanced real-time customization. Values for the CSS variables are set via Sass, so Sass customization is still supported, too.

```sass
--cui-accordion-color: #{color-contrast($accordion-bg)};
--cui-accordion-bg: #{$accordion-bg};
--cui-accordion-transition: #{$accordion-transition};
--cui-accordion-border-color: #{$accordion-border-color};
--cui-accordion-border-width: #{$accordion-border-width};
--cui-accordion-border-radius: #{$accordion-border-radius};
--cui-accordion-inner-border-radius: #{$accordion-inner-border-radius};
--cui-accordion-btn-padding-x: #{$accordion-button-padding-x};
--cui-accordion-btn-padding-y: #{$accordion-button-padding-y};
--cui-accordion-btn-color: #{$accordion-color};
--cui-accordion-btn-bg: #{$accordion-button-bg};
--cui-accordion-btn-icon: #{escape-svg($accordion-button-icon)};
--cui-accordion-btn-icon-width: #{$accordion-icon-width};
--cui-accordion-btn-icon-transform: #{$accordion-icon-transform};
--cui-accordion-btn-icon-transition: #{$accordion-icon-transition};
--cui-accordion-btn-active-icon: #{escape-svg($accordion-button-active-icon)};
--cui-accordion-btn-focus-border-color: #{$accordion-button-focus-border-color};
--cui-accordion-btn-focus-box-shadow: #{$accordion-button-focus-box-shadow};
--cui-accordion-body-padding-x: #{$accordion-body-padding-x};
--cui-accordion-body-padding-y: #{$accordion-body-padding-y};
--cui-accordion-active-color: #{$accordion-button-active-color};
--cui-accordion-active-bg: #{$accordion-button-active-bg};
```

#### How to use CSS variables

```js
const vars = { 
  '--my-css-var': 10,
  '--my-another-css-var': "red" 
}
return <CAccordion :style="vars">...</CAccordion>
```

### SASS variables

```sass
$accordion-padding-y:                     1rem;
$accordion-padding-x:                     1.25rem;
$accordion-color:                         var(--cui-body-color);
$accordion-bg:                            $body-bg;
$accordion-border-width:                  $border-width;
$accordion-border-color:                  var(--cui-border-color);
$accordion-border-radius:                 $border-radius;
$accordion-inner-border-radius:           subtract($accordion-border-radius, $accordion-border-width);

$accordion-body-padding-y:                $accordion-padding-y;
$accordion-body-padding-x:                $accordion-padding-x;

$accordion-button-padding-y:              $accordion-padding-y;
$accordion-button-padding-x:              $accordion-padding-x;
$accordion-button-color:                  $accordion-color;
$accordion-button-bg:                     var(--cui-accordion-bg);
$accordion-transition:                    $btn-transition, border-radius .15s ease;
$accordion-button-active-bg:              tint-color($component-active-bg, 90%);
$accordion-button-active-color:           shade-color($primary, 10%);

$accordion-button-focus-border-color:     $input-focus-border-color;
$accordion-button-focus-box-shadow:       $btn-focus-box-shadow;

$accordion-icon-width:                    1.25rem;
$accordion-icon-color:                    $accordion-button-color;
$accordion-icon-active-color:             $accordion-button-active-color;
$accordion-icon-transition:               transform .2s ease-in-out;
$accordion-icon-transform:                rotate(-180deg);

$accordion-button-icon:         url("data:image/svg+xml,<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 16 16' fill='#{$accordion-icon-color}'><path fill-rule='evenodd' d='M1.646 4.646a.5.5 0 0 1 .708 0L8 10.293l5.646-5.647a.5.5 0 0 1 .708.708l-6 6a.5.5 0 0 1-.708 0l-6-6a.5.5 0 0 1 0-.708z'/></svg>");
$accordion-button-active-icon:  url("data:image/svg+xml,<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 16 16' fill='#{$accordion-icon-active-color}'><path fill-rule='evenodd' d='M1.646 4.646a.5.5 0 0 1 .708 0L8 10.293l5.646-5.647a.5.5 0 0 1 .708.708l-6 6a.5.5 0 0 1-.708 0l-6-6a.5.5 0 0 1 0-.708z'/></svg>");
```

## API

!!!include(./api/accordion/CAccordion.api.md)!!!

!!!include(./api/accordion/CAccordionHeader.api.md)!!!

!!!include(./api/accordion/CAccordionBody.api.md)!!!