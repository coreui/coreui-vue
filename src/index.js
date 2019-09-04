import * as Components from './components'
import * as Directives from './directives'

const removeKeysFromObject = (object, keys) => {
  return Object.entries(object).reduce((obj, [key, value]) => {
    if (!keys.includes(key) && !keys.includes(value.name)) {
      obj[key] = value
    }
    return obj
  }, {})
}


const CoreuiVue = {
  install (Vue, options) {
    let pluginComponents = Components
    let pluginDirectives = Directives

    const toRemove = options && options.remove ? options.remove : null
    if (toRemove && Array.isArray(toRemove)) {
      pluginComponents = removeKeysFromObject(Components, toRemove)
      pluginDirectives = removeKeysFromObject(Directives, toRemove)        
    }

    for (let plugin in pluginComponents) {
      Vue.component(plugin, Components[plugin])
    }
    for (let directive in pluginDirectives) {
      Vue.directive(directive, Directives[directive])
    }
  }
}

// Export library
export default CoreuiVue

//Export components
export * from  './components'
export * from  './directives'
