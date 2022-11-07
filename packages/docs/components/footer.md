---
title: Vue Footer Component
name: Footer
description: Vue footer component is an additional navigation used for displaying general information that a user might want to access from any page within your site. It is a place to display boilerplate text about the site, company info, copyrights, links to a contact form, sitemap, FAQ and other such resources.
other_frameworks: footer
---

## Examples

::: demo
<CFooter>
  <div>
    <CLink href="https://coreui.io">CoreUI</CLink>
    <span>&copy; 2021 creativeLabs.</span>
  </div>
  <div>
    <span>Powered by</span>
    <CLink href="https://coreui.io">CoreUI</CLink>
  </div>
</CFooter>
:::
```vue
<CFooter>
  <div>
    <CLink href="https://coreui.io">CoreUI</CLink>
    <span>&copy; 2021 creativeLabs.</span>
  </div>
  <div>
    <span>Powered by</span>
    <CLink href="https://coreui.io">CoreUI</CLink>
  </div>
</CFooter>
```

## Customizing

### CSS variables

Vue footers use local CSS variables on `.footer` for enhanced real-time customization. Values for the CSS variables are set via Sass, so Sass customization is still supported, too.

```sass
--cui-footer-min-height: #{$footer-min-height};
--cui-footer-padding-x: #{$footer-padding-x};
--cui-footer-padding-y: #{$footer-padding-y};
--cui-footer-color: #{$footer-color};
--cui-footer-bg: #{$footer-bg};
--cui-footer-border-color: #{$footer-border-color};
--cui-footer-border: #{$footer-border-width} solid var(--cui-footer-border-color);
```

#### How to use CSS variables

```js
const vars = { 
  '--my-css-var': 10,
  '--my-another-css-var': "red" 
}
return <CFooter :style="vars">...</CFooter>
```

### SASS variables

```sass
$footer-min-height:    3rem;
$footer-padding-y:     $spacer * .5;
$footer-padding-x:     $spacer;
$footer-bg:            $gray-100;
$footer-color:         $body-color;
$footer-border-width:  1px;
$footer-border-color:  $border-color;
```

## API

!!!include(./api/footer/CFooter.api.md)!!!