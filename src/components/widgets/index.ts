import { App } from 'vue'
import { CWidgetSimple } from './CWidgetSimple'
import { CWidgetBrand } from './CWidgetBrand'
import { CWidgetDropdown } from './CWidgetDropdown'
import { CWidgetIcon } from './CWidgetIcon'
import { CWidgetProgress } from './CWidgetProgress'
import { CWidgetProgressIcon } from './CWidgetProgressIcon'

const CToastPlugin = {
  install: (app: App): void => {
    app.component(CWidgetSimple.name, CWidgetSimple)
    app.component(CWidgetBrand.name, CWidgetBrand)
    app.component(CWidgetDropdown.name, CWidgetDropdown)
    app.component(CWidgetIcon.name, CWidgetIcon)
    app.component(CWidgetProgress.name, CWidgetProgress)
    app.component(CWidgetProgressIcon.name, CWidgetProgressIcon)
  },
}

export { 
    CToastPlugin, 
    CWidgetSimple, 
    CWidgetBrand, 
    CWidgetDropdown, 
    CWidgetIcon,
    CWidgetProgress,
    CWidgetProgressIcon
}
