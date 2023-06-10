---
title: Vue Card Component
name: Card
description: Vue card component provides a flexible and extensible container for displaying content. Card is delivered with a bunch of variants and options.
other_frameworks: card
---

## Examples

  
## About

A Vue card component is a content container. It incorporates options for images, headers, and footers, a wide variety of content, contextual background colors, and excellent display options.

## Example

Cards are built with as little markup and styles as possible but still manage to deliver a bunch of control and customization. Built with flexbox, they offer easy alignment and mix well with other CoreUI components. Cards have no top, left, and right margins by default, so use [spacing utilities](https://coreui.io/docs/utilities/spacing) as needed. They have no fixed width to start, so they'll fill the full width of its parent.

Below is an example of a basic card with mixed content and a fixed width. Cards have no fixed width to start, so they'll naturally fill the full width of its parent element.

::: demo
<CCard style="width: 18rem">
  <CCardImage orientation="top" :src="$withBase('/images/vue.jpg')" />
  <CCardBody>
    <CCardTitle>Card title</CCardTitle>
    <CCardText>Some quick example text to build on the card title and make up the bulk of the card's content.</CCardText>
    <CButton href="#">Go somewhere</CButton>
  </CCardBody>
</CCard>
:::
```vue
<CCard style="width: 18rem">
  <CCardImage orientation="top" src="/images/vue.jpg" />
  <CCardBody>
    <CCardTitle>Card title</CCardTitle>
    <CCardText>Some quick example text to build on the card title and make up the bulk of the card's content.</CCardText>
    <CButton href="#">Go somewhere</CButton>
  </CCardBody>
</CCard>
```

## Content types

CoreUI card supports a wide variety of content, including images, text, list groups, links, and more. Below are examples of those elements.

### Body

The main block of a card is the `<CCardBody>`. Use it whenever you need a padded section within a card.

::: demo
<CCard>
  <CCardBody>
    This is some text within a card body.
  </CCardBody>
</CCard>
:::
```vue
<CCard>
  <CCardBody>
    This is some text within a card body.
  </CCardBody>
</CCard>
```
### Titles, text, and links

Card titles are managed by `<CCardTitle>` component. Identically, links are attached and collected next to each other by `<CCardLink>` component.

Subtitles are managed by `<CCardSubtitle>` component. If the `<CCardTitle>` also, the `<CCardSubtitle>` items are stored in a `<CCardBody>` item, the card title, and subtitle are arranged rightly.

::: demo
<CCard style="width: 18rem">
  <CCardBody>
    <CCardTitle>Card title</CCardTitle>
    <CCardSubtitle class="mb-2 text-muted">Card subtitle</CCardSubtitle>
    <CCardText>Some quick example text to build on the card title and make up the bulk of the card's content.</CCardText>
    <CCardLink href="#">Card link</CCardLink>
    <CCardLink href="#">Another link</CCardLink>
  </CCardBody>
</CCard>
:::
```vue
<CCard style="width: 18rem">
  <CCardBody>
    <CCardTitle>Card title</CCardTitle>
    <CCardSubtitle class="mb-2 text-muted">Card subtitle</CCardSubtitle>
    <CCardText>Some quick example text to build on the card title and make up the bulk of the card's content.</CCardText>
    <CCardLink href="#">Card link</CCardLink>
    <CCardLink href="#">Another link</CCardLink>
  </CCardBody>
</CCard>
```

### Images

`.card-img-top` places a picture to the top of the card. With `.card-text`, text can be added to the card. Text within `.card-text` can additionally be styled with the regular HTML tags.

::: demo
<CCard style="width: 18rem">
  <CCardImage orientation="top" :src="$withBase('/images/vue.jpg')" />
  <CCardBody>
    <CCardText>Some quick example text to build on the card title and make up the bulk of the card's content.</CCardText>
  </CCardBody>
</CCard>
:::
```vue
<CCard style="width: 18rem">
  <CCardImage orientation="top" src="/images/vue.jpg" />
  <CCardBody>
    <CCardText>Some quick example text to build on the card title and make up the bulk of the card's content.</CCardText>
  </CCardBody>
</CCard>
```

### List groups

Create lists of content in a card with a flush list group.

::: demo
<CCard style="width: 18rem">
  <CListGroup flush>
    <CListGroupItem>Cras justo odio</CListGroupItem>
    <CListGroupItem>Dapibus ac facilisis in</CListGroupItem>
    <CListGroupItem>Vestibulum at eros</CListGroupItem>
  </CListGroup>
</CCard>
:::
```vue
<CCard style="width: 18rem">
  <CListGroup flush>
    <CListGroupItem>Cras justo odio</CListGroupItem>
    <CListGroupItem>Dapibus ac facilisis in</CListGroupItem>
    <CListGroupItem>Vestibulum at eros</CListGroupItem>
  </CListGroup>
</CCard>

::: demo
<CCard style="width: 18rem">
  <CCardHeader>Header</CCardHeader>
  <CListGroup flush>
    <CListGroupItem>Cras justo odio</CListGroupItem>
    <CListGroupItem>Dapibus ac facilisis in</CListGroupItem>
    <CListGroupItem>Vestibulum at eros</CListGroupItem>
  </CListGroup>
</CCard>
:::
```vue
<CCard style="width: 18rem">
  <CCardHeader>Header</CCardHeader>
  <CListGroup flush>
    <CListGroupItem>Cras justo odio</CListGroupItem>
    <CListGroupItem>Dapibus ac facilisis in</CListGroupItem>
    <CListGroupItem>Vestibulum at eros</CListGroupItem>
  </CListGroup>
</CCard>
```

::: demo
<CCard style="width: 18rem">
  <CListGroup flush>
    <CListGroupItem>Cras justo odio</CListGroupItem>
    <CListGroupItem>Dapibus ac facilisis in</CListGroupItem>
    <CListGroupItem>Vestibulum at eros</CListGroupItem>
  </CListGroup>
  <CCardFooter>Footer</CCardFooter>
</CCard>
:::
```vue
<CCard style="width: 18rem">
  <CListGroup flush>
    <CListGroupItem>Cras justo odio</CListGroupItem>
    <CListGroupItem>Dapibus ac facilisis in</CListGroupItem>
    <CListGroupItem>Vestibulum at eros</CListGroupItem>
  </CListGroup>
  <CCardFooter>Footer</CCardFooter>
</CCard>
```

### Kitchen sink

Combine and match many content types to build the card you need, or throw everything in there. Shown below are image styles, blocks, text styles, and a list group—all wrapped in a fixed-width card.

::: demo
<CCard style="width: 18rem">
  <CCardImage orientation="top" :src="$withBase('/images/vue.jpg')" />
  <CCardBody>
    <CCardTitle>Card title</CCardTitle>
    <CCardText>Some quick example text to build on the card title and make up the bulk of the card's content.</CCardText>
  </CCardBody>
  <CListGroup flush>
    <CListGroupItem>Cras justo odio</CListGroupItem>
    <CListGroupItem>Dapibus ac facilisis in</CListGroupItem>
    <CListGroupItem>Vestibulum at eros</CListGroupItem>
  </CListGroup>
  <CCardBody>
    <CCardLink href="#">Card link</CCardLink>
    <CCardLink href="#">Another link</CCardLink>
  </CCardBody>
</CCard>
:::
```vue
<CCard style="width: 18rem">
  <CCardImage orientation="top" src="/images/vue.jpg" />
  <CCardBody>
    <CCardTitle>Card title</CCardTitle>
    <CCardText>Some quick example text to build on the card title and make up the bulk of the card's content.</CCardText>
  </CCardBody>
  <CListGroup flush>
    <CListGroupItem>Cras justo odio</CListGroupItem>
    <CListGroupItem>Dapibus ac facilisis in</CListGroupItem>
    <CListGroupItem>Vestibulum at eros</CListGroupItem>
  </CListGroup>
  <CCardBody>
    <CCardLink href="#">Card link</CCardLink>
    <CCardLink href="#">Another link</CCardLink>
  </CCardBody>
</CCard>
```

### Header and footer

Add an optional header and/or footer within a card.

::: demo
<CCard>
  <CCardHeader>Header</CCardHeader>
  <CCardBody>
    <CCardTitle>Special title treatment</CCardTitle>
    <CCardText>With supporting text below as a natural lead-in to additional content.</CCardText>
    <CButton href="#">Go somewhere</CButton>
  </CCardBody>
</CCard>
:::
```vue
<CCard>
  <CCardHeader>Header</CCardHeader>
  <CCardBody>
    <CCardTitle>Special title treatment</CCardTitle>
    <CCardText>With supporting text below as a natural lead-in to additional content.</CCardText>
    <CButton href="#">Go somewhere</CButton>
  </CCardBody>
</CCard>
```

Card headers can be styled by adding ex. `component="h5"`.

::: demo
<CCard>
  <CCardHeader component="h5">Header</CCardHeader>
  <CCardBody>
    <CCardTitle>Special title treatment</CCardTitle>
    <CCardText>With supporting text below as a natural lead-in to additional content.</CCardText>
    <CButton href="#">Go somewhere</CButton>
  </CCardBody>
</CCard>
:::
```vue
<CCard>
  <CCardHeader component="h5">Header</CCardHeader>
  <CCardBody>
    <CCardTitle>Special title treatment</CCardTitle>
    <CCardText>With supporting text below as a natural lead-in to additional content.</CCardText>
    <CButton href="#">Go somewhere</CButton>
  </CCardBody>
</CCard>
```

::: demo
<CCard>
  <CCardHeader>Quote</CCardHeader>
  <CCardBody>
    <blockquote class="blockquote mb-0">
      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer posuere erat a ante.</p>
      <footer class="blockquote-footer">Someone famous in <cite title="Source Title">Source Title</cite></footer>
    </blockquote>
  </CCardBody>
</CCard>
:::
```vue
<CCard>
  <CCardHeader>Quote</CCardHeader>
  <CCardBody>
    <blockquote class="blockquote mb-0">
      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer posuere erat a ante.</p>
      <footer class="blockquote-footer">Someone famous in <cite title="Source Title">Source Title</cite></footer>
    </blockquote>
  </CCardBody>
</CCard>
```

::: demo
<CCard class="text-center">
  <CCardHeader>Header</CCardHeader>
  <CCardBody>
    <CCardTitle>Special title treatment</CCardTitle>
    <CCardText>With supporting text below as a natural lead-in to additional content.</CCardText>
    <CButton href="#">Go somewhere</CButton>
  </CCardBody>
  <CCardFooter class="text-muted">2 days ago</CCardFooter>
</CCard>
:::
```vue
<CCard class="text-center">
  <CCardHeader>Header</CCardHeader>
  <CCardBody>
    <CCardTitle>Special title treatment</CCardTitle>
    <CCardText>With supporting text below as a natural lead-in to additional content.</CCardText>
    <CButton href="#">Go somewhere</CButton>
  </CCardBody>
  <CCardFooter class="text-muted">2 days ago</CCardFooter>
</CCard>
```

## Sizing

Cards assume no specific `width` to start, so they'll be 100% wide unless otherwise stated. You can adjust this as required with custom CSS, grid classes, grid Sass mixins, or services.

### Using grid markup

Using the grid, wrap cards in columns and rows as needed.

::: demo
<CRow>
  <CCol :sm="6">
    <CCard>
      <CCardBody>
        <CCardTitle>Special title treatment</CCardTitle>
        <CCardText>With supporting text below as a natural lead-in to additional content.</CCardText>
        <CButton href="#">Go somewhere</CButton>
      </CCardBody>
    </CCard>
  </CCol>
  <CCol :sm="6">
    <CCard>
      <CCardBody>
        <CCardTitle>Special title treatment</CCardTitle>
        <CCardText>With supporting text below as a natural lead-in to additional content.</CCardText>
        <CButton href="#">Go somewhere</CButton>
      </CCardBody>
    </CCard>
  </CCol>
</CRow>
:::
```vue
<CRow>
  <CCol :sm="6">
    <CCard>
      <CCardBody>
        <CCardTitle>Special title treatment</CCardTitle>
        <CCardText>With supporting text below as a natural lead-in to additional content.</CCardText>
        <CButton href="#">Go somewhere</CButton>
      </CCardBody>
    </CCard>
  </CCol>
  <CCol :sm="6">
    <CCard>
      <CCardBody>
        <CCardTitle>Special title treatment</CCardTitle>
        <CCardText>With supporting text below as a natural lead-in to additional content.</CCardText>
        <CButton href="#">Go somewhere</CButton>
      </CCardBody>
    </CCard>
  </CCol>
</CRow>
```

### Using utilities

Use some of [available sizing utilities](https://coreui.io/docs/utilities/sizing/) to rapidly set a card's width.

::: demo
<CCard class="w-75">
  <CCardBody>
    <CCardTitle>Card title</CCardTitle>
    <CCardText>With supporting text below as a natural lead-in to additional content.</CCardText>
    <CButton href="#">Go somewhere</CButton>
  </CCardBody>
</CCard>
<CCard class="w-50">
  <CCardBody>
    <CCardTitle>Card title</CCardTitle>
    <CCardText>With supporting text below as a natural lead-in to additional content.</CCardText>
    <CButton href="#">Go somewhere</CButton>
  </CCardBody>
</CCard>
:::
```vue
<CCard class="w-75">
  <CCardBody>
    <CCardTitle>Card title</CCardTitle>
    <CCardText>With supporting text below as a natural lead-in to additional content.</CCardText>
    <CButton href="#">Go somewhere</CButton>
  </CCardBody>
</CCard>
<CCard class="w-50">
  <CCardBody>
    <CCardTitle>Card title</CCardTitle>
    <CCardText>With supporting text below as a natural lead-in to additional content.</CCardText>
    <CButton href="#">Go somewhere</CButton>
  </CCardBody>
</CCard>
```

### Using custom CSS

Use custom CSS in your stylesheets or as inline styles to set a width.

::: demo
<CCard style="width: 18rem">
  <CCardBody>
    <CCardTitle>Special title treatment</CCardTitle>
    <CCardText>With supporting text below as a natural lead-in to additional content.</CCardText>
    <CButton href="#">Go somewhere</CButton>
  </CCardBody>
</CCard>
:::
```vue
<CCard style="width: 18rem">
  <CCardBody>
    <CCardTitle>Special title treatment</CCardTitle>
    <CCardText>With supporting text below as a natural lead-in to additional content.</CCardText>
    <CButton href="#">Go somewhere</CButton>
  </CCardBody>
</CCard>
```

## Text alignment

You can instantly change the text arrangement of any card—in its whole or specific parts—with [text align classes](https://coreui.io/docs/utilities/text/#text-alignment).

::: demo
<CCard style="width: 18rem">
  <CCardBody>
    <CCardTitle>Special title treatment</CCardTitle>
    <CCardText>With supporting text below as a natural lead-in to additional content.</CCardText>
    <CButton href="#">Go somewhere</CButton>
  </CCardBody>
</CCard>
<CCard class="text-center" style="width: 18rem">
  <CCardBody>
    <CCardTitle>Special title treatment</CCardTitle>
    <CCardText>With supporting text below as a natural lead-in to additional content.</CCardText>
    <CButton href="#">Go somewhere</CButton>
  </CCardBody>
</CCard>
<CCard class="text-end" style="width: 18rem">
  <CCardBody>
    <CCardTitle>Special title treatment</CCardTitle>
    <CCardText>With supporting text below as a natural lead-in to additional content.</CCardText>
    <CButton href="#">Go somewhere</CButton>
  </CCardBody>
</CCard>
:::
```vue
<CCard style="width: 18rem">
  <CCardBody>
    <CCardTitle>Special title treatment</CCardTitle>
    <CCardText>With supporting text below as a natural lead-in to additional content.</CCardText>
    <CButton href="#">Go somewhere</CButton>
  </CCardBody>
</CCard>
<CCard class="text-center" style="width: 18rem">
  <CCardBody>
    <CCardTitle>Special title treatment</CCardTitle>
    <CCardText>With supporting text below as a natural lead-in to additional content.</CCardText>
    <CButton href="#">Go somewhere</CButton>
  </CCardBody>
</CCard>
<CCard class="text-end" style="width: 18rem">
  <CCardBody>
    <CCardTitle>Special title treatment</CCardTitle>
    <CCardText>With supporting text below as a natural lead-in to additional content.</CCardText>
    <CButton href="#">Go somewhere</CButton>
  </CCardBody>
</CCard>
```

## Navigation

Add some navigation to a `<CCardHeader>` with our `<CNav>` component.

::: demo
<CCard class="text-center">
  <CCardHeader>
    <CNav variant="tabs" class="card-header-tabs">
      <CNavItem>
        <CNavLink
          href="#"
          active
        >
          Active
        </CNavLink>
      </CNavItem>
      <CNavItem>
        <CNavLink
          href="#"
        >
          Link
        </CNavLink>
      </CNavItem>
      <CNavItem>
        <CNavLink
          href="#"
          disabled
        >
          Disabled
        </CNavLink>
      </CNavItem>
    </CNav>
  </CCardHeader>
  <CCardBody>
    <CCardTitle>Special title treatment</CCardTitle>
    <CCardText>With supporting text below as a natural lead-in to additional content.</CCardText>
    <CButton href="#">Go somewhere</CButton>
  </CCardBody>
</CCard>
:::
```vue
<CCard class="text-center">
  <CCardHeader>
    <CNav variant="tabs" class="card-header-tabs">
      <CNavItem>
        <CNavLink
          href="#"
          active
        >
          Active
        </CNavLink>
      </CNavItem>
      <CNavItem>
        <CNavLink
          href="#"
        >
          Link
        </CNavLink>
      </CNavItem>
      <CNavItem>
        <CNavLink
          href="#"
          disabled
        >
          Disabled
        </CNavLink>
      </CNavItem>
    </CNav>
  </CCardHeader>
  <CCardBody>
    <CCardTitle>Special title treatment</CCardTitle>
    <CCardText>With supporting text below as a natural lead-in to additional content.</CCardText>
    <CButton href="#">Go somewhere</CButton>
  </CCardBody>
</CCard>
```

::: demo
<CCard class="text-center">
  <CCardHeader>
    <CNav variant="pills" class="card-header-pills">
      <CNavItem>
        <CNavLink
          href="#"
          active
        >
          Active
        </CNavLink>
      </CNavItem>
      <CNavItem>
        <CNavLink
          href="#"
        >
          Link
        </CNavLink>
      </CNavItem>
      <CNavItem>
        <CNavLink
          href="#"
          disabled
        >
          Disabled
        </CNavLink>
      </CNavItem>
    </CNav>
  </CCardHeader>
  <CCardBody>
    <CCardTitle>Special title treatment</CCardTitle>
    <CCardText>With supporting text below as a natural lead-in to additional content.</CCardText>
    <CButton href="#">Go somewhere</CButton>
  </CCardBody>
</CCard>
:::
```vue
<CCard class="text-center">
  <CCardHeader>
    <CNav variant="pills" class="card-header-pills">
      <CNavItem>
        <CNavLink
          href="#"
          active
        >
          Active
        </CNavLink>
      </CNavItem>
      <CNavItem>
        <CNavLink
          href="#"
        >
          Link
        </CNavLink>
      </CNavItem>
      <CNavItem>
        <CNavLink
          href="#"
          disabled
        >
          Disabled
        </CNavLink>
      </CNavItem>
    </CNav>
  </CCardHeader>
  <CCardBody>
    <CCardTitle>Special title treatment</CCardTitle>
    <CCardText>With supporting text below as a natural lead-in to additional content.</CCardText>
    <CButton href="#">Go somewhere</CButton>
  </CCardBody>
</CCard>
```

## Images

Cards introduce several options for acting with images. Pick from appending "image caps" at either end of a card, overlaying images with content, or just inserting the image in a card.

### Image caps

Similar to headers and footers, cards can include top and bottom "image caps"—images at the top or bottom of a card.

::: demo
<CCard class="mb-3">
  <CCardImage orientation="top" :src="$withBase('/images/vue.jpg')" />
  <CCardBody>
    <CCardTitle>Card title</CCardTitle>
    <CCardText>This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</CCardText>
    <CCardText><small class="text-muted">Last updated 3 mins ago</small></CCardText>
  </CCardBody>
</CCard>
<CCard class="mb-3">
  <CCardBody>
    <CCardTitle>Card title</CCardTitle>
    <CCardText>This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</CCardText>
    <CCardText><small class="text-muted">Last updated 3 mins ago</small></CCardText>
  </CCardBody>
    <CCardImage orientation="bottom" :src="$withBase('/images/vue.jpg')" />
</CCard>
:::
```vue
<CCard class="mb-3">
  <CCardImage orientation="top" src="/images/vue.jpg" />
  <CCardBody>
    <CCardTitle>Card title</CCardTitle>
    <CCardText>This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</CCardText>
    <CCardText><small class="text-muted">Last updated 3 mins ago</small></CCardText>
  </CCardBody>
</CCard>
<CCard class="mb-3">
  <CCardBody>
    <CCardTitle>Card title</CCardTitle>
    <CCardText>This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</CCardText>
    <CCardText><small class="text-muted">Last updated 3 mins ago</small></CCardText>
  </CCardBody>
    <CCardImage orientation="bottom" src="/images/vue.jpg" />
</CCard>
```

### Image overlays

Adapt an image into a background and overlay your text. Depending on the image, you may need additional styles or utilities.

::: demo
<CCard class="mb-3 bg-dark text-white">
  <CCardImage :src="$withBase('/images/vue.jpg')" />
  <CCardImageOverlay>
    <CCardTitle>Card title</CCardTitle>
    <CCardText>This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</CCardText>
    <CCardText>Last updated 3 mins ago</CCardText>
  </CCardImageOverlay>
</CCard>
:::
```vue
<CCard class="mb-3 bg-dark text-white">
  <CCardImage src="/images/vue.jpg" />
  <CCardImageOverlay>
    <CCardTitle>Card title</CCardTitle>
    <CCardText>This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</CCardText>
    <CCardText>Last updated 3 mins ago</CCardText>
  </CCardImageOverlay>
</CCard>
```

## Horizontal

Using a combination of grid and utility classes, cards can be made horizontal in a mobile-friendly and responsive way. In the example below, we remove the grid gutters with `.g-0` and use `.col-md-*` classes to make the card horizontal at the `md` breakpoint. Further adjustments may be needed depending on your card content.

::: demo
<CCard class="mb-3" style="max=width: 540px">
  <CRow class="g-0">
    <CCol :md="4">
      <CImage class="rounded-start" fluid :src="$withBase('/images/vue.jpg')" />
    </CCol>
    <CCol :md="8">
      <CCardBody>
        <CCardTitle>Card title</CCardTitle>
        <CCardText>This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</CCardText>
        <CCardText><small class="text-muted">Last updated 3 mins ago</small></CCardText>
      </CCardBody>
    </CCol>
  </CRow>
</CCard>
:::
```vue
<CCard class="mb-3" style="max=width: 540px">
  <CRow class="g-0">
    <CCol :md="4">
      <CCardImage class="rounded-0" src="/images/vue.jpg" />
    </CCol>
    <CCol :md="8">
      <CCardBody>
        <CCardTitle>Card title</CCardTitle>
        <CCardText>This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</CCardText>
        <CCardText><small class="text-muted">Last updated 3 mins ago</small></CCardText>
      </CCardBody>
    </CCol>
  </CRow>
</CCard>
```

## Card styles

Cards include various options for customizing their backgrounds, borders, and color.

### Background and color

Use `color` property to change the appearance of a card.

::: demo
<template v-for="(item) in [
  { color: 'primary', textColor: 'white' },
  { color: 'secondary', textColor: 'white' },
  { color: 'success', textColor: 'white' },
  { color: 'danger', textColor: 'white' },
  { color: 'warning' },
  { color: 'info', textColor: 'white' },
  { color: 'light' },
  { color: 'dark', textColor: 'white' }
]">
  <CCard :color="item.color" :text-color="item.textColor" class="mb-3" style="max-width: 18rem">
    <CCardHeader>Header</CCardHeader>
    <CCardBody>
      <CCardTitle>{{item.color}} card title</CCardTitle>
      <CCardText>Some quick example text to build on the card title and make up the bulk of the card's content.</CCardText>
    </CCardBody>
  </CCard>
</template>
:::
```vue
<template v-for="(item) in [
  { color: 'primary', textColor: 'white' },
  { color: 'secondary', textColor: 'white' },
  { color: 'success', textColor: 'white' },
  { color: 'danger', textColor: 'white' },
  { color: 'warning' },
  { color: 'info', textColor: 'white' },
  { color: 'light' },
  { color: 'dark', textColor: 'white' }
]">
  <CCard :color="item.color" :text-color="item.textColor" class="mb-3" style="max-width: 18rem">
    <CCardHeader>Header</CCardHeader>
    <CCardBody>
      <CCardTitle>{{item.color}} card title</CCardTitle>
      <CCardText>Some quick example text to build on the card title and make up the bulk of the card's content.</CCardText>
    </CCardBody>
  </CCard>
