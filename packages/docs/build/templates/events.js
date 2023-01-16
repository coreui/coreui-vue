'use strict'

function mdclean(input) {
	return input.replace(/\r?\n/g, '<br>').replace(/\|/g, '\\|')
}

function formatProperties(properties) {
	if (!properties) {
		return ''
	}
	return properties
		.map(property => {
			const { name, description, type } = property
			if (!type) {
				return ''
			}
			return `**${name}** \`${type.names.length ? type.names.join(', ') : ''}\` - ${description}`
		})
		.join('\n')
}

const tmpl = (events) => {
	let ret = ''
	events.forEach(evt => {
		const { description = '', ...e } = evt
		const readableProperties = e.properties ? `${formatProperties(e.properties)}` : ''
		ret += `| **${e.name.includes('update:') ? mdclean(e.name) : mdclean(e.name.match(/[A-Z]{2,}(?=[A-Z][a-z]+[0-9]*|\b)|[A-Z]?[a-z]+[0-9]*|[A-Z]|[0-9]+/g)
    .map(x => x.toLowerCase())
    .join('-'))}** | ${mdclean(description)}| ${mdclean(readableProperties)}\n`
	})
	return ret
}

module.exports = (events, opt = {}) => {
	return `
${opt.isSubComponent || opt.hasSubComponents ? '#' : ''}#### Events

  | Event name     | Description    | Properties   |
  | -------------- |--------------- | -------------|
  ${tmpl(events)}
  `
}