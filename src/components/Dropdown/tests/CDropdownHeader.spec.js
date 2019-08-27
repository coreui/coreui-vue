import { mount } from '@vue/test-utils'
import Component from '../CDropdownHeader'

const ComponentName = 'CDropdownHeader'
const defaultWrapper = mount(Component)
const customWrapper = mount(Component, {
  propsData: {
    tag: 'h5'
  },
  slots: {
    default: 'CDropdownHeader content'
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
