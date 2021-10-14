import { mount } from '@vue/test-utils'
import { CNavItem as Component } from '../../../index'

const ComponentName = 'CNavItem'

const defaultWrapper = mount(Component, {
  propsData: {},
  slots: {
    default: 'Default slot',
  },
})

const customWrapper = mount(Component, {
  propsData: {
    href: '/bazinga',
    active: true,
    component: 'div',
    disabled: true,
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
    expect(defaultWrapper.classes('nav-item')).toBe(true)
  })
})

describe(`Customize ${ComponentName} component`, () => {
  it('renders correctly', () => {
    expect(customWrapper.html()).toMatchSnapshot()
  })
  it('contain slots and classes', () => {
    expect(customWrapper.find('div').text()).toContain('Default slot')
    expect(customWrapper.classes('nav-item')).toBe(true)
    expect(customWrapper.find('div').classes('nav-link')).toBe(true)
    expect(customWrapper.find('div').classes('active')).toBe(true)
    expect(customWrapper.find('div').classes('disabled')).toBe(true)
    expect(customWrapper.find('div').attributes('href')).toBe('/bazinga')
    expect(customWrapper.find('div').attributes('aria-current')).toBe('page')
  })
})
