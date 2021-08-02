import { App } from 'vue'
import { CImage } from './CImage'

const Plugin = {
  install: (app: App): void => {
    app.component(CImage.name, CImage)
  },
}

export default Plugin

export { CImage }
