import { mount } from '@vue/test-utils'
import Component from '../CCol'

const ComponentName = 'CCol'
const defaultWrapper = mount(Component)
const customWrapper = mount(Component, {
  propsData: {
    sm: { size: 8 },
    md: { offset: 2 }
  },
  slots: {
    default: 'CCol content'
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
