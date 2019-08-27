import { mount } from '@vue/test-utils'
import Component from '../CForm'

const ComponentName = 'CForm'
const defaultWrapper = mount(Component)
const customWrapper = mount(Component, {
  propsData: {
    inline: true,
    wasValidated: true
  },
  slots: {
    default: 'CForm content'
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
