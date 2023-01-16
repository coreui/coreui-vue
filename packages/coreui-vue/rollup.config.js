import commonjs from '@rollup/plugin-commonjs'
import typescript from '@rollup/plugin-typescript'
import resolve from '@rollup/plugin-node-resolve'
import vue from 'rollup-plugin-vue'
import pkg from './package.json'

const plugins = [
  resolve({
    dedupe: ['vue'],
    extensions: ['.ts', '.json', '.vue'],
  }),
  typescript({
    exclude: ['**/__tests__/**'],
    tsconfig: './tsconfig.json',
  }),
  commonjs({
    include: ['../../node_modules/**'],
  }),
]

const external = ['vue']

export default [
  // ESM build to be used with webpack/rollup.
  {
    input: 'src/index.ts',
    output: {
      format: 'es',
      file: pkg.module,
      exports: 'named',
      sourcemap: true,
      sourcemapPathTransform: (relativeSourcePath) => {
        return relativeSourcePath
          .replace('../../node_modules/', '../')
          .replace('../packages/coreui-vue', '..')
      },
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
      sourcemapPathTransform: (relativeSourcePath) => {
        return relativeSourcePath
          .replace('../../node_modules/', '../')
          .replace('../packages/coreui-vue', '..')
      },
    },
    external,
    plugins: [...plugins, vue({ template: { optimizeSSR: true } })],
  },
]
