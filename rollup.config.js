import { camelCase } from 'lodash';
import path from 'path';
import babel from 'rollup-plugin-babel';
import commonjs from 'rollup-plugin-commonjs';
import filesize from 'rollup-plugin-filesize';
import json from 'rollup-plugin-json';
import license from 'rollup-plugin-license';
import postcss from 'rollup-plugin-postcss'
import resolve from 'rollup-plugin-node-resolve';
import replace from 'rollup-plugin-replace';
import magicImporter from 'node-sass-magic-importer';

// import { uglify } from 'rollup-plugin-uglify';
import vue from 'rollup-plugin-vue';
// import { minify } from 'uglify-es';

import pack from './package.json';

const projectName = 'coreui-vue';

// compute globals from dependencies
const globals = pack.dependencies && Object.assign({}, ...Object.keys(pack.dependencies).map((key) => ({
  [key]: camelCase(key)
})));

const builds = {
  // (CommonJS). Used by bundlers e.g. Webpack & Browserify
  cjs: {
    entry: 'src/index.js',
    dest: `dist/${projectName}.common.js`,
    format: 'cjs'
  },
  // (ES Modules). Used by bundlers that support ES Modules,
  // e.g. Rollup & Webpack 2
  esm: {
    entry: 'src/index.js',
    dest: `dist/${projectName}.esm.js`,
    format: 'esm'
  },
  // build (Browser)
  'umd-dev': {
    entry: 'src/index.umd.js',
    dest: `dist/${projectName}.js`,
    format: 'umd',
    env: 'development'
  },
  // production build (Browser)
  'umd-prod': {
    entry: 'src/index.umd.js',
    dest: `dist/${projectName}.min.js`,
    format: 'umd',
    env: 'production'
  }
};

function genConfig(name) {
  const opts = builds[name];
  const config = {
    input: opts.entry,
    // external: (id) => pack.dependencies && pack.dependencies[id], // exclude dependencies from build
    // external: ['@coreui/icons', '@coreui/icons/vue'],
    // preserveModules: true,
    treeshake: {
      // moduleSideEffects: false,
      pureExternalModules: true,
      propertyReadSideEffects: false
    },
    plugins: [
      resolve({
        // module: true,
        // browser: true,
        // jsnext: true,
        // preferBuiltins: false,
        extensions: ['.js', '.json', '.vue']
      }),
      commonjs({
        namedExports: {
          '@coreui/coreui/dist/js/coreui-utilities.js': ['deepObjectsMerge', 'getStyle'],
          // '@coreui/icons/vue': ['CIcon']
        }
      }),
      postcss(),
      vue({
        compileTemplate: true,
        css: false,
        style: {
          preprocessOptions: {
            scss: {
              importer: magicImporter(),
            },
          },
        }
      }),
      json(),
      babel({
        exclude: 'node_modules/**',
        runtimeHelpers: true,
        presets: [
          ['@vue/app', { modules: false }]
        ]
      }),
      filesize()
    ].concat(opts.plugins || []),
    output: {
      exports: 'named',
      file: opts.dest,
      // dir: 'dist/es',
      format: opts.format,
      // define globals in window from external dependencies
      globals,
      name: opts.moduleName || projectName
    }
  };

  if (opts.env) {
    config.plugins.push(
      replace({
        'process.env.NODE_ENV': JSON.stringify(opts.env)
      })
    );

    // minify on production targets
    // if (opts.env === 'production') {
    //   config.plugins.push(uglify({}, minify));
    // }
  }

  // output a license to builds
  config.plugins.push(
    license({
      sourcemap: true,
      banner: {
        content: {
          file: path.resolve('LICENSE.txt')
        }
      }
    })
  );

  Object.defineProperty(config, '_name', {
    enumerable: false,
    value: name
  });

  return config;
}

const target = process.env.TARGET || 'umd-prod';
module.exports = genConfig(target);
