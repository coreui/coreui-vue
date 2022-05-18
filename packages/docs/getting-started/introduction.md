---
title: Getting Started
name: Introduction
description: CoreUI for Vue.js is UI Component library written in TypeScript, and ready for your next Vue.js project. Learn how to include CoreUI for Vue.js in your project.
menu: Getting started
---

## Installation

### Npm

```bash
npm install @coreui/vue
```

### Yarn

```bash
yarn add @coreui/vue
```

## Using components

```ts
import { CAlert } from '@coreui/vue';
```

## Stylesheets

Vue components are styled using `@coreui/coreui` CSS library, but you can use them also with bootstrap CSS library. That is possible because `@coreui/coreui` library is compatible with bootstrap, it just extends its functionalities. The only exception is custom CoreUI components, which don't exist in the Bootstrap ecosystem.

### CoreUI CSS files

###### Installation

```bash
npm install @coreui/coreui
```

###### Basic usage

```js
import '@coreui/coreui/dist/css/coreui.min.css'
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
