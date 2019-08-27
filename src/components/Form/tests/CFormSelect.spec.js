import { mount } from '@vue/test-utils'
import Component from '../CFormSelect'

const ComponentName = 'CFormSelect'
const customWrapper = mount(Component, {
  propsData: {
    label: 'label',
    id: 'some_id',
    options: ['Option 1', 'Option 2', 'Option 3'],
    placeholder: 'placeholder',
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
    inline: true,
    size: 'lg',
    appendHtml: 'appended',
    prependHtml: 'prepended'
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
