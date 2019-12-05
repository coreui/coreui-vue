## CoreUI v3 for Vue.js

> A [@coreui/vue](https://coreui.io/vue) `v3` components library project.  

[![npm-coreui-vue-next][npm-coreui-vue-next]][npm]
[![Npm badge](https://img.shields.io/npm/v/@coreui/vue.svg)][npm]
[![NPM downloads][npm-download]][npm]
![Jest](https://img.shields.io/badge/Jest-^24.9.0-blue.svg)
![Vue](https://img.shields.io/badge/Vue-^2.6.10-brightgreen.svg)  

[npm]: https://www.npmjs.com/package/@coreui/vue
[npm-download]: https://img.shields.io/npm/dm/@coreui/vue.svg?style=flat-square
[npm-coreui-vue-next]: https://img.shields.io/npm/v/@coreui/vue/next.png?style=flat-square

### Introduction

#### Over 90 bootstrap based Vue.js components and directives!

[Explore CoreUI v3 for Vue.js docs »](https://coreui.io/vue/docs)

Check out template build on top of this library: [CoreUI Open Source Bootstrap Admin Template »](https://coreui.io/vue/)

---

### Installation

```bash
npm install @coreui/vue@next
```

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

### Optimization

Components are imported from CommonJS module by default, if you want to use only specific components you can import them from source to enable treeshaking.

```js
// Import components this way to allow tree shaking
import { CDataTable } from '@coreui/vue/src';
```

### Changelog

See the GitHub [release history](https://github.com/coreui/coreui-vue/releases).

### Contributing

See [CONTRIBUTING.md](https://github.com/coreui/coreui-vue/blob/v3-next/CONTRIBUTING.md).

### Credits

Some design ideas and solutions in this library are inspired by [Bootstrap-Vue library](https://bootstrap-vue.js.org/)