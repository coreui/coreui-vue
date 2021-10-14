import { mount } from '@vue/test-utils'
import { CToast as Component } from '../../../index'

const ComponentName = 'CToast'

const defaultWrapper = mount(Component, {
  propsData: {},
  slots: {
    default: 'Default slot',
  },
})

const customWrapper = mount(Component, {
  propsData: {
    autohide: false,
    color: 'warning',
    delay: 3000,
    dismissible: false,
    key: 123,
    title: 'title',
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
    expect(defaultWrapper.find('div').text()).toContain('Default slot')
    expect(defaultWrapper.find('div').classes('toast')).toBe(true)
    expect(defaultWrapper.find('div').classes('fade')).toBe(true)
    expect(defaultWrapper.find('div').attributes('aria-live')).toBe('assertive')
    expect(defaultWrapper.find('div').attributes('aria-atomic')).toBe('true')
    expect(defaultWrapper.find('div').attributes('role')).toBe('alert')
  })
})

describe(`Customize ${ComponentName} component`, () => {
  it('renders correctly', () => {
    expect(customWrapper.html()).toMatchSnapshot()
  })
  it('contain slots and classes', () => {
    expect(customWrapper.find('div').text()).toContain('Default slot')
    expect(customWrapper.find('div').classes('toast')).toBe(true)
    expect(customWrapper.find('div').classes('fade')).toBe(true)
    expect(customWrapper.find('div').classes('bg-warning')).toBe(true)
    expect(customWrapper.find('div').attributes('aria-live')).toBe('assertive')
    expect(customWrapper.find('div').attributes('aria-atomic')).toBe('true')
    expect(customWrapper.find('div').attributes('role')).toBe('alert')
  })
})
