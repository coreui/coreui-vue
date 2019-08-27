import { mount } from '@vue/test-utils'
import Component from '../CDropdownDivider'

const ComponentName = 'CDropdownDivider'
const defaultWrapper = mount(Component)
const customWrapper = mount(Component, {
  propsData: {
    tag: 'hr'
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
