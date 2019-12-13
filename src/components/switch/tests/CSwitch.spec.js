import { mount } from "@vue/test-utils";
import Component from '../CSwitch'

const ComponentName = 'CSwitch'
const radioWrapper = mount(Component, {
  propsData: {
    type: 'radio'
  }
})

const customWrapper = mount(Component, {
  propsData: {
    color: 'info',
    variant: 'opposite',
    size: 'lg',
    shape: 'pill',
    name:'myName',
    id:'myId',
    checked: true,
    value: 'checked',
    required: true,
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
  it('emits events correctly when checked', () => {
    const updateEvents = () => customWrapper.emitted()['update:checked']
    const lastEmittedUpdateValue = () => updateEvents().slice(-1)[0][0]

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
