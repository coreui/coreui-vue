import { mount } from '@vue/test-utils'
import { CPaginationItem as Component } from '../../../index'

const ComponentName = 'CPaginationItem'

const defaultWrapper = mount(Component, {
  propsData: {
      
  },
  slots: {
    default: 'Default slot'
  },
})

const customWrapper = mount(Component, {
  propsData: {
    active: true,
    component: 'div',
    disabled: true,
    href: '/bazinga'
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
    expect(defaultWrapper.find('.page-link').text()).toContain('Default slot')
    expect(defaultWrapper.classes('page-item')).toBe(true)
    expect(defaultWrapper.find('.page-link').attributes('href')).toContain('/bazinga')  // TODO: It must be working!
  })
})

describe(`Customize ${ComponentName} component`, () => {
  it('renders correctly', () => {
    expect(customWrapper.html()).toMatchSnapshot()
  }) 
  it('contain slots and classes', () => {
    expect(customWrapper.find('.page-link').text()).toContain('Default slot')
    expect(customWrapper.classes('page-item')).toBe(true)
    expect(customWrapper.classes('active')).toBe(true)
    expect(customWrapper.classes('disabled')).toBe(true)
    expect(customWrapper.attributes('active')).toBe('true')
    expect(customWrapper.attributes('aria-current')).toBe('page')
  })
})