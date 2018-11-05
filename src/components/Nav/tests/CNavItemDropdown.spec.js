import { mount } from '@vue/test-utils'
import Component from "../CNavItemDropdown";

const ComponentName = 'CNavItemDropdown'
const defaultWrapper = mount(Component)
const customWrapper = mount(Component, {
  propsData: {
    noCaret: true,
    extraToggleClasses: 'extra',
    extraMenuClasses: 'extra',
    text: 'test',
    show: true,
    dropup: true,
    disabled: true,
    right: true
  }
})

describe(ComponentName, () => {
  it('has a name', () => {
    expect(Component.name).toMatch(ComponentName)
  })
  it('is vue instance', () => {
    expect(defaultWrapper.isVueInstance()).toBe(true)
  })
  it("correctly sets default props and data when created", () => {
    expect(defaultWrapper.vm.visible).toBe(false)

    expect(defaultWrapper.props().noCaret).toBe(false)
    expect(defaultWrapper.props().extraToggleClasses).toEqual('')
    expect(defaultWrapper.props().extraMenuClasses).toBe('')
    expect(defaultWrapper.props().text).toBe('Dropdown')
    expect(defaultWrapper.props().show).toBe(false)
    expect(defaultWrapper.props().dropup).toBe(false)
    expect(defaultWrapper.props().disabled).toBe(false)
    expect(defaultWrapper.props().right).toBe(false)
  });
  it('has required methods and computed properties', () => {
    expect(typeof Component.methods.toggle).toBe('function')
    expect(typeof Component.computed.dropdownClasses).toBe('function')
    expect(typeof Component.computed.toggleClasses).toBe('function')
    expect(typeof Component.computed.menuClasses).toBe('function')
  })
  it("correctly sets custom props and data when created", () => {
    expect(customWrapper.vm.visible).toBe(true)

    expect(customWrapper.props().noCaret).toBe(true)
    expect(customWrapper.props().extraToggleClasses).toEqual('extra')
    expect(customWrapper.props().extraMenuClasses).toBe('extra')
    expect(customWrapper.props().text).toBe('test')
    expect(customWrapper.props().show).toBe(true)
    expect(customWrapper.props().dropup).toBe(true)
    expect(customWrapper.props().disabled).toBe(true)
    expect(customWrapper.props().right).toBe(true)
  })
})
