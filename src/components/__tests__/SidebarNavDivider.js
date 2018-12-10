import { mount } from '@vue/test-utils'
import SidebarNavDivider from "../Sidebar/SidebarNavDivider";

describe("SidebarNavDivider.vue", () => {
  // Inspect the raw component options
  it('has hasSlotDefault computed property', () => {
    expect(typeof SidebarNavDivider.computed.classList).toBe('function')
    expect(typeof SidebarNavDivider.computed.itemClasses).toBe('function')
  })
  it('renders correctly', () => {
    const wrapper = mount(SidebarNavDivider)
    expect(wrapper.element).toMatchSnapshot()
    expect(wrapper.classes()).toContain('nav-divider')
  })
});
