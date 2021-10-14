import { mount } from '@vue/test-utils'
import { CToaster as Component } from '../../../index'

const ComponentName = 'CToaster'

const defaultWrapper = mount(Component, {
  propsData: {},
  slots: {
    default: 'Default slot',
  },
})

const customWrapper = mount(Component, {
  propsData: {
    placement: 'top-end',
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
    expect(defaultWrapper.classes('toaster')).toBe(true)
    expect(defaultWrapper.classes('toast-container')).toBe(true)
    expect(defaultWrapper.classes('p-3')).toBe(true)
  })
})

describe(`Customize ${ComponentName} component`, () => {
  it('renders correctly', () => {
    expect(customWrapper.html()).toMatchSnapshot()
  })
  it('contain slots and classes', () => {
    expect(customWrapper.text()).toContain('Default slot')
    expect(customWrapper.classes('toaster')).toBe(true)
    expect(customWrapper.classes('toast-container')).toBe(true)
    expect(customWrapper.classes('p-3')).toBe(true)
    expect(customWrapper.classes('position-fixed')).toBe(true)
    expect(customWrapper.classes('top-0')).toBe(true)
    expect(customWrapper.classes('end-0')).toBe(true)
  })
})
