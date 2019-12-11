# CoreUI Vue components library
![NPM](https://img.shields.io/npm/v/@coreui/vue/latest?style=flat&color=brightgreen)
![Downloads](https://img.shields.io/npm/dm/@coreui/vue.svg?style=flat-square)
![Jest](https://img.shields.io/badge/Jest-^24.9.0-blue.svg)
![Vue](https://img.shields.io/badge/Vue-^2.6.10-brightgreen.svg)

> A @coreui/vue `v3` components library project

## Over 90 bootstrap based Vue.js components and directives!

### For library guide please visit our [Documentation site »](https://coreui.io/vue/docs)

Check out demo of components usage: [CoreUI Vue Admin Template »](https://coreui.io/vue/demo/3.0-beta.1/#)

## Installation

```shell
npm install @coreui/vue
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

## Changelog

See the GitHub [release history](https://github.com/coreui/coreui-vue/releases).

## Contributing

See [CONTRIBUTING.md](https://github.com/coreui/coreui-vue/blob/v3-next/CONTRIBUTING.md).

## Credits

Some design ideas and solutions in this library are inspired by [Bootstrap-Vue library](https://bootstrap-vue.js.org/)
