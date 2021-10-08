import { mount } from '@vue/test-utils'
import { CFormSwitch as Component } from '../../../index'

const ComponentName = 'CFormSwitch'

const defaultWrapper = mount(Component, {
  propsData: {},
  slots: {},
})

const customWrapper = mount(Component, {
  propsData: {
    id: 'uniqueid',
    invalid: true,
    label: 'some label',
    size: 'lg',
    type: 'radio',
    valid: true,
  },
  slots: {},
})

describe(`Loads and display ${ComponentName} component`, () => {
  it('has a name', () => {
    expect(Component.name).toMatch(ComponentName)
  })
  it('renders correctly', () => {
    expect(defaultWrapper.html()).toMatchSnapshot()
  })
  it('contain slots and classes', () => {
    expect(defaultWrapper.classes('form-check')).toBe(true)
    expect(defaultWrapper.classes('form-switch')).toBe(true)
    expect(defaultWrapper.find('input').classes('form-check-input')).toBe(true)
  })
})

describe(`Customize ${ComponentName} component`, () => {
  it('renders correctly', () => {
    expect(customWrapper.html()).toMatchSnapshot()
  })
  it('contain slots and classes', () => {
    expect(customWrapper.classes('form-check')).toBe(true)
    expect(customWrapper.classes('form-switch')).toBe(true)
    expect(customWrapper.classes('form-switch-lg')).toBe(true)
    expect(customWrapper.classes('is-invalid')).toBe(true)
    expect(customWrapper.classes('is-valid')).toBe(true)

    expect(customWrapper.find('input').classes('form-check-input')).toBe(true)
    expect(customWrapper.find('input').classes('is-invalid')).toBe(true)
    expect(customWrapper.find('input').classes('is-valid')).toBe(true)
    expect(customWrapper.find('input').attributes('type')).toBe('radio')
    expect(customWrapper.find('input').attributes('id')).toBe('uniqueid')

    expect(customWrapper.find('label').classes('form-check-label')).toBe(true)
    expect(customWrapper.find('label').attributes('for')).toBe('uniqueid')

    expect(customWrapper.find('label').text()).toContain('some label')
  })
})
