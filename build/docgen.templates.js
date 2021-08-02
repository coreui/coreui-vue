'use strict'

function mdclean(input) {
	return input.replace(/\r?\n/g, '<br>').replace(/\|/g, '\\|')
}

function isTag(v) {
    return !!v.content;
}
const renderTags = (tags) => {
    if (!tags) {
        return '';
    }
    return Object.entries(tags)
        .map(([tag, values]) => {
        return values.map(v => `<br/>\`@${tag}\` ${isTag(v) ? v.content : v.description}`).join('');
    })
        .join('');
};
const tmplProps = (props) => {
    let ret = '';
    props.forEach(pr => {
        var _a, _b, _c, _d, _e, _f, _g;
        const p = pr.name;
        let t = (_a = pr.description) !== null && _a !== void 0 ? _a : '';
        t += renderTags(pr.tags);
        const n = (_c = (_b = pr.type) === null || _b === void 0 ? void 0 : _b.name) !== null && _c !== void 0 ? _c : '';
        const v = (_e = (_d = pr.values) === null || _d === void 0 ? void 0 : _d.map(pv => `\`${pv}\``).join(', ')) !== null && _e !== void 0 ? _e : '-';
        const d = (_g = (_f = pr.defaultValue) === null || _f === void 0 ? void 0 : _f.value) !== null && _g !== void 0 ? _g : '';
        ret += `| <code>${mdclean(p)}</code> | ${mdclean(t)} | ${mdclean(n)} | ${mdclean(v)} | ${mdclean(d)} |\n`;
    });
    return ret;
};
function formatProperties(properties) {
  if (!properties) {
      return '';
  }
  return properties
      .map(property => {
      const { name, description, type } = property;
      if (!type) {
          return '';
      }
      return `**${name}** \`${type.names.length ? type.names.join(', ') : ''}\` - ${description}`;
  })
      .join('\n');
}
const tmplEvents = (events) => {
  let ret = '';
  events.forEach(evt => {
      const { description = '' } = evt, e = __rest(evt, ["description"]);
      const readableProperties = e.properties ? `${formatProperties(e.properties)}` : '';
      ret += `| <code>${mdclean(e.name)}</code> | ${mdclean(readableProperties)} | ${mdclean(description)}\n`;
  });
  return ret;
};

module.exports = {
	component: function component(
		renderedUsage,
		doc,
		config,
		fileName,
		requiresMd,
		{ isSubComponent, hasSubComponents }
	) {
		const { functional, displayName, description, docsBlocks, tags } = doc
		const { author, since, version, see, link, position, category } = tags || {}

		const frontMatter = []
		// if (!isSubComponent) {
		// 	frontMatter.push(`title: "${displayName}"`)
		// 	// If a @position doclet has been specified, we can
		// 	// use it in the frontMatter to order pages
		// 	if (position) {
		// 		frontMatter.push(`position: ${position[0].description}`)
		// 	}
		// 	// if component is decorated with an @category doclet we
		// 	// use it to place it in this category, if empty we use "components"
		// 	const cleanCategory = category ? category[0].description : 'components'
		// 	frontMatter.push(`category: "${cleanCategory}"`)
		// }

		return `${
			frontMatter.length
				? `---
${frontMatter.join('\n')}
---`
				: ''
		}
${`### ${displayName}`}
${description}
${functional ? `- ${renderedUsage.functionalTag}` : ''}
${author ? author.map(a => `- **Author**: ${a.description}`) : ''}
${since ? `- **Since** ${since[0].description}` : ''}
${version ? `- **Version** ${version[0].description}` : ''}
${see ? see.map(s => `- [See](${s.description})`) : ''}
${link ? link.map(l => `- [See](${l.description})`) : ''}
${renderedUsage.props}
${renderedUsage.methods}
${renderedUsage.events}
${renderedUsage.slots}
${docsBlocks ? '---\n' + docsBlocks.join('\n---\n') : ''}
${requiresMd.length ? '---\n' + requiresMd.map(component => component.content).join('\n---\n') : ''}
`
	},
  props: function props(props, opt = {}) {
    return `
${opt.isSubComponent || opt.hasSubComponents ? '#' : ''}#### Props
  | Prop name     | Description | Type      | Values      | Default     |
  | ------------- | ----------- | --------- | ----------- | ----------- |
  ${tmplProps(props)}
  `;
  },
  events: function events(events, opt = {}) {
    return `
${opt.isSubComponent || opt.hasSubComponents ? '#' : ''}#### Events
| Event name     | Properties     | Description  |
| -------------- |--------------- | -------------|
${tmplEvents(events)}
`;
  }
}
