import { mount } from '@vue/test-utils'
import { CBreadcrumbItem as Component } from '../../../index'

const ComponentName = 'CBreadcrumbItem'

const defaultWrapper = mount(Component, {
  propsData: {},
  slots: {
    default: 'Default slot',
  },
})

const customWrapper = mount(Component, {
  propsData: {
    active: true,
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
    expect(defaultWrapper.classes('breadcrumb-item')).toBe(true)
  })
})

describe(`Customize ${ComponentName} component`, () => {
  it('renders correctly', () => {
    expect(customWrapper.html()).toMatchSnapshot()
  })
  it('contain slots and classes', () => {
    expect(customWrapper.classes('breadcrumb-item')).toBe(true)
    expect(customWrapper.attributes('aria-current')).toBe('page')
    expect(customWrapper.find('a').attributes('href')).toBe('/bazinga')
    expect(customWrapper.find('a').text()).toContain('Default slot')
  })
})
