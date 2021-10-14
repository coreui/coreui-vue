import { mount } from '@vue/test-utils'
import { CAccordionBody as Component } from '../../../index'

const ComponentName = 'CAccordionBody'

const defaultWrapper = mount(Component, {
  global: {
    provide: {
      visible: true,
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
    expect(defaultWrapper.find('.accordion-body').classes('accordion-body')).toBe(true)
  })
})
