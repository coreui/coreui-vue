import { mount } from '@vue/test-utils'
import SidebarHeader from "../Sidebar/SidebarHeader";

describe("SidebarHeader.vue", () => {
  // Inspect the raw component options
  it('has hasSlotDefault computed property', () => {
    expect(typeof SidebarHeader.computed.hasSlotDefault).toBe('function')
  })
  it('renders correctly', () => {
    const wrapper = mount(SidebarHeader, { slots: { default: 'test'}})
    expect(wrapper.element).toMatchSnapshot()
    expect(wrapper.classes()).toContain('sidebar-header')
  })
});
