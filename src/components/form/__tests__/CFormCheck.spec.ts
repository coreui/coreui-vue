import { mount } from '@vue/test-utils'
import { CFormCheck as Component } from '../../../index'

const ComponentName = 'CFormCheck'

const defaultWrapper = mount(Component, {
  propsData: {},
  slots: {},
})

const customLabelWrapper = mount(Component, {
  propsData: {
    label: 'some label',
    button: {
      color: 'warning',
      shape: 'rounded-circle',
      size: 'lg',
      variant: 'outline',
    },
    id: 'uniqueid',
    inline: true,
    invalid: true,
    type: 'checkbox', // TODO: test other type
    valid: true,
  },
  slots: {},
})

const customLabelInSlotWrapper = mount(Component, {
  propsData: {
    button: {
      color: 'warning',
      shape: 'rounded-circle',
      size: 'lg',
      variant: 'outline',
    },
    id: 'uniqueid',
    inline: true,
    invalid: true,
    type: 'checkbox', // TODO: test other type
    valid: true,
  },
  slots: {
    label: 'some label',
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
    expect(defaultWrapper.classes('form-check-input')).toBe(true)
  })
})

describe(`Customize with label - ${ComponentName} component`, () => {
  it('renders correctly', () => {
    expect(customLabelWrapper.html()).toMatchSnapshot()
  })
  it('contain slots and classes', () => {
    expect(customLabelWrapper.find('label').text()).toContain('some label')
    expect(customLabelWrapper.find('input').classes('btn-check')).toBe(true)
    expect(customLabelWrapper.find('input').classes('is-invalid')).toBe(true)
    expect(customLabelWrapper.find('input').classes('is-valid')).toBe(true)
    expect(customLabelWrapper.find('input').attributes('id')).toBe('uniqueid')
    expect(customLabelWrapper.find('input').attributes('type')).toBe('checkbox')

    expect(customLabelWrapper.find('label').classes('btn')).toBe(true)
    expect(customLabelWrapper.find('label').classes('btn-outline-warning')).toBe(true)
    expect(customLabelWrapper.find('label').classes('btn-lg')).toBe(true)
    expect(customLabelWrapper.find('label').classes('rounded-circle')).toBe(true)
    expect(customLabelWrapper.find('label').attributes('for')).toBe('uniqueid')
  })
})

describe(`Customize with label in slot - ${ComponentName} component`, () => {
  it('renders correctly', () => {
    expect(customLabelInSlotWrapper.html()).toMatchSnapshot()
  })
  it('contain slots and classes', () => {
    expect(customLabelInSlotWrapper.find('label').text()).toContain('some label')
    expect(customLabelInSlotWrapper.find('input').classes('btn-check')).toBe(true)
    expect(customLabelInSlotWrapper.find('input').classes('is-invalid')).toBe(true)
    expect(customLabelInSlotWrapper.find('input').classes('is-valid')).toBe(true)
    expect(customLabelInSlotWrapper.find('input').attributes('id')).toBe('uniqueid')
    expect(customLabelInSlotWrapper.find('input').attributes('type')).toBe('checkbox')

    expect(customLabelInSlotWrapper.find('label').classes('btn')).toBe(true)
    expect(customLabelInSlotWrapper.find('label').classes('btn-outline-warning')).toBe(true)
    expect(customLabelInSlotWrapper.find('label').classes('btn-lg')).toBe(true)
    expect(customLabelInSlotWrapper.find('label').classes('rounded-circle')).toBe(true)
    expect(customLabelInSlotWrapper.find('label').attributes('for')).toBe('uniqueid')
  })
})
