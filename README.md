# CoreUI Vue components library

[![Tweet](https://img.shields.io/twitter/url/http/shields.io.svg?style=social)](https://twitter.com/intent/tweet?text=CoreUI%20-%20Free%20Vue%20Admin%20Template%20&url=http://coreui.io/vue/&hashtags=bootstrap,admin,template,dashboard,panel,free,angular,react,vue)
[![NPM][npm-coreui-vue-badge-latest]][npm-coreui-vue]
[![Downloads](https://img.shields.io/npm/dm/@coreui/vue.svg?style=flat-square)][coreui]
[![Build](https://img.shields.io/github/workflow/status/coreui/coreui-vue/Project%20check?style=flat-square)][coreui]
[![License](https://img.shields.io/npm/l/@coreui/vue?style=flat-square)][coreui]
[![Coverage](https://img.shields.io/badge/test%20coverage%203.0.12%20version-100%25-yellowgreen)][coreui]
![Daily project check](https://github.com/coreui/coreui-vue/workflows/Daily%20project%20check/badge.svg)

[npm-coreui-vue]: https://www.npmjs.com/package/@coreui/vue
[npm-coreui-vue-badge-latest]: https://img.shields.io/npm/v/@coreui/vue/latest?style=flat-square&color=brightgreen  
[coreui]: https://coreui.io/vue

> A @coreui/vue `v3` components library project

## Over 90 bootstrap based Vue.js components and directives!

### For library guide please visit our [Documentation site »](https://coreui.io/vue/docs)

Check out demo of components usage: [CoreUI Vue Admin Template »](https://coreui.io/vue/demo)

![Template](https://coreui.io/images/github/vue-free-template-3.gif)

## Installation

Before installation you need to install [node and npm](https://docs.npmjs.com/downloading-and-installing-node-js-and-npm) on your machine.
```shell
npm install @coreui/vue
```

### Styling

Components are styled using @coreui/coreui CSS library, but you can use them also with bootstrap CSS library. That is possible because @coreui/coreui library is compatible with bootstrap, it just extends its functionalities. The only exception is custom CoreUI components, which don't exist in the Bootstrap ecosystem (template components, callout, switch).

Styles have to be imported separately! Import [CoreUI](https://github.com/coreui/coreui) CSS library (recommended), or [Bootstrap](https://getbootstrap.com/) library

Installation:
```shell
npm install @coreui/coreui
```

Basic usage:
```scss
@import "~@coreui/coreui/scss/coreui";
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

### Code autocompletion

If you are using [VS Code](https://code.visualstudio.com/) editor with Vetur plugin installed, then the editor would display hints for our library (component names and prop names).

### Changelog

See the GitHub [release history](https://github.com/coreui/coreui-vue/releases).

### Contributing

See [CONTRIBUTING.md](https://github.com/coreui/coreui-vue/blob/master/CONTRIBUTING.md).

### Credits

Some design ideas and solutions in this library are inspired by [Bootstrap-Vue library](https://bootstrap-vue.js.org/)
