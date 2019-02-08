import * as Components from './components'

const CoreuiVue = {
  install(Vue) {
    for (let plugin in Components)
      Vue.component(plugin, Components[plugin])
  }
}

// Export library
export default CoreuiVue

// Export components
export * from './components';
