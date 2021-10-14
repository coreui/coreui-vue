import { mount } from '@vue/test-utils'
import { CBreadcrumb as Component } from '../../../index'

const ComponentName = 'CBreadcrumb'

const defaultWrapper = mount(Component, {
  propsData: {
    class: 'bazinga',
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
    expect(defaultWrapper.find('ol').text()).toContain('Default slot')
    expect(defaultWrapper.attributes('aria-label')).toBe('breadcrumb')
    expect(defaultWrapper.find('ol').classes('breadcrumb')).toBe(true)
    expect(defaultWrapper.find('ol').classes('bazinga')).toBe(true)
  })
})
