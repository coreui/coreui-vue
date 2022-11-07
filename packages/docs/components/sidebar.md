---
title: Vue Sidebar Component
description: Vue Sidebar is a powerful and customizable responsive navigation component for any type of vertical navigation. Bootstrap Sidebar come with built-in support for branding, navigation, and more.
other_frameworks: sidebar
---

## Supported content

Sidebar come with built-in support for a handful of sub-components. Choose from the following as needed:

- `<CSidebarHeader>` for optional header.
- `<CSidebarBrand>` for your company, product, or project name.
- `<CSidebarNav>` for a full-height and lightweight navigation (including support for dropdowns).
- `<CSidebarFooter>` for optional footer.
- `<CSidebarToggler>` for use with our minimizer plugin.

## Examples

::: demo
<CSidebar visible>
  <CSidebarBrand>Sidebar Brand</CSidebarBrand>
  <CSidebarNav>
    <li class="nav-title">Nav Title</li>
    <CNavItem href="#">
      <CIcon  customClassName="nav-icon" icon="cil-speedometer"/>
      Nav item
    </CNavItem>
    <CNavItem href="#">
      <CIcon  customClassName="nav-icon" icon="cil-speedometer"/>
      With badge
      <CBadge class="ms-auto" color="primary">NEW</CBadge>
    </CNavItem>
    <CNavGroup>
      <template #togglerContent>
        <CIcon  customClassName="nav-icon" icon="cil-puzzle"/> Nav dropdown
      </template>
      <CNavItem href="#">
        <CIcon  customClassName="nav-icon" icon="cil-puzzle"/> Nav dropdown item
      </CNavItem>
      <CNavItem href="#">
         <CIcon  customClassName="nav-icon" icon="cil-puzzle"/> Nav dropdown item
      </CNavItem>
    </CNavGroup>
    <CNavGroup>
      <template #togglerContent>
        <CIcon  customClassName="nav-icon" icon="cil-puzzle"/> Nav dropdown2
      </template>
      <CNavItem href="#">
        <CIcon  customClassName="nav-icon" icon="cil-puzzle"/> Nav dropdown item
      </CNavItem>
      <CNavItem href="#">
         <CIcon  customClassName="nav-icon" icon="cil-puzzle"/> Nav dropdown item
      </CNavItem>
    </CNavGroup>
  </CSidebarNav>
  <CSidebarToggler/>
</CSidebar>
:::
```vue
<CSidebar visible>
  <CSidebarBrand>Sidebar Brand</CSidebarBrand>
  <CSidebarNav>
    <li class="nav-title">Nav Title</li>
    <CNavItem href="#">
      <CIcon  customClassName="nav-icon" icon="cil-speedometer"/>
      Nav item
    </CNavItem>
    <CNavItem href="#">
        <CIcon  customClassName="nav-icon" icon="cil-speedometer"/>
        With badge
        <CBadge color="primary ms-auto">NEW</CBadge>
    </CNavItem>
    <CNavGroup>
      <template #togglerContent>
        <CIcon  customClassName="nav-icon" icon="cil-puzzle"/> Nav dropdown
      </template>
      <CNavItem href="#">
        <CIcon  customClassName="nav-icon" icon="cil-puzzle"/> Nav dropdown item
      </CNavItem>
      <CNavItem href="#">
         <CIcon  customClassName="nav-icon" icon="cil-puzzle"/> Nav dropdown item
      </CNavItem>
    </CNavGroup>
  </CSidebarNav>
  <CSidebarToggler/>
</CSidebar>
```

## Customizing

### CSS variables

Vue sidebars use local CSS variables on `.sidebar` and `.sidebar-backdrop` for enhanced real-time customization. Values for the CSS variables are set via Sass, so Sass customization is still supported, too.

