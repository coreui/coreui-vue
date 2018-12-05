/*eslint import/namespace: [2, { allowComputed: true }]*/
import * as Components from './components'
import Collapse from './directives/Collapse/collapse'

const CoreuiVue = {

  install(Vue) {
    for (let plugin in Components) {
      let comp = Components[plugin]
      if(comp.name)
        Vue.component(comp.name, comp)
    }
    Vue.directive('CCollapse', Collapse)
  }
};
// Export library
export default CoreuiVue

// Export components
export * from './components';
