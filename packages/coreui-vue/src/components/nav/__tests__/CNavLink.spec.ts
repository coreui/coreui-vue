import { mount } from '@vue/test-utils'
import { CNavLink as Component } from '../../../index'

const ComponentName = 'CNavLink'

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
    as: 'div',
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
    expect(defaultWrapper.classes('nav-link')).toBe(true)
  })
})

describe(`Customize ${ComponentName} component`, () => {
  it('renders correctly', () => {
    expect(customWrapper.html()).toMatchSnapshot()
  })
  it('contain slots and classes', () => {
    expect(customWrapper.text()).toContain('Default slot')
    expect(customWrapper.classes('nav-link')).toBe(true)
    expect(customWrapper.classes('active')).toBe(true)
    expect(customWrapper.classes('disabled')).toBe(true)
    expect(customWrapper.attributes('href')).toBe('/bazinga')
    expect(customWrapper.attributes('aria-current')).toBe('page')
  })
})
