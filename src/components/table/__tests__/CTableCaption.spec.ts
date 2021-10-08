import { mount } from '@vue/test-utils'
import { CTableCaption as Component } from '../../../index'

const ComponentName = 'CTableCaption'

const defaultWrapper = mount(Component, {
  slots: {
    default: 'Default slot',
  },
})

describe(`Loads and display ${ComponentName} component`, () => {
  it('has a name', () => {
    expect(Component.name).toMatch(ComponentName)
  })
  it('renders correctly', () => {
    expect(defaultWrapper.html()).toMatchSnapshot()
  })
  it('contain slots and classes', () => {
    expect(defaultWrapper.text()).toContain('Default slot')
  })
})
