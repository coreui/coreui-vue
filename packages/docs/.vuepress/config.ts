import { defineUserConfig } from 'vuepress'
import type { DefaultThemeOptions } from 'vuepress'
import { permalink } from 'markdown-it-anchor'
import pkg from '../package.json'

// const md = require('markdown-it')()
const path = require('path')

export default defineUserConfig<DefaultThemeOptions>({
  base: `/vue/docs/${pkg.config.version_short}/`,
  lang: 'en-US',
  title: 'Vue UI Components · CoreUI',
  description: 'UI Components Library for Vue.js (Vue 3)',
  head: [
    ['link', { rel: 'icon', href: `/vue/docs/${pkg.config.version_short}/favicons/favicon-96x96.png` }],
    // ['link', { rel: 'manifest', href: '/favicons/manifest.json' }],
  ],
  extendsMarkdown: (md) => {
    md.use(require('markdown-it-include')),
      (md.renderer.rules.table_open = function (tokens, idx) {
        return '<table class="table table-striped table-api">'
      })
  },
  markdown: {
    anchor: {
      permalink: permalink.ariaHidden({
        class: 'anchor-link',
        placement: 'after'
      })
    },
  },
  plugins: [
    '@vuepress/plugin-toc',
    [
      '@vuepress/container',
      {
        type: 'demo',
        render: function (tokens, idx) {
          if (tokens[idx].nesting === 1) {
            return '<div class="docs-example border rounded-top p-4">\n'
          } else {
            return '</div>\n'
          }
        },
      },
    ],
    [
      '@vuepress/container',
      {
        type: 'demo-dark',
        render: function (tokens, idx) {
          if (tokens[idx].nesting === 1) {
            return '<div class="docs-example rounded-top p-4 bg-dark">\n'
          } else {
            return '</div>\n'
          }
        },
      },
    ],
  ],
  theme: path.resolve(__dirname, './theme-coreui'),
  themeConfig: {
    sidebar: [
      {
        text: 'Getting started',
        icon: '<rect width="32" height="32" x="144" y="464" fill="var(--ci-primary-color, currentColor)" class="ci-primary"></rect><rect width="32" height="32" x="240" y="464" fill="var(--ci-primary-color, currentColor)" class="ci-primary"></rect><rect width="32" height="32" x="336" y="464" fill="var(--ci-primary-color, currentColor)" class="ci-primary"></rect><path fill="var(--ci-primary-color, currentColor)" d="M312,76.82v34.265a142.419,142.419,0,0,1,86.207,130.708C398.207,320.206,334.413,384,256,384S113.793,320.206,113.793,241.793A142.419,142.419,0,0,1,200,111.085V76.82c-68.671,23.373-118.207,88.5-118.207,164.973C81.793,337.851,159.942,416,256,416s174.207-78.149,174.207-174.207C430.207,165.316,380.671,100.193,312,76.82Z" class="ci-primary"></path><rect width="32" height="229.793" x="240" y="16" fill="var(--ci-primary-color, currentColor)" class="ci-primary"></rect>',
        link: `/getting-started/`,
        children: [
          {
            text: 'Introduction',
            link: `/getting-started/introduction.html`,
          },
        ],
      },
      {
        text: 'Layout',
        icon: `<path fill="var(--ci-primary-color, currentColor)" d="M16,64V448H496V64ZM464,240H192V96H464ZM192,272H312V416H192ZM48,96H160V416H48ZM344,416V272H464V416Z"></path>`,
        link: `/layout/`,
        children: [
          {
            text: 'Breakpoints',
            link: `/layout/breakpoints.html`,
          },
          {
            text: 'Columns',
            link: `/layout/columns.html`,
          },
          {
            text: 'Containers',
            link: `/layout/containers.html`,
          },
          {
            text: 'Grid',
            link: `/layout/grid.html`,
          },
          {
            text: 'Gutters',
            link: `/layout/gutters.html`,
          },
        ],
      },
      {
        text: 'Forms',
        icon: `<rect width="288" height="32" x="112" y="152" fill="var(--ci-primary-color, currentColor)" class="ci-primary"></rect><rect width="288" height="32" x="112" y="240" fill="var(--ci-primary-color, currentColor)" class="ci-primary"></rect><rect width="152" height="32" x="112" y="328" fill="var(--ci-primary-color, currentColor)" class="ci-primary"></rect><path fill="var(--ci-primary-color, currentColor)" d="M480,48H32V464H480ZM448,432H64V80H448Z" class="ci-primary"></path>`,
        link: `/forms/`,
        children: [
          // {
          //   text: 'Overview',
          //   link: `/forms/overview.html`,
          // },
          {
            text: 'Checkbox',
            link: `/forms/checkbox.html`,
          },
          {
            text: 'Input',
            link: `/forms/input.html`,
          },
          {
            text: 'Input group',
            link: `/forms/input-group.html`,
          },
          {
            text: 'Radio',
            link: `/forms/radio.html`,
          },
          // {
          //   text: 'Checks & radios',
          //   link: `/forms/checks-radios.html`,
          // },
          {
            text: 'Range',
            link: `/forms/range.html`,
          },
          {
            text: 'Select',
            link: `/forms/select.html`,
          },
          {
            text: 'Switch',
            link: `/forms/switch.html`,
          },
          {
            text: 'Textarea',
            link: `/forms/textarea.html`,
          },
          {
            text: 'Floating labels',
            link: `/forms/floating-labels.html`,
          },
          {
            text: 'Layout',
            link: `/forms/layout.html`,
          },
          {
            text: 'Validation',
            link: `/forms/validation.html`,
          },
        ],
      },
      {
        text: 'Components',
        icon: '<path fill="var(--ci-primary-color, currentColor)" d="M410.989,16H101.011L16,237.029V496H496V237.029Zm-288,32H240V240H49.143ZM184,272H328v40H184ZM464,464H48V272H152v72H360V272H464ZM272,240V48H389.012l73.845,192Z" class="ci-primary"></path>',
        link: `/components/`,
        children: [
          {
            text: 'Accordion',
            link: `/components/accordion.html`,
          },
          {
            text: 'Alert',
            link: `/components/alert.html`,
          },
          {
            text: 'Avatar',
            link: `/components/avatar.html`,
          },
          {
            text: 'Badge',
            link: `/components/badge.html`,
          },
          {
            text: 'Breadcrumb',
            link: `/components/breadcrumb.html`,
          },
          {
            text: 'Buttons',
            link: `/components/button.html`,
          },
          {
            text: 'Button Group',
            link: `/components/button-group.html`,
          },
          {
            text: 'Callout',
            link: `/components/callout.html`,
          },
          {
            text: 'Card',
            link: `/components/card.html`,
          },
          {
            text: 'Carousel',
            link: `/components/carousel.html`,
          },
          {
            text: 'Chart',
            link: `/components/chart.html`,
          },
          {
            text: 'Close Button',
            link: `/components/close-button.html`,
          },
          {
            text: 'Collapse',
            link: `/components/collapse.html`,
          },
          {
            text: 'Dropdown',
            link: `/components/dropdown.html`,
          },
          {
            text: 'Footer',
            link: `/components/footer.html`,
          },
          {
            text: 'Header',
            link: `/components/header.html`,
          },
          {
            text: 'Icon',
            link: `/components/icon.html`,
          },
          {
            text: 'Image',
            link: `/components/image.html`,
          },
          {
            text: 'List Group',
            link: `/components/list-group.html`,
          },
          {
            text: 'Modal',
            link: `/components/modal.html`,
          },
          {
            text: 'Navs & Tabs',
            link: `/components/navs-tabs.html`,
          },
          {
            text: 'Navbar',
            link: `/components/navbar.html`,
          },
          {
            text: 'Offcanvas',
            link: `/components/offcanvas.html`,
          },
          {
            text: 'Pagination',
            link: `/components/pagination.html`,
          },
          {
            text: 'Placeholder',
            link: `/components/placeholder.html`,
          },
          {
            text: 'Popover',
            link: `/components/popover.html`,
          },
          {
            text: 'Progress',
            link: `/components/progress.html`,
          },
          {
            text: 'Sidebar',
            link: `/components/sidebar.html`,
          },
          {
            text: 'Spinner',
            link: `/components/spinner.html`,
          },
          {
            text: 'Table',
            link: `/components/table.html`,
          },
          {
            text: 'Toast',
            link: `/components/toast.html`,
          },
          {
            text: 'Tooltip',
            link: `/components/tooltip.html`,
          },
          {
            text: 'Widgets',
            link: `/components/widgets.html`,
          },
        ],
      },
      {
        text: 'Templates',
        link: '/templates/',
        icon: '<path fill="var(--ci-primary-color, currentColor)" d="M472,232H424V120a24.028,24.028,0,0,0-24-24H40a24.028,24.028,0,0,0-24,24V366a24.028,24.028,0,0,0,24,24H212v50H152v32H304V440H244V390h92v58a24.027,24.027,0,0,0,24,24H472a24.027,24.027,0,0,0,24-24V256A24.027,24.027,0,0,0,472,232ZM336,256V358H48V128H392V232H360A24.027,24.027,0,0,0,336,256ZM464,440H368V264h96Z" class="ci-primary"/>',
        children: [
          {
            text: 'Admin & Dashboard',
            link: '/templates/admin-dashboard.html',
            badge: {
              color: 'success',
              text: 'New',
            }
          },
          {
            text: 'Download',
            link: '/templates/download.html',
          },
          {
            text: 'Installation',
            link: '/templates/installation.html',
          },
          {
            text: 'Customize',
            link: '/templates/customize.html',
          },
          {
            text: 'Contents',
            link: '/templates/contents.html',
          },
        ],
      },
      {
        text: 'Migration',
        link: '/migration/',
        icon: '<path fill="var(--ci-primary-color, currentColor)" d="M464,256.25C464,370.8,370.8,464,256.25,464S48.5,370.8,48.5,256.25,141.7,48.5,256.25,48.5a208,208,0,0,1,149.963,64H328.5v32h128V16.5h-32V85.478A239.717,239.717,0,1,0,496,256.25Z" class="ci-primary"></path><polygon fill="var(--ci-primary-color, currentColor)" points="272.5 112.451 240.5 112.549 241.017 282.756 353.301 334.53 366.699 305.47 272.954 262.244 272.5 112.451" class="ci-primary"></polygon>',
        children: [
          {
            text: 'v4',
            link: '/migration/v4.html',
          },
        ],
      },
    ],
  },
})
