import { App } from 'vue'
import { CAccordion } from './CAccordion'
import { CAccordionBody } from './CAccordionBody'
import { CAccordionButton } from './CAccordionButton'
import { CAccordionCollapse } from './CAccordionCollapse'
import { CAccordionHeader } from './CAccordionHeader'
import { CAccordionItem } from './CAccordionItem'

const CAccordionPlugin = {
  install: (app: App): void => {
    app.component(CAccordion.name, CAccordion)
    app.component(CAccordionBody.name, CAccordionBody)
    app.component(CAccordionButton.name, CAccordionButton)
    app.component(CAccordionCollapse.name, CAccordionCollapse)
    app.component(CAccordionHeader.name, CAccordionHeader)
    app.component(CAccordionItem.name, CAccordionItem)
  },
}

export {
  CAccordionPlugin,
  CAccordion,
  CAccordionBody,
  CAccordionButton,
  CAccordionCollapse,
  CAccordionHeader,
  CAccordionItem,
}
