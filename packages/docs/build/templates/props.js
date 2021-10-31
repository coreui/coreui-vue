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
const tmpl = (props) => {
  let ret = '';
  const replaceToString = /Color|TextColor|Shape/i;
  props.forEach(pr => {
    const p = pr.name
    let t = pr.description ?? ''
    t += renderTags(pr.tags)
    const n = pr.type?.name ?? ''
    const v = pr.values?.map(pv => `\`${pv}\``).join(', ') ?? '-'
    const d = pr.defaultValue?.value ?? ''
    if (pr.description && !pr.description.includes('@ignore')) {
      ret += `| **${mdclean(p.match(/[A-Z]{2,}(?=[A-Z][a-z]+[0-9]*|\b)|[A-Z]?[a-z]+[0-9]*|[A-Z]|[0-9]+/g)
      .map(x => x.toLowerCase())
      .join('-'))}** | ${mdclean(t)} | ${mdclean(n.replace(replaceToString, 'string'))} | ${mdclean(v)} | ${mdclean(d.replace('undefined', '-'))} |\n`;
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
