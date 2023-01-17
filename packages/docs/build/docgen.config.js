/* eslint-disable @typescript-eslint/no-var-requires */
'use strict'

const path = require('path')
// const pkg = require('./../package.json')

module.exports = {
  componentsRoot: './../../packages', // the folder where CLI will start searching for components.
  components: [
    '**/[A-Z]*.ts',
    '!**/[A-Z]*.d.ts',
    '!**/[A-Z]*.spec.ts'
  ],
  outDir: 'api', // folder to save components docs in (relative to the current working directry)
  getDocFileName: (componentPath) =>
    componentPath.replace(/\.ts$/, '.md'), // specify the name of the input md file
  getDestFile: (file, config) => {
    return path.join(
      config.outDir,
      file.replace('coreui-vue/src/components', '')
          .replace('coreui-vue-chartjs/src/', '')).replace(/\.ts$/, '.api.md') // specify the name of the output md file
  },
  // templates,
  templates: {
    // global component template wrapping all others see #templates
    component: require('./templates/component'),
    events: require('./templates/events'),
    props: require('./templates/props'),
    slots: require('./templates/slots'),
  },
  docsRepo: '@coreui/vue',
  docsBranch: 'main',
  docsFolder: '',
  editLinkLabel: 'Edit on github',
}