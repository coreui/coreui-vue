import { App } from 'vue'
import { COffcanvas } from './COffcanvas'
import { COffcanvasBody } from './COffcanvasBody'
import { COffcanvasHeader } from './COffcanvasHeader'
import { COffcanvasTitle } from './COffcanvasTitle'

const COffcanvasPlugin = {
  install: (app: App): void => {
    app.component(COffcanvas.name as string, COffcanvas)
    app.component(COffcanvasBody.name as string, COffcanvasBody)
    app.component(COffcanvasHeader.name as string, COffcanvasHeader)
    app.component(COffcanvasTitle.name as string, COffcanvasTitle)
  },
}

export { COffcanvasPlugin, COffcanvas, COffcanvasBody, COffcanvasHeader, COffcanvasTitle }
