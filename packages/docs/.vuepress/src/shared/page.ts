import type { GitPluginPageData } from '@vuepress/plugin-git'
import type { NavLink, SidebarConfig } from './nav'

export interface DefaultThemePageData extends GitPluginPageData {
  filePathRelative: string
}

export interface DefaultThemePageFrontmatter {
  home?: boolean
  navbar?: boolean
  pageClass?: string
  name?: string
  preview_component?: boolean
  pro_component?: boolean
  other_frameworks?: string
}

export interface DefaultThemeNormalPageFrontmatter extends DefaultThemePageFrontmatter {
  home?: false
  editLink?: boolean
  lastUpdated?: boolean
  contributors?: boolean
  sidebar?: 'auto' | false | SidebarConfig
  sidebarDepth?: number
  prev?: string | NavLink
  next?: string | NavLink
}
