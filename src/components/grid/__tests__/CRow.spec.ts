import { mount } from '@vue/test-utils'
import { CRow as Component } from '../../../index'

const ComponentName = 'CRow'

const defaultWrapper = mount(Component, {
  propsData: {},
  slots: {
    default: 'Default slot',
  },
})

const customWrapper = mount(Component, {
  propsData: {
    md: {
      cols: 4,
      gutter: 10,
      gutterX: 11,
      gutterY: 12,
    },
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
    expect(defaultWrapper.classes('row')).toBe(true)
  })
})

describe(`Customize ${ComponentName} component`, () => {
  it('renders correctly', () => {
    expect(customWrapper.html()).toMatchSnapshot()
  })
  it('contain slots and classes', () => {
    expect(customWrapper.text()).toContain('Default slot')
    expect(customWrapper.classes('row')).toBe(true)
    expect(customWrapper.classes('row-cols-md-4')).toBe(true)
    expect(customWrapper.classes('g-md-10')).toBe(true)
    expect(customWrapper.classes('gx-md-11')).toBe(true)
    expect(customWrapper.classes('gy-md-12')).toBe(true)
  })
})
