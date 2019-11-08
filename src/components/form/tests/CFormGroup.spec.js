import { mount } from '@vue/test-utils'
import Component from '../CFormGroup'

const ComponentName = 'CFormGroup'
const customWrapper = mount(Component, {
  propsData: {
    wrapperClasses: 'additional-wrapper-class',
    append: 'appended',
    prepend: 'prepended',
    validFeedback: 'input is valid',
    invalidFeedback: 'input is invalid',
    tooltipFeedback: true,
    description: 'permission',
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
