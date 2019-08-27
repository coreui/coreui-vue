import { mount } from "@vue/test-utils";
import Component from '../CSwitch'

const ComponentName = 'CSwitch'
const defaultWrapper = mount(Component)
const customWrapper = mount(Component, {
  propsData: {
    variant: 'info',
    outline: 'alt',
    size: 'lg',
    shape:'3d',
    name:'myName',
    id:'myId',
    checked: true,
    value: 'checked',
    disabled: true,
    required: true,
    trueValue: 'yes',
    falseValue: 'no',
    type: 'radio',
    dataOn: 'dataOn',
    dataOff: 'dataOff'
  }
})

describe(ComponentName, () => {
  it('has a name', () => {
    expect(Component.name).toMatch(ComponentName)
  })
  it('renders correctly', () => {
    expect(defaultWrapper.element).toMatchSnapshot()
  })
  it('renders correctly', () => {
    expect(customWrapper.element).toMatchSnapshot()
  })
  // Inspect the raw component options
  // it("correctly sets default props and data when created", () => {
  //   expect(defaultWrapper.props().variant).toBe('secondary')
  //   expect(defaultWrapper.props().size).toEqual(null)
  //   expect(defaultWrapper.props().checked).toBe(false)
  //   expect(defaultWrapper.props().defaultChecked).toBe(false)
  //   expect(defaultWrapper.props().value).toBe(true)
  //   expect(defaultWrapper.props().disabled).toBe(false)
  //   expect(defaultWrapper.props().required).toBe(false)
  //   expect(defaultWrapper.props().dataOn).toBe('On')
  //   expect(defaultWrapper.props().dataOff).toBe('Off')
  // });
  // it('has computed properties and methods', () => {
  //   expect(typeof Component.computed.classList).toBe('function')
  //   expect(typeof Component.computed.isChecked).toBe('function')
  // })
  // it('computed properties return correct data', () => {
  //   expect.arrayContaining(defaultWrapper.vm.classList)
  //   expect(defaultWrapper.vm.isChecked).toBe(false)
  // })
  // it('has a handleChange method', () => {
  //   expect(typeof Component.methods.handleChange).toBe('function')
  // })
  // it('has a toggle method', () => {
  //   expect(typeof Component.methods.toggle).toBe('function')
  // })
  // it('matches default props snapshot and render correctly', () => {
  //   expect(defaultWrapper.element).toMatchSnapshot()
  //   expect(defaultWrapper.is('label')).toBe(true)
  //   expect(defaultWrapper.classes()).toContain('switch')
  //   expect(defaultWrapper.find('input').classes()).toContain('switch-input')
  //   expect(defaultWrapper.find('span').classes()).toContain('switch-slider')
  // })
  //
  // it('correctly sets custom props and data when created', () => {
  //   expect(customWrapper.props().variant).toBe('info')
  //   expect(customWrapper.props().size).toEqual('lg')
  //   expect(customWrapper.props().checked).toBe(true)
  //   expect(customWrapper.props().defaultChecked).toBe(true)
  //   expect(customWrapper.props().value).toBe(false)
  //   expect(customWrapper.props().disabled).toBe(true)
  //   expect(customWrapper.props().required).toBe(true)
  //   expect(customWrapper.props().dataOn).toBe('dataOn')
  //   expect(customWrapper.props().dataOff).toBe('dataOff')
  // })
  // it('matches custom props snapshot', () => {
  //   expect(customWrapper.element).toMatchSnapshot()
  // })
})
