---
title: Introduction
name: Introduction
description: CoreUI for Vue.js is UI Component library written in TypeScript, and ready for your next Vue.js project. Learn how to include CoreUI for Vue.js in your project.
menu: Getting started
---

## Installation

### Npm

<CTabs :activeItemKey="1">
  <CTabList class="docs-code-tabs" variant="underline-border">
    <CTab :itemKey="1">CoreUI</CTab>
    <CTab :itemKey="2">CoreUI PRO</CTab>
  </CTabList>
  <CTabContent class="docs-code-tab-content">
    <CTabPanel :itemKey="1">
    
```bash
npm install @coreui/vue @coreui/coreui
```
</CTabPanel>
    <CTabPanel :itemKey="2">

```bash
npm install @coreui/vue-pro @coreui/coreui-pro
```
</CTabPanel>
  </CTabContent>
</CTabs>


### Yarn

<CTabs :activeItemKey="1">
  <CTabList class="docs-code-tabs" variant="underline-border">
    <CTab :itemKey="1">CoreUI</CTab>
    <CTab :itemKey="2">CoreUI PRO</CTab>
  </CTabList>
  <CTabContent class="docs-code-tab-content">
    <CTabPanel :itemKey="1">
    
```bash
yarn add @coreui/vue @coreui/coreui
```
</CTabPanel>
    <CTabPanel :itemKey="2">

```bash
yarn add @coreui/vue-pro @coreui/coreui-pro
```
</CTabPanel>
  </CTabContent>
</CTabs>

## Using components

<CTabs :activeItemKey="1">
  <CTabList class="docs-code-tabs" variant="underline-border">
    <CTab :itemKey="1">CoreUI</CTab>
    <CTab :itemKey="2">CoreUI PRO</CTab>
  </CTabList>
  <CTabContent class="docs-code-tab-content">
    <CTabPanel :itemKey="1">
    
```js
import { CAlert } from '@coreui/vue';
```
</CTabPanel>
    <CTabPanel :itemKey="2">

```js
import { CAlert } from '@coreui/vue-pro';
```
</CTabPanel>
  </CTabContent>
</CTabs>


## Stylesheets

Vue components are styled using the `@coreui/coreui` or `@coreui/coreui-pro` CSS library, but you can also use them with the bootstrap CSS library. That is possible because the `@coreui/coreui` library is compatible with Bootstrap, it just extends its functionalities. The only exceptions are custom CoreUI and CoreUI PRO components, which don't exist in the Bootstrap ecosystem.

### CoreUI CSS files

###### Basic usage

<CTabs :activeItemKey="1">
  <CTabList class="docs-code-tabs" variant="underline-border">
    <CTab :itemKey="1">CoreUI</CTab>
    <CTab :itemKey="2">CoreUI PRO</CTab>
  </CTabList>
  <CTabContent class="docs-code-tab-content">
    <CTabPanel :itemKey="1">
    
```js
import '@coreui/coreui/dist/css/coreui.min.css'
```
</CTabPanel>
    <CTabPanel :itemKey="2">

```js
import '@coreui/coreui-pro/dist/css/coreui.min.css'
```
</CTabPanel>
  </CTabContent>
</CTabs>

### Bootstrap CSS files

###### Installation

```bash
npm install bootstrap
```

###### Basic usage

```js
import 'bootstrap/dist/css/bootstrap.min.css'
```