</template>
```

<CCallout color="info">
  <h5>Conveying meaning to assistive technologies</h5>
  <p>
    Using color to add meaning only provides a visual indication, which will not be conveyed to users of assistive technologies – such as screen readers. Ensure that information denoted by the color is either obvious from the content itself (e.g. the visible text), or is included through alternative means, such as additional text hidden with the `.visually-hidden` class.
  </p>
</CCallout>

### Border

Use [border utilities](https://coreui.io/docs/utilities/borders/) to change just the `border-color` of a card. Note that you can set `text-color` property on the `<CCard>` or a subset of the card's contents as shown below.

::: demo
<template v-for="(item) in [
  { color: 'primary', textColor: 'primary' },
  { color: 'secondary', textColor: 'secondary' },
  { color: 'success', textColor: 'success' },
  { color: 'danger', textColor: 'danger' },
  { color: 'warning', textColor: 'warning' },
  { color: 'info', textColor: 'info' },
  { color: 'light'},
  { color: 'dark'}
]">
  <CCard :text-color="item.textColor" class="mb-3" :class="'border-' + item.color" style="max-width: 18rem">
    <CCardHeader>Header</CCardHeader>
    <CCardBody>
      <CCardTitle>{{item.color}} card title</CCardTitle>
      <CCardText>Some quick example text to build on the card title and make up the bulk of the card's content.</CCardText>
    </CCardBody>
  </CCard>
</template>
:::
```vue
<template v-for="(item) in [
  { color: 'primary', textColor: 'primary' },
  { color: 'secondary', textColor: 'secondary' },
  { color: 'success', textColor: 'success' },
  { color: 'danger', textColor: 'danger' },
  { color: 'warning', textColor: 'warning' },
  { color: 'info', textColor: 'info' },
  { color: 'light'},
  { color: 'dark'}
]">
  <CCard :text-color="item.textColor" class="mb-3" :class="'border-' + item.color" style="max-width: 18rem">
    <CCardHeader>Header</CCardHeader>
    <CCardBody>
      <CCardTitle>{{item.color}} card title</CCardTitle>
      <CCardText>Some quick example text to build on the card title and make up the bulk of the card's content.</CCardText>
    </CCardBody>
  </CCard>
