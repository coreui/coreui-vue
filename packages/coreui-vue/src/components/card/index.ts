import { App } from 'vue'
import { CCard } from './CCard'
import { CCardBody } from './CCardBody'
import { CCardFooter } from './CCardFooter'
import { CCardGroup } from './CCardGroup'
import { CCardHeader } from './CCardHeader'
import { CCardImage } from './CCardImage'
import { CCardImageOverlay } from './CCardImageOverlay'
import { CCardLink } from './CCardLink'
import { CCardSubtitle } from './CCardSubtitle'
import { CCardText } from './CCardText'
import { CCardTitle } from './CCardTitle'

const CCardPlugin = {
  install: (app: App): void => {
    app.component(CCard.name, CCard)
    app.component(CCardBody.name, CCardBody)
    app.component(CCardFooter.name, CCardFooter)
    app.component(CCardGroup.name, CCardGroup)
    app.component(CCardHeader.name, CCardHeader)
    app.component(CCardImage.name, CCardImage)
    app.component(CCardImageOverlay.name, CCardImageOverlay)
    app.component(CCardLink.name, CCardLink)
    app.component(CCardSubtitle.name, CCardSubtitle)
    app.component(CCardText.name, CCardText)
    app.component(CCardTitle.name, CCardTitle)
  },
}

export {
  CCardPlugin,
  CCard,
  CCardBody,
  CCardFooter,
  CCardGroup,
  CCardHeader,
  CCardImage,
  CCardImageOverlay,
  CCardLink,
  CCardSubtitle,
  CCardText,
  CCardTitle,
}
