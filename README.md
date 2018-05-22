# @coreui/vue 

![Rollup badge](https://img.shields.io/badge/Rollup-^0.53.3-ff69b4.svg)
![Jest](https://img.shields.io/badge/Jest-^22.0.4-blue.svg)
![Vue](https://img.shields.io/badge/Vue-^2.5.13-brightgreen.svg)
![Npm badge](https://img.shields.io/npm/v/@coreui/vue.svg)

> A [@coreui/vue](https://coreui.io/vue) `v2` library project

for use with [CoreUI](https://coreui.io/vue/) `v2` Open Source Bootstrap Admin Template

## Installation
```
npm install @coreui/vue
```
@coreui/vue can be used as a module in both CommonJS and ES modular environments.

When in non-modular environment, @coreui/vue will register all the components to vue by itself.</p>

### ES6 
```js
//
// You can register a component manually
//
import { Switch } from '@coreui/vue';

export default {
  ...
  components: {
    Switch
  },
  ...
};

//
// or register the whole module with vue
//
import ModuleLibrary from '@coreui/vue';

// Install this library
Vue.use(ModuleLibrary);
```

## Changelog

See the GitHub [release history](https://github.com/coreui/coreui-vue/releases).

## Contributing

See [CONTRIBUTING.md](.github/CONTRIBUTING.md).
