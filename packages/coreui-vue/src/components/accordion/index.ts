import { App } from 'vue'
import { CAccordion } from './CAccordion'
import { CAccordionBody } from './CAccordionBody'
import { CAccordionButton } from './CAccordionButton'
import { CAccordionHeader } from './CAccordionHeader'
import { CAccordionItem } from './CAccordionItem'

const CAccordionPlugin = {
  install: (app: App): void => {
    app.component(CAccordion.name as string, CAccordion)
    app.component(CAccordionBody.name as string, CAccordionBody)
    app.component(CAccordionButton.name as string, CAccordionButton)
    app.component(CAccordionHeader.name as string, CAccordionHeader)
    app.component(CAccordionItem.name as string, CAccordionItem)
  },
}

export {
  CAccordionPlugin,
  CAccordion,
  CAccordionBody,
  CAccordionButton,
  CAccordionHeader,
  CAccordionItem,
}
