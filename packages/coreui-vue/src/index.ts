/* eslint-disable @typescript-eslint/no-explicit-any */
import { App } from 'vue'
import * as Components from './components'
import * as Directives from './directives'

const CoreuiVue = {
  install: (app: App): void => {
    for (const key in Components) {
      app.component(key, (Components as { [key: string]: any })[key])
    }

    for (const key in Directives) {
      app.directive(
        (Directives as { [key: string]: any })[key]['name'],
        (Directives as { [key: string]: any })[key],
      )
    }
  },
}

// Export library
export default CoreuiVue

// Export components & directives
export * from './components'
export * from './composables'
export * from './directives'
