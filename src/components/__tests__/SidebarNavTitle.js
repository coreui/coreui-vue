import { mount } from "@vue/test-utils";
import SidebarNavTitle from "../Sidebar/SidebarNavTitle";

describe("SidebarNavTitle.vue", () => {
  // Inspect the raw component options
  it("should have default props", () => {
    const wrapper = mount(SidebarNavTitle, {
      propsData: {
        name: 'test',
        classes: '',
        wrapper: {}
      }
    })
    expect(wrapper.props().name).toEqual('test')
    expect(wrapper.props().classes).toBe('')
    expect(typeof wrapper.props().wrapper).toBe('object')
  });
  it('has classList computed property', () => {
    expect(typeof SidebarNavTitle.computed.classList).toBe('function')
  })
  it('has itemClasses computed property', () => {
    expect(typeof SidebarNavTitle.computed.itemClasses).toBe('function')
  })
  it('renders correctly', () => {
    const wrapper = mount(SidebarNavTitle)
    expect(wrapper.element).toMatchSnapshot()
    expect(wrapper.classes()).toContain('nav-title')
  })
});
