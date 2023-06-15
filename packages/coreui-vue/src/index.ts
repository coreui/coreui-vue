import { App } from 'vue'
import * as Components from './components'
import * as Directives from './directives'

const CoreuiVue = {
  install: (app: App): void => {
    for (const key in Components) {
      app.component(key, Components[key])
    }

    for (const key in Directives) {
      app.directive(Directives[key]['name'], Directives[key])
    }
  },
}

// Export library
export default CoreuiVue

// Export components & directives
export * from './components'
export * from './composables'
export * from './directives'