```sass
--cui-sidebar-width: #{$sidebar-width};
--cui-sidebar-bg: #{$sidebar-bg};
--cui-sidebar-padding-x: #{$sidebar-padding-x};
--cui-sidebar-padding-y: #{$sidebar-padding-y};
--cui-sidebar-color: #{$sidebar-color};
--cui-sidebar-border-width: #{$sidebar-border-width};
--cui-sidebar-border-color: #{$sidebar-border-color};
--cui-sidebar-brand-color: #{$sidebar-brand-color};
--cui-sidebar-brand-height: #{$sidebar-brand-height};
--cui-sidebar-brand-bg: #{$sidebar-brand-bg};
--cui-sidebar-header-height: #{$sidebar-header-height};
--cui-sidebar-header-bg: #{$sidebar-header-bg};
--cui-sidebar-header-padding-x: #{$sidebar-header-padding-x};
--cui-sidebar-header-padding-y: #{$sidebar-header-padding-y};
--cui-sidebar-footer-bg: #{$sidebar-footer-bg};
--cui-sidebar-footer-height: #{$sidebar-footer-height};
--cui-sidebar-footer-padding-x: #{$sidebar-footer-padding-x};
--cui-sidebar-footer-padding-y: #{$sidebar-footer-padding-y};
--cui-sidebar-toggler-bg: #{$sidebar-toggler-bg};
--cui-sidebar-toggler-height: #{$sidebar-toggler-height};
--cui-sidebar-toggler-indicator: #{escape-svg($sidebar-toggler-indicator-icon)};
--cui-sidebar-toggler-indicator-width: #{$sidebar-toggler-indicator-width};
--cui-sidebar-toggler-indicator-height: #{$sidebar-toggler-indicator-height};
--cui-sidebar-toggler-hover-bg: #{$sidebar-toggler-hover-bg};
--cui-sidebar-toggler-indicator-hover: #{escape-svg($sidebar-toggler-indicator-hover-icon)}
--cui-sidebar-narrow-width: #{$sidebar-narrow-width};
--cui-sidebar-nav-title-padding-x: #{$sidebar-nav-title-padding-x};
--cui-sidebar-nav-title-padding-y: #{$sidebar-nav-title-padding-y};
--cui-sidebar-nav-title-margin-top: #{$sidebar-nav-title-margin-top};
--cui-sidebar-nav-title-color: #{$sidebar-nav-title-color};
--cui-sidebar-nav-link-padding-x: #{$sidebar-nav-link-padding-x};
--cui-sidebar-nav-link-padding-y: #{$sidebar-nav-link-padding-y};
--cui-sidebar-nav-link-color: #{$sidebar-nav-link-color};
--cui-sidebar-nav-link-bg: #{$sidebar-nav-link-bg};
--cui-sidebar-nav-link-border-color: #{$sidebar-nav-link-border-color};
--cui-sidebar-nav-link-border: #{$sidebar-nav-link-border-width} solid var(--cui-sidebar-nav-link-border-color);
--cui-sidebar-nav-link-border-radius: #{$sidebar-nav-link-border-radius};
--cui-sidebar-nav-link-active-color: #{$sidebar-nav-link-active-color};
--cui-sidebar-nav-link-active-bg: #{$sidebar-nav-link-active-bg};
--cui-sidebar-nav-link-active-icon-color: #{$sidebar-nav-link-active-icon-color};
--cui-sidebar-nav-link-disabled-color: #{$sidebar-nav-link-disabled-color};
--cui-sidebar-nav-link-disabled-icon-color: #{$sidebar-nav-link-disabled-icon-color};
--cui-sidebar-nav-link-hover-color: #{$sidebar-nav-link-hover-color};
--cui-sidebar-nav-link-hover-bg: #{$sidebar-nav-link-hover-bg};
--cui-sidebar-nav-link-hover-icon-color: #{$sidebar-nav-link-hover-icon-color};
--cui-sidebar-nav-icon-width: #{$sidebar-nav-icon-width};
--cui-sidebar-nav-icon-height: #{$sidebar-nav-icon-height};
--cui-sidebar-nav-icon-font-size: #{$sidebar-nav-icon-font-size};
--cui-sidebar-nav-link-icon-color: #{$sidebar-nav-link-icon-color};
--cui-sidebar-nav-group-bg: #{$sidebar-nav-group-bg};
--cui-sidebar-nav-group-items-padding-y: #{$sidebar-nav-group-items-padding-y};
--cui-sidebar-nav-group-items-padding-x: #{$sidebar-nav-group-items-padding-x};
--cui-sidebar-nav-group-indicator: #{escape-svg($sidebar-nav-group-indicator-icon)};
--cui-sidebar-nav-group-indicator-hover: #{escape-svg($sidebar-nav-group-indicator-hover-icon)};
--cui-sidebar-nav-group-toggle-show-color: #{$sidebar-nav-group-toggle-show-color};
```

