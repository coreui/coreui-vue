import { mount } from '@vue/test-utils'
import { CHeaderToggler as Component } from '../../../index'

const ComponentName = 'CHeaderToggler'

const defaultWrapper = mount(Component, {
  propsData: {},
  slots: {
    default: 'Default slot',
  },
})

const customWrapper = mount(Component, {
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
    expect(defaultWrapper.text()).toContain('Default slot')
    expect(defaultWrapper.classes('header-toggler')).toBe(true)
    expect(defaultWrapper.attributes('type')).toBe('button')
    expect(defaultWrapper.attributes('aria-label')).toBe('Toggle navigation')
  })
})

describe(`Customize ${ComponentName} component`, () => {
  it('renders correctly', () => {
    expect(customWrapper.html()).toMatchSnapshot()
  })
  it('contain slots and classes', () => {
    expect(customWrapper.classes('header-toggler')).toBe(true)
    expect(customWrapper.attributes('type')).toBe('button')
    expect(customWrapper.attributes('aria-label')).toBe('Toggle navigation')
    expect(customWrapper.find('span').classes('header-toggler-icon')).toBe(true)
  })
})
