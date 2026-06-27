// Components to document. The @coreui/astro-docs-api-generator CLI (`yarn api`) runs the
// Vue extractor (vue-docgen-api) and writes one <Name>.api.json per component into outDir
// — the SAME ApiData shape the React generator emits — for the engine's <Api>. createApiConfig
// scans each root for source components (`[A-Z]*.ts`, minus declarations/specs/ComponentProps).
import { createApiConfig } from '@coreui/astro-docs-api-generator/config'

export default createApiConfig({
  framework: 'vue',
  configUrl: import.meta.url,
  importPackage: '@coreui/vue',
  roots: [
    '../coreui-vue/src/components',
    '../coreui-vue-chartjs/src',
    '../coreui-icons-vue/src',
  ],
})
