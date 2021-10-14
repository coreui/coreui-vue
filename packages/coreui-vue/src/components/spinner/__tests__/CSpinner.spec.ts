import { mount } from '@vue/test-utils'
import { CSpinner as Component } from '../../../index'

const ComponentName = 'CSpinner'

const defaultWrapper = mount(Component, {
  propsData: {},
  slots: {
    default: 'Default slot',
  },
})

const customWrapper = mount(Component, {
  propsData: {
    color: 'warning',
    component: 'h4',
    size: 'sm',
    variant: 'grow',
    visuallyHiddenLabel: 'visuallyHiddenLabel',
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
    expect(defaultWrapper.classes('spinner-border')).toBe(true)
    expect(defaultWrapper.classes('text-undefined')).toBe(true)
    expect(defaultWrapper.find('span').classes('visually-hidden')).toBe(true)
    expect(defaultWrapper.find('span').text()).toContain('Loading...')
  })
})

describe(`Customize ${ComponentName} component`, () => {
  it('renders correctly', () => {
    expect(customWrapper.html()).toMatchSnapshot()
  })
  it('contain slots and classes', () => {
    expect(customWrapper.classes('spinner-grow')).toBe(true)
    expect(customWrapper.classes('text-warning')).toBe(true)
    expect(customWrapper.classes('spinner-grow-sm')).toBe(true)
    expect(customWrapper.find('span').classes('visually-hidden')).toBe(true)
    expect(customWrapper.find('span').text()).toContain('visuallyHiddenLabel')
  })
})
