import { mount } from '@vue/test-utils'
import { CCardImageOverlay as Component } from '../../../index'

const ComponentName = 'CCardImageOverlay'

const defaultWrapper = mount(Component, {
  propsData: {},
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
    expect(defaultWrapper.classes('card-img-overlay')).toBe(true)
  })
})
