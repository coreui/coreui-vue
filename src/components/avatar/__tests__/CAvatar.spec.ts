import { mount } from '@vue/test-utils'
import { CAvatar as Component } from '../../../index'

const ComponentName = 'CAvatar'

const defaultWrapper = mount(Component, {
  propsData: {},
  slots: {
    default: 'Default slot',
  },
})

const customWrapper = mount(Component, {
  propsData: {
    color: 'warning',
    shape: 'rounded-bottom',
    size: 'md',
    src: '/bazinga',
    status: 'danger',
    textColor: 'light',
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
    expect(defaultWrapper.classes('avatar')).toBe(true)
  })
})

describe(`Loads and display ${ComponentName} component`, () => {
  it('has a name', () => {
    expect(Component.name).toMatch(ComponentName)
  })
  it('renders correctly', () => {
    expect(customWrapper.html()).toMatchSnapshot()
  })
  it('contain slots and classes', () => {
    expect(customWrapper.classes('avatar')).toBe(true)
    expect(customWrapper.classes('bg-warning')).toBe(true)
    expect(customWrapper.classes('avatar-md')).toBe(true)
    expect(customWrapper.classes('text-light')).toBe(true)
    expect(customWrapper.find('img').classes('avatar-img')).toBe(true)
    expect(customWrapper.find('img').attributes('src')).toBe('/bazinga')
    expect(customWrapper.find('span').classes('avatar-status')).toBe(true)
    expect(customWrapper.find('span').classes('bg-danger')).toBe(true)
  })
})
