import { mount } from "@vue/test-utils";
import Switch from "../Switch/Switch";

describe("Switch.vue", () => {
  // Inspect the raw component options
  it("should have default props", () => {
    const wrapper = mount(Switch, {
      propsData: {
        color: 'info',
        size: 'lg',
        checked: false,
        defaultChecked: false,
        value: true,
        disabled: false,
        required: false,
        uncheckedValue: false,
        dataOn: 'On',
        dataOff: 'Off',
      }
    })
    expect(wrapper.props().color).toBe('info')
    expect(wrapper.props().size).toEqual('lg')
    expect(wrapper.props().checked).toBe(false)
    expect(wrapper.props().defaultChecked).toBe(false)
    expect(wrapper.props().value).toBe(true)
    expect(wrapper.props().disabled).toBe(false)
    expect(wrapper.props().required).toBe(false)
    expect(wrapper.props().dataOn).toBe('On')
    expect(wrapper.props().dataOff).toBe('Off')
  });
  it('has computed properties', () => {
    expect(typeof Switch.computed.classList).toBe('function')
    expect(typeof Switch.computed.isChecked).toBe('function')
  })
  it('has a handleChange method', () => {
    expect(typeof Switch.methods.handleChange).toBe('function')
  })
  it('has a toggle method', () => {
    expect(typeof Switch.methods.toggle).toBe('function')
  })
  it('renders correctly', () => {
    const wrapper = mount(Switch)
    expect(wrapper.element).toMatchSnapshot()
    expect(wrapper.is('label')).toBe(true)
    expect(wrapper.classes()).toContain('switch')
    expect(wrapper.find('input').classes()).toContain('switch-input')
    expect(wrapper.find('span').classes()).toContain('switch-slider')
  })
});
