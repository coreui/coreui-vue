import { mount } from '@vue/test-utils'
import SidebarFooter from "../Sidebar/SidebarFooter";

describe("SidebarFooter.vue", () => {
  // Inspect the raw component options
  it('has hasSlotDefault computed property', () => {
    expect(typeof SidebarFooter.computed.hasSlotDefault).toBe('function')
  })
  it('renders correctly', () => {
    const wrapper = mount(SidebarFooter, { slots: { default: 'test'}})
    expect(wrapper.element).toMatchSnapshot()
    expect(wrapper.classes()).toContain('sidebar-footer')
  })
});
