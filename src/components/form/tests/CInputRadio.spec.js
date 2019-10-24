import { mount } from '@vue/test-utils'
import Component from '../CInputRadio'

const ComponentName = 'CInputRadio'
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

describe(ComponentName, () => {
  it('has a name', () => {
    expect(Component.name).toMatch(ComponentName)
  })
  it('renders correctly', () => {
    expect(customWrapper.element).toMatchSnapshot()
  })
  it('renders correctly', () => {
    customWrapper.find('input').setChecked(true)
    expect(customWrapper.emitted()['update:checked']).toBeTruthy()
  })
})
