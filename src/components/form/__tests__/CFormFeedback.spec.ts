import { mount } from '@vue/test-utils'
import { CFormFeedback as Component } from '../../../index'

const ComponentName = 'CFormFeedback'

const defaultWrapper = mount(Component, {
  propsData: {},
  slots: {
    default: 'Default slot',
  },
})

const customWrapper = mount(Component, {
  propsData: {
    component: 'h2',
    invalid: true,
    tooltip: true,
    valid: true,
  },
  slots: {
    default: 'Default slot',
  },
})

const customWrapperTwo = mount(Component, {
  propsData: {
    component: 'h2',
    invalid: true,
    tooltip: false,
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
  })
})

describe(`Customize ${ComponentName} component`, () => {
  it('renders correctly', () => {
    expect(customWrapper.html()).toMatchSnapshot()
  })
  it('contain slots and classes', () => {
    expect(customWrapper.text()).toContain('Default slot')
    expect(customWrapper.classes('invalid-tooltip')).toBe(true)
    expect(customWrapper.classes('valid-tooltip')).toBe(true)
  })
})

describe(`Customize (two) ${ComponentName} component`, () => {
  it('renders correctly', () => {
    expect(customWrapperTwo.html()).toMatchSnapshot()
  })
  it('contain slots and classes', () => {
    expect(customWrapperTwo.text()).toContain('Default slot')
    expect(customWrapperTwo.classes('invalid-feedback')).toBe(true)
    expect(customWrapperTwo.classes('valid-feedback')).toBe(true)
  })
})
