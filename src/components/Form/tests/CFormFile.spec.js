import { mount } from '@vue/test-utils'
import Component from '../CFormFile'

const ComponentName = 'CFormFile'
const customWrapper = mount(Component, {
  propsData: {
    label: 'label',
    id: 'some_id',
    wasValidated: true,
    horizontal: true,
    checked: true,
    validFeedback: 'input is valid',
    invalidFeedback: 'input is invalid',
    tooltipFeedback: true,
    description: 'permission',
    isValid: true,
    addInputClasses: 'additional-input-class',
    addLabelClasses: 'additional-label-class',
    addWrapperClasses: 'additional-wrapper-class',
    custom: true,
    multiple: true
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
