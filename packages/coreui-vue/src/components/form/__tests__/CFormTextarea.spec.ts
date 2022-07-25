import { mount } from '@vue/test-utils'
import { CFormTextarea as Component } from '../../../index'

const ComponentName = 'CFormTextarea'

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
    expect(defaultWrapper.find('textarea').classes('form-control')).toBe(true)
  })
})

describe(`Customize ${ComponentName} component`, () => {
  it('renders correctly', () => {
    expect(customWrapper.html()).toMatchSnapshot()
  })
  it('contain slots and classes', () => {
    expect(customWrapper.text()).toContain('Default slot')
    expect(customWrapper.find('textarea').classes('form-control-plaintext')).toBe(true)
    expect(customWrapper.find('textarea').classes('is-invalid')).toBe(true)
    expect(customWrapper.find('textarea').classes('is-valid')).toBe(true)
  })
})
