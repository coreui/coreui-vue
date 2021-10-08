import { mount } from '@vue/test-utils'
import { CCardLink as Component } from '../../../index'

const ComponentName = 'CCardLink'

const defaultWrapper = mount(Component, {
  propsData: {
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
    expect(defaultWrapper.classes('card-link')).toBe(true)
    expect(defaultWrapper.attributes('href')).toBe('/bazinga')
  })
})
