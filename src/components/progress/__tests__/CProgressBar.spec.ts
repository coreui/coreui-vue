import { mount } from '@vue/test-utils'
import { CProgressBar as Component } from '../../../index'

const ComponentName = 'CProgressBar'

const defaultWrapper = mount(Component, {
  propsData: {},
  slots: {
    default: 'Default slot',
  },
})

const customWrapper = mount(Component, {
  propsData: {
    animated: true,
    color: 'warning',
    value: 75,
    variant: 'striped',
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
    expect(defaultWrapper.classes('progress-bar')).toBe(true)
  })
})

describe(`Customize ${ComponentName} component`, () => {
  it('renders correctly', () => {
    expect(customWrapper.html()).toMatchSnapshot()
  })
  it('contain slots and classes', () => {
    expect(customWrapper.text()).toContain('Default slot')
    expect(customWrapper.classes('progress-bar')).toBe(true)
    expect(customWrapper.classes('progress-bar-striped')).toBe(true)
    expect(customWrapper.classes('progress-bar-animated')).toBe(true)
    expect(customWrapper.classes('bg-warning')).toBe(true)
    expect(customWrapper.attributes('role')).toBe('progressbar')
    expect(customWrapper.attributes('style')).toBe('width: 75%;')
    expect(customWrapper.attributes('aria-valuenow')).toBe('75')
    expect(customWrapper.attributes('aria-valuemin')).toBe('0')
    expect(customWrapper.attributes('aria-valuemax')).toBe('100')
  })
})
