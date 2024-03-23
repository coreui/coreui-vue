import { App } from 'vue'
import { CCarousel } from './CCarousel'
import { CCarouselCaption } from './CCarouselCaption'
import { CCarouselItem } from './CCarouselItem'

const CCarouselPlugin = {
  install: (app: App): void => {
    app.component(CCarousel.name as string, CCarousel)
    app.component(CCarouselCaption.name as string, CCarouselCaption)
    app.component(CCarouselItem.name as string, CCarouselItem)
  },
}

export { CCarouselPlugin, CCarousel, CCarouselCaption, CCarouselItem }
