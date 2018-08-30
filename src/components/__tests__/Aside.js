import { mount } from '@vue/test-utils'
import Aside from "../Aside/Aside";

describe("Aside.vue", () => {
  // Inspect the raw component options
  it('has isFixed method', () => {
    expect(typeof Aside.methods.isFixed).toBe('function')
  })
  it('has isOffCanvas method', () => {
    expect(typeof Aside.methods.isOffCanvas).toBe('function')
  })
  it('renders correctly', () => {
    const wrapper = mount(Aside)
    expect(wrapper.element).toMatchSnapshot()
    expect(wrapper.is('aside')).toBe(true)
    expect(wrapper.classes()).toContain('aside-menu')
    expect(wrapper.element.textContent).toEqual('Aside')
  })
});
