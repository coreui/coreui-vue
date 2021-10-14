import { mount } from '@vue/test-utils'
import { CTabPane as Component } from '../../../index'

const ComponentName = 'CTabPane'

const defaultWrapper = mount(Component, {
  propsData: {},
  slots: {
    default: 'Default slot',
  },
})

const customWrapper = mount(Component, {
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
    expect(defaultWrapper.text()).toContain('Default slot')
    expect(defaultWrapper.find('.tab-pane').classes('tab-pane')).toBe(true)
    expect(defaultWrapper.find('.tab-pane').classes('fade')).toBe(true)
  })
})

describe(`Customize ${ComponentName} component`, () => {
  it('renders correctly', () => {
    expect(customWrapper.html()).toMatchSnapshot()
  })
  it('contain slots and classes', () => {
    expect(customWrapper.text()).toContain('Default slot')
    expect(customWrapper.find('.tab-pane').classes('tab-pane')).toBe(true)
    expect(customWrapper.find('.tab-pane').classes('fade')).toBe(true)
    expect(customWrapper.find('.tab-pane').classes('show')).toBe(true)
    expect(customWrapper.find('.tab-pane').classes('active')).toBe(true)
  })
})
