import { mount } from '@vue/test-utils'
import Component from '../CFormCheckbox'

const ComponentName = 'CFormCheckbox'
const wrapper = mount(Component, {
  propsData: {
    label: 'label',
    id: 'some_id',
  }
})
const customWrapper = mount(Component, {
  propsData: {
    label: 'label',
    id: 'some_id',
    wasValidated: true,
    checked: 'yes',
    trueValue: 'yes',
    falseValue: 'no',
    value: 'value',
    validFeedback: 'input is valid',
    invalidFeedback: 'input is invalid',
    tooltipFeedback: true,
    description: 'permission',
    isValid: true,
    addInputClasses: 'additional-input-class',
    addLabelClasses: 'additional-label-class',
    custom: true,
    inline: true
  }
})

describe(ComponentName, () => {
  it('has a name', () => {
    expect(Component.name).toMatch(ComponentName)
  })
  it('renders correctly basic checkbox', () => {
    expect(wrapper.element).toMatchSnapshot()
  })
  it('renders correctly', () => {
    expect(customWrapper.element).toMatchSnapshot()
  })
  it('changes state correctly', () => {
    customWrapper.setProps({ checked: 'no' })
    expect(customWrapper.vm.state).toBe(false)
  })
  it('emmits correct values on check', () => {
    wrapper.find('input').setChecked()
    wrapper.find('input').setChecked(false)
    const emittedValues = wrapper.emitted()['update:checked'].map(event => {
      return event[0]
    })
    expect(emittedValues).toEqual([true, false])
  })
  it('emmits correct values on check when trueValue and falseValue are set', () => {
    customWrapper.find('input').setChecked()
    customWrapper.find('input').setChecked(false)
    const emittedValues = customWrapper.emitted()['update:checked'].map(event => {
      return event[0]
    })
    expect(emittedValues).toEqual(['yes', 'no'])
  })
})
