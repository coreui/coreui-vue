import Component from "../CSimpleLineChart";

const ComponentName = 'CSimpleLineChart'

describe(ComponentName, () => {
  it('has a name', () => {
    expect(Component.name).toMatch(ComponentName)
  })
  it('has default props functions', () => {
    expect(typeof Component.props.finalOptions.default).toBe('function')
    expect(typeof Component.props.data.default).toBe('function')
  })
});