</template>
```

### Top border

::: demo
<template v-for="(item) in [
  { color: 'primary', textColor: 'primary' },
  { color: 'secondary', textColor: 'secondary' },
  { color: 'success', textColor: 'success' },
  { color: 'danger', textColor: 'danger' },
  { color: 'warning', textColor: 'warning' },
  { color: 'info', textColor: 'info' },
  { color: 'light'},
  { color: 'dark'}
]">
  <CCard :text-color="item.textColor" class="mb-3 border-top-3" :class="'border-top-' + item.color" style="max-width: 18rem">
    <CCardHeader>Header</CCardHeader>
    <CCardBody>
      <CCardTitle>{{item.color}} card title</CCardTitle>
      <CCardText>Some quick example text to build on the card title and make up the bulk of the card's content.</CCardText>
    </CCardBody>
  </CCard>
</template>
:::
```vue
<template v-for="(item) in [
  { color: 'primary', textColor: 'primary' },
  { color: 'secondary', textColor: 'secondary' },
  { color: 'success', textColor: 'success' },
  { color: 'danger', textColor: 'danger' },
  { color: 'warning', textColor: 'warning' },
  { color: 'info', textColor: 'info' },
  { color: 'light'},
  { color: 'dark'}
]">
  <CCard :text-color="item.textColor" class="mb-3 border-top-3" :class="'border-top-' + item.color" style="max-width: 18rem">
    <CCardHeader>Header</CCardHeader>
    <CCardBody>
      <CCardTitle>{{item.color}} card title</CCardTitle>
      <CCardText>Some quick example text to build on the card title and make up the bulk of the card's content.</CCardText>
    </CCardBody>
  </CCard>
