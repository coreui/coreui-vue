import { App } from 'vue'
import { CImage } from './CImage'

const CImagePlugin = {
  install: (app: App): void => {
    app.component(CImage.name as string, CImage)
  },
}

export { CImagePlugin, CImage }
