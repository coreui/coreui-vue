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
    app.component(CCard.name as string, CCard)
    app.component(CCardBody.name as string, CCardBody)
    app.component(CCardFooter.name as string, CCardFooter)
    app.component(CCardGroup.name as string, CCardGroup)
    app.component(CCardHeader.name as string, CCardHeader)
    app.component(CCardImage.name as string, CCardImage)
    app.component(CCardImageOverlay.name as string, CCardImageOverlay)
    app.component(CCardLink.name as string, CCardLink)
    app.component(CCardSubtitle.name as string, CCardSubtitle)
    app.component(CCardText.name as string, CCardText)
    app.component(CCardTitle.name as string, CCardTitle)
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