</template>
```

## Card layout

In addition to styling the content within cards, CoreUI includes a few options for laying out series of cards. For the time being, **these layout options are not yet responsive**.

### Card groups

Use card groups to render cards as a single, attached element with equal width and height columns. Card groups start off stacked and use `display: flex;` to become attached with uniform dimensions starting at the `sm` breakpoint.

::: demo
<CCardGroup>
  <CCard>
    <CCardImage orientation="top" :src="$withBase('/images/vue.jpg')" />
    <CCardBody>
      <CCardTitle>Card title</CCardTitle>
      <CCardText>This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</CCardText>
      <CCardText><small class="text-muted">Last updated 3 mins ago</small></CCardText>
    </CCardBody>
  </CCard>
  <CCard>
    <CCardImage orientation="top" :src="$withBase('/images/vue.jpg')" />
    <CCardBody>
      <CCardTitle>Card title</CCardTitle>
      <CCardText>This card has supporting text below as a natural lead-in to additional content.</CCardText>
      <CCardText><small class="text-muted">Last updated 3 mins ago</small></CCardText>
    </CCardBody>
  </CCard>
  <CCard>
    <CCardImage orientation="top" :src="$withBase('/images/vue.jpg')" />
    <CCardBody>
      <CCardTitle>Card title</CCardTitle>
      <CCardText>This is a wider card with supporting text below as a natural lead-in to additional content. This card has even longer content than the first to show that equal height action.</CCardText>
      <CCardText><small class="text-muted">Last updated 3 mins ago</small></CCardText>
    </CCardBody>
  </CCard>
</CCardGroup>
:::
```vue
<CCardGroup>
  <CCard>
    <CCardImage orientation="top" src="/images/vue.jpg" />
    <CCardBody>
      <CCardTitle>Card title</CCardTitle>
      <CCardText>This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</CCardText>
      <CCardText><small class="text-muted">Last updated 3 mins ago</small></CCardText>
    </CCardBody>
  </CCard>
  <CCard>
    <CCardImage orientation="top" src="/images/vue.jpg" />
    <CCardBody>
      <CCardTitle>Card title</CCardTitle>
      <CCardText>This card has supporting text below as a natural lead-in to additional content.</CCardText>
      <CCardText><small class="text-muted">Last updated 3 mins ago</small></CCardText>
    </CCardBody>
  </CCard>
  <CCard>
    <CCardImage orientation="top" src="/images/vue.jpg" />
    <CCardBody>
      <CCardTitle>Card title</CCardTitle>
      <CCardText>This is a wider card with supporting text below as a natural lead-in to additional content. This card has even longer content than the first to show that equal height action.</CCardText>
      <CCardText><small class="text-muted">Last updated 3 mins ago</small></CCardText>
    </CCardBody>
  </CCard>
