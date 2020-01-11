module.exports = {
  configureWebpack:{
    performance: {
      hints: false
    }
  },
  css: {
    extract: false
  },
  transpileDependencies: [
    '@coreui/icons',
    '@coreui/utils'
  ]
}
