import { mount } from '@vue/test-utils'
import Component from "../SidebarToggler";

const ComponentName = 'SidebarToggler'
const wrapper = mount(Component)
// /* eslint-disable no-console */
// console.log("something")

describe(`${ComponentName} .vue`, () => {
  it('has a name', () => {
    expect(Component.name).toMatch(ComponentName)
  })
  // Inspect the raw component options
  it("should have default props", () => {
    const wrapper = mount(Component, {
      propsData: {
        defaultOpen: true,
        display: 'lg',
        mobile: false
      }
    })
    expect(wrapper.props().defaultOpen).toBe(true)
    expect(wrapper.props().display).toEqual('lg')
    expect(wrapper.props().mobile).toBe(false)
  });
  it('has toggle method', () => {
    expect(typeof Component.methods.toggle).toBe('function')
  })
  it('has sidebarToggle method', () => {
    expect(typeof Component.methods.sidebarToggle).toBe('function')
  })
  it('renders correctly', () => {
    expect(wrapper.element).toMatchSnapshot()
    expect(wrapper.is('button')).toBe(true)
    expect(wrapper.classes()).toContain('navbar-toggler')
  })
});
