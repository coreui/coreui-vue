import { mount } from '@vue/test-utils'
import { CSidebarNav as Component } from '../../../index'

const ComponentName = 'CSidebarNav'

const defaultWrapper = mount(Component, {
  propsData: {},
  slots: {},
})

describe(`Loads and display ${ComponentName} component`, () => {
  it('has a name', () => {
    expect(Component.name).toMatch(ComponentName)
  })
  it('renders correctly', () => {
    expect(defaultWrapper.html()).toMatchSnapshot()
  })
  it('contain slots and classes', () => {
    expect(defaultWrapper.classes('sidebar-nav')).toBe(true)
  })
})
