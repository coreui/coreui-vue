import { mount } from '@vue/test-utils'
import SidebarNavItem from "../Sidebar/SidebarNavItem";

describe("SidebarNavItem.vue", () => {
  // Inspect the raw component options
  it('has computed properties', () => {
    expect(typeof SidebarNavItem.computed.classList).toBe('function')
    expect(typeof SidebarNavItem.computed.itemClasses).toBe('function')
  })
  it('renders correctly', () => {
    const wrapper = mount(SidebarNavItem, { slots: { default: 'test'}})
    expect(wrapper.element).toMatchSnapshot()
    expect(wrapper.classes()).toContain('nav-item')
  })
});
