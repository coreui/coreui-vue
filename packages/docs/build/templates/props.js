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
    return tag !== 'since' ? values.map(v => `<br/>\`@${tag}\` ${isTag(v) ? v.content : v.description}`).join(''): '';
  })
  .join('');
};
const tmpl = (props) => {
  let ret = '';
  const replaceToString = /Color|TextColor|Shape/i;
  props.forEach(prop => {
    const name = prop.name
    let t = prop.description ?? ''
    t += renderTags(prop.tags)
    const n = prop.type?.name ?? ''
    const v = prop.values?.map(pv => `\`${pv}\``).join(', ') ?? '-'
    const d = prop.defaultValue?.value ?? '-'
    const since = prop.tags && prop.tags.since ? `<br><div class="badge bg-primary">${prop.tags.since[0].description}+</div>` : ''

    if (prop.description && !prop.description.includes('@ignore')) {
      ret += `| **${mdclean(name.match(/[A-Z]{2,}(?=[A-Z][a-z]+[0-9]*|\b)|[A-Z]?[a-z]+[0-9]*|[A-Z]|[0-9]+/g)
      .map(x => x.toLowerCase())
      .join('-'))}** ${mdclean(since)} | ${mdclean(t)} | ${mdclean(n.replace(replaceToString, 'string'))} | ${mdclean(v)} | ${mdclean(d.replace('undefined', '-'))} |\n`;
    }
  });
  return ret;
};
module.exports = (props, opt = {}) => {
    return `
${opt.isSubComponent || opt.hasSubComponents ? '#' : ''}#### Props
  | Prop name     | Description | Type      | Values      | Default     |
  | ------------- | ----------- | --------- | ----------- | ----------- |
  ${tmpl(props)}
  `;
};
