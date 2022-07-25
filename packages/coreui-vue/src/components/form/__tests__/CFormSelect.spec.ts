import { mount } from '@vue/test-utils'
import { CFormSelect as Component } from '../../../index'

const ComponentName = 'CFormSelect'

const defaultWrapper = mount(Component, {
  propsData: {},
  slots: {
    default: 'Default slot',
  },
})

const customWrapper = mount(Component, {
  propsData: {
    htmlSize: 200,
    invalid: true,
    size: 'lg',
    valid: true,
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
    expect(defaultWrapper.find('select').classes('form-select')).toBe(true)
  })
})

describe(`Customize ${ComponentName} component`, () => {
  it('renders correctly', () => {
    expect(customWrapper.html()).toMatchSnapshot()
  })
  it('contain slots and classes', () => {
    expect(customWrapper.text()).toContain('Default slot')
    expect(customWrapper.find('select').classes('form-select')).toBe(true)
    expect(customWrapper.find('select').classes('form-select-lg')).toBe(true)
    expect(customWrapper.find('select').attributes('size')).toBe('200')
  })
})
