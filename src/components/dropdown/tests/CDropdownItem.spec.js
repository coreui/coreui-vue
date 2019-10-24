import { mount } from '@vue/test-utils'
import Component from '../CDropdownItem'

const ComponentName = 'CDropdownItem'
const defaultWrapper = mount(Component)
const customWrapper = mount(Component, {
  propsData: {
    to: '/link/some-router-link'
  },
  slots: {
    default: 'CDropdownItem content'
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
