import { App } from 'vue'
import { CCarousel } from './CCarousel'
import { CCarouselCaption } from './CCarouselCaption'
import { CCarouselItem } from './CCarouselItem'

const CCarouselPlugin = {
  install: (app: App): void => {
    app.component(CCarousel.name, CCarousel)
    app.component(CCarouselCaption.name, CCarouselCaption)
    app.component(CCarouselItem.name, CCarouselItem)
  },
}

export { CCarouselPlugin, CCarousel, CCarouselCaption, CCarouselItem }
