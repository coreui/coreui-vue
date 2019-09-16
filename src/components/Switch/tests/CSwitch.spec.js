import { mount } from "@vue/test-utils";
import Component from '../CSwitch'

const ComponentName = 'CSwitch'
const radioWrapper = mount(Component, {
  propsData: {
    type: 'radio'
  }
})

const wrapper = mount(Component, {
  propsData: {
    id:'myId',
    checked: false,
  }
})

const customWrapper = mount(Component, {
  propsData: {
    variant: 'info',
    outline: 'alt',
    size: 'lg',
    shape:'3d',
    name:'myName',
    id:'myId',
    checked: 'yes',
    value: 'checked',
    required: true,
    trueValue: 'yes',
    falseValue: 'no',
    dataOn: 'dataOn',
    dataOff: 'dataOff'
  }
})

describe(ComponentName, () => {
  it('has a name', () => {
    expect(Component.name).toMatch(ComponentName)
  })
  it('renders correctly', () => {
    expect(radioWrapper.element).toMatchSnapshot()
  })
  it('renders correctly', () => {
    expect(customWrapper.element).toMatchSnapshot()
  })
  it('correctly changes state when checked prop changes', () => {
    customWrapper.setProps({ checked: 'no' })
    expect(customWrapper.vm.isChecked).toBe(false)

    customWrapper.setProps({ checked: 'yes' })
    expect(customWrapper.vm.isChecked).toBe(true)
  })
  it('emits events correctly when checked', () => {
    const updateEvents = () => customWrapper.emitted()['update:checked']
    const lastEmittedUpdateValue = () => updateEvents().slice(-1)[0][0]

    customWrapper.find('input').setChecked(false)
    expect(lastEmittedUpdateValue()).toBe('no')

    customWrapper.find('input').setChecked(true)
    expect(lastEmittedUpdateValue()).toBe('yes')

    customWrapper.setProps({ trueValue: undefined, falseValue: undefined})

    customWrapper.find('input').setChecked(false)
    expect(lastEmittedUpdateValue()).toBe(false)

    customWrapper.find('input').setChecked(true)
    expect(lastEmittedUpdateValue()).toBe(true)

  })
  it('emits event correctly when checked on type radio', () => {
    radioWrapper.find('input').setChecked(true)
    expect(radioWrapper.emitted()['update:checked']).toBeTruthy()
  })
})
