import { mount } from '@vue/test-utils'
import Component from '../CNavbarToggler'

const ComponentName = 'CNavbarToggler'
const defaultWrapper = mount(Component)
const customWrapper = mount(Component, {
  props: {
    tag: 'div'
  },
  attrs: {
    type: 'submit'
  },
  slots: {
    default: 'CNavbar items'
  }
})

describe(ComponentName, () => {
  it('has a name', () => {
    expect(Component.name).toBe(ComponentName)
  })
  it('renders correctly', () => {
    expect(defaultWrapper.element).toMatchSnapshot()
  })
  it('renders correctly', () => {
    expect(customWrapper.element).toMatchSnapshot()
  })
})