</CCardGroup>
```

When using card groups with footers, their content will automatically line up.

::: demo
<CCardGroup>
  <CCard>
    <CCardImage orientation="top" :src="$withBase('/images/vue.jpg')" />
    <CCardBody>
      <CCardTitle>Card title</CCardTitle>
      <CCardText>This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</CCardText>
    </CCardBody>
    <CCardFooter><small class="text-muted">Last updated 3 mins ago</small></CCardFooter>
  </CCard>
  <CCard>
    <CCardImage orientation="top" :src="$withBase('/images/vue.jpg')" />
    <CCardBody>
      <CCardTitle>Card title</CCardTitle>
      <CCardText>This card has supporting text below as a natural lead-in to additional content.</CCardText>
    </CCardBody>
    <CCardFooter><small class="text-muted">Last updated 3 mins ago</small></CCardFooter>
  </CCard>
  <CCard>
    <CCardImage orientation="top" :src="$withBase('/images/vue.jpg')" />
    <CCardBody>
      <CCardTitle>Card title</CCardTitle>
      <CCardText>This is a wider card with supporting text below as a natural lead-in to additional content. This card has even longer content than the first to show that equal height action.</CCardText>
    </CCardBody>
    <CCardFooter><small class="text-muted">Last updated 3 mins ago</small></CCardFooter>
  </CCard>
</CCardGroup>
:::
```vue
<CCardGroup>
  <CCard>
    <CCardImage orientation="top" src="/images/vue.jpg" />
    <CCardBody>
      <CCardTitle>Card title</CCardTitle>
      <CCardText>This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</CCardText>
    </CCardBody>
    <CCardFooter><small class="text-muted">Last updated 3 mins ago</small></CCardFooter>
  </CCard>
  <CCard>
    <CCardImage orientation="top" src="/images/vue.jpg" />
    <CCardBody>
      <CCardTitle>Card title</CCardTitle>
      <CCardText>This card has supporting text below as a natural lead-in to additional content.</CCardText>
    </CCardBody>
    <CCardFooter><small class="text-muted">Last updated 3 mins ago</small></CCardFooter>
  </CCard>
  <CCard>
    <CCardImage orientation="top" src="/images/vue.jpg" />
    <CCardBody>
      <CCardTitle>Card title</CCardTitle>
      <CCardText>This is a wider card with supporting text below as a natural lead-in to additional content. This card has even longer content than the first to show that equal height action.</CCardText>
    </CCardBody>
    <CCardFooter><small class="text-muted">Last updated 3 mins ago</small></CCardFooter>
  </CCard>
