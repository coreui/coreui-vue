const fs = require('fs-extra')
fs.copy('src', 'tmp').then(() => {
  fs.readdir('tmp/components', (e, directories) => {
    console.log('hehe')
    directories.forEach((directory) => {
      fs.readdir(`tmp/components/${directory}`, function(e, files) {
        if (!files) {
          return
        }
        let components = files.filter(file => file.includes('.vue'))
        components.forEach((component) => {
          fs.readFile(
            `tmp/components/${directory}/${component}`,
            'utf-8',
            (e, content) => {
              const newContent = content.replace(
                /(@import "~@coreui\/coreui\/scss\/([^>]+).scss";)/ig,
                ''
              )
              fs.writeFile(
                `tmp/components/${directory}/${component}`,
                newContent,
                () => ''
              )
            })
        })
      })
    })
  })
})
