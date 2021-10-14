import { mount } from '@vue/test-utils'
import { CFormRange as Component } from '../../../index'

const ComponentName = 'CFormRange'

const defaultWrapper = mount(Component, {
  propsData: {},
  slots: {
    default: 'Default slot',
  },
})

const customWrapper = mount(Component, {
  propsData: {
    disabled: true,
    max: 400,
    min: 50,
    readonly: true,
    steps: 10,
    value: 250,
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
    expect(defaultWrapper.classes('form-range')).toBe(true)
    expect(defaultWrapper.attributes('type')).toBe('range')
  })
})

describe(`Customize ${ComponentName} component`, () => {
  it('renders correctly', () => {
    expect(customWrapper.html()).toMatchSnapshot()
  })
  it('contain slots and classes', () => {
    expect(customWrapper.text()).toContain('Default slot')
    expect(customWrapper.classes('form-range')).toBe(true)
    expect(customWrapper.attributes('type')).toBe('range')
    expect(customWrapper.attributes('disabled')).toBe('')
    expect(customWrapper.attributes('max')).toBe('400')
    expect(customWrapper.attributes('min')).toBe('50')
    expect(customWrapper.attributes('readonly')).toBe('')
    expect(customWrapper.attributes('steps')).toBe('10')
  })
})
