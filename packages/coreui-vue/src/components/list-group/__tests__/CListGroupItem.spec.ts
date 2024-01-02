import { mount } from '@vue/test-utils'
import { CListGroupItem as Component } from '../../../index'

const ComponentName = 'CListGroupItem'

const defaultWrapper = mount(Component, {
  propsData: {},
  slots: {
    default: 'Default slot',
  },
})

const customWrapper = mount(Component, {
  propsData: {
    active: true,
    as: 'div',
    color: 'warning',
    disabled: true,
  },
  slots: {
    default: 'Default slot',
  },
})

const customWrapperTwo = mount(Component, {
  propsData: {
    active: true,
    as: 'button',
    disabled: true,
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
    expect(defaultWrapper.classes('list-group-item')).toBe(true)
  })
})

describe(`Customize ${ComponentName} component`, () => {
  it('renders correctly', () => {
    expect(customWrapper.html()).toMatchSnapshot()
  })
  it('contain slots and classes', () => {
    expect(customWrapper.text()).toContain('Default slot')
    expect(customWrapper.classes('list-group-item')).toBe(true)
    expect(customWrapper.classes('list-group-item-warning')).toBe(true)
    expect(customWrapper.classes('active')).toBe(true)
    expect(customWrapper.classes('disabled')).toBe(true)
    expect(customWrapper.attributes('aria-current')).toBe('true')
    expect(customWrapper.attributes('aria-disabled')).toBe('true')
  })
})

describe(`Customize (two) ${ComponentName} component`, () => {
  it('renders correctly', () => {
    expect(customWrapperTwo.html()).toMatchSnapshot()
  })
  it('contain slots and classes', () => {
    expect(customWrapperTwo.text()).toContain('Default slot')
    expect(customWrapperTwo.classes('list-group-item')).toBe(true)
    expect(customWrapperTwo.classes('list-group-item-action')).toBe(true)
    expect(customWrapperTwo.attributes('active')).toBe('true')
    expect(customWrapperTwo.attributes('disabled')).toBe('')
  })
})
