import Component from "../CSimplePointedChart";
// import { shallowMount } from '@vue/test-utils'

const ComponentName = 'CSimplePointedChart'
describe(ComponentName, () => {
  it('has a name', () => {
    expect(Component.name).toMatch(ComponentName)
  })
  it('has default props functions', () => {
    // expect(typeof Component.computed.finalOptions).toBe('function')
    expect(typeof Component.props.data.default).toBe('function')
  })
});
