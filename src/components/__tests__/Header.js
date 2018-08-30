import { mount } from "@vue/test-utils";
import Header from "../Header/Header";

describe("Header.vue", () => {
  // Inspect the raw component options
  it('has isFixed method', () => {
    expect(typeof Header.methods.isFixed).toBe('function')
  })
  it('renders correctly', () => {
    const wrapper = mount(Header)
    expect(wrapper.element).toMatchSnapshot()
    expect(wrapper.element.textContent).toEqual('Header')
    expect(wrapper.classes()).toContain('app-header')
    expect(wrapper.classes()).toContain('navbar')
  })
});
