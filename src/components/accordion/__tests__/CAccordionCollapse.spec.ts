import { mount } from '@vue/test-utils'
import { CAccordionCollapse as Component } from '../../../index'

const ComponentName = 'CAccordionCollapse'

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
    expect(defaultWrapper.text()).toContain('Default slot')
    expect(defaultWrapper.classes('accordion-collapse')).toBe(true)
    expect(defaultWrapper.find('div').classes('collapse')).toBe(true)
    expect(defaultWrapper.find('div').classes('show')).toBe(true)
  })
})
