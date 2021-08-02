import typescript from 'rollup-plugin-typescript2'
import commonjs from '@rollup/plugin-commonjs'
// import external from 'rollup-plugin-peer-deps-external'
import resolve from '@rollup/plugin-node-resolve'
import vue from 'rollup-plugin-vue'
import pkg from './package.json'

const plugins = [
  // external(),
  resolve({
    dedupe: ['vue'],
    extensions: ['.ts', '.json', '.vue'],
  }),
  typescript({
    rollupCommonJSResolveHack: true,
    exclude: ['**/__tests__/**'],
    clean: true,
  }),
  commonjs({
    include: ['node_modules/**'],
  }),
  // babel({
  //   exclude: 'node_modules/**',
  //   runtimeHelpers: true,
  //   presets: [['@vue/app', { modules: false }]],
  // }),
]

const external = ['vue']

export default [
  // ESM build to be used with webpack/rollup.
  {
    input: 'src/index.ts',
    output: {
      format: 'esm',
      file: pkg.module,
      exports: 'named',
      sourcemap: true,
    },
    external,
    plugins: [...plugins, vue()],
  },
  // SSR build.
  {
    input: 'src/index.ts',
    output: {
      format: 'cjs',
      file: pkg.main,
      exports: 'named',
      sourcemap: true,
    },
    external,
    plugins: [...plugins, vue({ template: { optimizeSSR: true } })],
  },
  // Browser build.
  //   {
  //     input: 'src/wrapper.js',
  //     output: {
  //       format: 'iife',
  //       file: 'dist/library.js'
  //     },
  //     plugins: [
  //       vue()
  //     ]
  //   }
]
