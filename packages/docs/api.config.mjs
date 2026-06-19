// Components to document. The @coreui/astro-docs-api-generator CLI (`yarn api`) runs
// the Vue extractor (vue-docgen-api) and writes one <Name>.api.json per component
// into outDir — the SAME ApiData shape the React generator emits — for the engine's
// <Api> to render. The component list is scanned from source (the same glob as the
// VuePress docgen.config.js: `[A-Z]*.ts`, minus declarations/specs/ComponentProps).
import { readdirSync } from 'node:fs'
import { join, dirname, basename, relative } from 'node:path'
import { fileURLToPath } from 'node:url'

const here = dirname(fileURLToPath(import.meta.url))
const ROOTS = [
  '../coreui-vue/src/components',
  '../coreui-vue-chartjs/src',
  '../coreui-icons-vue/src',
]

const isComponent = (name) =>
  /^[A-Z].*\.ts$/.test(name) && !/\.(d|spec)\.ts$/.test(name) && name !== 'ComponentProps.ts'

function scan(dir, out) {
  let entries
  try {
    entries = readdirSync(dir, { withFileTypes: true })
  } catch {
    return out
  }
  for (const e of entries) {
    const p = join(dir, e.name)
    if (e.isDirectory()) scan(p, out)
    else if (isComponent(e.name)) out[basename(e.name, '.ts')] = `./${relative(here, p)}`
  }
  return out
}

const components = {}
for (const root of ROOTS) scan(join(here, root), components)

export default {
  framework: 'vue',
  outDir: 'src/api',
  importPackage: '@coreui/vue',
  components,
}
