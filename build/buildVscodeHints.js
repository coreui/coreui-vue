const fs = require('fs-extra')
const types = fs.readFileSync('src/components/index.d.ts', 'utf-8')
const classes = getTypesClasses(types)

function getTypesClasses (types) {
  let classes = {}
  const rawClasses = types.replace(/(\n|\r)/ig, '')
                          .split('declare')
                          .filter(rawClass => rawClass.includes('class'))

  rawClasses.forEach(rawClass => {
    const name = rawClass.match(/(?<=class\s+).*?(?=\s+)/gs)[0]

    const propsRaw = rawClass
      .substring(rawClass.indexOf('{') + 1, rawClass.lastIndexOf('}'))
      .replace(/{(()([^}]))+}/ig, 'custom')


    let props = propsRaw.match(/([a-zA-Z?]+:).*?(?=[a-zA-Z?]+:|$)/g)

    if (props) {
      props = props.map(prop => prop.trim().replace('?', ''))
    }        
    
    classes[name] = {
      isExported: rawClass.includes('export'),
      extend: rawClass.match(/(?<=extends\s+).*?(?=\s+{)/gs)[0],
      props,
    }
  })
  Object.entries(classes).forEach(([key, value]) => {
    if (value.extend !== 'Vue') {
      const props = classes[key].props || []
      const extend = classes[value.extend].props || []
      classes[key].props = [...props, ...extend]
    }
  })
  return classes
}

const components = {} 
Object.entries(classes).forEach(([key,value]) => {
  if (value.isExported) {
    components[key] = value
  }
}) 

generateVeturFiles(components)

function generateVeturFiles (content) {
  const dir = 'dist/vetur'
  if (!fs.existsSync(dir)) {
    fs.mkdirSync(dir)
  }

  const attributes = generateAttributes(content)
  fs.writeFile(
    `dist/vetur/coreui-attributes.json`,
    attributes,
    () => ''
  )

  const tags = generateTags(content)
  fs.writeFile(
    `dist/vetur/coreui-tags.json`,
    tags,
    () => ''
  )
}

function generateTags (content) {
  let tags = {}
  Object.entries(content).forEach(([name, component]) => {
    let attributes = []
    if (component.props) {
      attributes = component.props.map(prop => toKebabCase(prop.split(':')[0]))
    }
    tags[name] = {
      attributes,
      description: ''
    }
    tags[toKebabCase(name)] = {
      attributes,
      description: ''
    }
  })
  return JSON.stringify(tags, null, 2)
}

function generateAttributes (content) {
  let attributes = {}
  Object.entries(content).forEach(([name, component]) => {
    if (component.props) {
      component.props.forEach(prop => {
        const propName = toKebabCase(prop.split(':')[0])
        const key = name + '/' + propName
        const kebabKey = toKebabCase(name) + '/' + propName
        const type = prop.split(':')[1].trim()
        const description = 'For API documentation please visit https://coreui.io/vue/docs'

        attributes[kebabKey] = {
          description,
          type,
        }
        attributes[key] = {
          description,
          type,
        }
      })
    }
  })
  return JSON.stringify(attributes, null, 2)
}

function toKebabCase (str) {
  const camelCase = str.charAt(0).toLowerCase() + str.slice(1)
  return camelCase.replace(/([a-z])([A-Z])/g, '$1-$2').toLowerCase()
}