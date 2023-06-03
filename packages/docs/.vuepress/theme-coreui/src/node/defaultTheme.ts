import type { Theme, ThemeConfig } from '@vuepress/core'
import { path } from '@vuepress/utils'
import type { DefaultThemeLocaleOptions, DefaultThemePluginsOptions } from '../shared'
import { assignDefaultLocaleOptions } from './utils'

export interface DefaultThemeOptions extends ThemeConfig, DefaultThemeLocaleOptions {
  /**
   * To avoid confusion with the root `plugins` option,
   * we use `themePlugins`
   */
  themePlugins?: DefaultThemePluginsOptions
}

export const defaultTheme: Theme<DefaultThemeOptions> = ({
  themePlugins = {},
  ...localeOptions
}) => {
  assignDefaultLocaleOptions(localeOptions)

  return {
    name: '@vuepress/coreui-docs-theme',

    layouts: path.resolve(__dirname, '../client/layouts'),

    clientAppEnhanceFiles: path.resolve(__dirname, '../client/clientAppEnhance.ts'),

    clientAppSetupFiles: path.resolve(__dirname, '../client/clientAppSetup.ts'),

    // use the relative file path to generate edit link
    extendsPageData: ({ filePathRelative }) => ({ filePathRelative }),

    plugins: [
      [
        '@vuepress/active-header-links',
        {
          headerLinkSelector: 'a.sidebar-item',
          headerAnchorSelector: '.anchor-link',
        },
      ],
      ['@vuepress/back-to-top', themePlugins.backToTop !== false],
      ['@vuepress/prismjs', themePlugins.prismjs !== false],
      ['@vuepress/theme-data', { themeData: localeOptions }],
    ],
  }
}
