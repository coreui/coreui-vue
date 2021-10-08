import { mount } from '@vue/test-utils'
import { CCloseButton as Component } from '../../../index'

const ComponentName = 'CCloseButton'

const defaultWrapper = mount(Component, {
  propsData: {},
  slots: {},
})

const customWrapper = mount(Component, {
  propsData: {
    disabled: true,
    white: true,
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
    expect(defaultWrapper.classes('btn')).toBe(true)
    expect(defaultWrapper.classes('btn-close')).toBe(true)
  })
  it('emit on click', () => {
    defaultWrapper.trigger('click')
    const incrementEvent = defaultWrapper.emitted('click')
    expect(incrementEvent).toHaveLength(1)
  })
})

describe(`Customize ${ComponentName} component`, () => {
  it('renders correctly', () => {
    expect(customWrapper.html()).toMatchSnapshot()
  })
  it('contain slots and classes', () => {
    expect(customWrapper.classes('btn')).toBe(true)
    expect(customWrapper.classes('btn-close')).toBe(true)
    expect(customWrapper.classes('btn-close-white')).toBe(true)
    expect(customWrapper.attributes('aria-label')).toBe('Close')
    expect(customWrapper.attributes('disabled')).toBe('')
  })
})
