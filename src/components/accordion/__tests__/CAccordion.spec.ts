import { mount } from '@vue/test-utils'
import { CAccordion as Component } from '../../../index'

const ComponentName = 'CAccordion'

const defaultWrapper = mount(Component, {
  propsData: {
    flush: true,
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
    expect(defaultWrapper.classes('accordion')).toBe(true)
    expect(defaultWrapper.classes('accordion-flush')).toBe(true)
  })
})
