import { mount } from '@vue/test-utils'
import { CLink as Component } from '../../../index'

const ComponentName = 'CLink'

const defaultWrapper = mount(Component, {
  propsData: {
    disabled: true,
  },
  slots: {
    default: 'Default slot',
  },
})

const customWrapper = mount(Component, {
  propsData: {
    active: true,
    component: 'div',
    disabled: true,
    href: '/bazinga',
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
    expect(defaultWrapper.attributes('aria-disabled')).toBe('true')
    expect(defaultWrapper.attributes('tabindex')).toBe('-1')
  })
  it('emit event on click', () => {
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
    expect(customWrapper.text()).toContain('Default slot')
    expect(customWrapper.classes('active')).toBe(true)
    expect(customWrapper.classes('disabled')).toBe(true)
    expect(customWrapper.attributes('aria-current')).toBe('page')
    expect(customWrapper.attributes('href')).toBe('/bazinga')
  })
})
