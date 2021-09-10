import { mount } from '@vue/test-utils'
import { CAccordionButton as Component } from '../../../index'

const ComponentName = 'CAccordionButton'

const defaultWrapper = mount(Component, {
  propsData: {
    collapsed: true
  },
  slots: {
    default: 'Default slot',
  }
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
    expect(defaultWrapper.classes('accordion-button')).toBe(true)
    expect(defaultWrapper.classes('collapsed')).toBe(true)
  })
})