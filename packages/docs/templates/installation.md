---
title: Vue templates installation
name: Vue templates installation
description: Learn how to use CoreUI Vue Admin Dashboard Templates including npm scripts to build templates, compile source code, run tests, and more.
---

## Tooling setup

CoreUI Vue Admin Templates uses [npm scripts](https://docs.npmjs.com/misc/scripts/) for its build system. Our `package.json` includes convenient methods for working with the framework, including compiling code, running tests, and more.

To use our build system and run our admin template locally, you'll need a copy of source files and Node. Follow these steps and you should be ready to rock:

1. [Download and install Node.js](https://nodejs.org/en/download/), which we use to manage our dependencies.
2. If you prefer to use Yarn instead of NPM, you have to [download and install it](https://classic.yarnpkg.com/lang/en/docs/install/)
3. [Download CoreUI Vue Admin Template](https://coreui.io/product/free-vue-admin-template/).
4. Navigate to the root template directory and run `npm install` or `yarn install` to install our local dependencies listed in `package.json`.

When completed, you'll be able to run the various commands provided from the command line.

## Using npm scripts

Our `package.json` includes numerous tasks for developing the project. Run `npm run` or `yarn run` to see all the npm scripts in your terminal. **Primary tasks include:**

| Task | Description |
| --- | --- |
| `npm run serve` or `yarn serve` | Compiles CSS and JavaScript, builds the documentation, and starts a local server. |
| `npm run build` or `yarn build` | Creates the `dist/` directory with compiled files. Uses [Sass](https://sass-lang.com/), [Autoprefixer](https://github.com/postcss/autoprefixer). |
| `npm test` or `yarn test` | Runs tests locally  |

## Sass

CoreUI uses [Dart Sass](https://sass-lang.com/dart-sass) for compiling our Sass source files into CSS files (included in our build process), and we recommend you do the same if you're compiling Sass using your own asset pipeline.

Dart Sass uses a rounding precision of 10 and for efficiency reasons does not allow adjustment of this value. We don't lower this precision during further processing of our generated CSS, such as during minification, but if you chose to do so we recommend maintaining a precision of at least 6 to prevent issues with browser rounding.

## Autoprefixer

We uses [Autoprefixer][autoprefixer] (included in our build process) to automatically add vendor prefixes to some CSS properties at build time. Doing so saves us time and code by allowing us to write key parts of our CSS a single time while eliminating the need for vendor mixins like those found in v3.

We maintain the list of browsers supported through Autoprefixer in a separate file within our GitHub repository. See `.browserslistrc`.

## Local template

Here's how to get it started:

1. Run through the [tooling setup](#tooling-setup) above to install all dependencies.
2. From the root template directory, run `npm run start` or `yarn start` in the command line.
3. Open `http://localhost:8080` in your browser, and voilà.

## Troubleshooting

Should you encounter problems with installing dependencies, uninstall all previous dependency versions (global and local). Then, rerun `npm install` or `yarn install`.
