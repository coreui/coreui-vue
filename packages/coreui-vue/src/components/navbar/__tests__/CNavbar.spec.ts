import { mount } from '@vue/test-utils'
import { CNavbar as Component } from '../../../index'

const ComponentName = 'CNavbar'

const defaultWrapper = mount(Component, {
  propsData: {},
  slots: {
    default: 'Default slot',
  },
})

const customWrapper = mount(Component, {
  propsData: {
    as: 'div',
    color: 'warning',
    colorScheme: 'light',
    container: 'lg',
    expand: 'xl',
    placement: 'fixed-bottom',
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
    expect(defaultWrapper.classes('navbar')).toBe(true)
  })
})

describe(`Customize ${ComponentName} component`, () => {
  it('renders correctly', () => {
    expect(customWrapper.html()).toMatchSnapshot()
  })
  it('contain slots and classes', () => {
    expect(customWrapper.classes('navbar')).toBe(true)
    expect(customWrapper.classes('bg-warning')).toBe(true)
    expect(customWrapper.classes('navbar-light')).toBe(true)
    expect(customWrapper.classes('navbar-expand-xl')).toBe(true)
    expect(customWrapper.classes('fixed-bottom')).toBe(true)
    expect(customWrapper.find('.container-lg').classes('container-lg')).toBe(true)
    expect(customWrapper.find('.container-lg').text()).toContain('Default slot')
  })
})
