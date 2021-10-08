import { mount } from '@vue/test-utils'
import { CAccordionItem as Component } from '../../../index'

const ComponentName = 'CAccordionItem'

const defaultWrapper = mount(Component, {
  global: {
    provide: {
      activeItemKey: 1,
    },
  },
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
    expect(defaultWrapper.classes('accordion-item')).toBe(true)
  })
})
