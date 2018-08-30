import { mount } from "@vue/test-utils";
import Footer from "../Footer/Footer";

describe("Footer.vue", () => {
  // Inspect the raw component options
  it('has isFixed method', () => {
    expect(typeof Footer.methods.isFixed).toBe('function')
  })
  it('renders correctly', () => {
    const wrapper = mount(Footer)
    expect(wrapper.element).toMatchSnapshot()
    expect(wrapper.element.textContent).toEqual('Footer')
    expect(wrapper.classes()).toContain('app-footer')
  })
});
