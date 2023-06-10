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
```markup
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
```markup
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
```markup
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

<ScssDocs file="_accordion.scss" capture="accordion-css-vars"/>

#### How to use CSS variables

```js
const vars = { 
  '--my-css-var': 10,
  '--my-another-css-var': "red" 
}
return <CAccordion :style="vars">...</CAccordion>
```

### SASS variables

<ScssDocs file="_variables.scss" capture="accordion-variables" />

## API

!!!include(./api/accordion/CAccordion.api.md)!!!

!!!include(./api/accordion/CAccordionHeader.api.md)!!!

!!!include(./api/accordion/CAccordionBody.api.md)!!!