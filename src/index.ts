//@ts-nocheck
import { App } from 'vue'
import * as Components from './components'
import * as Directives from './directives'

// const CoreuiVue = function (app: any) {
//   for (let plugin in Components) {
//     app.component(plugin, Components[plugin])
//   }
//   for (let directive in Directives) {
//     app.directive(directive, Directives[directive])
//   }
// }

const removeKeysFromObject = (object, keys) => {
  return Object.entries(object).reduce((obj, [key, value]) => {
    if (!keys.includes(key) && !keys.includes(value.name)) {
      obj[key] = value
    }
    return obj
  }, {})
}

const CoreuiVue = {
  install: (app: App, options: any): void => {
    let pluginComponents = Components
    let pluginDirectives = Directives

    const toRemove = options && options.remove ? options.remove : null
    if (toRemove && Array.isArray(toRemove)) {
      pluginComponents = removeKeysFromObject(Components, toRemove)
      pluginDirectives = removeKeysFromObject(Directives, toRemove)
    }

    for (const plugin in pluginComponents) {
      app.component(plugin, Components[plugin])
    }
    for (const directive in pluginDirectives) {
      app.directive(directive, Directives[directive])
    }
  },
}
// const CoreuiVue = {
//   install(Vue, options) {
//     let pluginComponents = Components
//     let pluginDirectives = Directives

//     const toRemove = options && options.remove ? options.remove : null
//     if (toRemove && Array.isArray(toRemove)) {
//       pluginComponents = removeKeysFromObject(Components, toRemove)
//       pluginDirectives = removeKeysFromObject(Directives, toRemove)
//     }

//     for (const plugin in pluginComponents) {
//       Vue.component(plugin, Components[plugin])
//     }
//     for (const directive in pluginDirectives) {
//       Vue.directive(directive, Directives[directive])
//     }
//   },
// }

// Export library
export default CoreuiVue

//Export components
export * from './components'
export * from './directives'
