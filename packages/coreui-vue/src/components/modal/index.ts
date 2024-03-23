import { App } from 'vue'
import { CModal } from './CModal'
import { CModalBody } from './CModalBody'
import { CModalFooter } from './CModalFooter'
import { CModalHeader } from './CModalHeader'
import { CModalTitle } from './CModalTitle'

const CModalPlugin = {
  install: (app: App): void => {
    app.component(CModal.name as string, CModal)
    app.component(CModalBody.name as string, CModalBody)
    app.component(CModalFooter.name as string, CModalFooter)
    app.component(CModalHeader.name as string, CModalHeader)
    app.component(CModalTitle.name as string, CModalTitle)
  },
}

export { CModalPlugin, CModal, CModalBody, CModalFooter, CModalHeader, CModalTitle }
