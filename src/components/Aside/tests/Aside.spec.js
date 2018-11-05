import { mount } from '@vue/test-utils'
import Component from "../Aside";

const ComponentName = 'Aside'
const wrapper = mount(Component)

describe(`${ComponentName} .vue`, () => {
  it('has a name', () => {
    expect(Component.name).toMatch(ComponentName)
  })
  // Inspect the raw component options
  it('has isFixed method', () => {
    expect(typeof Component.methods.isFixed).toBe('function')
  })
  it('has isOffCanvas method', () => {
    expect(typeof Component.methods.isOffCanvas).toBe('function')
  })
  it('renders correctly', () => {
    expect(wrapper.element).toMatchSnapshot()
    expect(wrapper.is('aside')).toBe(true)
    expect(wrapper.classes()).toContain('aside-menu')
    expect(wrapper.element.textContent).toEqual('Aside')
  })
});
