import { mount } from "@vue/test-utils";
import AsideToggler from "../Aside/AsideToggler";

describe("AsideToggler.vue", () => {
  // Inspect the raw component options
  it('has toggle method', () => {
    expect(typeof AsideToggler.methods.toggle).toBe('function')
  })
  it('has asideToggle method', () => {
    expect(typeof AsideToggler.methods.asideToggle).toBe('function')
  })
  it('renders correctly', () => {
    const wrapper = mount(AsideToggler)
    expect(wrapper.element).toMatchSnapshot()
    expect(wrapper.is('button')).toBe(true)
    expect(wrapper.classes()).toContain('navbar-toggler')
  })
});
