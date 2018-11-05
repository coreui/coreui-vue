import { mount } from "@vue/test-utils";
import Component from "../CAsideToggler";

const ComponentName = 'CAsideToggler'
const wrapper = mount(Component)

describe(`${ComponentName} .vue`, () => {
  it('has a name', () => {
    expect(Component.name).toMatch(ComponentName)
  })
  // Inspect the raw component options
  it('has toggle method', () => {
    expect(typeof Component.methods.toggle).toBe('function')
  })
  it('has asideToggle method', () => {
    expect(typeof Component.methods.asideToggle).toBe('function')
  })
  it('renders correctly', () => {
    expect(wrapper.element).toMatchSnapshot()
    expect(wrapper.is('button')).toBe(true)
    expect(wrapper.classes()).toContain('navbar-toggler')
  })
});
