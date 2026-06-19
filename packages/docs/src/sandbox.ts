// Vue project scaffold for the StackBlitz/CodeSandbox buttons. The engine owns the
// "open" logic; this builds the Vue (Vite) files for a given example. The example
// `code` is a single-file component, mounted by main.ts.

interface ExampleData {
  code: string
  lang: string
  name: string
  componentName?: string
  pro?: boolean
}

export function buildProject(data: ExampleData) {
  const { code, name, componentName = 'Vue Example', pro = false } = data

  const vuePkg = pro ? '@coreui/vue-pro' : '@coreui/vue'
  const cssPkg = pro ? '@coreui/coreui-pro' : '@coreui/coreui'

  const dependencies: Record<string, string> = {
    vue: '^3.4.0',
    [vuePkg]: 'latest',
    [cssPkg]: 'latest',
  }

  const mainCode = `import { createApp } from 'vue'
import '${cssPkg}/dist/css/coreui.min.css'
import ${name} from './${name}.vue'

createApp(${name}).mount('#app')
`

  const packageJson = JSON.stringify(
    {
      name: name.toLowerCase(),
      version: '0.0.0',
      private: true,
      type: 'module',
      scripts: { dev: 'vite', build: 'vite build' },
      dependencies,
      devDependencies: { '@vitejs/plugin-vue': 'latest', vite: 'latest' },
    },
    null,
    2
  )

  const viteConfig = `import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

export default defineConfig({ plugins: [vue()] })
`

  const indexHtml = `<!doctype html>
<html lang="en">
  <head>
    <meta charset="utf-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1" />
    <title>${componentName}</title>
  </head>
  <body>
    <div id="app" class="p-3"></div>
    <script type="module" src="/src/main.ts"></script>
  </body>
</html>
`

  return {
    title: componentName,
    description: `CoreUI for Vue — ${componentName} example`,
    template: 'node',
    files: {
      'package.json': packageJson,
      'vite.config.js': viteConfig,
      'index.html': indexHtml,
      'src/main.ts': mainCode,
      [`src/${name}.vue`]: code,
    },
    dependencies,
    openFile: `src/${name}.vue`,
  }
}
