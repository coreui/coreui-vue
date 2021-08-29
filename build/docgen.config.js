/* eslint-disable @typescript-eslint/no-var-requires */
'use strict'

const path = require('path')
const pkg = require('./../package.json')
// const templates = require('./docgen.templates')

module.exports = {
  componentsRoot: 'src/components', // the folder where CLI will start searching for components.
  components: '**/[A-Z]*.ts', // the glob to define what files should be documented as components (relative to componentRoot)
  outDir: 'docs/api', // folder to save components docs in (relative to the current working directry)
  getDocFileName: (componentPath) =>
    componentPath.replace(/\.ts$/, '.md'), // specify the name of the input md file
  getDestFile: (file, config) =>
    path.join(config.outDir, file).replace(/\.ts$/, '.api.md'), // specify the name of the output md file
  // templates,
  templates: {
    // global component template wrapping all others see #templates
    component: require('./templates/component'),
    events: require('./templates/events'),
    props: require('./templates/props'),
    slots: require('./templates/slots'),
  },
  docsRepo: 'profile/repo',
  docsBranch: 'master',
  docsFolder: '',
  editLinkLabel: 'Edit on github',
}