</CCardGroup>
```

### Grid cards

Use the `CRow` component and set `:xs|sm|md|lg|xl|xxl="{ cols: * }"` property to control how many grid columns (wrapped around your cards) you show per row. For example, here's `:xs="{cols: 1}"` laying out the cards on one column, and `:md="{cols: 1}"` splitting four cards to equal width across multiple rows, from the medium breakpoint up.

::: demo 
<CRow :xs="{ cols: 1, gutter: 4}" :md="{ cols:2 }">
  <CCol xs>
    <CCard>
      <CCardImage orientation="top" :src="$withBase('/images/vue.jpg')" />
      <CCardBody>
        <CCardTitle>Card title</CCardTitle>
        <CCardText>This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</CCardText>
      </CCardBody>
      <CCardFooter><small class="text-muted">Last updated 3 mins ago</small></CCardFooter>
    </CCard>
  </CCol>
  <CCol xs>
    <CCard>
      <CCardImage orientation="top" :src="$withBase('/images/vue.jpg')" />
      <CCardBody>
        <CCardTitle>Card title</CCardTitle>
        <CCardText>This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</CCardText>
      </CCardBody>
      <CCardFooter><small class="text-muted">Last updated 3 mins ago</small></CCardFooter>
    </CCard>
  </CCol>
  <CCol xs>
    <CCard>
      <CCardImage orientation="top" :src="$withBase('/images/vue.jpg')" />
      <CCardBody>
        <CCardTitle>Card title</CCardTitle>
        <CCardText>This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</CCardText>
      </CCardBody>
      <CCardFooter><small class="text-muted">Last updated 3 mins ago</small></CCardFooter>
    </CCard>
  </CCol>
  <CCol xs>
    <CCard>
      <CCardImage orientation="top" :src="$withBase('/images/vue.jpg')" />
      <CCardBody>
        <CCardTitle>Card title</CCardTitle>
        <CCardText>This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</CCardText>
      </CCardBody>
      <CCardFooter><small class="text-muted">Last updated 3 mins ago</small></CCardFooter>
    </CCard>
  </CCol>
</CRow>
:::
```vue
<CRow :xs="{ cols: 1, gutter: 4}" :md="{ cols:2 }">
  <CCol xs>
    <CCard>
      <CCardImage orientation="top" src="/images/vue.jpg" />
      <CCardBody>
        <CCardTitle>Card title</CCardTitle>
        <CCardText>This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</CCardText>
      </CCardBody>
      <CCardFooter><small class="text-muted">Last updated 3 mins ago</small></CCardFooter>
    </CCard>
  </CCol>
  <CCol xs>
    <CCard>
      <CCardImage orientation="top" src="/images/vue.jpg" />
      <CCardBody>
        <CCardTitle>Card title</CCardTitle>
        <CCardText>This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</CCardText>
      </CCardBody>
      <CCardFooter><small class="text-muted">Last updated 3 mins ago</small></CCardFooter>
    </CCard>
  </CCol>
  <CCol xs>
    <CCard>
      <CCardImage orientation="top" src="/images/vue.jpg" />
      <CCardBody>
        <CCardTitle>Card title</CCardTitle>
        <CCardText>This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</CCardText>
      </CCardBody>
      <CCardFooter><small class="text-muted">Last updated 3 mins ago</small></CCardFooter>
    </CCard>
  </CCol>
  <CCol xs>
    <CCard>
      <CCardImage orientation="top" src="/images/vue.jpg" />
      <CCardBody>
        <CCardTitle>Card title</CCardTitle>
        <CCardText>This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</CCardText>
      </CCardBody>
      <CCardFooter><small class="text-muted">Last updated 3 mins ago</small></CCardFooter>
    </CCard>
  </CCol>
