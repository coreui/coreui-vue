import { mount } from '@vue/test-utils'
import Component from '../CInputFile'

const ComponentName = 'CInputFile'
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
  it('renders correctly basic functionality', () => {
    expect(wrapper.element).toMatchSnapshot()
  })
  it('renders correctly', () => {
    expect(customWrapper.element).toMatchSnapshot()
  })
  it('emmits event after file load', () => {
    customWrapper.find('input').trigger('change')
    expect(customWrapper.emitted().change).toBeTruthy()
  })
})
