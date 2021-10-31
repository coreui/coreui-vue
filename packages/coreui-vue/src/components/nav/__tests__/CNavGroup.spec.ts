import { mount } from '@vue/test-utils'
import { CNavGroup as Component } from '../../../index'

const ComponentName = 'CNavGroup'

const defaultWrapper = mount(Component, {
  propsData: {},
  slots: {},
})

const customWrapper = mount(Component, {
  propsData: {
    compact: true,
    visible: true,
  },
  slots: {
    togglerContent: 'togglerContent',
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
    expect(defaultWrapper.classes('nav-group')).toBe(true)
  })
})

describe(`Customize ${ComponentName} component`, () => {
  it('renders correctly', () => {
    expect(customWrapper.html()).toMatchSnapshot()
  })
  it('contain slots and classes', () => {
    expect(customWrapper.find('a').text()).toContain('togglerContent')
    expect(customWrapper.find('a').classes('nav-link')).toBe(true)
    expect(customWrapper.find('a').classes('nav-group-toggle')).toBe(true)
    expect(customWrapper.find('ul').classes('nav-group-items')).toBe(true)
    expect(customWrapper.find('ul').classes('compact')).toBe(true)
    expect(customWrapper.classes('nav-group')).toBe(true)
  })
  it('emit event visible-change on click nav-group-toggle', () => {
    let incrementEvent = customWrapper.emitted('visible-change')
    customWrapper.find('.nav-group-toggle').trigger('click')
    incrementEvent = customWrapper.emitted('visible-change')
    expect(incrementEvent).toHaveLength(3)
  })
})
