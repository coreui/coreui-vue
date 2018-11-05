import { mount } from '@vue/test-utils'
import Component from "../Breadcrumb";

const ComponentName = 'Breadcrumb'
const wrapper = mount(Component, {
  propsData: {
    list:[{name: "Home", something:"something"}]
  }
})

describe(`${ComponentName} .vue`, () => {
  it('has a correct name', () => {
    expect(Component.name).toMatch(ComponentName)
  })
  it('renders correctly', () => {
    expect(wrapper.element).toMatchSnapshot()
  })
  it('has getName method', () => {
    expect(typeof Component.methods.getName).toBe('function')
  })
  it('has isLast method', () => {
    expect(typeof Component.methods.isLast).toBe('function')
  })
  it('has routeRecords computed property', () => {
    expect(typeof Component.computed.routeRecords).toBe('function')
  })
});