</CRow>
```

Change it to `:md="{ cols: 3}"` and you'll see the fourth card wrap.

::: demo
<CRow :xs="{ cols: 1, gutter: 4 }" :md="{ cols: 3}">
  <CCol xs>
    <CCard>
      <CCardImage orientation="top" :src="$withBase('/images/vue.jpg')" />
      <CCardBody>
        <CCardTitle>Card title</CCardTitle>
        <CCardText>This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</CCardText>
      </CCardBody>
      <CCardFooter><small class="text-muted">Last updated 3 mins ago</small></CCardFooter>
    </CCard>
  </CCol>
  <CCol xs>
    <CCard>
      <CCardImage orientation="top" :src="$withBase('/images/vue.jpg')" />
      <CCardBody>
        <CCardTitle>Card title</CCardTitle>
        <CCardText>This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</CCardText>
      </CCardBody>
      <CCardFooter><small class="text-muted">Last updated 3 mins ago</small></CCardFooter>
    </CCard>
  </CCol>
  <CCol xs>
    <CCard>
      <CCardImage orientation="top" :src="$withBase('/images/vue.jpg')" />
      <CCardBody>
        <CCardTitle>Card title</CCardTitle>
        <CCardText>This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</CCardText>
      </CCardBody>
      <CCardFooter><small class="text-muted">Last updated 3 mins ago</small></CCardFooter>
    </CCard>
  </CCol>
  <CCol xs>
    <CCard>
      <CCardImage orientation="top" :src="$withBase('/images/vue.jpg')" />
      <CCardBody>
        <CCardTitle>Card title</CCardTitle>
        <CCardText>This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</CCardText>
      </CCardBody>
      <CCardFooter><small class="text-muted">Last updated 3 mins ago</small></CCardFooter>
    </CCard>
  </CCol>
</CRow>
:::
```vue
<CRow :xs="{ cols: 1, gutter: 4 }" :md="{ cols: 3}">
  <CCol xs>
    <CCard>
      <CCardImage orientation="top" src="/images/vue.jpg" />
      <CCardBody>
        <CCardTitle>Card title</CCardTitle>
        <CCardText>This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</CCardText>
      </CCardBody>
      <CCardFooter><small class="text-muted">Last updated 3 mins ago</small></CCardFooter>
    </CCard>
  </CCol>
  <CCol xs>
    <CCard>
      <CCardImage orientation="top" src="/images/vue.jpg" />
      <CCardBody>
        <CCardTitle>Card title</CCardTitle>
        <CCardText>This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</CCardText>
      </CCardBody>
      <CCardFooter><small class="text-muted">Last updated 3 mins ago</small></CCardFooter>
    </CCard>
  </CCol>
  <CCol xs>
    <CCard>
      <CCardImage orientation="top" src="/images/vue.jpg" />
      <CCardBody>
        <CCardTitle>Card title</CCardTitle>
        <CCardText>This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</CCardText>
      </CCardBody>
      <CCardFooter><small class="text-muted">Last updated 3 mins ago</small></CCardFooter>
    </CCard>
  </CCol>
  <CCol xs>
    <CCard>
      <CCardImage orientation="top" src="/images/vue.jpg" />
      <CCardBody>
        <CCardTitle>Card title</CCardTitle>
        <CCardText>This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</CCardText>
      </CCardBody>
      <CCardFooter><small class="text-muted">Last updated 3 mins ago</small></CCardFooter>
    </CCard>
  </CCol>
