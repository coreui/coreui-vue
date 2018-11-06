import Component from "../CSimplePointedChart";
const ComponentName = 'CSimplePointedChart'

describe(ComponentName, () => {
  it('has a name', () => {
    expect(Component.name).toMatch(ComponentName)
  })
  it('has default props functions', () => {
    expect(typeof Component.computed.finalOptions).toBe('function')
    expect(typeof Component.props.data.default).toBe('function')
  })
  it('functions are returning valid default data', () => {
    expect(typeof Component.computed.finalOptions()).toBe('object')
    expect(typeof Component.props.data.default()).not.toBe('undefined')
  })
})
