'use strict'

module.exports = (renderedUsage, doc, config, fileName, requiresMd, { isSubComponent, hasSubComponents }) => {
  const { displayName, description, docsBlocks, tags, functional } = doc;
  const { deprecated, author, since, version, see, link } = tags || {};
  const frontMatter = [];
  if (!config.outFile && deprecated) {
      // to avoid having the squiggles in the left menu for deprecated items
      // use the frontmatter feature of vuepress
      frontMatter.push(`title: ${displayName}`);
  }
  if (hasSubComponents) {
      // show more than one level on subcomponents
      frontMatter.push('sidebarDepth: 2');
  }
  return `${frontMatter.length && !isSubComponent
      ? `
---
${frontMatter.join('\n')}
---
`
      : ''}
${isSubComponent || hasSubComponents ? '#' : ''}### ${deprecated ? `~~${displayName}~~` : displayName}

${deprecated ? `> **Deprecated** ${deprecated[0].description}\n` : ''}
${description ? '> ' + description : ''}

${functional ? renderedUsage.functionalTag : ''}
${author ? author.map(a => `Author: ${a.description}\n`) : ''}
${since ? `Since: ${since[0].description}\n` : ''}
${version ? `Version: ${version[0].description}\n` : ''}
${see ? see.map(s => `[See](${s.description})\n`) : ''}
${link ? link.map(l => `[See](${l.description})\n`) : ''}

${renderedUsage.props}
${renderedUsage.methods}
${renderedUsage.events}
${renderedUsage.slots}
${docsBlocks ? '---\n' + docsBlocks.join('\n---\n') : ''}

${requiresMd.length
      ? '---\n' + requiresMd.map(component => component.content).join('\n---\n')
      : ''}
`;
};