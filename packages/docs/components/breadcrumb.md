---
title: Vue Breadcrumb Component
name: Breadcrumb
description: Vue breadcrumb navigation component which indicates the current location within a navigational hierarchy that automatically adds separators.
other_frameworks: breadcrumb
---


## Example

The breadcrumb navigation provides links back to each previous page the user navigated through and shows the current location in a website or an application. You don’t have to add separators, because they automatically added in CSS through ::before and content.

::: demo
<CBreadcrumb>
  <CBreadcrumbItem active>Home</CBreadcrumbItem>
</CBreadcrumb>
<CBreadcrumb>
  <CBreadcrumbItem href="#">Home</CBreadcrumbItem>
  <CBreadcrumbItem active>Library</CBreadcrumbItem>
</CBreadcrumb>
<CBreadcrumb>
  <CBreadcrumbItem href="#">Home</CBreadcrumbItem>
  <CBreadcrumbItem href="#">Library</CBreadcrumbItem>
  <CBreadcrumbItem active>Data</CBreadcrumbItem>
</CBreadcrumb>
:::
```vue
<CBreadcrumb>
  <CBreadcrumbItem active>Home</CBreadcrumbItem>
</CBreadcrumb>
<CBreadcrumb>
  <CBreadcrumbItem href="#">Home</CBreadcrumbItem>
  <CBreadcrumbItem active>Library</CBreadcrumbItem>
</CBreadcrumb>
<CBreadcrumb>
  <CBreadcrumbItem href="#">Home</CBreadcrumbItem>
  <CBreadcrumbItem href="#">Library</CBreadcrumbItem>
  <CBreadcrumbItem active>Data</CBreadcrumbItem>
</CBreadcrumb>
```

## Dividers

Dividers are automatically added in CSS through [`::before`](https://developer.mozilla.org/en-US/docs/Web/CSS/::before) and [`content`](https://developer.mozilla.org/en-US/docs/Web/CSS/content). They can be changed by modifying a local CSS custom property `--coreui-breadcrumb-divider`, or through the `$breadcrumb-divider` Sass variable — and `$breadcrumb-divider-flipped` for its RTL counterpart, if needed. We default to our Sass variable, which is set as a fallback to the custom property. This way, you get a global divider that you can override without recompiling CSS at any time.

::: demo
<CBreadcrumb style="--cui-breadcrumb-divider: '>'">
  <CBreadcrumbItem href="#">Home</CBreadcrumbItem>
  <CBreadcrumbItem active>Library</CBreadcrumbItem>
</CBreadcrumb>
:::
```vue
<CBreadcrumb style="--cui-breadcrumb-divider: '>'">
  <CBreadcrumbItem href="#">Home</CBreadcrumbItem>
  <CBreadcrumbItem active>Library</CBreadcrumbItem>
</CBreadcrumb>
```

When modifying via Sass, the [quote](https://sass-lang.com/documentation/modules/string#quote) function is required to generate the quotes around a string. For example, using `>` as the divider, you can use this:

```scss
$breadcrumb-divider: quote(">");
```

It's also possible to use an **embedded SVG icon**. Apply it via our CSS custom property, or use the Sass variable.

::: demo
<CBreadcrumb style="--cui-breadcrumb-divider: url(&#34;data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='8' height='8'%3E%3Cpath d='M2.5 0L1 1.5 3.5 4 1 6.5 2.5 8l4-4-4-4z' fill='currentColor'/%3E%3C/svg%3E&#34;);">
  <CBreadcrumbItem href="#">Home</CBreadcrumbItem>
  <CBreadcrumbItem active>Library</CBreadcrumbItem>
</CBreadcrumb>
:::
```vue
<CBreadcrumb style="--cui-breadcrumb-divider: url(&#34;data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='8' height='8'%3E%3Cpath d='M2.5 0L1 1.5 3.5 4 1 6.5 2.5 8l4-4-4-4z' fill='currentColor'/%3E%3C/svg%3E&#34;);">
  <CBreadcrumbItem href="#">Home</CBreadcrumbItem>
  <CBreadcrumbItem active>Library</CBreadcrumbItem>
</CBreadcrumb>
```

```scss
$breadcrumb-divider: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' 
width='8' height='8'%3E%3Cpath d='M2.5 0L1 1.5 3.5 4 1 6.5 2.5 8l4-4-4-4z' fill='currentColor'/%3E%3C/svg%3E");
```

You can also remove the divider setting `--cui-breadcrumb-divider: '';` (empty strings in CSS custom properties counts as a value), or setting the Sass variable to `$breadcrumb-divider: none;`.

::: demo
<CBreadcrumb style="--cui-breadcrumb-divider: '';">
  <CBreadcrumbItem href="#">Home</CBreadcrumbItem>
  <CBreadcrumbItem active>Library</CBreadcrumbItem>
</CBreadcrumb>
:::
```vue
<CBreadcrumb style="--cui-breadcrumb-divider: '';">
  <CBreadcrumbItem href="#">Home</CBreadcrumbItem>
  <CBreadcrumbItem active>Library</CBreadcrumbItem>
</CBreadcrumb>
```

```scss
$breadcrumb-divider: none;
```

## Accessibility

Since breadcrumbs provide navigation, it's useful to add a significant label such as `aria-label="breadcrumb"` to explain the type of navigation implemented in the `<nav>` element. You should also add an `aria-current="page"` to the last item of the set to show that it represents the current page. **CoreUI for Vue.js automatically add all of this labels to breadcrumb's components.** 

For more information, see the [WAI-ARIA Authoring Practices for the breadcrumb pattern](https://www.w3.org/TR/wai-aria-practices/#breadcrumb).

## Customizing

### CSS variables

Vue breadcrumbs use local CSS variables on `.breadcrumb` for enhanced real-time customization. Values for the CSS variables are set via Sass, so Sass customization is still supported, too.

```sass
--cui-breadcrumb-padding-x: #{$breadcrumb-padding-x};
--cui-breadcrumb-padding-y: #{$breadcrumb-padding-y};
--cui-breadcrumb-margin-bottom: #{$breadcrumb-margin-bottom};
--cui-breadcrumb-font-size: #{$breadcrumb-font-size};
--cui-breadcrumb-bg: #{$breadcrumb-bg};
--cui-breadcrumb-border-radius: #{$breadcrumb-border-radius};
--cui-breadcrumb-divider-color: #{$breadcrumb-divider-color};
--cui-breadcrumb-item-padding-x: #{$breadcrumb-item-padding-x};
--cui-breadcrumb-item-active-color: #{$breadcrumb-active-color};
```

#### How to use CSS variables

```js
const vars = { 
  '--my-css-var': 10,
  '--my-another-css-var': "red" 
}
return <CBreadcrumb :style="vars">...</CBreadcrumb>
```

### SASS variables

```sass
$breadcrumb-font-size:              null;
$breadcrumb-padding-y:              0;
$breadcrumb-padding-x:              0;
$breadcrumb-item-padding-x:         .5rem;
$breadcrumb-margin-bottom:          1rem;
$breadcrumb-bg:                     unset;
$breadcrumb-divider-color:          $gray-600;
$breadcrumb-active-color:           $gray-600;
$breadcrumb-divider:                quote("/");
$breadcrumb-divider-flipped:        $breadcrumb-divider;
$breadcrumb-border-radius:          null;
```

## API

!!!include(./api/breadcrumb/CBreadcrumbItem.api.md)!!!