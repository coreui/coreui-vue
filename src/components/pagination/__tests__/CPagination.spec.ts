import { mount } from '@vue/test-utils'
import { CPagination as Component } from '../../../index'

const ComponentName = 'CPagination'

const defaultWrapper = mount(Component, {
  propsData: {},
  slots: {
    default: 'Default slot',
  },
})

const customWrapper = mount(Component, {
  propsData: {
    size: 'lg',
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
    expect(defaultWrapper.find('ul').text()).toContain('Default slot')
    expect(defaultWrapper.find('ul').classes('pagination')).toBe(true)
  })
})

describe(`Customize ${ComponentName} component`, () => {
  it('renders correctly', () => {
    expect(customWrapper.html()).toMatchSnapshot()
  })
  it('contain slots and classes', () => {
    expect(customWrapper.find('ul').text()).toContain('Default slot')
    expect(customWrapper.find('ul').classes('pagination')).toBe(true)
    expect(customWrapper.find('ul').classes('pagination-lg')).toBe(true)
  })
})
