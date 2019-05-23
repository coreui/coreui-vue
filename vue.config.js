const inDefaultStylesScript = process.env.npm_lifecycle_script.includes('coreui-vue')

module.exports = {
  configureWebpack:{
    performance: {
      hints: false
    }
  },
  css: {
    extract: false,
    loaderOptions: {
      sass: {
        data: inDefaultStylesScript ? `$defaultStyles: true;` : null
      }
    }
  }
}
