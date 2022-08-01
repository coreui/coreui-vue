---
title: CSS variables
name: CSS variables
description: Use CoreUI's CSS custom properties for fast and forward-looking design and development.
---

CoreUI includes around two dozen [CSS custom properties (variables)](https://developer.mozilla.org/en-US/docs/Web/CSS/Using_CSS_custom_properties) in its compiled CSS, with dozens more on the way for improved customization on a per-component basis. These provide easy access to commonly used values like our theme colors, breakpoints, and primary font stacks when working in your browser's inspector, a code sandbox, or general prototyping.

**All our custom properties are prefixed with `cui-`** to avoid conflicts with third party CSS.

## Root variables

Here are the variables we include (note that the `:root` is required) that can be accessed anywhere CoreUI's CSS is loaded. They're located in our `_root.scss` file and included in our compiled dist files.

```css
:root {
  --cui-blue: #0d6efd;
  --cui-indigo: #6610f2;
  --cui-purple: #6f42c1;
  --cui-pink: #d63384;
  --cui-red: #dc3545;
  --cui-orange: #fd7e14;
  --cui-yellow: #ffc107;
  --cui-green: #198754;
  --cui-teal: #20c997;
  --cui-cyan: #0dcaf0;
  --cui-black: #000015;
  --cui-white: #fff;
  --cui-gray: #8a93a2;
  --cui-gray-dark: #636f83;
  --cui-gray-100: #ebedef;
  --cui-gray-200: #d8dbe0;
  --cui-gray-300: #c4c9d0;
  --cui-gray-400: #b1b7c1;
  --cui-gray-500: #9da5b1;
  --cui-gray-600: #8a93a2;
  --cui-gray-700: #768192;
  --cui-gray-800: #636f83;
  --cui-gray-900: #4f5d73;
  --cui-primary: #321fdb;
  --cui-secondary: #9da5b1;
  --cui-success: #2eb85c;
  --cui-info: #39f;
  --cui-warning: #f9b115;
  --cui-danger: #e55353;
  --cui-light: #ebedef;
  --cui-dark: #4f5d73;
  --cui-primary-rgb: 50, 31, 219;
  --cui-secondary-rgb: 157, 165, 177;
  --cui-success-rgb: 46, 184, 92;
  --cui-info-rgb: 51, 153, 255;
  --cui-warning-rgb: 249, 177, 21;
  --cui-danger-rgb: 229, 83, 83;
  --cui-light-rgb: 235, 237, 239;
  --cui-dark-rgb: 79, 93, 115;
  --cui-white-rgb: 255, 255, 255;
  --cui-black-rgb: 0, 0, 21;
  --cui-body-color-rgb: 44, 56, 74;
  --cui-body-bg-rgb: 255, 255, 255;
  --cui-font-sans-serif: system-ui, -apple-system, "Segoe UI", Roboto, "Helvetica Neue", "Noto Sans", "Liberation Sans", Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji";
  --cui-font-monospace: SFMono-Regular, Menlo, Monaco, Consolas, "Liberation Mono", "Courier New", monospace;
  --cui-gradient: linear-gradient(180deg, rgba(255, 255, 255, 0.15), rgba(255, 255, 255, 0));
  --cui-body-font-family: var(--cui-font-sans-serif);
  --cui-body-font-size: 1rem;
  --cui-body-font-weight: 400;
  --cui-body-line-height: 1.5;
  --cui-body-color: rgba(44, 56, 74, 0.95);
  --cui-body-bg: #fff;
  --cui-border-width: 1px;
  --cui-border-style: solid;
  --cui-border-color: #d8dbe0;
  --cui-border-color-translucent: rgba(0, 0, 21, 0.175);
  --cui-border-radius: 0.375rem;
  --cui-border-radius-sm: 0.25rem;
  --cui-border-radius-lg: 0.5rem;
  --cui-border-radius-xl: 1rem;
  --cui-border-radius-2xl: 2rem;
  --cui-border-radius-pill: 50rem;
  --cui-heading-color: unset;
  --cui-link-color: #321fdb;
  --cui-link-hover-color: #2819af;
  --cui-code-color: #d63384;
  --cui-highlight-bg: #fff3cd;
}
```

## Component variables

CoreUI is increasingly making use of custom properties as local variables for various components. This way we reduce our compiled CSS, ensure styles aren't inherited in places like nested tables, and allow some basic restyling and extending of CoreUI components after Sass compilation.

Whenever possible, we'll assign CSS variables at the base component level (e.g., `.navbar` for navbar and its sub-components). This reduces guessing on where and how to customize, and allows for easy modifications by our team in future updates.

## Prefix

Most CSS variables use a prefix to avoid collisions with your own codebase. This prefix is in addition to the `--` that's required on every CSS variable.

Customize the prefix via the `$prefix` Sass variable. By default, it's set to `cui-` (note the trailing dash).

## Examples

CSS variables offer similar flexibility to Sass's variables, but without the need for compilation before being served to the browser. For example, here we're resetting our page's font and link styles with CSS variables.

```css
body {
  font: 1rem/1.5 var(--cui-font-sans-serif);
}
a {
  color: var(--cui-blue);
}
```

## Grid breakpoints

While we include our grid breakpoints as CSS variables (except for `xs`), be aware that **CSS variables do not work in media queries**. This is by design in the CSS spec for variables, but may change in coming years with support for `env()` variables. Check out [this Stack Overflow answer](https://stackoverflow.com/a/47212942) for some helpful links. In the mean time, you can use these variables in other CSS situations, as well as in your JavaScript.
