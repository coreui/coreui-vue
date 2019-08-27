import { mount } from '@vue/test-utils'
import Component from '../CFormInput'

const ComponentName = 'CFormInput'
const customWrapper = mount(Component, {
  propsData: {
    type: 'number',
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
    addWrapperClasses: 'additional-wrapper-class',
    custom: true,
    size: 'lg'
  }
})

describe(ComponentName, () => {
  it('has a name', () => {
    expect(Component.name).toMatch(ComponentName)
  })
  it('renders correctly', () => {
    expect(customWrapper.element).toMatchSnapshot()
  })
})
