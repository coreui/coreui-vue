<p align="center">
  <a href="https://coreui.io/">
    <img
      src="https://coreui.io/images/brand/coreui-signet.svg"
      alt="CoreUI logo"
      width="200"
    />
  </a>
</p>

<h3 align="center">CoreUI for Vue.js</h3>

<p align="center">
  Vue.js Components Library built on top of Bootstrap 5 and TypeScript.
  <br>
  <a href="https://coreui.io/vue/docs/getting-started/introduction"><strong>Explore CoreUI for Vue.js docs »</strong></a>
  <br>
  <br>
  <a href="https://github.com/coreui/coreui-vue/issues/new?template=bug_report.md">Report bug</a>
  ·
  <a href="https://github.com/coreui/coreui-vue/issues/new?template=feature_request.md">Request feature</a>
  ·
  <a href="https://coreui.io/blog/">Blog</a>
</p>


## Table of contents

- [Quick start](#quick-start)
- [Components](#components)
- [Status](#status)
- [Bugs and feature requests](#bugs-and-feature-requests)
- [Documentation](#documentation)
- [Frameworks](#frameworks)
- [Templates](#templates)
- [Contributing](#contributing)
- [Community](#community)
- [Versioning](#versioning)
- [Creators](#creators)
- [Support CoreUI Development](#support-coreui-development)
- [Copyright and license](#copyright-and-license)

## Quick start

### Instalation

Several quick start options are available:

- [Download the latest release](https://github.com/coreui/coreui-vue/archive/v5.4.1.zip)
- Clone the repo: `git clone https://github.com/coreui/coreui-vue.git`
- Install with [npm](https://www.npmjs.com/): `npm install @coreui/vue`
- Install with [yarn](https://yarnpkg.com/): `yarn add @coreui/vue`

Read the [Getting started page](https://coreui.io/vue/docs/getting-started/introduction/) for information on the framework contents, templates and examples, and more.

### Stylesheets

Vue components are styled using `@coreui/coreui` CSS library, but you can use them also with bootstrap CSS library. That is possible because `@coreui/coreui` library is compatible with bootstrap, it just extends its functionalities. The only exception are custom CoreUI components, which don't exist in the Bootstrap ecosystem.

#### CoreUI CSS files

##### Installation

```bash
yarn add @coreui/coreui
```

or

```bash
npm install @coreui/coreui --save
```

##### Basic usage

```js
import '@coreui/coreui/dist/css/coreui.min.css'
```

#### Bootstrap CSS files

##### Installation

```bash
yarn add bootstrap
```

or

```bash
npm install bootstrap
```

##### Basic usage

```js
import "bootstrap/dist/css/bootstrap.min.css";
```

## Components

- [Vue Accordion](https://coreui.io/vue/docs/components/accordion.html)
- [Vue Alert](https://coreui.io/vue/docs/components/alert.html)
- [Vue Avatar](https://coreui.io/vue/docs/components/avatar.html)
- [Vue Badge](https://coreui.io/vue/docs/components/badge.html)
- [Vue Breadcrumb](https://coreui.io/vue/docs/components/breadcrumb.html)
- [Vue Button](https://coreui.io/vue/docs/components/button.html)
- [Vue Button Group](https://coreui.io/vue/docs/components/button-group.html)
- [Vue Callout](https://coreui.io/vue/docs/components/callout.html)
- [Vue Card](https://coreui.io/vue/docs/components/card.html)
- [Vue Carousel](https://coreui.io/vue/docs/components/carousel.html)
- [Vue Checkbox](https://coreui.io/vue/docs/forms/checkbox.html)
- [Vue Close Button](https://coreui.io/vue/docs/components/close-button.html)
- [Vue Collapse](https://coreui.io/vue/docs/components/collapse.html)
- [Vue Date Picker](https://coreui.io/vue/docs/forms/date-picker.html) **PRO**
- [Vue Date Range Picker](https://coreui.io/vue/docs/forms/date-range-picker.html) **PRO**
- [Vue Dropdown](https://coreui.io/vue/docs/components/dropdown.html)
- [Vue Floating Labels](https://coreui.io/vue/docs/forms/floating-labels.html)
- [Vue Footer](https://coreui.io/vue/docs/components/footer.html)
- [Vue Header](https://coreui.io/vue/docs/components/header.html)
- [Vue Image](https://coreui.io/vue/docs/components/image.html)
- [Vue Input](https://coreui.io/vue/docs/forms/input.html)
- [Vue Input Group](https://coreui.io/vue/docs/forms/input-group.html)
- [Vue List Group](https://coreui.io/vue/docs/components/list-group.html)
- [Vue Loading Button](https://coreui.io/vue/docs/components/loading-button.html) **PRO**
- [Vue Modal](https://coreui.io/vue/docs/components/modal.html)
- [Vue Multi Select](https://coreui.io/vue/docs/forms/multi-select.html) **PRO**
- [Vue Navs & Tabs](https://coreui.io/vue/docs/components/navs-tabs.html)
- [Vue Navbar](https://coreui.io/vue/docs/components/navbar.html)
- [Vue Offcanvas](https://coreui.io/vue/docs/components/offcanvas.html)
- [Vue Pagination](https://coreui.io/vue/docs/components/pagination.html)
- [Vue Placeholder](https://coreui.io/vue/docs/components/placeholder.html)
- [Vue Popover](https://coreui.io/vue/docs/components/popover.html)
- [Vue Progress](https://coreui.io/vue/docs/components/progress.html)
- [Vue Radio](https://coreui.io/vue/docs/forms/radio.html)
- [Vue Range](https://coreui.io/vue/docs/forms/range.html)
- [Vue Rating](https://coreui.io/vue/docs/forms/rating.html)
- [Vue Select](https://coreui.io/vue/docs/forms/select.html)
- [Vue Sidebar](https://coreui.io/vue/docs/components/sidebar.html)
- [Vue Smart Pagination](https://coreui.io/vue/docs/components/smart-pagination.html) **PRO**
- [Vue Smart Table](https://coreui.io/vue/docs/components/smart-table.html) **PRO**
- [Vue Spinner](https://coreui.io/vue/docs/components/spinner.html)
- [Vue Switch](https://coreui.io/vue/docs/forms/switch.html)
- [Vue Table](https://coreui.io/vue/docs/components/table.html)
- [Vue Textarea](https://coreui.io/vue/docs/forms/textarea.html)
- [Vue Time Picker](https://coreui.io/vue/docs/forms/time-picker.html) **PRO**
- [Vue Toast](https://coreui.io/vue/docs/components/toast.html)
- [Vue Tooltip](https://coreui.io/vue/docs/components/tooltip.html)

## Status

[![Build Status](https://github.com/coreui/coreui-vue/workflows/JS%20Tests/badge.svg?branch=main)](https://github.com/coreui/coreui-vue/actions?query=workflow%3AJS+Tests+branch%3Amain)
[![npm version](https://img.shields.io/npm/v/@coreui/vue)](https://www.npmjs.com/package/@coreui/vue)
[![peerDependencies Status](https://img.shields.io/david/peer/coreui/coreui)](https://david-dm.org/coreui/coreui?type=peer)
[![devDependency Status](https://img.shields.io/david/dev/coreui/coreui)](https://david-dm.org/coreui/coreui?type=dev)
[![Coverage Status](https://img.shields.io/coveralls/github/coreui/coreui-vue/v4)](https://coveralls.io/github/coreui/coreui-vue?branch=v4)

## Bugs and feature requests

Have a bug or a feature request? Please first read the [issue guidelines](https://github.com/coreui/coreui-vue/blob/main/.github/CONTRIBUTING.md#using-the-issue-tracker) and search for existing and closed issues. If your problem or idea is not addressed yet, [please open a new issue](https://github.com/coreui/coreui-vue/issues/new).

## Documentation

The documentation for the CoreUI & CoreUI PRO is hosted at our website [CoreUI for Vue](https://coreui.io/vue/docs/getting-started/introduction)

### Running documentation locally

1. Run `yarn install` or `npm install` to install the Node.js dependencies.
2. Run `yarn bootstrap` or `npm run bootstrap` to link local packages together and install remaining package dependencies.
3. From the root directory, run `yarn docs:dev` or `npm run docs:dev` (or a specific npm script) to rebuild distributed CSS and JavaScript files, as well as our docs assets.
4. Open `http://localhost:8000/` in your browser, and voilà.

## Frameworks

CoreUI supports most popular frameworks.

- [CoreUI for Angular](https://github.com/coreui/coreui-angular)
- [CoreUI for Bootstrap (Vanilla JS)](https://github.com/coreui/coreui)
- [CoreUI for React](https://github.com/coreui/coreui-react)
- [CoreUI for Vue](https://github.com/coreui/coreui-vue)

## Templates

Fully featured, out-of-the-box, templates for your application based on CoreUI.

- [Angular Admin Template](https://coreui.io/angular)
- [Bootstrap Admin Template](https://coreui.io/)
- [React Admin Template](https://coreui.io/react)
- [Vue Admin Template](https://coreui.io/vue)

## Contributing

Please read through our [contributing guidelines](https://github.com/coreui/coreui-vue/blob/main/.github/CONTRIBUTING.md). Included are directions for opening issues, coding standards, and notes on development.

Editor preferences are available in the [editor config](https://github.com/coreui/coreui-vue/blob/main/.editorconfig) for easy use in common text editors. Read more and download plugins at <https://editorconfig.org/>.

## Community

Stay up to date on the development of CoreUI and reach out to the community with these helpful resources.

- Read and subscribe to [The Official CoreUI Blog](https://coreui.io/blog/).

You can also follow [@core_ui on Twitter](https://twitter.com/core_ui).

## Versioning

For transparency into our release cycle and in striving to maintain backward compatibility, CoreUI is maintained under [the Semantic Versioning guidelines](http://semver.org/).

See [the Releases section of our project](https://github.com/coreui/coreui-vue/releases) for changelogs for each release version.

## Creators

**Łukasz Holeczek**

- <https://twitter.com/lukaszholeczek>
- <https://github.com/mrholek>

**Andrzej Kopański**

- <https://github.com/xidedix>

**The CoreUI Team**

- <https://github.com/orgs/coreui/people>

## Support CoreUI Development

CoreUI is an MIT-licensed open source project and is completely free to use. However, the amount of effort needed to maintain and develop new features for the project is not sustainable without proper financial backing. You can support development by buying the [CoreUI PRO](https://coreui.io/pricing/) or by becoming a sponsor via [Open Collective](https://opencollective.com/coreui/).

<!--- StartOpenCollectiveBackers -->

### Platinum Sponsors

Support this project by [becoming a Platinum Sponsor](https://opencollective.com/coreui/contribute/platinum-sponsor-40959/). A large company logo will be added here with a link to your website.

<a href="https://opencollective.com/coreui/contribute/platinum-sponsor-40959/checkout"><img src="https://opencollective.com/coreui/tiers/platinum-sponsor/0/avatar.svg?avatarHeight=100"></a>

### Gold Sponsors

Support this project by [becoming a Gold Sponsor](https://opencollective.com/coreui/contribute/gold-sponsor-40960/). A big company logo will be added here with a link to your website.

<a href="https://opencollective.com/coreui/contribute/gold-sponsor-40960/checkout"><img src="https://opencollective.com/coreui/tiers/gold-sponsor/0/avatar.svg?avatarHeight=100"></a> 

### Silver Sponsors

Support this project by [becoming a Silver Sponsor](https://opencollective.com/coreui/contribute/silver-sponsor-40967/). A medium company logo will be added here with a link to your website.

<a href="https://opencollective.com/coreui/contribute/silver-sponsor-40967/checkout"><img src="https://opencollective.com/coreui/tiers/gold-sponsor/0/avatar.svg?avatarHeight=100"></a>

### Bronze Sponsors

Support this project by [becoming a Bronze Sponsor](https://opencollective.com/coreui/contribute/bronze-sponsor-40966/). The company avatar will show up here with a link to your OpenCollective Profile.

<a href="https://opencollective.com/coreui/contribute/bronze-sponsor-40966/checkout"><img src="https://opencollective.com/coreui/tiers/bronze-sponsor/0/avatar.svg?avatarHeight=100"></a> 

### Backers

Thanks to all the backers and sponsors! Support this project by [becoming a backer](https://opencollective.com/coreui/contribute/backer-40965/).

<a href="https://opencollective.com/coreui/contribute/backer-40965/checkout" target="_blank" rel="noopener"><img src="https://opencollective.com/coreui/backers.svg?width=890"></a>

<!--- EndOpenCollectiveBackers -->

## Copyright and license

Copyright 2022 creativeLabs Łukasz Holeczek. Code released under the [MIT License](https://github.com/coreui/coreui-vue/blob/main/LICENSE). Docs released under [Creative Commons](https://creativecommons.org/licenses/by/3.0/).
