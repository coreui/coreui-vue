---
title: Getting Started
name: Introduction
description: CoreUI for Vue.js is UI Component library written in TypeScript, and ready for your next Vue.js project. Learn how to include CoreUI for Vue.js in your project.
menu: Getting started
---

## Installation

### Npm

```bash
npm install @coreui/vue @coreui/coreui
```

If you use CoreUI PRO version.

```bash
npm install @coreui/vue-pro @coreui/coreui-pro
```

### Yarn

```bash
yarn add @coreui/vue @coreui/coreui
```

If you use CoreUI PRO version.

```bash
yarn add @coreui/vue-pro @coreui/coreui-pro
```

## Using components

```ts
import { CAlert } from '@coreui/vue';

// CoreUI PRO version
import { CAlert } from '@coreui/vue-pro';
```

## Stylesheets

Vue components are styled using the `@coreui/coreui` or `@coreui/coreui-pro` CSS library, but you can also use them with the bootstrap CSS library. That is possible because the `@coreui/coreui` library is compatible with Bootstrap, it just extends its functionalities. The only exceptions are custom CoreUI and CoreUI PRO components, which don't exist in the Bootstrap ecosystem.

### CoreUI CSS files

###### Basic usage

```js
import '@coreui/coreui/dist/css/coreui.min.css'

// CoreUI PRO version
import '@coreui/coreui-pro/dist/css/coreui.min.css'
```

### Bootstrap CSS files

###### Installation

```bash
npm install bootstrap
```

###### Basic usage

```js
import 'bootstrap/dist/css/bootstrap.min.css'
```