</CRow>
```

When you need equal height, add `.h-100` to the cards. If you want equal heights by default, you can set `$card-height: 100%` in Sass.

::: demo
<CRow :xs="{ cols: 1, gutter: 4 }" :md="{ cols: 3}">
  <CCol xs>
    <CCard class="h-100">
      <CCardImage orientation="top" :src="$withBase('/images/vue.jpg')" />
      <CCardBody>
        <CCardTitle>Card title</CCardTitle>
        <CCardText>This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</CCardText>
      </CCardBody>
    </CCard>
  </CCol>
  <CCol xs>
    <CCard class="h-100">
      <CCardImage orientation="top" :src="$withBase('/images/vue.jpg')" />
      <CCardBody>
        <CCardTitle>Card title</CCardTitle>
        <CCardText>This card has supporting text below as a natural lead-in to additional content.</CCardText>
      </CCardBody>
    </CCard>
  </CCol>
  <CCol xs>
    <CCard class="h-100">
      <CCardImage orientation="top" :src="$withBase('/images/vue.jpg')" />
      <CCardBody>
        <CCardTitle>Card title</CCardTitle>
        <CCardText>This is a wider card with supporting text below as a natural lead-in to additional content. This card has even longer content than the first to show that equal height action.</CCardText>
      </CCardBody>
    </CCard>
  </CCol>
  <CCol xs>
    <CCard class="h-100">
      <CCardImage orientation="top" :src="$withBase('/images/vue.jpg')" />
      <CCardBody>
        <CCardTitle>Card title</CCardTitle>
        <CCardText>This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</CCardText>
      </CCardBody>
    </CCard>
  </CCol>
</CRow>
:::
```vue
<CRow :xs="{ cols: 1, gutter: 4 }" :md="{ cols: 3}">
  <CCol xs>
    <CCard class="h-100">
      <CCardImage orientation="top" src="/images/vue.jpg" />
      <CCardBody>
        <CCardTitle>Card title</CCardTitle>
        <CCardText>This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</CCardText>
      </CCardBody>
    </CCard>
  </CCol>
  <CCol xs>
    <CCard class="h-100">
      <CCardImage orientation="top" src="/images/vue.jpg" />
      <CCardBody>
        <CCardTitle>Card title</CCardTitle>
        <CCardText>This card has supporting text below as a natural lead-in to additional content.</CCardText>
      </CCardBody>
    </CCard>
  </CCol>
  <CCol xs>
    <CCard class="h-100">
      <CCardImage orientation="top" src="/images/vue.jpg" />
      <CCardBody>
        <CCardTitle>Card title</CCardTitle>
        <CCardText>This is a wider card with supporting text below as a natural lead-in to additional content. This card has even longer content than the first to show that equal height action.</CCardText>
      </CCardBody>
    </CCard>
  </CCol>
  <CCol xs>
    <CCard class="h-100">
      <CCardImage orientation="top" src="/images/vue.jpg" />
      <CCardBody>
        <CCardTitle>Card title</CCardTitle>
        <CCardText>This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</CCardText>
      </CCardBody>
    </CCard>
  </CCol>
</CRow>
```

Just like with card groups, card footers will automatically line up.

::: demo
<CRow :xs="{ cols: 1, gutter: 4 }" :md="{ cols: 3}">
  <CCol xs>
    <CCard class="h-100">
      <CCardImage orientation="top" :src="$withBase('/images/vue.jpg')" />
      <CCardBody>
        <CCardTitle>Card title</CCardTitle>
        <CCardText>This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</CCardText>
      </CCardBody>
      <CCardFooter><small class="text-muted">Last updated 3 mins ago</small></CCardFooter>
    </CCard>
  </CCol>
  <CCol xs>
    <CCard class="h-100">
      <CCardImage orientation="top" :src="$withBase('/images/vue.jpg')" />
      <CCardBody>
        <CCardTitle>Card title</CCardTitle>
        <CCardText>This card has supporting text below as a natural lead-in to additional content.</CCardText>
      </CCardBody>
      <CCardFooter><small class="text-muted">Last updated 3 mins ago</small></CCardFooter>
    </CCard>
  </CCol>
  <CCol xs>
    <CCard class="h-100">
      <CCardImage orientation="top" :src="$withBase('/images/vue.jpg')" />
      <CCardBody>
        <CCardTitle>Card title</CCardTitle>
        <CCardText>This is a wider card with supporting text below as a natural lead-in to additional content. This card has even longer content than the first to show that equal height action.</CCardText>
      </CCardBody>
      <CCardFooter><small class="text-muted">Last updated 3 mins ago</small></CCardFooter>
    </CCard>
  </CCol>
</CRow>
:::
```vue
<CRow :xs="{ cols: 1, gutter: 4 }" :md="{ cols: 3}">
  <CCol xs>
    <CCard class="h-100">
      <CCardImage orientation="top" src="/images/vue.jpg" />
      <CCardBody>
        <CCardTitle>Card title</CCardTitle>
        <CCardText>This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</CCardText>
      </CCardBody>
      <CCardFooter><small class="text-muted">Last updated 3 mins ago</small></CCardFooter>
    </CCard>
  </CCol>
  <CCol xs>
    <CCard class="h-100">
      <CCardImage orientation="top" src="/images/vue.jpg" />
      <CCardBody>
        <CCardTitle>Card title</CCardTitle>
        <CCardText>This card has supporting text below as a natural lead-in to additional content.</CCardText>
      </CCardBody>
      <CCardFooter><small class="text-muted">Last updated 3 mins ago</small></CCardFooter>
    </CCard>
  </CCol>
  <CCol xs>
    <CCard class="h-100">
      <CCardImage orientation="top" src="/images/vue.jpg" />
      <CCardBody>
        <CCardTitle>Card title</CCardTitle>
        <CCardText>This is a wider card with supporting text below as a natural lead-in to additional content. This card has even longer content than the first to show that equal height action.</CCardText>
      </CCardBody>
      <CCardFooter><small class="text-muted">Last updated 3 mins ago</small></CCardFooter>
    </CCard>
  </CCol>
</CRow>
```

## Customizing

### CSS variables

Vue cards use local CSS variables on `.card` for enhanced real-time customization. Values for the CSS variables are set via Sass, so Sass customization is still supported, too.

<ScssDocs file="_card.scss" capture="card-css-vars"/>

#### How to use CSS variables

```js
const vars = { 
  '--my-css-var': 10,
  '--my-another-css-var': "red" 
}
return <CCard :style="vars">...</CCard>
```

### SASS variables

<ScssDocs file="_variables.scss" capture="card-variables"/>

## API

!!!include(./api/card/CCard.api.md)!!!

!!!include(./api/card/CCardHeader.api.md)!!!

!!!include(./api/card/CCardImage.api.md)!!!

!!!include(./api/card/CCardSubtitle.api.md)!!!

!!!include(./api/card/CCardText.api.md)!!!

!!!include(./api/card/CCardTitle.api.md)!!!