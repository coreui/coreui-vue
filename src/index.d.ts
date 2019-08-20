
export * from './components/index'

export * from './directives/index'

import { PluginFunction } from 'vue'
export interface CoreuiVuePlugin {
  install: PluginFunction<Function>
}
declare const CoreuiVue: CoreuiVuePlugin

export default CoreuiVue
