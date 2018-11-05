import { mount } from '@vue/test-utils'
import Component from "../Sidebar";

const ComponentName = 'Sidebar'
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
        fixed: false,
      }
    })
    expect(wrapper.props().fixed).toBe(false)
  });
  it('has isFixed method', () => {
    expect(typeof Component.methods.isFixed).toBe('function')
  })
  it('renders correctly', () => {
    expect(wrapper.element).toMatchSnapshot()
    expect(wrapper.text()).toBe('Sidebar')
    expect(wrapper.classes()).toContain('sidebar')
  })
});
