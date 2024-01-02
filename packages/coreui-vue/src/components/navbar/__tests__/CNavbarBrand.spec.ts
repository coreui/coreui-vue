import { mount } from '@vue/test-utils'
import { CNavbarBrand as Component } from '../../../index'

const ComponentName = 'CNavbarBrand'

const defaultWrapper = mount(Component, {
  propsData: {},
  slots: {
    default: 'Default slot',
  },
})

const customWrapper = mount(Component, {
  propsData: {
    as: 'div',
    href: '/bazinga',
  },
  slots: {
    default: 'Default slot',
  },
})

const customWrapperTwo = mount(Component, {
  propsData: {
    href: '/bazinga',
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
    expect(defaultWrapper.classes('navbar-brand')).toBe(true)
  })
})

describe(`Customize ${ComponentName} component`, () => {
  it('renders correctly', () => {
    expect(customWrapper.html()).toMatchSnapshot()
  })
  it('contain slots and classes', () => {
    expect(customWrapper.text()).toContain('Default slot')
    expect(customWrapper.classes('navbar-brand')).toBe(true)
    expect(customWrapper.attributes('href')).toBe('/bazinga')
  })
})

describe(`Customize (two) ${ComponentName} component`, () => {
  it('renders correctly', () => {
    expect(customWrapperTwo.html()).toMatchSnapshot()
  })
  it('contain slots and classes', () => {
    expect(customWrapperTwo.text()).toContain('Default slot')
    expect(customWrapperTwo.classes('navbar-brand')).toBe(true)
    expect(customWrapperTwo.attributes('href')).toBe('/bazinga')
  })
})
