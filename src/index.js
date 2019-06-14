import * as Components from './components'
import * as Directives from './directives'

const CoreuiVue = {
  install (Vue) {
    for (let plugin in Components) {
      Vue.component(plugin, Components[plugin])
    }
    for (let directive in Directives) {
      Vue.directive(directive, Directives[directive])
    }
  }
}

// Export library
export default CoreuiVue

//Export components
export * from  './components';
