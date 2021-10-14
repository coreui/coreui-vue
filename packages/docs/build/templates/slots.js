'use strict'

function mdclean(input) {
	return input.replace(/\r?\n/g, '<br>').replace(/\|/g, '\\|')
}

const formatBindings = bindings => {
    if (!bindings) {
        return '';
    }
    return bindings
        .map(binding => {
        const { name, description, type } = binding;
        if (!type) {
            return '';
        }
        return `**${name}** \`${type.name === 'union' && type.elements
            ? type.elements.map(({ name: insideName }) => insideName).join(', ')
            : type.name}\` - ${description}`;
    })
        .join('\n');
};

module.exports = (slots, opt = {}) => {
    return `
${opt.isSubComponent || opt.hasSubComponents ? '#' : ''}#### Slots

  | Name          | Description  | Bindings |
  | ------------- | ------------ | -------- |
  ${slots
        .map(slot => {
        const { description, bindings, name } = slot;
        const readableBindings = bindings ? `${formatBindings(bindings)}` : '';
        return `| ${mdclean(name)} | ${mdclean(description || '')} | ${mdclean(readableBindings)} |`; // replace returns by <br> to allow them in a table cell
    })
        .join('\n')}
`;
};