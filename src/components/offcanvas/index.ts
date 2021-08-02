import { App } from 'vue'
import { COffcanvas } from './COffcanvas'
import { COffcanvasBody } from './COffcanvasBody'
import { COffcanvasHeader } from './COffcanvasHeader'
import { COffcanvasTitle } from './COffcanvasTitle'

const COffcanvasPlugin = {
  install: (app: App): void => {
    app.component(COffcanvas.name, COffcanvas)
    app.component(COffcanvasBody.name, COffcanvasBody)
    app.component(COffcanvasHeader.name, COffcanvasHeader)
    app.component(COffcanvasTitle.name, COffcanvasTitle)
  },
}

export { COffcanvasPlugin, COffcanvas, COffcanvasBody, COffcanvasHeader, COffcanvasTitle }
