import { mount } from '@vue/test-utils'
import Component from '../CInputCheckbox'

const ComponentName = 'CInputCheckbox'
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
    checked: true,
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
const autoIdWrapper = mount(Component)

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
  it('emmits correct values on check', () => {
    wrapper.find('input').setChecked()
    wrapper.find('input').setChecked(false)
    const emittedValues = wrapper.emitted()['update:checked'].map(event => {
      return event[0]
    })
    expect(emittedValues).toEqual([true, false])
  })
  it('generates safe id when no id is passed', () => {
    expect(autoIdWrapper.vm.safeId.includes('uid-')).toBe(true)
  })
})
