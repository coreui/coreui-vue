import { mount } from '@vue/test-utils'
import { CNav as Component } from '../../../index'

const ComponentName = 'CNav'

const defaultWrapper = mount(Component, {
  propsData: {},
  slots: {
    default: 'Default slot',
  },
})

const customWrapper = mount(Component, {
  propsData: {
    as: 'div',
    layout: 'fill',
    variant: 'pills',
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
    expect(defaultWrapper.classes('nav')).toBe(true)
    expect(defaultWrapper.attributes('role')).toBe('navigation')
  })
})

describe(`Customize ${ComponentName} component`, () => {
  it('renders correctly', () => {
    expect(customWrapper.html()).toMatchSnapshot()
  })
  it('contain slots and classes', () => {
    expect(customWrapper.text()).toContain('Default slot')
    expect(customWrapper.classes('nav')).toBe(true)
    expect(customWrapper.classes('nav-fill')).toBe(true)
    expect(customWrapper.classes('nav-pills')).toBe(true)
    expect(customWrapper.attributes('role')).toBe('navigation')
  })
})
