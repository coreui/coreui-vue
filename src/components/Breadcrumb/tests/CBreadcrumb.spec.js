import { mount } from '@vue/test-utils'
import Component from "../CBreadcrumb";

const ComponentName = 'CBreadcrumb'
const wrapper = mount(Component, {
  propsData: {
    list:[{name: "Home", something:"something"}]
  }
})
// /* eslint-disable no-console */
// console.log(wrapper.vm.routeRecords[0].name)

describe(`${ComponentName} .vue`, () => {
  it('has a name', () => {
    expect(Component.name).toMatch(ComponentName)
  })
  it('renders correctly', () => {
    expect(wrapper.element).toMatchSnapshot()
  })
  it('has list default as function', () => {
    expect(typeof Component.props.list).toBe('object')
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
  it('has correct name in routeRecords computed property', () => {
    expect(wrapper.vm.routeRecords[0].name).toBe('Home')
  })
});
