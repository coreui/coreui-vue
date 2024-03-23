import { App } from 'vue'
import { CAvatar } from './CAvatar'

const CAvatarPlugin = {
  install: (app: App): void => {
    app.component(CAvatar.name as string, CAvatar)
  },
}

export { CAvatarPlugin, CAvatar }
