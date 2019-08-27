import { mount } from '@vue/test-utils'
import Component from '../CTab'

const ComponentName = 'CTab'
const defaultWrapper = mount(Component)
export const customWrapper = mount(Component, {
  propsData: {
    titleHtml: 'title', 
    active: true,
    disabled: true
  }
})

describe(ComponentName, () => {
  it('has a name', () => {
    expect(Component.name).toMatch(ComponentName)
  })
  it('renders correctly', () => {
    expect(defaultWrapper.element).toMatchSnapshot()
  })
  it('renders correctly', () => {
    expect(customWrapper.element).toMatchSnapshot()
  })
})
