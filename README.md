# Introduction

[![Npm badge](https://img.shields.io/npm/v/@coreui/vue.svg)][npm]
[![NPM downloads][npm-download]][npm]
![Jest](https://img.shields.io/badge/Jest-^24.9.0-blue.svg)
![Vue](https://img.shields.io/badge/Vue-^2.6.10-brightgreen.svg)

[npm]: https://www.npmjs.com/package/@coreui/vue
[npm-download]: https://img.shields.io/npm/dm/@coreui/vue.svg?style=flat-square

> A [@coreui/vue](https://coreui.io/vue) `v3` components library project

## Over 90 bootstrap based Vue.js components and directives!
Check out template build on top of this library: [CoreUI](https://coreui.io/vue/) Open Source Bootstrap Admin Template

## Installation
```
npm install @coreui/vue
```
</br>

### Registering components
```js
// Installing whole package
import CoreuiVue from '@coreui/vue';
Vue.use(CoreuiVue);

// Registering a single component
import { CSwitch, CButton } from '@coreui/vue';

// globally
Vue.component('CButton', CButton)

export default {
  ...
  // locally
  components: {
    CSwitch
  },
  ...
}
```
</br>

### Registering directives
```js
// Registering single directives
import { CEmitRootEvent, CTooltip } from '@coreui/vue';

// globally
Vue.directive('c-emit-root-event', CEmitRootEvent)

export default {
  ...
  // locally
  directives: {
    'c-tooltip': CTooltip
  },
  ...
}
```
</br>

### Optimization
Components are imported from CommonJS module by default, if you want to use only specific components you can import them from source to enable treeshaking.

```js
// Import components this way to allow tree shaking
import { CDataTable } from '@coreui/vue/src';
```

## Changelog

See the GitHub [release history](https://github.com/coreui/coreui-vue/releases).

## Contributing

See [CONTRIBUTING.md](https://github.com/coreui/coreui-vue/blob/v3-next/CONTRIBUTING.md).

## Credits

Some design ideas and solutions in this library are inspired by [Bootstrap-Vue library](https://bootstrap-vue.js.org/)