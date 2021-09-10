import { mount } from '@vue/test-utils'
import { CTabPane as Component } from '../../../index'

const ComponentName = 'CTabPane'

const defaultWrapper = mount(Component, {
  propsData: {
      
  },
  slots: {
    default: 'Default slot'
  },
})

const customWrapper = mount(Component, {
  propsData: {
    visible: true
  },
  slots: {
    default: 'Default slot'
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
    expect(defaultWrapper.classes('tab-pane')).toBe(true)
    expect(defaultWrapper.classes('fade')).toBe(true)
  })
})

describe(`Customize ${ComponentName} component`, () => {
  it('renders correctly', () => {
    expect(customWrapper.html()).toMatchSnapshot()
  }) 
  it('contain slots and classes', () => {
    expect(customWrapper.text()).toContain('Default slot')
    expect(customWrapper.classes('tab-pane')).toBe(true)
    expect(customWrapper.classes('fade')).toBe(true)
    expect(customWrapper.classes('show')).toBe(true)
    expect(customWrapper.classes('active')).toBe(true)
  })
})