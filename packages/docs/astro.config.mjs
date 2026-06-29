import { defineConfig } from 'astro/config'
import vue from '@astrojs/vue'
import mdx from '@astrojs/mdx'
import { coreuiDocs } from '@coreui/astro-docs/integration'
import { fileURLToPath } from 'node:url'
import { createRequire } from 'node:module'

const require = createRequire(import.meta.url)

// Live-src: point @coreui/vue and its icon/chart submodules at their source in this
// repo. The icon data set (@coreui/icons) and chart.js stay published deps.
const vueSrc = fileURLToPath(new URL('../coreui-vue/src/index.ts', import.meta.url))
const iconsVueSrc = fileURLToPath(new URL('../coreui-icons-vue/src/index.ts', import.meta.url))
const vueChartjsSrc = fileURLToPath(new URL('../coreui-vue-chartjs/src/index.ts', import.meta.url))
// @coreui/chartjs ships CJS `main` + a separate esm build; point imports at the esm
// so the named `customTooltips` export resolves under SSR.
const chartjsEsm = require.resolve('@coreui/chartjs/dist/js/coreui-chartjs.esm.js')
// Depth-independent imports for co-located examples + generated API JSON.
const examples = fileURLToPath(new URL('./src/examples', import.meta.url))
const api = fileURLToPath(new URL('./src/api', import.meta.url))

export default defineConfig({
  // Publish URL (site + base) is config-driven: coreuiDocs() reads `seo.url` from
  // src/data/config.yml and sets Astro's `site` + `base` from it.
  // coreuiDocs() detects the edition + wires styling; it returns an array (incl.
  // global component auto-import), so spread it — and place it before mdx().
  integrations: [vue(), ...coreuiDocs(), mdx()],
  vite: {
    resolve: {
      // Live-src (@coreui/vue → src) plus the @astrojs/vue renderer can pull in two
      // copies of Vue, so islands hydrate against a different instance than the example
      // components — `getCurrentInstance()` returns null and hydration dies with
      // "Cannot read properties of null (reading 'refs')". Dedupe forces a single Vue.
      dedupe: ['vue', '@vue/runtime-core', '@vue/runtime-dom', '@vue/shared', '@vue/reactivity'],
      alias: {
        '@coreui/vue': vueSrc,
        '@coreui/icons-vue': iconsVueSrc,
        '@coreui/vue-chartjs': vueChartjsSrc,
        '@coreui/chartjs': chartjsEsm,
        '@examples': examples,
        '@api': api,
      },
    },
  },
})
