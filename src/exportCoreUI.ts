import * as Components from './components'
import * as Directives from './directives'

const CoreuiVue: Function = function(app: any){
    for (let plugin in Components) {
        app.component(plugin, Components[plugin])
    }
    for (let directive in Directives) {
        app.directive(directive, Directives[directive])
    }
}

export { CoreuiVue }

//Export components
//export * from  './components'
//export * from  './directives'