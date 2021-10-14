import { mount } from '@vue/test-utils'
import { CCol as Component } from '../../../index'

const ComponentName = 'CCol'

const defaultWrapper = mount(Component, {
  propsData: {},
  slots: {
    default: 'Default slot',
  },
})

const customWrapper = mount(Component, {
  propsData: {
    md: {
      span: 'auto',
      offset: 3,
      order: 'last',
    },
    lg: 4,
    xl: true,
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
    expect(defaultWrapper.classes('col')).toBe(true)
  })
})

describe(`Customize ${ComponentName} component`, () => {
  it('renders correctly', () => {
    expect(customWrapper.html()).toMatchSnapshot()
  })
  it('contain slots and classes', () => {
    expect(customWrapper.text()).toContain('Default slot')
    expect(customWrapper.classes('col-md-auto')).toBe(true)
    expect(customWrapper.classes('offset-md-3')).toBe(true)
    expect(customWrapper.classes('order-md-last')).toBe(true)
    expect(customWrapper.classes('col-lg-4')).toBe(true)
    expect(customWrapper.classes('col-xl')).toBe(true)
  })
})
