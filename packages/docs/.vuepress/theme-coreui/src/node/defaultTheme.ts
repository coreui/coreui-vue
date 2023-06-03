import type { Page, Theme } from '@vuepress/core'
import { activeHeaderLinksPlugin } from '@vuepress/plugin-active-header-links'
import { backToTopPlugin } from '@vuepress/plugin-back-to-top'
import { prismjsPlugin } from '@vuepress/plugin-prismjs'
import { themeDataPlugin } from '@vuepress/plugin-theme-data'
import { fs, getDirname, path } from '@vuepress/utils'
import type { DefaultThemeLocaleOptions, DefaultThemePluginsOptions } from '../shared'
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

    templateBuild: path.resolve(__dirname, '../../templates/build.html'),

    alias: {
      // use alias to make all components replaceable
      ...Object.fromEntries(
        fs
          .readdirSync(path.resolve(__dirname, '../client/components'))
          .filter((file) => file.endsWith('.vue'))
          .map((file) => [`@theme/${file}`, path.resolve(__dirname, '../client/components', file)]),
      ),
    },

    clientConfigFile: path.resolve(__dirname, '../client/config.ts'),

    extendsPage: (page: Page<Partial<DefaultThemePageData>>) => {
      // save relative file path into page data to generate edit link
      page.data.filePathRelative = page.filePathRelative
      // save title into route meta to generate navbar and sidebar
      page.routeMeta.title = page.title
    },

    // layouts: path.resolve(__dirname, '../client/layouts'),

    // clientAppEnhanceFiles: path.resolve(__dirname, '../client/clientAppEnhance.ts'),

    // clientAppSetupFiles: path.resolve(__dirname, '../client/clientAppSetup.ts'),

    // // use the relative file path to generate edit link
    // extendsPageData: ({ filePathRelative }) => ({ filePathRelative }),

    plugins: [
      // @vuepress/plugin-active-header-link
      themePlugins.activeHeaderLinks !== false
        ? activeHeaderLinksPlugin({
            headerLinkSelector: 'a.sidebar-item',
            headerAnchorSelector: '.header-anchor',
            // should greater than page transition duration
            delay: 300,
          })
        : [],

      // @vuepress/plugin-back-to-top
      themePlugins.backToTop !== false ? backToTopPlugin() : [],

      // @vuepress/plugin-prismjs
      themePlugins.prismjs !== false ? prismjsPlugin() : [],

      // @vuepress/plugin-theme-data
      themeDataPlugin({ themeData: localeOptions }),
      // [
      //   '@vuepress/active-header-links',
      //   {
      //     headerLinkSelector: 'a.sidebar-item',
      //     headerAnchorSelector: '.anchor-link',
      //   },
      // ],
      // ['@vuepress/back-to-top', themePlugins.backToTop !== false],
      // ['@vuepress/prismjs', themePlugins.prismjs !== false],
      // ['@vuepress/theme-data', { themeData: localeOptions }],
    ],
  }
}
