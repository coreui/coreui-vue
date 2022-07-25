import { mount } from '@vue/test-utils'
import { CFormInput as Component } from '../../../index'

const ComponentName = 'CFormInput'

const defaultWrapper = mount(Component, {
  propsData: {},
  slots: {
    default: 'Default slot',
  },
})

const customWrapper = mount(Component, {
  propsData: {
    disabled: true,
    invalid: true,
    plainText: true,
    readonly: true,
    size: 'lg',
    type: 'color',
    valid: true,
  },
  slots: {
    default: 'Default slot',
  },
})

const customWrapperTwo = mount(Component, {
  propsData: {
    disabled: true,
    invalid: true,
    plainText: false,
    readonly: true,
    size: 'lg',
    type: 'color',
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
    expect(defaultWrapper.find('input').classes('form-control')).toBe(true)
  })
})

describe(`Customize ${ComponentName} component`, () => {
  it('renders correctly', () => {
    expect(customWrapper.html()).toMatchSnapshot()
  })
  it('contain slots and classes', () => {
    expect(customWrapper.text()).toContain('Default slot')
    expect(customWrapper.find('input').classes('form-control-plaintext')).toBe(true)
    expect(customWrapper.find('input').classes('form-control-color')).toBe(true)
    expect(customWrapper.find('input').classes('form-control-lg')).toBe(true)
    expect(customWrapper.find('input').classes('is-invalid')).toBe(true)
    expect(customWrapper.find('input').classes('is-valid')).toBe(true)
  })
})

describe(`Customize (two) ${ComponentName} component`, () => {
  it('renders correctly', () => {
    expect(customWrapperTwo.html()).toMatchSnapshot()
  })
  it('contain slots and classes', () => {
    expect(customWrapperTwo.text()).toContain('Default slot')
    expect(customWrapperTwo.find('input').classes('form-control')).toBe(true)
    expect(customWrapper.find('input').classes('form-control-color')).toBe(true)
    expect(customWrapper.find('input').classes('form-control-lg')).toBe(true)
    expect(customWrapper.find('input').classes('is-invalid')).toBe(true)
    expect(customWrapper.find('input').classes('is-valid')).toBe(true)
  })
})
