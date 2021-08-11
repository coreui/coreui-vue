<p align="center">
  <a href="https://coreui.io/">
    <img src="https://coreui.io/images/brand/coreui-signet.svg" alt="CoreUI logo" width="200">
  </a>
</p>

<h3 align="center">CoreUI for Vue.js</h3>

<p align="center">
  Open Source UI Components Library for Vue.js.
  <br>
  <a href="https://coreui.io/vue/docs/4.0/"><strong>Explore CoreUI docs »</strong></a>
  <br>
  <br>
  <a href="https://github.com/coreui/coreui-vue/issues/new?template=bug_report.md">Report bug</a>
  ·
  <a href="https://github.com/coreui/coreui-vue/issues/new?template=feature_request.md">Request feature</a>
  ·
  <a href="https://community.coreui.io/">Community</a>
  ·
  <a href="https://blog.coreui.io/">Blog</a>
</p>


## Table of contents

- [Quick start](#quick-start)
- [Status](#status)
- [Bugs and feature requests](#bugs-and-feature-requests)
- [Documentation](#documentation)
- [Contributing](#contributing)
- [Community](#community)
- [Versioning](#versioning)
- [Creators](#creators)
- [Thanks](#thanks)
- [Copyright and license](#copyright-and-license)


## Quick start

Several quick start options are available:

- [Download the latest release](https://github.com/coreui/coreui-vue/archive/refs/tags/v4.0.0-alpha.2.zip)
- Clone the repo: `git clone https://github.com/coreui/coreui-vue.git`
- Install with [npm](https://www.npmjs.com/): `npm install @coreui/vue@next`
- Install with [yarn](https://yarnpkg.com/): `yarn add @coreui/vue@next`

Read the [Getting started page](https://coreui.io/vue/docs/4.0/getting-started/introduction.html) for information on the framework contents, templates and examples, and more.

### Styling

Components are styled using @coreui/coreui-vue CSS library, but you can use them also with bootstrap CSS library. That is possible because @coreui/coreui-vue library is compatible with bootstrap, it just extends its functionalities. The only exception is custom CoreUI components, which don't exist in the Bootstrap ecosystem (template components, callout, switch).

Styles have to be imported separately! Import [CoreUI](https://github.com/coreui/coreui) CSS library (recommended), or [Bootstrap](https://getbootstrap.com/) library

Installation:
```shell
yarn add @coreui/coreui
```

or

```shell
npm install @coreui/coreui
```

Basic usage:
```scss
@import "~@coreui/coreui-vue/scss/coreui";
```

### Registering components

```js
// Installing whole package
import CoreuiVue from '@coreui/vue';
app.use(CoreuiVue);

// Registering a single component
import { CSwitch, CButton } from '@coreui/vue';

// globally
app.component('CButton', CButton)

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
import { CPopover, CTooltip } from '@coreui/vue';

// globally
app.directive('c-tooltip', CTooltip)

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
import { CAlert } from '@coreui/vue/src';
```

### Code autocompletion

If you are using [VS Code](https://code.visualstudio.com/) editor with Vetur plugin installed, then the editor would display hints for our library (component names and prop names).

## Status
[![Tweet](https://img.shields.io/twitter/url/http/shields.io.svg?style=social)](https://twitter.com/intent/tweet?text=CoreUI%20-%20Free%20Vue%20Admin%20Template%20&url=http://coreui.io/vue/&hashtags=bootstrap,admin,template,dashboard,panel,free,angular,react,vue)
[![NPM][npm-coreui-vue-badge-latest]][npm-coreui-vue]
[![Downloads](https://img.shields.io/npm/dm/@coreui/vue.svg?style=flat-square)][coreui]
[![Build](https://img.shields.io/github/workflow/status/coreui/coreui-vue-vue/Project%20check?style=flat-square)][coreui]
[![License](https://img.shields.io/npm/l/@coreui/vue?style=flat-square)][coreui]
[![Coverage](https://img.shields.io/badge/test%20coverage%203.0.12%20version-100%25-yellowgreen)][coreui]
![Daily project check](https://github.com/coreui/coreui-vue-vue/workflows/Daily%20project%20check/badge.svg)
[![Build Status](https://github.com/coreui/coreui-vue/workflows/JS%20Tests/badge.svg?branch=main)](https://github.com/coreui/coreui-vue/actions?query=workflow%3AJS+Tests+branch%3Amain)
[![npm version](https://img.shields.io/npm/v/@coreui/coreui-vue)](https://www.npmjs.com/package/@coreui/coreui-vue)
[![peerDependencies Status](https://img.shields.io/david/peer/coreui/coreui-vue)](https://david-dm.org/coreui/coreui-vue?type=peer)
[![devDependency Status](https://img.shields.io/david/dev/coreui/coreui-vue)](https://david-dm.org/coreui/coreui-vue?type=dev)
[![Coverage Status](https://img.shields.io/coveralls/github/coreui/coreui-vue/main)](https://coveralls.io/github/coreui/coreui-vue?branch=main)

## Bugs and feature requests

Have a bug or a feature request? Please first read the [issue guidelines](https://github.com/coreui/coreui-vue/blob/main/.github/CONTRIBUTING.md#using-the-issue-tracker) and search for existing and closed issues. If your problem or idea is not addressed yet, [please open a new issue](https://github.com/coreui/coreui-vue/issues/new).

## Documentation

The documentation for the CoreUI & CoreUI PRO is hosted at our website [CoreUI](https://coreui.io/)

### Running documentation locally

1. Run `yarn install` or `npm install` to install the Node.js dependencies, including Hugo (the site builder).
2. Run `yarn docs:dev` or `npm run docs:dev` (or a specific npm script) to rebuild distributed CSS and JavaScript files, as well as our docs assets.
3. From the project directory, run `yarn docs:dev` or `npm run docs:dev` in the command line.
4. Open `http://localhost:8080/` in your browser, and voilà.

### Documentation for previous releases

## Contributing

Please read through our [contributing guidelines](https://github.com/coreui/coreui-vue/blob/main/.github/CONTRIBUTING.md). Included are directions for opening issues, coding standards, and notes on development.

Editor preferences are available in the [editor config](https://github.com/coreui/coreui-vue/blob/main/.editorconfig) for easy use in common text editors. Read more and download plugins at <https://editorconfig.org/>.

## Community

Stay up to date on the development of CoreUI and reach out to the community with these helpful resources.

- Read and subscribe to [The Official CoreUI Blog](https://blog.coreui.io/).
- Join [the official Community](https://community.coreui.io/).

You can also follow [@core_ui on Twitter](https://twitter.com/core_ui).

## Versioning

For transparency into our release cycle and in striving to maintain backward compatibility, CoreUI is maintained under [the Semantic Versioning guidelines](http://semver.org/).

See [the Releases section of our project](https://github.com/coreui/coreui-vue/releases) for changelogs for each release version.


## Creators

**Łukasz Holeczek**

* <https://twitter.com/lukaszholeczek>
* <https://github.com/mrholek>

**Andrzej Kopański**

* <https://github.com/xidedix>

**CoreUI Team**

* <https://github.com/orgs/coreui/people>

**Contributors**

* <https://github.com/coreui/coreui-vue/graphs/contributors>

## Copyright and license

Copyright 2021 creativeLabs Łukasz Holeczek. Code released under the [MIT License](https://github.com/coreui/coreui-vue/blob/main/LICENSE). Docs released under [Creative Commons](https://creativecommons.org/licenses/by/3.0/).