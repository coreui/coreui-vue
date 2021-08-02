import { defineUserConfig } from 'vuepress'
import type { DefaultThemeOptions } from 'vuepress'
import pkg from '../../package.json'

// const md = require('markdown-it')()
const path = require('path')

export default defineUserConfig<DefaultThemeOptions>({
  lang: 'en-US',
  title: 'CoreUI for Vue.js',
  description: 'UI Components Library for Vue.js (Vue 3)',
  extendsMarkdown: (md) => {
    md.use(require('markdown-it-include')),
    md.renderer.rules.table_open = function(tokens, idx) {
      return '<table class="table table-striped">'
    }
  },
  plugins: [
    '@vuepress/plugin-toc',
    ['@vuepress/container', {
      type: 'demo',
      render: function (tokens, idx) {    
        if (tokens[idx].nesting === 1) {
          return '<div class="docs-example border rounded-top p-4">\n';
        } else {
          return '</div>\n';
        }
      },
    }],
    ['@vuepress/container', {
      type: 'demo-dark',
      render: function (tokens, idx) {    
        if (tokens[idx].nesting === 1) {
          return '<div class="docs-example rounded-top p-4 bg-dark">\n';
        } else {
          return '</div>\n';
        }
      },
    }]
  ],
  theme: path.resolve(__dirname, './theme-coreui'),
  themeConfig: {
    sidebar: [
      {
        text: 'Getting started',
        icon: `<svg version="1.1" xmlns="http://www.w3.org/2000/svg" class="nav-icon text-primary" width="64" height="64" viewBox="0 0 64 64">
        <title>energy</title>
        <path d="M40 26v-24h-4.012l-27.941 38h16.953v22h3.975l28.125-36zM15.953 36l20.047-27.264v21.264h12.9l-19.9 25.471v-19.471z"></path>
        </svg>`,
        children: [
          {
            text: 'Introduction',
            link: `/${pkg.config.version_short}/getting-started/introduction.md`,
          }
        ]
      },
      {
        text: 'Layout',
        icon: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" class="nav-icon text-primary">
        <path fill="var(--ci-primary-color, currentColor)" d="M16,64V448H496V64ZM464,240H192V96H464ZM192,272H312V416H192ZM48,96H160V416H48ZM344,416V272H464V416Z" class="ci-primary"></path>
        </svg>`,
        children: [
          {
            text: 'Breakpoints',
            link: `/${pkg.config.version_short}/layout/breakpoints.md`,
          },
          {
            text: 'Columns',
            link: `/${pkg.config.version_short}/layout/columns.md`,
          },
          {
            text: 'Containers',
            link: `/${pkg.config.version_short}/layout/containers.md`,
          },
          {
            text: 'Grid',
            link: `/${pkg.config.version_short}/layout/grid.md`,
          },
          {
            text: 'Gutters',
            link: `/${pkg.config.version_short}/layout/gutters.md`,
          },
        ],
      },
      {
        text: 'Forms',
        icon: `<svg xmlns="http://www.w3.org/2000/svg" class="nav-icon text-primary" viewBox="0 0 512 512">
        <path fill="var(--ci-primary-color, currentColor)" d="M23.686,456.521a24.841,24.841,0,0,0,6,25.708l.087.087a24.841,24.841,0,0,0,17.612,7.342,25.179,25.179,0,0,0,8.1-1.344h0a646.28,646.28,0,0,0,248.04-154.207L469.981,167.646A88.832,88.832,0,1,0,344.354,42.019l-9.534,9.534L314.029,30.762a50.4,50.4,0,0,0-71.274,0L108.687,164.83l22.626,22.627L265.382,53.389a18.4,18.4,0,0,1,26.019,0L312.193,74.18l-134.3,134.3A646.28,646.28,0,0,0,23.686,456.521Zm343.3-391.875a56.832,56.832,0,1,1,80.373,80.373l-89.493,89.493-80.372-80.373ZM254.862,176.766l80.372,80.372L280.892,311.48A614.383,614.383,0,0,1,58.779,453.221,614.383,614.383,0,0,1,200.52,231.108Z" class="ci-primary"></path>
        </svg>`,
        children: [
          {
            text: 'Overview',
            link: `/${pkg.config.version_short}/forms/overview.md`,
          },
          {
            text: 'Form control',
            link: `/${pkg.config.version_short}/forms/form-control.md`,
          },
          {
            text: 'Select',
            link: `/${pkg.config.version_short}/forms/select.md`,
          },
          {
            text: 'Checks & radios',
            link: `/${pkg.config.version_short}/forms/checks-radios.md`,
          },
          {
            text: 'Range',
            link: `/${pkg.config.version_short}/forms/range.md`,
          },
          {
            text: 'Floating labels',
            link: `/${pkg.config.version_short}/forms/floating-labels.md`,
          },
          {
            text: 'Input group',
            link: `/${pkg.config.version_short}/forms/input-group.md`,
          },
          {
            text: 'Layout',
            link: `/${pkg.config.version_short}/forms/layout.md`,
          },
          {
            text: 'Validation',
            link: `/${pkg.config.version_short}/forms/validation.md`,
          },
        ],
      },
      {
        text: 'Components',
        icon: `<svg version="1.1" xmlns="http://www.w3.org/2000/svg" class="nav-icon text-primary" width="64" height="64" viewBox="0 0 64 64">
        <title>energy</title>
        <path d="M40 26v-24h-4.012l-27.941 38h16.953v22h3.975l28.125-36zM15.953 36l20.047-27.264v21.264h12.9l-19.9 25.471v-19.471z"></path>
        </svg>`,
        children: [
          {
            text: 'Accordion',
            link: `/${pkg.config.version_short}/components/accordion.md`,
          },
          {
            text: 'Alert',
            link: `/${pkg.config.version_short}/components/alert.md`,
          },
          {
            text: 'Avatar',
            link: `/${pkg.config.version_short}/components/avatar.md`,
          },
          {
            text: 'Badge',
            link: `/${pkg.config.version_short}/components/badge.md`,
          },
          {
            text: 'Breadcrumb',
            link: `/${pkg.config.version_short}/components/breadcrumb.md`,
          },
          {
            text: 'Buttons',
            link: `/${pkg.config.version_short}/components/button.md`,
          },
          {
            text: 'Button Group',
            link: `/${pkg.config.version_short}/components/button-group.md`,
          },
          {
            text: 'Callout',
            link: `/${pkg.config.version_short}/components/callout.md`,
          },
          {
            text: 'Card',
            link: `/${pkg.config.version_short}/components/card.md`,
          },
          {
            text: 'Close Button',
            link: `/${pkg.config.version_short}/components/close-button.md`,
          },
          {
            text: 'Collapse',
            link: `/${pkg.config.version_short}/components/collapse.md`,
          },
          {
            text: 'Dropdown',
            link: `/${pkg.config.version_short}/components/dropdown.md`,
          },
          {
            text: 'Footer',
            link: `/${pkg.config.version_short}/components/footer.md`,
          },
          {
            text: 'Header',
            link: `/${pkg.config.version_short}/components/header.md`,
          },
          {
            text: 'Image',
            link: `/${pkg.config.version_short}/components/image.md`,
          },
          {
            text: 'List Group',
            link: `/${pkg.config.version_short}/components/list-group.md`,
          },
          {
            text: 'Modal',
            link: `/${pkg.config.version_short}/components/modal.md`,
          },
          {
            text: 'Nav',
            link: `/${pkg.config.version_short}/components/nav.md`,
          },
          {
            text: 'Navbar',
            link: `/${pkg.config.version_short}/components/navbar.md`,
          },
          {
            text: 'Offcanvas',
            link: `/${pkg.config.version_short}/components/offcanvas.md`,
          },
          {
            text: 'Pagination',
            link: `/${pkg.config.version_short}/components/pagination.md`,
          },
          {
            text: 'Progress',
            link: `/${pkg.config.version_short}/components/progress.md`,
          },
          {
            text: 'Spinner',
            link: `/${pkg.config.version_short}/components/spinner.md`,
          },
          {
            text: 'Table',
            link: `/${pkg.config.version_short}/components/table.md`,
          },
          {
            text: 'Toast',
            link: `/${pkg.config.version_short}/components/toast.md`,
          },
        ],
      },
      {
        text: 'Directives',
        icon: `<svg version="1.1" xmlns="http://www.w3.org/2000/svg" class="nav-icon text-primary" width="64" height="64" viewBox="0 0 64 64">
        <title>energy</title>
        <path d="M40 26v-24h-4.012l-27.941 38h16.953v22h3.975l28.125-36zM15.953 36l20.047-27.264v21.264h12.9l-19.9 25.471v-19.471z"></path>
        </svg>`,
        children: [
          {
            text: 'Popover',
            link: `/${pkg.config.version_short}/directives/popover.md`,
          },
          {
            text: 'Tooltip',
            link: `/${pkg.config.version_short}/directives/tooltip.md`,
          },
        ]
      }
    ],
  },
})
