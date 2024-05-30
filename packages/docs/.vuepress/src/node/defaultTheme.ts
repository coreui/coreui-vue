import type { Page, Theme } from '@vuepress/core'

import { themeDataPlugin } from '@vuepress/plugin-theme-data'
import { fs, getDirname, path } from '@vuepress/utils'
import type {
  DefaultThemeLocaleOptions,
  DefaultThemePageData,
  DefaultThemePluginsOptions,
} from '../shared'
import { assignDefaultLocaleOptions } from './utils'

const __dirname = getDirname(import.meta.url)

export interface DefaultThemeOptions extends DefaultThemeLocaleOptions {
  /**
   * To avoid confusion with the root `plugins` option,
   * we use `themePlugins`
   */
  themePlugins?: DefaultThemePluginsOptions
}
export const defaultTheme = ({
  themePlugins = {},
  ...localeOptions
}: DefaultThemeOptions = {}): Theme => {
  assignDefaultLocaleOptions(localeOptions)

  return {
    name: '@vuepress/coreui-docs-theme',

    templateBuild: path.resolve(__dirname, '../templates/build.html'),

    clientConfigFile: path.resolve(__dirname, '../client/config.ts'),

    extendsPage: (page: Page<Partial<DefaultThemePageData>>) => {
      // save relative file path into page data to generate edit link
      page.data.filePathRelative = page.filePathRelative
      // save title into route meta to generate navbar and sidebar
      page.routeMeta.title = page.title
    },

    plugins: [themeDataPlugin({ themeData: localeOptions })],
  }
}
