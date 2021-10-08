import { mount } from '@vue/test-utils'
import { CSidebar as Component } from '../../../index'

const ComponentName = 'CSidebar'

const defaultWrapper = mount(Component, {
  propsData: {},
  slots: {
    default: 'Default slot',
  },
})

const customWrapper = mount(Component, {
  propsData: {
    narrow: true,
    overlaid: true,
    position: 'fixed',
    size: 'xl',
    unfoldable: true,
    visible: true,
  },
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
    expect(defaultWrapper.find('.sidebar').classes('sidebar')).toBe(true)
    expect(defaultWrapper.find('.sidebar').classes('hide')).toBe(true)
  })
})

describe(`Customize ${ComponentName} component`, () => {
  it('renders correctly', () => {
    expect(customWrapper.html()).toMatchSnapshot()
  })
  it('contain slots and classes', () => {
    expect(customWrapper.text()).toContain('Default slot')
    expect(customWrapper.find('.sidebar').classes('sidebar')).toBe(true)
    expect(customWrapper.find('.sidebar').classes('sidebar-narrow')).toBe(true)
    expect(customWrapper.find('.sidebar').classes('sidebar-overlaid')).toBe(true)
    expect(customWrapper.find('.sidebar').classes('sidebar-fixed')).toBe(true)
    expect(customWrapper.find('.sidebar').classes('sidebar-xl')).toBe(true)
    expect(customWrapper.find('.sidebar').classes('sidebar-narrow-unfoldable')).toBe(true)
  })
})
