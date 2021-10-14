import { mount } from '@vue/test-utils'
import { CTable as Component } from '../../../index'

const ComponentName = 'CTable'

const defaultWrapper = mount(Component, {
  propsData: {},
  slots: {
    default: 'Default slot',
  },
})

const customWrapper = mount(Component, {
  propsData: {
    align: 'center',
    borderColor: 'dark',
    bordered: true,
    borderless: true,
    caption: 'top',
    color: 'warning',
    hover: true,
    responsive: 'lg',
    small: true,
    striped: true,
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
    expect(defaultWrapper.find('table').text()).toContain('Default slot')
    expect(defaultWrapper.find('table').classes('table')).toBe(true)
  })
})

describe(`Customize ${ComponentName} component`, () => {
  it('renders correctly', () => {
    expect(customWrapper.html()).toMatchSnapshot()
  })
  it('contain slots and classes', () => {
    expect(customWrapper.find('div').classes('table-responsive-lg')).toBe(true)
    expect(customWrapper.find('table').text()).toContain('Default slot')
    expect(customWrapper.find('table').classes('table')).toBe(true)
    expect(customWrapper.find('table').classes('align-center')).toBe(true)
    expect(customWrapper.find('table').classes('table')).toBe(true)
    expect(customWrapper.find('table').classes('caption-top')).toBe(true)
    expect(customWrapper.find('table').classes('border-dark')).toBe(true)
    expect(customWrapper.find('table').classes('table-bordered')).toBe(true)
    expect(customWrapper.find('table').classes('table-borderless')).toBe(true)
    expect(customWrapper.find('table').classes('table-warning')).toBe(true)
    expect(customWrapper.find('table').classes('table-hover')).toBe(true)
    expect(customWrapper.find('table').classes('table-sm')).toBe(true)
    expect(customWrapper.find('table').classes('table-striped')).toBe(true)
  })
})
