---
title: Vue Accordion Component
name: Accordion
description: Build vertically collapsing accordions in combination with our Vue Collapse component.
---

## Examples

Click the accordions below to expand/collapse the accordion content.

::: demo
<CAccordion>
  <CAccordionItem>
    <CAccordionHeader>
      <CAccordionButton :collapsed="activeKey !== 1" @click="() => { activeKey === 1 ? activeKey = 0 : activeKey = 1 }">
        Accordion Item #1
      </CAccordionButton>
    </CAccordionHeader>
    <CAccordionCollapse :visible="activeKey === 1">
      <CAccordionBody>
        <strong>This is the first item's accordion body.</strong> It is hidden by default,
        until the collapse plugin adds the appropriate classes that we use to style each
        element. These classes control the overall appearance, as well as the showing and
        hiding via CSS transitions. You can modify any of this with custom CSS or overriding
        our default variables. It's also worth noting that just about any HTML can go within
        the <code>.accordion-body</code>, though the transition does limit overflow.
      </CAccordionBody>
    </CAccordionCollapse>
  </CAccordionItem>
  <CAccordionItem>
    <CAccordionHeader>
      <CAccordionButton :collapsed="activeKey !== 2" @click="() => { activeKey === 2 ? activeKey = 0 : activeKey = 2 }">
        Accordion Item #2
      </CAccordionButton>
    </CAccordionHeader>
    <CAccordionCollapse :visible="activeKey === 2">
      <CAccordionBody>
        <strong>This is the second item's accordion body.</strong> It is hidden by default,
        until the collapse plugin adds the appropriate classes that we use to style each
        element. These classes control the overall appearance, as well as the showing and
        hiding via CSS transitions. You can modify any of this with custom CSS or overriding
        our default variables. It's also worth noting that just about any HTML can go within
        the <code>.accordion-body</code>, though the transition does limit overflow.
      </CAccordionBody>
    </CAccordionCollapse>
  </CAccordionItem>
  <CAccordionItem>
    <CAccordionHeader>
      <CAccordionButton :collapsed="activeKey !== 3" @click="() => { activeKey === 3 ? activeKey = 0 : activeKey = 3 }">
        Accordion Item #3
      </CAccordionButton>
    </CAccordionHeader>
    <CAccordionCollapse :visible="activeKey === 3">
      <CAccordionBody>
        <strong>This is the third item's accordion body.</strong> It is hidden by default,
        until the collapse plugin adds the appropriate classes that we use to style each
        element. These classes control the overall appearance, as well as the showing and
        hiding via CSS transitions. You can modify any of this with custom CSS or overriding
        our default variables. It's also worth noting that just about any HTML can go within
        the <code>.accordion-body</code>, though the transition does limit overflow.
      </CAccordionBody>
    </CAccordionCollapse>
  </CAccordionItem>
</CAccordion>
:::
```vue
<CAccordion>
  <CAccordionItem>
    <CAccordionHeader>
      <CAccordionButton :collapsed="activeKey !== 1" @click="() => { activeKey === 1 ? activeKey = 0 : activeKey = 1 }">
        Accordion Item #1
      </CAccordionButton>
    </CAccordionHeader>
    <CAccordionCollapse :visible="activeKey === 1">
      <CAccordionBody>
        <strong>This is the first item's accordion body.</strong> It is hidden by default,
        until the collapse plugin adds the appropriate classes that we use to style each
        element. These classes control the overall appearance, as well as the showing and
        hiding via CSS transitions. You can modify any of this with custom CSS or overriding
        our default variables. It's also worth noting that just about any HTML can go within
        the <code>.accordion-body</code>, though the transition does limit overflow.
      </CAccordionBody>
    </CAccordionCollapse>
  </CAccordionItem>
  <CAccordionItem>
    <CAccordionHeader>
      <CAccordionButton :collapsed="activeKey !== 2" @click="() => { activeKey === 2 ? activeKey = 0 : activeKey = 2 }">
        Accordion Item #2
      </CAccordionButton>
    </CAccordionHeader>
    <CAccordionCollapse :visible="activeKey === 2">
      <CAccordionBody>
        <strong>This is the second item's accordion body.</strong> It is hidden by default,
        until the collapse plugin adds the appropriate classes that we use to style each
        element. These classes control the overall appearance, as well as the showing and
        hiding via CSS transitions. You can modify any of this with custom CSS or overriding
        our default variables. It's also worth noting that just about any HTML can go within
        the <code>.accordion-body</code>, though the transition does limit overflow.
      </CAccordionBody>
    </CAccordionCollapse>
  </CAccordionItem>
  <CAccordionItem>
    <CAccordionHeader>
      <CAccordionButton :collapsed="activeKey !== 3" @click="() => { activeKey === 3 ? activeKey = 0 : activeKey = 3 }">
        Accordion Item #3
      </CAccordionButton>
    </CAccordionHeader>
    <CAccordionCollapse :visible="activeKey === 3">
      <CAccordionBody>
        <strong>This is the third item's accordion body.</strong> It is hidden by default,
        until the collapse plugin adds the appropriate classes that we use to style each
        element. These classes control the overall appearance, as well as the showing and
        hiding via CSS transitions. You can modify any of this with custom CSS or overriding
        our default variables. It's also worth noting that just about any HTML can go within
        the <code>.accordion-body</code>, though the transition does limit overflow.
      </CAccordionBody>
    </CAccordionCollapse>
  </CAccordionItem>
</CAccordion>
```

### Flush

Add `flush` to remove the default `background-color`, some borders, and some rounded corners to render accordions edge-to-edge with their parent container.

