import { mount } from "@vue/test-utils";
import SidebarToggler from "../Sidebar/SidebarToggler";

describe("SidebarToggler.vue", () => {
  // Inspect the raw component options
  it("should have default props", () => {
    const wrapper = mount(SidebarToggler, {
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
    expect(typeof SidebarToggler.methods.toggle).toBe('function')
  })
  it('has sidebarToggle method', () => {
    expect(typeof SidebarToggler.methods.sidebarToggle).toBe('function')
  })
  it('renders correctly', () => {
    const wrapper = mount(SidebarToggler)
    expect(wrapper.element).toMatchSnapshot()
    expect(wrapper.is('button')).toBe(true)
    expect(wrapper.classes()).toContain('navbar-toggler')
  })
});
