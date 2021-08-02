import { App } from 'vue'
import { CModal } from './CModal'
import { CModalBody } from './CModalBody'
import { CModalFooter } from './CModalFooter'
import { CModalHeader } from './CModalHeader'
import { CModalTitle } from './CModalTitle'

const CModalPlugin = {
  install: (app: App): void => {
    app.component(CModal.name, CModal)
    app.component(CModalBody.name, CModalBody)
    app.component(CModalFooter.name, CModalFooter)
    app.component(CModalHeader.name, CModalHeader)
    app.component(CModalTitle.name, CModalTitle)
  },
}

export { CModalPlugin, CModal, CModalBody, CModalFooter, CModalHeader, CModalTitle }
