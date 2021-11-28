import { mount } from '@vue/test-utils'
import { COffcanvas as Component } from '../../../index'

const ComponentName = 'COffcanvas'

const defaultWrapper = mount(Component, {
  propsData: {
    visible: true,
    placement: 'end',
  },
  slots: {
    default: 'Default slot',
  },
})

const customWrapper = mount(Component, {
  propsData: {
    backdrop: true,
    keyboard: true,
    placement: 'bottom',
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
    expect(defaultWrapper.text()).toContain('Default slot')
    expect(defaultWrapper.find('div').classes('offcanvas')).toBe(true)
    expect(defaultWrapper.find('div').classes('offcanvas-end')).toBe(true)
  })
})

describe(`Customize ${ComponentName} component`, () => {
  it('renders correctly', () => {
    expect(customWrapper.html()).toMatchSnapshot()
  })
  it('contain slots and classes', () => {
    expect(customWrapper.text()).toContain('Default slot')
    expect(customWrapper.find('div').classes('offcanvas')).toBe(true)
    expect(customWrapper.find('div').classes('offcanvas-bottom')).toBe(true)
    expect(customWrapper.find('.offcanvas-backdrop').classes('offcanvas-backdrop')).toBe(true)
  })
})
