import { mount } from '@vue/test-utils'
import { CBackdrop as Component } from '../../../index'

const ComponentName = 'CBackdrop'

const defaultWrapper = mount(Component, {
  propsData: {
    visible: true,
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
    expect(defaultWrapper.find('div').classes('fade')).toBe(true)
  })
})
