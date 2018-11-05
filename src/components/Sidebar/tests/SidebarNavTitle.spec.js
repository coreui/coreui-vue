import { mount } from '@vue/test-utils'
import Component from "../SidebarNavTitle";

const ComponentName = 'SidebarNavTitle'
const wrapper = mount(Component)
// /* eslint-disable no-console */
// console.log("something")

describe(`${ComponentName} .vue`, () => {
  it('has a name', () => {
    expect(Component.name).toMatch(ComponentName)
  })
  // Inspect the raw component options
  it("should have default props", () => {
    const wrapper2 = mount(Component, {
      propsData: {
        name: 'test',
        classes: '',
        wrapper: {}
      }
    })
    expect(wrapper2.props().name).toEqual('test')
    expect(wrapper2.props().classes).toBe('')
    expect(typeof wrapper2.props().wrapper).toBe('object')
  });
  it('has classList computed property', () => {
    expect(typeof Component.computed.classList).toBe('function')
  })
  it('has itemClasses computed property', () => {
    expect(typeof Component.computed.itemClasses).toBe('function')
  })
  it('renders correctly', () => {
    expect(wrapper.element).toMatchSnapshot()
    expect(wrapper.classes()).toContain('nav-title')
  })
});