```sass
--cui-backdrop-zindex: #{$zindex-sidebar-backdrop};
--cui-backdrop-bg: #{$sidebar-backdrop-bg};
--cui-backdrop-opacity: #{$sidebar-backdrop-opacity};
```

#### How to use CSS variables

```js
const vars = { 
  '--my-css-var': 10,
  '--my-another-css-var': "red" 
}
return <CSidebar :style="vars">...</CSidebar>
```

### SASS variables

```sass
$sidebar-width:                            16rem;
$sidebar-widths: (
  sm: 12rem,
  lg: 20rem,
  xl: 24rem
);
$sidebar-padding-y:                        0;
$sidebar-padding-x:                        0;
$sidebar-color:                            $high-emphasis-inverse;
$sidebar-bg:                               $gray-base;
$sidebar-border-width:                     0;
$sidebar-border-color:                     transparent;
$sidebar-transition:                       margin-left .15s, margin-right .15s, box-shadow .075s, transform .15s, width .15s, z-index 0s ease .15s;

$sidebar-brand-height:                     4rem;
$sidebar-brand-color:                      $high-emphasis-inverse;
$sidebar-brand-bg:                         rgba($black, .2);

$sidebar-header-height:                    4rem;
$sidebar-header-padding-y:                 .75rem;
$sidebar-header-padding-x:                 1rem;
$sidebar-header-bg:                        rgba($black, .2);
$sidebar-header-height-transition:         height .15s, padding .15s;

$sidebar-narrow-width:                     4rem;

$sidebar-backdrop-bg:                      $black;
$sidebar-backdrop-opacity:                 .5;

$sidebar-nav-title-padding-y:              .75rem;
$sidebar-nav-title-padding-x:              1rem;
$sidebar-nav-title-margin-top:             1rem;
$sidebar-nav-title-color:                  $medium-emphasis-inverse;
$sidebar-nav-title-transition:             height .15s, margin .15s;

$sidebar-nav-link-padding-y:               .8445rem;
$sidebar-nav-link-padding-x:               1rem;
$sidebar-nav-link-color:                   $medium-emphasis-inverse;
$sidebar-nav-link-bg:                      transparent;
$sidebar-nav-link-border-width:            0;
$sidebar-nav-link-border-color:            transparent;
$sidebar-nav-link-border-radius:           0;
$sidebar-nav-link-transition:              background .15s ease, color .15s ease;
$sidebar-nav-link-icon-color:              $medium-emphasis-inverse;

$sidebar-nav-link-hover-color:             $high-emphasis-inverse;
$sidebar-nav-link-hover-bg:                rgba($white, .05);
$sidebar-nav-link-hover-icon-color:        $high-emphasis-inverse;

$sidebar-nav-link-active-color:            $high-emphasis-inverse;
$sidebar-nav-link-active-bg:               rgba($white, .05);
$sidebar-nav-link-active-icon-color:       $high-emphasis-inverse;

$sidebar-nav-link-disabled-color:          $disabled-inverse;
$sidebar-nav-link-disabled-icon-color:     $sidebar-nav-link-icon-color;

$sidebar-nav-icon-width:                   4rem;
$sidebar-nav-icon-height:                  1.25rem;
$sidebar-nav-icon-font-size:               $sidebar-nav-icon-height;

$sidebar-nav-group-bg:                     rgba(0, 0, 0, .2);
$sidebar-nav-group-transition:             background .15s ease-in-out;
$sidebar-nav-group-toggle-show-color:      $sidebar-nav-link-color;

$sidebar-nav-group-items-padding-y:        0;
$sidebar-nav-group-items-padding-x:        0;
$sidebar-nav-group-items-transition:       height .15s ease;

$sidebar-nav-group-indicator-color:        $medium-emphasis-inverse;
$sidebar-nav-group-indicator-icon:         url("data:image/svg+xml,<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 16 16' fill='#{$sidebar-nav-group-indicator-color}'><path fill-rule='evenodd' d='M1.646 4.646a.5.5 0 0 1 .708 0L8 10.293l5.646-5.647a.5.5 0 0 1 .708.708l-6 6a.5.5 0 0 1-.708 0l-6-6a.5.5 0 0 1 0-.708z'/></svg>");
$sidebar-nav-group-indicator-hover-color:  $sidebar-nav-link-hover-color;
$sidebar-nav-group-indicator-hover-icon:   url("data:image/svg+xml,<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 16 16' fill='#{$sidebar-nav-group-indicator-hover-color}'><path fill-rule='evenodd' d='M1.646 4.646a.5.5 0 0 1 .708 0L8 10.293l5.646-5.647a.5.5 0 0 1 .708.708l-6 6a.5.5 0 0 1-.708 0l-6-6a.5.5 0 0 1 0-.708z'/></svg>");
$sidebar-nav-group-indicator-transition:   transform .15s;

$sidebar-footer-height:                    auto;
$sidebar-footer-padding-y:                 .75rem;
$sidebar-footer-padding-x:                 1rem;
$sidebar-footer-bg:                        rgba($black, .2);
$sidebar-footer-height-transition:         height .15s, padding .15s;

$sidebar-toggler-height:                   3rem;
$sidebar-toggler-bg:                       rgba($black, .2);
$sidebar-toggler-transition:               transform .15s;

$sidebar-toggler-indicator-width:          4rem;
$sidebar-toggler-indicator-height:         3rem;
$sidebar-toggler-indicator-color:          $gray-600;
$sidebar-toggler-indicator-icon:           url("data:image/svg+xml;charset=utf8,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 11 14'%3E%3Cpath fill='#{$sidebar-toggler-indicator-color}' d='M9.148 2.352l-4.148 4.148 4.148 4.148q0.148 0.148 0.148 0.352t-0.148 0.352l-1.297 1.297q-0.148 0.148-0.352 0.148t-0.352-0.148l-5.797-5.797q-0.148-0.148-0.148-0.352t0.148-0.352l5.797-5.797q0.148-0.148 0.352-0.148t0.352 0.148l1.297 1.297q0.148 0.148 0.148 0.352t-0.148 0.352z'/%3E%3C/svg%3E");
$sidebar-toggler-hover-bg:                 rgba(0, 0, 0, .3);

$sidebar-toggler-indicator-hover-color:    $sidebar-nav-link-hover-color;
$sidebar-toggler-indicator-hover-icon:     url("data:image/svg+xml;charset=utf8,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 11 14'%3E%3Cpath fill='#{$sidebar-toggler-indicator-hover-color}' d='M9.148 2.352l-4.148 4.148 4.148 4.148q0.148 0.148 0.148 0.352t-0.148 0.352l-1.297 1.297q-0.148 0.148-0.352 0.148t-0.352-0.148l-5.797-5.797q-0.148-0.148-0.148-0.352t0.148-0.352l5.797-5.797q0.148-0.148 0.352-0.148t0.352 0.148l1.297 1.297q0.148 0.148 0.148 0.352t-0.148 0.352z'/%3E%3C/svg%3E");

$sidebar-light-color:    $body-color;
$sidebar-light-bg:       $white;
$sidebar-light-border-width:                     0;
$sidebar-light-border-color:                     transparent;

$sidebar-light-brand-color:  $white;
$sidebar-light-brand-bg:     $primary;

$sidebar-light-header-bg: rgba($black, .2);

$sidebar-light-nav-title-color:                  $medium-emphasis;

$sidebar-light-nav-link-color:                   $medium-emphasis;
$sidebar-light-nav-link-bg:                      transparent;
$sidebar-light-nav-link-icon-color:              $medium-emphasis;

$sidebar-light-nav-link-hover-color:             $high-emphasis;
$sidebar-light-nav-link-hover-bg:                theme-color("primary");
$sidebar-light-nav-link-hover-icon-color:        $high-emphasis;

$sidebar-light-nav-link-active-color:            $high-emphasis;
$sidebar-light-nav-link-active-bg:               rgba($white, .05);
$sidebar-light-nav-link-active-icon-color:       $high-emphasis;

$sidebar-light-nav-link-disabled-color:          $disabled;
$sidebar-light-nav-link-disabled-icon-color:     $sidebar-light-nav-link-icon-color;

$sidebar-light-nav-group-bg:                     rgba(0, 0, 0, .05);
$sidebar-light-nav-group-toggle-show-color:      $sidebar-light-nav-link-color;

$sidebar-light-nav-group-indicator-color:        $medium-emphasis;
$sidebar-light-nav-group-indicator-icon:         url("data:image/svg+xml,<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 16 16' fill='#{$sidebar-light-nav-group-indicator-color}'><path fill-rule='evenodd' d='M1.646 4.646a.5.5 0 0 1 .708 0L8 10.293l5.646-5.647a.5.5 0 0 1 .708.708l-6 6a.5.5 0 0 1-.708 0l-6-6a.5.5 0 0 1 0-.708z'/></svg>");
$sidebar-light-nav-group-indicator-hover-color:  $sidebar-light-nav-link-hover-color;
$sidebar-light-nav-group-indicator-hover-icon:   url("data:image/svg+xml,<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 16 16' fill='#{$sidebar-light-nav-group-indicator-hover-color}'><path fill-rule='evenodd' d='M1.646 4.646a.5.5 0 0 1 .708 0L8 10.293l5.646-5.647a.5.5 0 0 1 .708.708l-6 6a.5.5 0 0 1-.708 0l-6-6a.5.5 0 0 1 0-.708z'/></svg>");

$sidebar-light-footer-bg:                        rgba($black, .1);

$sidebar-light-toggler-bg:                       rgba($black, .1);
$sidebar-light-toggler-hover-bg:                 rgba(0, 0, 0, .2);
$sidebar-light-toggler-indicator-color:          $medium-emphasis;
$sidebar-light-toggler-indicator-icon:           url("data:image/svg+xml;charset=utf8,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 11 14'%3E%3Cpath fill='#{$sidebar-light-toggler-indicator-color}' d='M9.148 2.352l-4.148 4.148 4.148 4.148q0.148 0.148 0.148 0.352t-0.148 0.352l-1.297 1.297q-0.148 0.148-0.352 0.148t-0.352-0.148l-5.797-5.797q-0.148-0.148-0.148-0.352t0.148-0.352l5.797-5.797q0.148-0.148 0.352-0.148t0.352 0.148l1.297 1.297q0.148 0.148 0.148 0.352t-0.148 0.352z'/%3E%3C/svg%3E");
$sidebar-light-toggler-indicator-hover-color:    $sidebar-light-nav-link-hover-color;
$sidebar-light-toggler-indicator-hover-icon:     url("data:image/svg+xml;charset=utf8,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 11 14'%3E%3Cpath fill='#{$sidebar-light-toggler-indicator-hover-color}' d='M9.148 2.352l-4.148 4.148 4.148 4.148q0.148 0.148 0.148 0.352t-0.148 0.352l-1.297 1.297q-0.148 0.148-0.352 0.148t-0.352-0.148l-5.797-5.797q-0.148-0.148-0.148-0.352t0.148-0.352l5.797-5.797q0.148-0.148 0.352-0.148t0.352 0.148l1.297 1.297q0.148 0.148 0.148 0.352t-0.148 0.352z'/%3E%3C/svg%3E");
```

## API

!!!include(./api/sidebar/CSidebar.api.md)!!!
