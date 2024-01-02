import { mount } from '@vue/test-utils'
import { CButton as Component } from '../../../index'

const ComponentName = 'CButton'

const defaultWrapper = mount(Component, {
  propsData: {},
  slots: {
    default: 'Default slot',
  },
})

const customWrapper = mount(Component, {
  propsData: {
    active: true,
    as: 'div',
    color: 'warning',
    disabled: true,
    href: '/bazinga',
    shape: 'rounded-pill',
    size: 'lg',
    variant: 'outline',
  },
  slots: {
    default: 'Default slot',
  },
})

const customWrapperTwo = mount(Component, {
  propsData: {
    as: 'a',
    color: 'warning',
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
    expect(defaultWrapper.classes('btn')).toBe(true)
  })
})

describe(`Customize ${ComponentName} component`, () => {
  it('renders correctly', () => {
    expect(customWrapper.html()).toMatchSnapshot()
  })
  it('contain slots and classes', () => {
    expect(customWrapper.text()).toContain('Default slot')
    expect(customWrapper.classes('btn-outline-warning')).toBe(true)
    expect(customWrapper.classes('btn-lg')).toBe(true)
    expect(customWrapper.classes('active')).toBe(true)
    expect(customWrapper.classes('disabled')).toBe(true)
    expect(customWrapper.classes('rounded-pill')).toBe(true)
    expect(customWrapper.classes('btn')).toBe(true)
    expect(customWrapper.attributes('disabled')).toBe('true')
  })
})

describe(`Customize (number two) ${ComponentName} component`, () => {
  it('renders correctly', () => {
    expect(customWrapperTwo.html()).toMatchSnapshot()
  })
  it('contain slots and classes', () => {
    expect(customWrapperTwo.text()).toContain('Default slot')
    expect(customWrapperTwo.classes('disabled')).toBe(true)
    expect(customWrapperTwo.classes('btn')).toBe(true)
    expect(customWrapperTwo.attributes('aria-disabled')).toBe('true')
    expect(customWrapperTwo.attributes('tabindex')).toBe('-1')
  })
})
