import { mount } from '@vue/test-utils'
import Component from "../SidebarNavItem";

const ComponentName = 'SidebarNavItem'
const wrapper = mount(Component, { slots: { default: 'test'}})
// /* eslint-disable no-console */
// console.log("something")

describe(`${ComponentName} .vue`, () => {
  it('has a name', () => {
    expect(Component.name).toMatch(ComponentName)
  })
  // Inspect the raw component options
  it('has computed properties', () => {
    expect(typeof Component.computed.classList).toBe('function')
    expect(typeof Component.computed.itemClasses).toBe('function')
  })
  it('renders correctly', () => {
    expect(wrapper.element).toMatchSnapshot()
    expect(wrapper.classes()).toContain('nav-item')
  })
});
