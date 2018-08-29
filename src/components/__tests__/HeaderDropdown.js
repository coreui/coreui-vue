import { mount } from 'vue-test-utils'
import HeaderDropdown from '../Header/HeaderDropdown';

describe("HeaderDropdown.vue", () => {
  // Inspect the raw component options
  it("should have default props", () => {
    const wrapper = mount(HeaderDropdown, {
      propsData: {
        right: false,
        noCaret: false
      }
    })
    expect(wrapper.props().right).toBe(false)
    expect(wrapper.props().noCaret).toBe(false)
  });
  it('renders correctly', () => {
    const wrapper = mount(HeaderDropdown)
    expect(wrapper.element).toMatchSnapshot()
    expect(wrapper.find('span').text()).toBe('dropdown')
    expect(wrapper.find('span').classes()).toContain('text-center')
  })
});
