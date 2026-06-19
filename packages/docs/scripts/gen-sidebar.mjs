// One-off: convert the VuePress docs sidebar (.vuepress/config.ts) into the engine's
// sidebar.yml. VuePress carries the same data the engine needs — `text` (title),
// `icon` (already raw inner SVG), `link` (with a `.html` suffix), `children`, and an
// optional `badge` — so this isolates the `sidebar: [...]` array, evals it, and dumps
// YAML with links rewritten to the React-style trailing-slash routes.
// Run: node scripts/gen-sidebar.mjs
import { readFileSync, writeFileSync } from 'node:fs'
import { join, dirname } from 'node:path'
import { fileURLToPath } from 'node:url'
import yaml from 'js-yaml'

const here = dirname(fileURLToPath(import.meta.url))
const CONFIG = join(here, '../../packages/docs/.vuepress/config.ts')
const OUT = join(here, '../src/data/sidebar.yml')

const src = readFileSync(CONFIG, 'utf8')

// Isolate the `sidebar: [ ... ]` array by matching brackets, then eval it (plain
// data — objects, strings, template-literal links — no function calls).
const at = src.indexOf('sidebar:')
const start = src.indexOf('[', at)
let depth = 0
let end = start
for (; end < src.length; end += 1) {
  const c = src[end]
  if (c === '[') depth += 1
  else if (c === ']') {
    depth -= 1
    if (depth === 0) {
      end += 1
      break
    }
  }
}
const sidebar = new Function(`return ${src.slice(start, end)}`)()

// `/components/accordion.html` -> `/components/accordion/`, `/forms/` -> `/forms/`.
const toRoute = (link) => {
  let p = link.replace(/\.html$/, '')
  if (!p.endsWith('/')) p += '/'
  return p
}

const groups = sidebar.map((group) => ({
  title: group.text,
  ...(group.icon ? { icon: group.icon } : {}),
  pages: (group.children ?? []).map((child) => ({
    title: child.text,
    to: toRoute(child.link),
    ...(child.badge ? { badge: child.badge } : {}),
  })),
}))

writeFileSync(OUT, yaml.dump(groups, { lineWidth: -1, quotingType: '"', noRefs: true }))
console.log(`wrote ${OUT}: ${groups.length} groups, ${groups.reduce((n, g) => n + g.pages.length, 0)} pages`)