:::demo
<CAccordion flush>
  <CAccordionItem>
    <CAccordionHeader>
      <CAccordionButton :collapsed="flushActiveKey !== 1" @click="() => { flushActiveKey === 1 ? flushActiveKey = 0 : flushActiveKey = 1 }">
        Accordion Item #1
      </CAccordionButton>
    </CAccordionHeader>
    <CAccordionCollapse :visible="flushActiveKey === 1">
      <CAccordionBody>
        <strong>This is the first item's accordion body.</strong> It is hidden by default,
        until the collapse plugin adds the appropriate classes that we use to style each
        element. These classes control the overall appearance, as well as the showing and
        hiding via CSS transitions. You can modify any of this with custom CSS or overriding
        our default variables. It's also worth noting that just about any HTML can go within
        the <code>.accordion-body</code>, though the transition does limit overflow.
      </CAccordionBody>
    </CAccordionCollapse>
  </CAccordionItem>
  <CAccordionItem>
    <CAccordionHeader>
      <CAccordionButton :collapsed="flushActiveKey !== 2" @click="() => { flushActiveKey === 2 ? flushActiveKey = 0 : flushActiveKey = 2 }">
        Accordion Item #2
      </CAccordionButton>
    </CAccordionHeader>
    <CAccordionCollapse :visible="flushActiveKey === 2">
      <CAccordionBody>
        <strong>This is the second item's accordion body.</strong> It is hidden by default,
        until the collapse plugin adds the appropriate classes that we use to style each
        element. These classes control the overall appearance, as well as the showing and
        hiding via CSS transitions. You can modify any of this with custom CSS or overriding
        our default variables. It's also worth noting that just about any HTML can go within
        the <code>.accordion-body</code>, though the transition does limit overflow.
      </CAccordionBody>
    </CAccordionCollapse>
  </CAccordionItem>
  <CAccordionItem>
    <CAccordionHeader>
      <CAccordionButton :collapsed="flushActiveKey !== 3" @click="() => { flushActiveKey === 3 ? flushActiveKey = 0 : flushActiveKey = 3 }">
        Accordion Item #3
      </CAccordionButton>
    </CAccordionHeader>
    <CAccordionCollapse :visible="flushActiveKey === 3">
      <CAccordionBody>
        <strong>This is the third item's accordion body.</strong> It is hidden by default,
        until the collapse plugin adds the appropriate classes that we use to style each
        element. These classes control the overall appearance, as well as the showing and
        hiding via CSS transitions. You can modify any of this with custom CSS or overriding
        our default variables. It's also worth noting that just about any HTML can go within
        the <code>.accordion-body</code>, though the transition does limit overflow.
      </CAccordionBody>
    </CAccordionCollapse>
  </CAccordionItem>
</CAccordion>
:::
```vue
<CAccordion flush>
  <CAccordionItem>
    <CAccordionHeader>
      <CAccordionButton :collapsed="flushActiveKey !== 1" @click="() => { flushActiveKey === 1 ? flushActiveKey = 0 : flushActiveKey = 1 }">
        Accordion Item #1
      </CAccordionButton>
    </CAccordionHeader>
    <CAccordionCollapse :visible="flushActiveKey === 1">
      <CAccordionBody>
        <strong>This is the first item's accordion body.</strong> It is hidden by default,
        until the collapse plugin adds the appropriate classes that we use to style each
        element. These classes control the overall appearance, as well as the showing and
        hiding via CSS transitions. You can modify any of this with custom CSS or overriding
        our default variables. It's also worth noting that just about any HTML can go within
        the <code>.accordion-body</code>, though the transition does limit overflow.
      </CAccordionBody>
    </CAccordionCollapse>
  </CAccordionItem>
  <CAccordionItem>
    <CAccordionHeader>
      <CAccordionButton :collapsed="flushActiveKey !== 2" @click="() => { flushActiveKey === 2 ? flushActiveKey = 0 : flushActiveKey = 2 }">
        Accordion Item #2
      </CAccordionButton>
    </CAccordionHeader>
    <CAccordionCollapse :visible="flushActiveKey === 2">
      <CAccordionBody>
        <strong>This is the second item's accordion body.</strong> It is hidden by default,
        until the collapse plugin adds the appropriate classes that we use to style each
        element. These classes control the overall appearance, as well as the showing and
        hiding via CSS transitions. You can modify any of this with custom CSS or overriding
        our default variables. It's also worth noting that just about any HTML can go within
        the <code>.accordion-body</code>, though the transition does limit overflow.
      </CAccordionBody>
    </CAccordionCollapse>
  </CAccordionItem>
  <CAccordionItem>
    <CAccordionHeader>
      <CAccordionButton :collapsed="flushActiveKey !== 3" @click="() => { flushActiveKey === 3 ? flushActiveKey = 0 : flushActiveKey = 3 }">
        Accordion Item #3
      </CAccordionButton>
    </CAccordionHeader>
    <CAccordionCollapse :visible="flushActiveKey === 3">
      <CAccordionBody>
        <strong>This is the third item's accordion body.</strong> It is hidden by default,
        until the collapse plugin adds the appropriate classes that we use to style each
        element. These classes control the overall appearance, as well as the showing and
        hiding via CSS transitions. You can modify any of this with custom CSS or overriding
        our default variables. It's also worth noting that just about any HTML can go within
        the <code>.accordion-body</code>, though the transition does limit overflow.
      </CAccordionBody>
    </CAccordionCollapse>
  </CAccordionItem>
</CAccordion>
```

<script>
  export default {
    data() {
      return { 
        activeKey: 1,
        flushActiveKey: 1,
      }
    }
  }
</script>

## API

!!!include(./docs/4.0/api/accordion/CAccordion.api.md)!!!

!!!include(./docs/4.0/api/accordion/CAccordionButton.api.md)!!!

!!!include(./docs/4.0/api/accordion/CAccordionCollapse.api.md)!!!