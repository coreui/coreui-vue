import { App } from 'vue'
import { CLoadingButton } from "./CLoadingButton"


const CLoadingButtonPlugin = {
  install: (app: App): void => {
    app.component(CLoadingButton.name, CLoadingButton)
  }
}

export { 
CLoadingButtonPlugin, 
  CLoadingButton,

}